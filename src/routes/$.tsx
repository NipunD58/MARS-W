import { createFileRoute } from "@tanstack/react-router";
import { NotFoundView } from "@/components/NotFoundView";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "404 Not Found — Axiom Robotics Capital" },
      { name: "description", content: "The requested coordinates could not be resolved." },
    ],
  }),
  component: NotFoundView,
});
