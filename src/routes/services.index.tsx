import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/Section";
import { CostEstimator } from "@/components/CostEstimator";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Anchor Digital Solutions" },
      {
        name: "description",
        content:
          "End-to-end web development, digital marketing and AI automation services built to convert and scale.",
      },
      { property: "og:title", content: "Services — Anchor Digital Solutions" },
      {
        property: "og:description",
        content: "Websites, marketing and AI automation systems under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <Page>
      <PageHero
        tag="OUR SERVICES"
        title="End-to-end systems for attracting, converting and keeping clients."
        subtitle="We don't sell isolated deliverables. We build the site that converts, the campaigns that feed it, and the automations that handle everything after the lead comes in — designed as one connected system."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <div key={s.path} className="flex flex-col rounded-lg border border-border p-6">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-muted-foreground">{s.tagline}</p>
            <ul className="mt-4 flex-1 space-y-2 text-sm">
              {s.included.slice(0, 4).map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
            <Link
              to={s.path}
              className="mt-6 inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Deep dive
            </Link>
          </div>
        ))}
      </div>

      <CostEstimator />

      <CtaBanner />
    </Page>
  );
}
