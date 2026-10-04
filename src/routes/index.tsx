import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/Section";
import { CostEstimator } from "@/components/CostEstimator";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqSection } from "@/components/FaqSection";
import { SERVICES, TESTIMONIALS } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web Design & AI Automation Agency Nairobi | Anchor Digital Solutions" },
      {
        name: "description",
        content:
          "High-converting websites, WhatsApp lead automation and intent-based digital marketing from Nairobi for businesses across East Africa and worldwide.",
      },
      { property: "og:title", content: "Web Design & AI Automation Agency Nairobi | Anchor Digital Solutions" },
      {
        property: "og:description",
        content: "High-converting websites and AI automations that scale revenue across East Africa and worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Page>
      <PageHero
        tag="ANCHOR DIGITAL SOLUTIONS"
        title="We build high-converting websites and AI automations that scale your revenue."
        subtitle="From custom web engineering to automated WhatsApp lead routing and intent-based digital marketing. Headquartered in Nairobi, Kenya — serving growing businesses across East Africa and worldwide."
      >
        <Link
          to="/contact"
          className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Book a 15-Min Strategy Call
        </Link>
        <Link to="/services" className="rounded-md border border-border px-5 py-3 text-sm font-medium">
          Explore Our Services
        </Link>
      </PageHero>

      <section className="rounded-lg border border-border p-8">
        <h2 className="text-2xl font-bold">
          Stop losing leads to slow websites and manual workflows.
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Most businesses don't have a traffic problem — they have a conversion and systems problem. We
          engineer your digital presence to convert visitors into paying clients on autopilot.
        </p>
      </section>

      <section className="py-16">
        <h2 className="text-2xl font-bold">What we do</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.path}
              to={s.path}
              className="rounded-lg border border-border p-6 transition-colors hover:bg-accent"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {s.included.slice(0, 4).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <span className="mt-4 inline-block text-sm font-medium underline">Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-8">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground">CLIENT RESULTS</p>
        <h2 className="mt-2 text-2xl font-bold">Trusted by growing businesses worldwide.</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.author} className="rounded-lg border border-border p-6">
              <p className="text-lg">"{t.quote}"</p>
              <footer className="mt-4 text-sm text-muted-foreground">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <CostEstimator />

      <FaqSection />

      <CtaBanner />
    </Page>
  );
}
