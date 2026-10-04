import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/Section";
import { BUSINESS_EMAIL, SERVICE_OPTIONS } from "@/lib/content";
import { useCurrency, type Currency } from "@/lib/currency";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Anchor Digital Solutions" },
      {
        name: "description",
        content:
          "Book a free 15-minute strategy call or send us a message about websites, digital marketing or AI automation.",
      },
      { property: "og:title", content: "Contact Anchor Digital Solutions" },
      { property: "og:description", content: "Let's map the system that grows your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  validateSearch: (s) =>
    z
      .object({
        service: z.string().optional(),
        scope: z.string().optional(),
        estimate: z.string().optional(),
      })
      .parse(s),
  component: Contact,
});

type FormState = {
  fullName: string;
  email: string;
  service: string;
  region: Currency;
  message: string;
};

function Contact() {
  const { currency, setCurrency } = useCurrency();
  const search = Route.useSearch();
  const prefilledService =
    search.service && SERVICE_OPTIONS.includes(search.service) ? search.service : SERVICE_OPTIONS[0]!;
  const prefilledMessage = search.service
    ? `Service: ${search.service}\nScope / add-ons: ${search.scope ?? "None"}\nEstimated budget: ${search.estimate ?? "TBC"}\n\nProject details: `
    : "";
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    service: prefilledService,
    region: currency,
    message: prefilledMessage,
  });
  useEffect(() => {
    setForm((f) => ({ ...f, service: prefilledService, message: prefilledMessage || f.message }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.service, search.scope, search.estimate]);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    if (key === "region") setCurrency(value as Currency);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid business email.";
    if (!form.message.trim()) next.message = "Please tell us a little about your project.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
  };

  const field = "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";

  return (
    <Page>
      <PageHero
        tag="CONTACT"
        title="Let's map the system that grows your business."
        subtitle="Tell us what you're trying to fix. We'll come back with a clear recommendation and a scoped next step — usually within one business day."
      />

      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <section id="contact-form" className="scroll-mt-24 rounded-lg border border-border p-6">
          {submitted ? (
            <div role="status">
              <h2 className="text-xl font-semibold">Thanks, {form.fullName.split(" ")[0]} — message received.</h2>
              <p className="mt-2 text-muted-foreground">
                We'll reply to {form.email} within one business day with next steps for{" "}
                {form.service.toLowerCase()}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    fullName: "",
                    email: "",
                    service: SERVICE_OPTIONS[0]!,
                    region: currency,
                    message: "",
                  });
                }}
                className="mt-6 rounded-md border border-border px-4 py-2 text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2 className="text-xl font-semibold">Send us a message</h2>
              {search.service && (
                <div className="mt-4 rounded-md bg-muted p-4 text-sm">
                  <p className="font-semibold">Your estimated scope</p>
                  <p className="mt-1">{search.service} — {search.scope}</p>
                  <p className="mt-1 text-muted-foreground">{search.estimate}</p>
                </div>
              )}

              <div className="mt-6">
                <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
                <input
                  id="fullName"
                  className={field}
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && <p className="mt-1 text-sm text-destructive">{errors.fullName}</p>}
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="text-sm font-medium">Business Email</label>
                <input
                  id="email"
                  type="email"
                  className={field}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="mt-4">
                <label htmlFor="service" className="text-sm font-medium">Service of Interest</label>
                <select
                  id="service"
                  className={field}
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                >
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <fieldset className="mt-4">
                <legend className="text-sm font-medium">Market Region</legend>
                <div className="mt-2 flex gap-4">
                  {(["USD", "KES"] as const).map((r) => (
                    <label key={r} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="region"
                        value={r}
                        checked={form.region === r}
                        onChange={() => update("region", r)}
                      />
                      {r === "USD" ? "International (USD $)" : "Kenya (KSh)"}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-4">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className={field}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="mt-6 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          )}
        </section>

        <aside className="rounded-lg border border-border p-6">
          <h2 className="text-lg font-semibold">Prefer to talk?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Book a free 15-minute strategy call and we'll audit your funnel live.
          </p>
          <a href={`mailto:${BUSINESS_EMAIL}`} className="mt-4 block text-sm underline">
            {BUSINESS_EMAIL}
          </a>
        </aside>
      </div>
    </Page>
  );
}
