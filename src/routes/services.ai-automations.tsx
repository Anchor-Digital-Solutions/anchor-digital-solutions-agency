import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { SERVICES } from "@/lib/content";

const service = SERVICES[2]!;

export const Route = createFileRoute("/services/ai-automations")({
  head: () => ({
    meta: [
      { title: "AI Automations & AI Agents — Anchor Digital Solutions" },
      {
        name: "description",
        content:
          "24/7 AI chatbots, WhatsApp API lead routing, auto-scheduling and Zapier or Make workflow integrations. Pricing in USD or KES.",
      },
      { property: "og:title", content: "AI Automations & AI Agents" },
      {
        property: "og:description",
        content: "Reclaim hours of your day with intelligent systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail service={service} />,
});
