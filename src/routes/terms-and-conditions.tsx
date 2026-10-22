import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import TermsPage from "./terms";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    seoHead({
      title: "Terms & Conditions | MARS Capital",
      description:
        "Review the website terms, regulatory disclosures, and usage conditions for MARS Capital Management.",
      path: "/terms",
    }),
  component: TermsPage,
});
