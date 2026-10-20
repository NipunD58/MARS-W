import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "./terms";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Axiom Robotics Capital" },
      {
        name: "description",
        content:
          "Terms of Service, regulatory disclosures, and usage agreements for Axiom Capital Management.",
      },
    ],
  }),
  component: TermsPage,
});
