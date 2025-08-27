

## Setup Steps

### 1. Apply Database Schema

The schema needs to be applied manually through the Supabase SQL Editor:

1. Run the script to generate the schema SQL:
   ```
   .\apply-schema.bat
   ```
   (or `./apply-schema.sh` on macOS/Linux)

2. Follow the instructions displayed by the script:
   - Go to the Supabase dashboard: https://app.supabase.com
   - Select your project
   - Go to the SQL Editor
   - Create a new query
   - Copy the SQL from the generated `schema_backup.sql` file
   - Paste it into the SQL Editor
   - Run the query

### 2. Create Admin User

After applying the schema, create an admin user:

1. Run the script:
   ```
   .\create-admin-user.bat
   ```
   (or `./create-admin-user.sh` on macOS/Linux)

2. Enter your Supabase email and password when prompted
3. The script will:
   - Sign in to your Supabase account
   - Create a user record in the `users` table with admin privileges
   - Link your auth account to the CMS user

### 3. Access the Admin Dashboard

Once the setup is complete, you can access the admin dashboard at:

```
/admin
```

Sign in with the same email and password you used to create the admin user.

## Troubleshooting

### Schema Application Errors

If you encounter errors when applying the schema:

1. Check that your Supabase URL and API keys are correct in `.env.local`
2. Try applying the schema in smaller chunks through the SQL Editor
3. Check for any error messages in the SQL Editor output

### Admin User Creation Errors

If you encounter errors when creating the admin user:

1. Ensure the schema was applied successfully
2. Verify that your Supabase authentication is working
3. Check that the `users` table exists in your database

### "Relation does not exist" Error

If you see "relation 'public.users' does not exist", it means the schema was not applied correctly. Follow the manual schema application steps again.
