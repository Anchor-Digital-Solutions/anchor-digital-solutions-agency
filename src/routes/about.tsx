import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { CORE_PILLARS, PROCESS_STEPS } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Anchor Digital Solutions" },
      {
        name: "description",
        content:
          "Our mission, core pillars and the four-step process we use to design, build and optimize client-generating digital systems.",
      },
      { property: "og:title", content: "About Anchor Digital Solutions" },
      {
        property: "og:description",
        content: "Precision design, measurable outcomes, automated efficiency.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Page>
      <PageHero
        tag="ABOUT US"
        title="We exist to turn digital presence into predictable revenue."
        subtitle="Anchor Digital Solutions is a systems-first agency. Our mission is to give growing businesses the same calibre of digital infrastructure as their largest competitors — websites that convert, marketing that is accountable, and automation that gives owners their time back."
      />

      <section className="py-8">
        <h2 className="text-2xl font-bold">Our Core Pillars</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {CORE_PILLARS.map((p) => (
            <div key={p.title} className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold">Our Process</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-4">
          {PROCESS_STEPS.map((s) => (
            <li key={s.step} className="rounded-lg border border-border p-6">
              <p className="text-sm font-semibold text-muted-foreground">{s.step}</p>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanner />
    </Page>
  );
}
