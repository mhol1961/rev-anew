// Script to replace unescaped entities in React files
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const directoriesToSearch = [
  'src/app',
  'src/components'
];

// Function to replace unescaped entities
function replaceEntities(content) {
  // Replace unescaped apostrophes, excluding those in JSX props or already escaped
  content = content.replace(/(?<!(&#39;|&apos;|&lsquo;|&rsquo;|[a-zA-Z0-9]))'(?!(s[^a-zA-Z]|t[^a-zA-Z]|re[^a-zA-Z]|ve[^a-zA-Z]|ll[^a-zA-Z]|d[^a-zA-Z]))/g, '&apos;');
  
  // Replace apostrophes in contractions with &apos;
  content = content.replace(/(\w)'(\w)/g, '$1&apos;$2');
  
  // Replace unescaped quotes, excluding those in JSX props or already escaped
  content = content.replace(/(?<!(&#34;|&quot;|&ldquo;|&rdquo;))"(?!(\s*\w+\s*=\s*|\s*>))/g, '&quot;');
  content = content.replace(/(?<!\s*\w+\s*=\s*)"(?!(\s*\/?>))/g, '&quot;');
  
  return content;
}

// Function to process a file
async function processFile(filePath) {
  try {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) {
      return;
    }
    
    const content = await readFileAsync(filePath, 'utf8');
    const updatedContent = replaceEntities(content);
    
    if (content !== updatedContent) {
      console.log(`Updating: ${filePath}`);
      await writeFileAsync(filePath, updatedContent, 'utf8');
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

// Function to recursively scan directories
async function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await scanDirectory(fullPath);
    } else {
      await processFile(fullPath);
    }
  }
}

// Main execution
async function main() {
  for (const dir of directoriesToSearch) {
    await scanDirectory(dir);
  }
  console.log('Completed processing files');
}

main().catch(console.error);
