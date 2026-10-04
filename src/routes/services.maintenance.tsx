import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { SERVICES } from "@/lib/content";

const service = SERVICES[3]!;

export const Route = createFileRoute("/services/maintenance")({
  head: () => ({
    meta: [
      { title: "Website & System Maintenance — Anchor Digital Solutions" },
      {
        name: "description",
        content:
          "Monthly website and automation care: updates, backups, security and uptime monitoring, speed tuning and small edits. Plans in USD or KES.",
      },
      { property: "og:title", content: "Website & System Maintenance" },
      { property: "og:description", content: "Keep your site fast, secure and always online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail service={service} />,
});
