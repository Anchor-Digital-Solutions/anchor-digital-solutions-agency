import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Serve trailing-slash URLs as-is instead of 307-redirecting them; the
    // static prerenderer requests "/page/" and would otherwise redirect-loop.
    trailingSlash: "preserve",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
