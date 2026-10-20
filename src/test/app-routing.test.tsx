import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches privacy policy and terms routes correctly", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    expect(router.matchRoutes("/privacy").at(-1)?.routeId).toBe("/privacy");
    expect(router.matchRoutes("/privacy-policy").at(-1)?.routeId).toBe("/privacy-policy");
    expect(router.matchRoutes("/terms").at(-1)?.routeId).toBe("/terms");
    expect(router.matchRoutes("/terms-and-conditions").at(-1)?.routeId).toBe(
      "/terms-and-conditions",
    );
  });

  it("handles unknown routes via the 404 catch-all route", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/non-existent-sector-1234");
    expect(matches.at(-1)?.routeId).toBe("/$");
  });
});
