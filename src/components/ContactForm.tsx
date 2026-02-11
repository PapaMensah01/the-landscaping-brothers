"use client";

import { useState } from "react";

const REFERRAL_OPTIONS = [
  "Nextdoor",
  "Google",
  "Signs/Trailers/Trucks",
  "Client Referral",
  "Door Knocker",
  "Flyers, Cards, Info graphic",
  "Other",
];

export function ContactForm() {
  const [referral, setReferral] = useState("");

  return (
    <form
      action="#"
      method="post"
      className="mt-10 space-y-6 rounded-2xl border border-border bg-cream/30 p-4 sm:p-6 md:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Last name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="(470) 609-5370"
        />
      </div>
      <div>
        <label htmlFor="streetAddress" className="block text-sm font-medium text-foreground">
          Street address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          required
          className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Street address"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-foreground">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="City"
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-foreground">
            State <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="state"
            name="state"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="State"
          />
        </div>
      </div>
      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium text-foreground">
          Zip code <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          required
          inputMode="numeric"
          autoComplete="postal-code"
          className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="ZIP code"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Please provide as much detail as you can."
        />
      </div>
      <fieldset className="space-y-3">
        <legend className="font-heading text-lg font-bold text-foreground">
          Referral
        </legend>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted">How did you hear about us?</span>
        </div>
        <div className="mt-3 space-y-2.5" role="group">
          {REFERRAL_OPTIONS.map((value) => (
            <label key={value} className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="referral"
                value={value}
                checked={referral === value}
                onChange={() => setReferral(value)}
                className="h-4 w-4 border-border text-accent focus:ring-accent"
              />
              <span className="text-sm font-medium text-foreground">{value}</span>
            </label>
          ))}
        </div>
        {referral === "Other" && (
          <div className="mt-3">
            <label htmlFor="referralOther" className="sr-only">
              Please specify how you heard about us
            </label>
            <input
              type="text"
              id="referralOther"
              name="referralOther"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Please specify how you heard about us"
            />
          </div>
        )}
      </fieldset>
      <div className="space-y-4">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="marketingEmail"
            value="yes"
            required
            className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
          />
          <span className="text-sm text-foreground">
            I would like to receive marketing emails from The Landscaping Brothers. Unsubscribe at any time. <span className="text-red-500">*</span>
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="marketingSms"
            value="yes"
            required
            className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
          />
          <span className="text-sm text-foreground">
            I also agree to receive marketing SMS from The Landscaping Brothers. Msg &amp; data rates may apply, frequency varies. Reply STOP MKT to opt out of marketing SMS &amp; STOP for all SMS. <span className="text-red-500">*</span>
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-4 text-base font-semibold text-white transition hover:bg-accent-dark md:w-auto md:px-8"
      >
        Send message
      </button>
    </form>
  );
}
