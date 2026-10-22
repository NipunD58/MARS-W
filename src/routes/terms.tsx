import { createFileRoute } from "@tanstack/react-router";
import { Scale, Clock, AlertTriangle, ShieldCheck } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    seoHead({
      title: "Terms & Conditions | MARS Capital",
      description:
        "Review the website terms, regulatory disclosures, and usage conditions for MARS Capital Management.",
      path: "/terms",
    }),
  component: TermsPage,
});

const termsSections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using the website (MARScapital.ai), investor data portals, or informational materials provided by MARS Capital Management LLC and its affiliates ("MARS," "we," or "us"), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms & Conditions. If you do not accept these terms in their entirety, you must discontinue access immediately.`,
  },
  {
    id: "disclaimer",
    title: "2. Regulatory Status & No Investment Advice",
    content: `CRITICAL REGULATORY NOTICE:
• Informational Sole Purpose: Nothing on this website constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation to purchase any security, derivative, or investment fund interest.
• Not Registered Investment Advice: MARS does not provide tax, legal, or tailored financial advisory services through this platform. Prospective co-investors or institutional partners must consult independent qualified counsel.
• Accredited & Qualified Purchasers Only: Any future syndication or private placement is conducted solely via definitive confidential private placement memoranda (PPM) restricted to accredited investors under Rule 506(c) of Regulation D.`,
  },
  {
    id: "ip",
    title: "3. Intellectual Property Rights",
    content: `All design systems, 3D interactive graphics, vector marks, robotics telemetry illustrations, typography pairings, editorial copy, and source code on this website are the proprietary property of MARS Capital Management LLC or licensed under applicable agreements.
You may not reproduce, decompile, mirror, scrape, or distribute any proprietary material without prior explicit written permission from MARS.`,
  },
  {
    id: "submissions",
    title: "4. Founder Materials & Pitch Submissions",
    content: `Due to the high volume of investment pitches, business plans, and automation concepts submitted to MARS:
• Non-Confidential Treatment: Unsolicited proposals or email submissions through public channels are not treated as confidential or proprietary.
• Prior Independent Development: MARS actively evaluates dozens of physical automation and robotics opportunities; we may currently or in the future evaluate or finance concepts similar to ideas submitted.
• Definitive Diligence: Confidentiality obligations arise only upon the mutual execution of our formal Mutual Non-Disclosure Agreement (MNDA).`,
  },
  {
    id: "conduct",
    title: "5. Permitted & Prohibited Conduct",
    content: `You agree not to:
• Interfere with or compromise the security, infrastructure, or network integrity of our web servers
• Utilize automated bots, crawlers, or scrapers without explicit API agreements
• Impersonate MARS partners, team members, or affiliated robotics portfolio executives
• Attempt unauthorized access to restricted investor data rooms or administrative consoles`,
  },
  {
    id: "forward-looking",
    title: "6. Forward-Looking Statements & Projections",
    content: `Content on this platform may include forward-looking statements regarding target industry automation adoption, robotic recovery uplifts, cycle time reductions, and market TAMs. Such statements reflect current operational expectations and inherently involve substantial risks, manufacturing delays, and market shifts. Actual operating results may differ materially. Past deployment metrics are not indicative of future performance.`,
  },
  {
    id: "liability",
    title: "7. Limitation of Liability & Warranty Disclaimer",
    content: `This website and its digital assets are provided strictly "as is" and "as available" without warranty of any kind, whether express, statutory, or implied.
To the maximum extent permitted by applicable law, MARS, its managing partners, affiliates, and employees shall not be liable for any direct, indirect, incidental, punitive, or consequential damages arising from your reliance on or inability to access this platform.`,
  },
  {
    id: "governing-law",
    title: "8. Governing Law & Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to conflict of law principles. Any dispute arising under or in connection with these Terms shall be resolved exclusively through binding arbitration conducted in accordance with JAMS Comprehensive Arbitration Rules.`,
  },
  {
    id: "inquiries",
    title: "9. Modifications & Legal Inquiries",
    content: `We reserve the right to revise these Terms at any time without prior individual notice. Material changes become effective immediately upon publication on this page.
For legal notices, compliance verification, or formal inquiries:
MARS Capital Management — Office of General Counsel
Email: legal@MARScapital.ai`,
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation Bar */}
      <SiteNavbar />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
        {/* Header Hero */}
        <div className="border-b border-border pb-12">
          <div className="flex flex-wrap items-center gap-3 font-sans text-xs uppercase tracking-widest text-muted-foreground font-medium">
            <span className="flex items-center gap-1.5 text-foreground font-semibold">
              <Scale className="h-3.5 w-3.5 text-accent" />
              Legal & Regulatory
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Last Revised: March 2026
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Terms & Conditions of Service
          </h1>

          <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
            Legal terms, investor qualifications, regulatory disclaimers, and intellectual property
            protocols governing all MARS Capital digital interfaces.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded border border-accent/40 bg-accent/5 p-4 text-xs font-sans text-foreground/90 font-medium">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>
              NOTICE: Materials presented are for institutional and accredited market exploration
              only. No public solicitation or retail securities offering is conducted via this
              website.
            </span>
          </div>
        </div>

        {/* Content Layout with Side Table of Contents */}
        <div className="grid grid-cols-1 gap-12 pt-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <span className="font-sans text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                ⊢ Table of Contents
              </span>
              <nav className="space-y-1 font-sans text-xs">
                {termsSections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded py-1.5 text-muted-foreground transition-colors hover:text-foreground font-medium"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 rounded border border-border p-4">
                <div className="flex items-center gap-2 font-sans text-xs uppercase font-semibold text-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  <span>Delaware Jurisdiction</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground font-sans">
                  Regulated under SEC Regulation D safe harbors for institutional accredited
                  capital.
                </p>
              </div>
            </div>
          </aside>

          {/* Terms Text */}
          <div className="space-y-12">
            {termsSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-border/60 pb-12 last:border-b-0"
              >
                <h2 className="font-display text-xl uppercase tracking-tight text-foreground md:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-4 whitespace-pre-line text-base leading-relaxed text-foreground/80 md:text-lg font-sans">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default TermsPage;
