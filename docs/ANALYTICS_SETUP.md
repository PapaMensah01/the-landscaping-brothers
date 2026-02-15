# Google Analytics 4 setup

GA4 is free and gives you page views, traffic sources, devices, locations, and more. The site only loads the script when you add a Measurement ID.

## 1. Create a GA4 property

1. Go to [analytics.google.com](https://analytics.google.com) and sign in with a Google account.
2. Click **Admin** (gear icon, bottom left).
3. Under **Property**, click **Create property**.
4. **Property name:** e.g. "The Landscaping Brothers".
5. Set time zone and currency, then click **Next** → choose your industry and size → **Create**.
6. When asked "How do you want to collect data?", choose **Web**.
7. **Website URL:** your live URL (e.g. `https://thelandscapingbrothers.com`) or `http://localhost:3000` for testing. **Stream name:** e.g. "Main site" → **Create stream**.

## 2. Get your Measurement ID

On the new Web stream page you’ll see **Measurement ID** in the form **G-XXXXXXXXXX**. Copy it.

## 3. Add it to the app

In **`.env.local`** (and in production, e.g. Vercel):

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace with your actual ID. Restart the dev server.

**Production (Vercel):** `.env.local` is not deployed. In Vercel → your project → **Settings** → **Environment Variables**, add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with your same value and choose **Production**. Then **Redeploy** so the live site gets the variable.

## 4. Verify

- Visit your site and click through a few pages.
- In GA4: **Reports** → **Realtime**. You should see your visit and the pages you opened (can take a minute).

If the env var is missing or empty, no script is loaded and nothing is tracked.

## What’s tracked

- **Page views** – Each page load and each in-app navigation (e.g. Home → Contact → Services).
- **Page path and title** – So you can see which pages get the most traffic in **Reports** → **Engagement** → **Pages and screens**.

Traffic source, device, and location come from GA4 automatically; no extra code needed.
