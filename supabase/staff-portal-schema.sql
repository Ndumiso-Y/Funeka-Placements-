-- Funeka Placements staff portal backend foundation.
--
-- Review this file carefully before running it in Supabase.
-- Do not expose Supabase service role keys in frontend code.
-- Public insert policies must be tested carefully before enabling website form writes.
-- Staff portal routes must stay disabled until Supabase Auth is implemented.

create extension if not exists pgcrypto;

create table if not exists public.staff_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'staff',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint staff_profiles_role_check check (role in ('admin', 'staff', 'viewer'))
);

create table if not exists public.candidates (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text,
  phone text,
  location text,
  position_interest text,
  experience_summary text,
  status text not null default 'new',
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint candidates_status_check check (
    status in ('new', 'reviewed', 'shortlisted', 'interviewing', 'placed', 'declined', 'archived')
  )
);

create table if not exists public.candidate_documents (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid not null references public.candidates(id) on delete cascade,
  file_name text not null,
  file_path text not null,
  file_type text,
  file_size integer,
  uploaded_at timestamptz not null default now()
);

create table if not exists public.employer_enquiries (
  id uuid primary key default gen_random_uuid(),
  company_name text,
  contact_name text,
  email text,
  phone text,
  hiring_need text,
  message text,
  status text not null default 'new',
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint employer_enquiries_status_check check (
    status in ('new', 'contacted', 'active', 'follow_up', 'closed', 'archived')
  )
);

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  company_name text,
  location text,
  job_type text,
  description text,
  requirements text,
  status text not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint jobs_status_check check (status in ('draft', 'published', 'closed', 'archived'))
);

