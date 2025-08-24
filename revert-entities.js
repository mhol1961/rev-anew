// Script to revert HTML entities back to regular quotes in React files
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const directoriesToSearch = [
  'src/app',
  'src/components'
];

// Function to revert entities back to quotes
function revertEntities(content) {
  // Replace &apos; with single quote
  content = content.replace(/&apos;/g, "'");
  
  // Replace &quot; with double quote
  content = content.replace(/&quot;/g, '"');
  
  return content;
}

// Function to process a file
async function processFile(filePath) {
  try {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx') && !filePath.endsWith('.ts')) {
      return;
    }
    
    const content = await readFileAsync(filePath, 'utf8');
    const updatedContent = revertEntities(content);
    
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
  console.log('Completed reverting HTML entities in files');
}

main().catch(console.error);
