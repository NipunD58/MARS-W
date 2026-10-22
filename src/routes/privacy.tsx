import { createFileRoute } from "@tanstack/react-router";
import { Shield, Clock, Lock } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seoHead({
      title: "Privacy Policy | MARS Capital",
      description:
        "Read how MARS Capital Management handles information submitted through its website and related communications.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

const sections = [
  {
    id: "overview",
    title: "1. Overview & Scope",
    content: `MARS Capital Management ("MARS," "we," "us," or "our") deploys private capital and operational robotics systems into legacy industries. This Privacy Policy outlines how we collect, process, disclose, and safeguard personal and institutional information gathered through our website (MARScapital.ai), investor portals, diligence rooms, and associated digital communications.`,
  },
  {
    id: "data-collection",
    title: "2. Information We Collect",
    subsections: [
      {
        subtitle: "Information You Provide Directly",
        text: "Contact inquiries, founder pitch decks, executive resumes, accredited investor status verifications, and information submitted through forms or email communications.",
      },
      {
        subtitle: "Technical & Telemetry Data",
        text: "Browser user-agent, IP address, referral headers, device diagnostics, session timing, and interaction telemetry collected to secure our digital properties and optimize load performance.",
      },
      {
        subtitle: "Due Diligence & Institutional Data",
        text: "Professional references, corporate registrations, capitalization tables, and regulatory compliance disclosures submitted during prospective transaction reviews.",
      },
    ],
  },
  {
    id: "use-of-info",
    title: "3. How We Use Information",
    content: `We process collected information under lawful bases including legitimate interests, contract preparation, legal compliance, and explicit consent:
• Evaluating investment opportunities and operational synergy with portfolio automation targets
• Communicating with prospective founders, syndicate partners, and institutional Limited Partners
• Performing identity verification, anti-money laundering (AML), and know-your-customer (KYC) diligence
• Protecting the security, uptime, and integrity of our digital infrastructure
• Complying with applicable securities regulations, statutory accounting mandates, and legal processes`,
  },
  {
    id: "disclosure",
    title: "4. Information Sharing & Disclosures",
    content: `MARS does not sell, lease, or monetize your personal information. We disclose information strictly in limited operational scenarios:
• Authorized Service Providers: Cloud infrastructure, secure vault hosting, identity screening vendors, and legal counsel bound by strict non-disclosure obligations.
• Transactional Entities: During syndication, co-investment diligence, or asset acquisitions, subject to customary mutual non-disclosure agreements.
• Legal Mandates: When required under subpoenas, court orders, SEC, FINRA, or state regulatory inquiries.`,
  },
  {
    id: "security",
    title: "5. Data Security & Storage",
    content: `We maintain defense-in-depth security standards commensurate with venture and private equity fund operations:
• Cryptographic protection: All data in transit is enforced via TLS 1.3; sensitive stored records are encrypted via AES-256.
• Access Control: Least-privilege role-based access controls, mandatory multi-factor authentication (MFA), and automated audit trails.
• Storage Location: Primary servers and cold encrypted archives are housed in SOC-2 Type II certified data centers within the United States.`,
  },
  {
    id: "rights",
    title: "6. Your Rights & Jurisdiction Choices",
    content: `Depending on your residency (including California under CCPA/CPRA, and the EEA/UK under GDPR), you may exercise statutory rights regarding your personal records:
• Right to Access & Data Portability: Request a copy of personal information we maintain about you.
• Right to Rectification & Deletion: Request correction of inaccurate information or deletion where retention is not required by securities law.
• Opt-Out of Direct Communications: Unsubscribe from investment updates or industry research dispatches at any time.`,
  },
  {
    id: "cookies",
    title: "7. Cookies & Analytics",
    content: `Our website utilizes essential technical cookies for session maintenance, security integrity, and anonymous aggregate traffic metrics. We do not employ third-party cross-site behavioral tracking or advertising pixel networks. You can adjust your browser settings to restrict cookies at any time.`,
  },
  {
    id: "contact",
    title: "8. Contact & Data Protection Officer",
    content: `For privacy inquiries, rights requests, or questions regarding our information stewardship:
MARS Capital Management — Legal & Compliance
Email: privacy@MARScapital.ai
Notice Response Window: We endeavor to address formal inquiries within 30 days of receipt.`,
  },
];

function PrivacyPage() {
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
              <Shield className="h-3.5 w-3.5 text-accent" />
              Governance & Compliance
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Effective Date: March 2026
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Privacy Policy & Data Stewardship
          </h1>

          <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
            How MARS Capital collects, secures, and handles corporate, diligence, and operational
            telemetry across physical automation investments.
          </p>
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
                {sections.map((s) => (
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
                  <Lock className="h-3.5 w-3.5 text-accent" />
                  <span>Encrypted Channel</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground font-sans">
                  Diligence rooms enforce AES-256 and zero-knowledge transmission.
                </p>
              </div>
            </div>
          </aside>

          {/* Policy Text */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-border/60 pb-12 last:border-b-0"
              >
                <h2 className="font-display text-xl uppercase tracking-tight text-foreground md:text-2xl">
                  {section.title}
                </h2>

                {section.content && (
                  <div className="mt-4 whitespace-pre-line text-base leading-relaxed text-foreground/80 md:text-lg font-sans">
                    {section.content}
                  </div>
                )}

                {section.subsections && (
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {section.subsections.map((sub) => (
                      <div
                        key={sub.subtitle}
                        className="rounded border border-border bg-card/40 p-5 backdrop-blur-xs"
                      >
                        <h3 className="font-sans text-xs uppercase tracking-wider font-semibold text-foreground">
                          {sub.subtitle}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-sans">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default PrivacyPage;