create table if not exists public.candidate_notes (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid not null references public.candidates(id) on delete cascade,
  staff_id uuid references auth.users(id),
  note text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.employer_notes (
  id uuid primary key default gen_random_uuid(),
  employer_enquiry_id uuid not null references public.employer_enquiries(id) on delete cascade,
  staff_id uuid references auth.users(id),
  note text not null,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_staff_profiles_updated_at on public.staff_profiles;
create trigger set_staff_profiles_updated_at
before update on public.staff_profiles
for each row execute function public.set_updated_at();

drop trigger if exists set_candidates_updated_at on public.candidates;
create trigger set_candidates_updated_at
before update on public.candidates
for each row execute function public.set_updated_at();

drop trigger if exists set_employer_enquiries_updated_at on public.employer_enquiries;
create trigger set_employer_enquiries_updated_at
before update on public.employer_enquiries
for each row execute function public.set_updated_at();

drop trigger if exists set_jobs_updated_at on public.jobs;
create trigger set_jobs_updated_at
before update on public.jobs
for each row execute function public.set_updated_at();

create index if not exists candidates_status_idx on public.candidates(status);
create index if not exists candidates_created_at_idx on public.candidates(created_at);
create index if not exists candidates_email_idx on public.candidates(email);
create index if not exists employer_enquiries_status_idx on public.employer_enquiries(status);
create index if not exists employer_enquiries_created_at_idx on public.employer_enquiries(created_at);
create index if not exists jobs_status_idx on public.jobs(status);
create index if not exists jobs_published_at_idx on public.jobs(published_at);
create index if not exists candidate_documents_candidate_id_idx on public.candidate_documents(candidate_id);
create index if not exists candidate_notes_candidate_id_idx on public.candidate_notes(candidate_id);
create index if not exists employer_notes_employer_enquiry_id_idx on public.employer_notes(employer_enquiry_id);

alter table public.staff_profiles enable row level security;
alter table public.candidates enable row level security;
alter table public.candidate_documents enable row level security;
alter table public.employer_enquiries enable row level security;
alter table public.jobs enable row level security;
alter table public.candidate_notes enable row level security;
alter table public.employer_notes enable row level security;

create or replace function public.is_staff_user()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select auth.uid() is not null
    and exists (
      select 1
      from public.staff_profiles
      where id = auth.uid()
    );
$$;

create or replace function public.is_admin_user()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select auth.uid() is not null
    and exists (
      select 1
      from public.staff_profiles
      where id = auth.uid()
        and role = 'admin'
    );
$$;

drop policy if exists "Users can read their own staff profile" on public.staff_profiles;
create policy "Users can read their own staff profile"
on public.staff_profiles
for select
to authenticated
using (auth.uid() = id);

drop policy if exists "Admins can read all staff profiles" on public.staff_profiles;
create policy "Admins can read all staff profiles"
on public.staff_profiles
for select
to authenticated
using (public.is_admin_user());

drop policy if exists "Admins can update staff profiles" on public.staff_profiles;
create policy "Admins can update staff profiles"
on public.staff_profiles
for update
to authenticated
using (public.is_admin_user())
with check (public.is_admin_user());

drop policy if exists "Staff can read candidates" on public.candidates;
create policy "Staff can read candidates"
on public.candidates
for select
to authenticated
using (public.is_staff_user());

drop policy if exists "Staff can update candidates" on public.candidates;
create policy "Staff can update candidates"
on public.candidates
for update
to authenticated
using (public.is_staff_user())
with check (public.is_staff_user());

drop policy if exists "Staff can read candidate document records" on public.candidate_documents;
create policy "Staff can read candidate document records"
on public.candidate_documents
for select
to authenticated
using (public.is_staff_user());

drop policy if exists "Staff can insert candidate document records" on public.candidate_documents;
create policy "Staff can insert candidate document records"
on public.candidate_documents
for insert
to authenticated
with check (public.is_staff_user());

drop policy if exists "Staff can read employer enquiries" on public.employer_enquiries;
create policy "Staff can read employer enquiries"
on public.employer_enquiries
for select
to authenticated
using (public.is_staff_user());

drop policy if exists "Staff can update employer enquiries" on public.employer_enquiries;
create policy "Staff can update employer enquiries"
on public.employer_enquiries
for update
to authenticated
using (public.is_staff_user())
with check (public.is_staff_user());

drop policy if exists "Published jobs are publicly readable" on public.jobs;
create policy "Published jobs are publicly readable"
on public.jobs
for select
using (status = 'published');

drop policy if exists "Staff can read all jobs" on public.jobs;
create policy "Staff can read all jobs"
on public.jobs
for select
to authenticated
using (public.is_staff_user());

drop policy if exists "Staff can insert jobs" on public.jobs;
create policy "Staff can insert jobs"
on public.jobs
for insert
to authenticated
with check (public.is_staff_user());

drop policy if exists "Staff can update jobs" on public.jobs;
create policy "Staff can update jobs"
on public.jobs
for update
to authenticated
using (public.is_staff_user())
with check (public.is_staff_user());

drop policy if exists "Staff can read candidate notes" on public.candidate_notes;
create policy "Staff can read candidate notes"
on public.candidate_notes
for select
to authenticated
using (public.is_staff_user());

drop policy if exists "Staff can insert candidate notes" on public.candidate_notes;
create policy "Staff can insert candidate notes"
on public.candidate_notes
for insert
to authenticated
with check (public.is_staff_user() and staff_id = auth.uid());

drop policy if exists "Staff can update own candidate notes and admins can update all" on public.candidate_notes;
create policy "Staff can update own candidate notes and admins can update all"
on public.candidate_notes
for update
to authenticated
using (
  public.is_admin_user()
  or (
    public.is_staff_user()
    and staff_id = auth.uid()
  )
)
with check (
  public.is_admin_user()
  or (
    public.is_staff_user()
    and staff_id = auth.uid()
  )
);

drop policy if exists "Staff can read employer notes" on public.employer_notes;
create policy "Staff can read employer notes"
on public.employer_notes
for select
to authenticated
using (public.is_staff_user());

drop policy if exists "Staff can insert employer notes" on public.employer_notes;
create policy "Staff can insert employer notes"
on public.employer_notes
for insert
to authenticated
with check (public.is_staff_user() and staff_id = auth.uid());

drop policy if exists "Staff can update own employer notes and admins can update all" on public.employer_notes;
create policy "Staff can update own employer notes and admins can update all"
on public.employer_notes
for update
to authenticated
using (
  public.is_admin_user()
  or (
    public.is_staff_user()
    and staff_id = auth.uid()
  )
)
with check (
  public.is_admin_user()
  or (
    public.is_staff_user()
    and staff_id = auth.uid()
  )
);

-- Admin bootstrap:
-- The first staff admin cannot be created through the frontend.
-- First create the user in Supabase Auth.
-- Then manually insert that user's auth.users.id into public.staff_profiles with role = 'admin'.
-- This should be done in Supabase SQL Editor by the project owner/admin.
-- Do not expose service role keys in frontend code.
--
-- Admin bootstrap example:
-- Replace <AUTH_USER_UUID> with the id from auth.users after creating the user in Supabase Auth.
-- insert into public.staff_profiles (id, full_name, role)
-- values ('<AUTH_USER_UUID>', 'Funeka Admin', 'admin');

-- Public insert policies are intentionally not enabled in Phase 1A.
-- Enable only after the Apply and Employers forms validate payloads, rate limiting,
-- file handling, and abuse protections against the live Supabase project.
--
-- Example direction, for later review only:
-- create policy "Public can submit candidate applications"
-- on public.candidates
-- for insert
-- to anon
-- with check (source = 'website' and status = 'new');
--
-- No public candidate_documents insert policy is enabled in Phase 1A.
-- Add one only after private storage uploads, candidate ownership/linking,
-- accepted file types, file size limits, and abuse protections are implemented.
--
-- create policy "Public can submit employer enquiries"
-- on public.employer_enquiries
-- for insert
-- to anon
-- with check (source = 'website' and status = 'new');

-- Storage plan for later Supabase dashboard or storage SQL setup:
-- Bucket name: candidate-cvs
-- Rules:
-- - Private bucket.
-- - Staff can view/download.
-- - Public upload should only happen through controlled form logic.
-- - Accepted formats: PDF, DOC, DOCX.
-- - Max file size: 5MB.
