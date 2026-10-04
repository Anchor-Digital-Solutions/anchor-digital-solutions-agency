import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { SERVICES } from "@/lib/content";

const service = SERVICES[1]!;

export const Route = createFileRoute("/services/digital-marketing")({
  head: () => ({
    meta: [
      { title: "Strategic Digital Marketing — Anchor Digital Solutions" },
      {
        name: "description",
        content:
          "High-intent Google and Meta campaigns, local SEO, GA4/GTM conversion tracking and CRO. Monthly retainers in USD or KES.",
      },
      { property: "og:title", content: "Strategic Digital Marketing" },
      {
        property: "og:description",
        content: "Reach the right clients when they are ready to buy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail service={service} />,
});
