# Funeka Placements Staff Portal Schema Plan

## Purpose

The staff portal will allow authorised Funeka Placements staff to manage candidates, CVs, employer enquiries, jobs, notes, statuses, and internal workflow.

## Recommended Supabase Tables

### 1. staff_profiles

Purpose:
Store staff profile and role information linked to Supabase Auth users.

Suggested fields:
- id uuid primary key references auth.users(id)
- full_name text
- role text default 'staff'
- created_at timestamptz default now()

### 2. candidates

Purpose:
Store candidate profile information.

Suggested fields:
- id uuid primary key default gen_random_uuid()
- full_name text not null
- email text
- phone text
- location text
- position_interest text
- experience_summary text
- status text default 'new'
- source text default 'website'
- created_at timestamptz default now()
- updated_at timestamptz default now()

### 3. candidate_documents

Purpose:
Store CV/document file references.

Suggested fields:
- id uuid primary key default gen_random_uuid()
- candidate_id uuid references candidates(id) on delete cascade
- file_name text
- file_path text
- file_type text
- file_size integer
- uploaded_at timestamptz default now()

### 4. employer_enquiries

Purpose:
Store employer hiring enquiries.

Suggested fields:
- id uuid primary key default gen_random_uuid()
- company_name text
- contact_name text
- email text
- phone text
- hiring_need text
- message text
- status text default 'new'
- source text default 'website'
- created_at timestamptz default now()
- updated_at timestamptz default now()

### 5. jobs

Purpose:
Store job vacancies managed by staff.

Suggested fields:
- id uuid primary key default gen_random_uuid()
- title text not null
- company_name text
- location text
- job_type text
- description text
- requirements text
- status text default 'draft'
- published_at timestamptz
- created_at timestamptz default now()
- updated_at timestamptz default now()

### 6. candidate_notes

Purpose:
Store internal staff notes linked to candidates.

Suggested fields:
- id uuid primary key default gen_random_uuid()
- candidate_id uuid references candidates(id) on delete cascade
- staff_id uuid references auth.users(id)
- note text not null
- created_at timestamptz default now()

### 7. employer_notes

Purpose:
Store internal staff notes linked to employer enquiries.

Suggested fields:
- id uuid primary key default gen_random_uuid()
- employer_enquiry_id uuid references employer_enquiries(id) on delete cascade
- staff_id uuid references auth.users(id)
- note text not null
- created_at timestamptz default now()

## Suggested Status Values

Candidates:
- new
- reviewed
- shortlisted
- interviewing
- placed
- declined
- archived

Employer enquiries:
- new
- contacted
- active
- follow_up
- closed
- archived

Jobs:
- draft
- published
- closed
- archived

## Storage Plan

Recommended Supabase storage bucket:
candidate-cvs

Rules:
- Bucket should be private.
- CVs should not be publicly browsable.
- Staff users should be able to view/download candidate CVs.
- Public users may upload only through controlled form logic if implemented.
- Accepted formats: PDF, DOC, DOCX.
- Recommended max file size: 5MB.

## RLS Plan

Intended RLS direction:
- Enable RLS on all tables.
- Public users should not be able to read staff data.
- Authenticated staff should be able to read candidate and employer records.
- Authenticated staff should be able to update workflow statuses.
- Authenticated staff should be able to add notes.
- Public insert policies for website forms must be carefully restricted.
- No service role key must ever be exposed in frontend code.

Phase 1A SQL draft:
- Review `supabase/staff-portal-schema.sql` before running it in Supabase.
- Public insert policies are documented there but should stay disabled until website form validation, rate limiting, and storage handling are implemented.

## Portal Route Plan

Current disabled staff routes:
- /staff
- /staff/login

Future protected routes:
- /staff/login
- /staff/dashboard
- /staff/candidates
- /staff/employers
- /staff/jobs

Rules:
- Staff routes must stay excluded from sitemap.xml.
- Staff routes should use noindex,nofollow metadata when enabled.
- Staff routes must only show real data after Supabase Auth is implemented.

## Implementation Phases

Phase 0:
Stabilise existing prototype and document schema.

Phase 1:
Create Supabase project, environment variables, schema, and RLS.

Phase 2:
Replace localStorage auth stub with Supabase Auth.

Phase 3:
Enable protected staff routes.

Phase 4:
Connect Apply form to candidates and candidate_documents.

Phase 5:
Connect Employers form to employer_enquiries.

Phase 6:
Replace localStorage dashboard data with Supabase queries.

Phase 7:
Add search, filters, notes, exports, and hardening.
