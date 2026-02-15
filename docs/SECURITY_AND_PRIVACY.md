# Security and privacy overview

Summary of how the site handles user and business data, and what to keep doing.

## What’s in good shape

- **Secrets stay on the server** – `RESEND_API_KEY` and `SUPABASE_SERVICE_ROLE_KEY` are only used in server actions. They are never sent to the browser or committed to Git (`.env.local` is in `.gitignore`).
- **Only safe values are public** – `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_GA_MEASUREMENT_ID` are meant to be public. The Supabase URL does not grant access without the service role key, which is never exposed.
- **No client-side database access** – Contact and career data are written only from the server (Supabase service role). There is no admin or API that exposes these tables to the internet without auth.
- **Resumes are private** – Resume files live in a private Supabase Storage bucket. Access is via the service role only; there are no public resume URLs.
- **Form submission is server-side** – Contact and Careers forms use Next.js server actions (POST). Form data is not sent in the URL or stored in the front end.
- **Email content is escaped** – User-provided text in the contact email is escaped so it cannot inject HTML or script.
- **Spam protection** – A honeypot field is used on both forms to reduce bot submissions.
- **Privacy policy** – The site has a privacy policy that describes collection, marketing, analytics (Google), and how to contact you.

## What to keep doing

1. **Never commit secrets** – Do not add `.env.local` or any file with real API keys to Git. Use `env.example` only for variable names and placeholders.
2. **Set env vars in production** – In Vercel (or your host), add the same env vars as in `.env.local` so the live site can send email, use Supabase, and run analytics. Redeploy after adding or changing them.
3. **Rotate keys if exposed** – If a Resend or Supabase key was ever pasted in chat, committed, or shared, create a new key in the provider’s dashboard and update your env vars, then revoke the old key.
4. **Use HTTPS in production** – Vercel provides HTTPS by default. If you use another host, ensure the site is served only over HTTPS.

## Optional improvements

- **Rate limiting** – There is no rate limit on the Contact or Careers forms. If you see a lot of spam or abuse, consider adding rate limiting (e.g. by IP) using a store like Vercel KV or Upstash Redis.
- **Admin access** – If you add a page to view contact or career submissions, protect it with login (e.g. Supabase Auth or a simple password) and keep using the server/Supabase only; do not expose the service role key to the client.

Nothing in this doc is legal advice. For compliance (e.g. GDPR, CCPA), consult a lawyer and update your Privacy Policy and practices as needed.
