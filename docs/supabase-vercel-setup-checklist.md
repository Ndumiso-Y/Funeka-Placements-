# Funeka Placements Supabase + Vercel Setup Checklist

## Current Supabase Project URL

VITE_SUPABASE_URL=https://mxnynczaxcfxqawmfulr.supabase.co

## Step 1: Confirm Supabase Project

- Project name: Funeka Placements
- Plan: Free plan for launch
- Store the database password securely
- Never use the service_role key in frontend code

## Step 2: Collect API Values

Go to:

Supabase -> Project Settings -> API

Copy:
- Project URL
- anon public key

These map to:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

## Step 3: Add Local Environment Variables

Create or update .env.local:

```env
VITE_SUPABASE_URL=https://mxnynczaxcfxqawmfulr.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Do not commit .env.local.

## Step 4: Run SQL Schema

Go to:

Supabase -> SQL Editor -> New query

Open the local repo file:

```text
supabase/staff-portal-schema.sql
```

Copy the full contents, paste into SQL Editor, and run it once.

## Step 5: Verify Tables

Confirm these tables exist:
- staff_profiles
- candidates
- candidate_documents
- employer_enquiries
- jobs
- candidate_notes
- employer_notes

Confirm RLS is enabled on all tables.

Confirm helper functions exist:
- public.is_staff_user()
- public.is_admin_user()

Confirm public insert policies are not active.

Confirm jobs are publicly readable only when status = published.

## Step 6: Create First Admin User

Go to:

Supabase -> Authentication -> Users -> Add user

Create the admin/staff user.

Copy the user UUID.

Then run this SQL in Supabase SQL Editor:

```sql
insert into public.staff_profiles (id, full_name, role)
values ('PASTE_AUTH_USER_UUID_HERE', 'Funeka Admin', 'admin');
```

Replace PASTE_AUTH_USER_UUID_HERE before running.

## Step 7: Add Vercel Environment Variables

Go to:

Vercel -> Funeka Placements project -> Settings -> Environment Variables

Add:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

Apply to:
- Production
- Preview
- Development if available

## Step 8: Stop

Do not enable /staff yet.

After @supabase/supabase-js is installed, frontend connection still remains inactive until staff auth is wired.

Continue only after confirming:
- SQL ran successfully
- Tables exist
- RLS is enabled
- First admin profile was inserted
- Vercel env vars were added
