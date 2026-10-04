import { Link } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/Section";
import { PricingTable } from "@/components/PricingTable";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqSection } from "@/components/FaqSection";
import type { ServiceContent } from "@/lib/content";

export function ServiceDetail({ service }: { service: ServiceContent }) {
  return (
    <Page>
      <PageHero
        before={
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground hover:underline">
            ← Back to All Services
          </Link>
        }
        tag="SERVICE" title={service.title} subtitle={service.intro} />

      <section className="rounded-lg border border-border p-8">
        <h2 className="text-xl font-semibold">What's Included</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {service.included.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <PricingTable tiers={service.tiers} />

      <FaqSection />

      <CtaBanner headline={`Let's scope your ${service.title.toLowerCase()} project.`} />
    </Page>
  );
}
