import { createFileRoute } from "@tanstack/react-router";
import { NotFoundView } from "@/components/NotFoundView";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "404 Not Found — MARS Robotics Capital" },
      {
        name: "description",
        content: "This page could not be found. Return to MARS Capital's homepage.",
      },
      { name: "robots", content: "noindex,follow" },
    ],
  }),
  component: NotFoundView,
});
