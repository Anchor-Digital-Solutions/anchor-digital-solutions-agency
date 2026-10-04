import { createFileRoute, redirect } from "@tanstack/react-router";

// Old address kept working: forwards to the new web development page.
export const Route = createFileRoute("/services/website-development")({
  beforeLoad: () => {
    throw redirect({ to: "/services/web-development", statusCode: 301 });
  },
});
