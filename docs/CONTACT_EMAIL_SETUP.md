# Contact Us email setup

Contact form submissions are sent to your inbox via Resend. Follow this to finish setup and verify it works.

## 1. Environment variables

In **`.env.local`** (and in production, e.g. Vercel):

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes | Resend API key from [resend.com/api-keys](https://resend.com/api-keys). |
| `CONTACT_EMAIL` | No (has default) | Where Contact Us (and Careers) emails are sent. Default: `office@thelandscapingbrothers.com`. |
| `FROM_EMAIL` | No (has default) | Sender address. Use an address on your **verified** Resend domain, e.g. `The Landscaping Brothers <noreply@thelandscapingbrothers.com>`. |

If you’ve already verified `thelandscapingbrothers.com` in Resend, set:

```env
FROM_EMAIL=The Landscaping Brothers <noreply@thelandscapingbrothers.com>
```

(You can use any local part: `noreply`, `contact`, `hello`, etc., as long as the domain is verified.)

## 2. Restart the dev server

After changing `.env.local`, restart:

```bash
npm run dev
```

## 3. Test the flow

1. Open **Contact** in the app.
2. Fill out the form with real or test data and submit.
3. You should see: **“Thanks! Your message was sent. We’ll get back to you soon.”**
4. Check the inbox for `CONTACT_EMAIL` — you should receive the submission with name, email, phone, address, message, referral, and marketing consent.
5. Reply to that email; it goes to the customer’s address (reply-to is set to their email).

## 4. Optional: Supabase

If Supabase is configured, the same submission is stored in **contact_submissions** (one row per email; duplicates are skipped). Email is still sent every time. See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md).

## Troubleshooting

- **“Email is not configured”** → Add `RESEND_API_KEY` to `.env.local` and restart the dev server.
- **No email received** → Check spam; confirm `CONTACT_EMAIL` is correct and Resend dashboard for errors.
- **Resend “domain not verified”** → Set `FROM_EMAIL` to `The Landscaping Brothers <onboarding@resend.dev>` until your domain is verified, or complete domain verification in Resend.
