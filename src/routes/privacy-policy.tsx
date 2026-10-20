import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "./privacy";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Axiom Robotics Capital" },
      {
        name: "description",
        content:
          "Privacy Policy, data stewardship, and information handling practices of Axiom Capital Management.",
      },
    ],
  }),
  component: PrivacyPage,
});
