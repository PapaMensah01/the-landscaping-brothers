-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- Creates tables for career applications and contact/estimate requests.

-- Table: contact_submissions (Contact Us / estimate requests)
-- One row per email; duplicate submissions (same email) are skipped on insert.
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null unique,
  phone text not null,
  street_address text not null,
  city text not null,
  state text not null,
  zip_code text not null,
  message text not null,
  referral text not null,
  referral_other text,
  marketing_email boolean not null default false,
  marketing_sms boolean not null default false,
  created_at timestamptz not null default now()
);

comment on table public.contact_submissions is 'Contact form / estimate requests; one entry per email (duplicates skipped)';

-- Table: career_applications
create table if not exists public.career_applications (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  phone text not null,
  email text not null,
  resume_path text not null,
  fit_answer text not null,
  how_heard text not null,
  how_heard_detail text,
  created_at timestamptz not null default now()
);

comment on table public.career_applications is 'Careers page applications: name, contact, resume, fit answer, how they heard, timestamp';

-- Storage bucket "resumes" must be created in the Dashboard:
-- Storage → New bucket → Name: resumes → Private → Create.
-- Your Next.js server uses the service role key to upload; no extra policies needed for private buckets.
