// Supabase schema application script
import fs from 'fs';
import path from 'path';

// Read environment variables from .env.local file
function loadEnv() {
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    const envContent = fs.readFileSync(envPath, 'utf8');
    
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim();
        process.env[key] = value;
      }
    });
  } catch (error) {
    console.error('Error loading .env.local file:', error.message);
  }
}

// Load environment variables
loadEnv();

// Get Supabase URL and key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY || 
                   process.env.SUPABASE_SERVICE_KEY || 
                   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Supabase URL or API Key not found in environment variables.');
  console.error('Make sure you have NEXT_PUBLIC_SUPABASE_URL and either NEXT_PUBLIC_SUPABASE_ANON_KEY or SUPABASE_SERVICE_KEY in your .env.local file');
  process.exit(1);
}

console.log('Found Supabase URL:', supabaseUrl);
console.log('Using API key starting with:', supabaseKey.substring(0, 10) + '...');

// Read the schema.sql file
const schemaPath = path.join(process.cwd(), 'supabase', 'schema.sql');
const schemaSql = fs.readFileSync(schemaPath, 'utf8');

// Execute the SQL schema using psql
async function applySchema() {
  console.log('=== CMS Schema Application ===');
  console.log('This script will apply the database schema to your Supabase instance');
  
  try {
    // Extract database connection info from Supabase URL
    // Format: https://[project-ref].supabase.co
    const projectRef = supabaseUrl.match(/https:\/\/([^.]+)\.supabase\.co/)[1];
    
    if (!projectRef) {
      throw new Error('Could not extract project reference from Supabase URL');
    }
    
    console.log('Creating database tables...');
    
    // Create a temporary SQL file
    const tempSqlPath = path.join(process.cwd(), 'temp_schema.sql');
    fs.writeFileSync(tempSqlPath, schemaSql);
    
    // Save the schema SQL to a file for manual application
    const backupPath = path.join(process.cwd(), 'schema_backup.sql');
    fs.writeFileSync(backupPath, schemaSql);
    
    console.log('\x1b[33m%s\x1b[0m', '=== MANUAL SCHEMA APPLICATION REQUIRED ===');
    console.log('\x1b[33m%s\x1b[0m', 'The schema could not be applied automatically.');
    console.log('\x1b[33m%s\x1b[0m', 'Please follow these steps to apply the schema manually:');
    console.log('\x1b[33m%s\x1b[0m', '');
    console.log('\x1b[33m%s\x1b[0m', '1. Go to the Supabase dashboard: https://app.supabase.com');
    console.log('\x1b[33m%s\x1b[0m', '2. Select your project');
    console.log('\x1b[33m%s\x1b[0m', '3. Go to the SQL Editor');
    console.log('\x1b[33m%s\x1b[0m', '4. Create a new query');
    console.log('\x1b[33m%s\x1b[0m', `5. Open the file ${backupPath}`);
    console.log('\x1b[33m%s\x1b[0m', '6. Copy the entire contents and paste into the SQL Editor');
    console.log('\x1b[33m%s\x1b[0m', '7. Run the query');
    console.log('\x1b[33m%s\x1b[0m', '');
    console.log('\x1b[33m%s\x1b[0m', 'After applying the schema, run create-admin-user.bat to create an admin user.');
    console.log('\x1b[33m%s\x1b[0m', '');
    
    // Print the schema to the console for convenience
    console.log('\x1b[36m%s\x1b[0m', '=== SCHEMA SQL ===');
    console.log('\x1b[36m%s\x1b[0m', 'You can also copy the schema from here:');
    console.log('\x1b[36m%s\x1b[0m', '');
    console.log(schemaSql);
    
    // Clean up temp file
    if (fs.existsSync(tempSqlPath)) {
      fs.unlinkSync(tempSqlPath);
    }
    
    console.log('Schema application complete!');
    console.log('You can now run create-admin-user.bat to create an admin user.');
  } catch (error) {
    console.error('Error applying schema:', error.message);
  }
}

// Run the function
applySchema();
