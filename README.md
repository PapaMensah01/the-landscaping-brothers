This is a [Next.js](https://nextjs.org) project for **The Landscaping Brothers**.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Contact & Careers forms (email)

Forms send email via [Resend](https://resend.com). For a full Contact Us email checklist and testing steps, see **[docs/CONTACT_EMAIL_SETUP.md](docs/CONTACT_EMAIL_SETUP.md)**. For free analytics (GA4), see **[docs/ANALYTICS_SETUP.md](docs/ANALYTICS_SETUP.md)**. Optionally, career applications (and resume PDFs) and contact submissions are stored in [Supabase](https://supabase.com)—see **[docs/SUPABASE_SETUP.md](docs/SUPABASE_SETUP.md)**.

Local setup:

1. Copy `env.example` to `.env.local`.
2. Add your `RESEND_API_KEY` from [Resend API Keys](https://resend.com/api-keys). Optionally set `CONTACT_EMAIL` and `FROM_EMAIL`.
3. Restart the dev server.

## Production checklist (deploy)

Before or right after deploying (e.g. Vercel):

1. **Environment variables** – In your host (e.g. Vercel → Project → Settings → Environment Variables), add:
   - `RESEND_API_KEY` – your Resend API key
   - `CONTACT_EMAIL` – e.g. `office@thelandscapingbrothers.com` (where form submissions are sent)
   - `FROM_EMAIL` – e.g. `The Landscaping Brothers <onboarding@resend.dev>` for testing, or your verified domain (see step 2)
   - If using Supabase for careers: `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (see [docs/SUPABASE_SETUP.md](docs/SUPABASE_SETUP.md))
2. **Resend “from” address** – For production, in [Resend](https://resend.com/domains) add and verify your domain, then set `FROM_EMAIL` to an address on that domain (e.g. `The Landscaping Brothers <noreply@thelandscapingbrothers.com>`).
3. **Redeploy** – Trigger a new deploy after saving env vars so they are applied.

## Deploy on Vercel

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
