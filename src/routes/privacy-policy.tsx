import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import PrivacyPage from "./privacy";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    seoHead({
      title: "Privacy Policy | MARS Capital",
      description:
        "Read how MARS Capital Management handles information submitted through its website and related communications.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});
