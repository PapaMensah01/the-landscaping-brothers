# Supabase setup for The Landscaping Brothers

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign in (or create an account).
2. Click **New project**.
3. Choose your **organization**, set a **project name** (e.g. `the-landscaping-brothers`), set a **database password** (save it somewhere safe), pick a **region** close to you.
4. Click **Create new project** and wait for it to finish.

## 2. Create the tables

1. In the left sidebar, open **SQL Editor**.
2. Click **New query**.
3. Copy the **entire** contents of `supabase/schema.sql` from this repo.
4. Paste into the editor and click **Run** (or press Cmd/Ctrl + Enter).
5. You should see “Success.” two tables under **Table Editor**: **contact_submissions** (estimate requests, one per email) and **career_applications**.

## 3. Create the storage bucket for resumes

1. In the left sidebar, open **Storage**.
2. Click **New bucket**.
3. **Name:** `resumes`
4. Turn **Public bucket** off (keep it private).
5. Click **Create bucket**.

Your server will use the **service role** key to upload files; no extra policies are required for that.

## 4. Get your API keys

1. In the left sidebar, open **Project Settings** (gear icon).
2. Go to **API**.
3. You’ll see:
   - **Project URL** (e.g. `https://xxxxx.supabase.co`)
   - **anon public** key – used for client-side (we don’t use it for careers)
   - **service_role** key – used for server-side (insert rows, upload resumes). **Keep this secret.**

## 5. Add keys to your app

Add these to `.env.local` (and to your production env vars, e.g. Vercel):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

Replace with your **Project URL** and **service_role** key from step 4.

## 6. Run the app

Restart your dev server.

**Contact form:** When someone submits, a row is added to **contact_submissions** only if that email isn’t already in the table (no duplicates). You still get the Resend email every time.

**Careers form:** A row is added to **career_applications**, the resume is uploaded to the `resumes` bucket, and you get the Resend email with the resume attached.

## Viewing data

- **Table Editor** in Supabase:
  - **contact_submissions** – everyone who requested an estimate (one row per email; repeat submissions don’t add a new row).
  - **career_applications** – job applicants and resume paths.
- **Storage → resumes**: download any resume by path.

You can later add an admin page to list contacts and applicants if you want.
