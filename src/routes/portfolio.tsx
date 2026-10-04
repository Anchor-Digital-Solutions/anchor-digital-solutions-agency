import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { CASE_STUDIES, PORTFOLIO_CATEGORIES } from "@/lib/content";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Anchor Digital Solutions" },
      {
        name: "description",
        content:
          "Case studies across websites, digital marketing and AI automation — with the challenge, solution and measurable outcome.",
      },
      { property: "og:title", content: "Portfolio — Anchor Digital Solutions" },
      { property: "og:description", content: "Real challenges, engineered solutions, measurable outcomes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [active, setActive] = useState<(typeof PORTFOLIO_CATEGORIES)[number]>("All");
  const visible = active === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.category === active);

  return (
    <Page>
      <PageHero
        tag="PORTFOLIO"
        title="Real challenges. Engineered solutions. Measurable outcomes."
        subtitle="A selection of systems we've built for clients across professional services, retail, healthcare and logistics."
      />

      <div role="tablist" aria-label="Filter case studies" className="flex flex-wrap gap-2">
        {PORTFOLIO_CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            type="button"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-md border border-border px-4 py-2 text-sm ${
              active === cat ? "bg-primary text-primary-foreground" : "hover:bg-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((cs) => (
          <article key={cs.id} className="rounded-lg border border-border p-6">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              {cs.category.toUpperCase()}
            </p>
            <h2 className="mt-2 text-lg font-semibold">{cs.title}</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-semibold">Problem</dt>
                <dd className="text-muted-foreground">{cs.challenge}</dd>
              </div>
              <div>
                <dt className="font-semibold">Solution</dt>
                <dd className="text-muted-foreground">{cs.solution}</dd>
              </div>
              <div>
                <dt className="font-semibold">Measurable Outcome</dt>
                <dd>
                  <ul className="mt-1 space-y-1 text-muted-foreground">
                    {cs.outcome.map((o) => (
                      <li key={o}>• {o}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-8 text-muted-foreground">No case studies in this category yet.</p>
      )}

      <CtaBanner />
    </Page>
  );
}
