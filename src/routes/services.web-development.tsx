import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { SERVICES } from "@/lib/content";

const service = SERVICES[0]!;

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title: "Website Design & Development — Anchor Digital Solutions" },
      {
        name: "description",
        content:
          "Mobile-first websites with speed optimization, technical SEO and M-Pesa, Flutterwave, Stripe or PayPal integrations. Pricing in USD or KES.",
      },
      { property: "og:title", content: "Website Design & Development" },
      { property: "og:description", content: "Turning online visitors into qualified leads." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail service={service} />,
});
