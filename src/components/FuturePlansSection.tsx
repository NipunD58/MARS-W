import { ArrowRight, Bot, Cpu, Gauge, Smartphone, Sparkles, Sun } from "lucide-react";

export function FuturePlansSection() {
  const plans = [
    {
      num: "01",
      title: "Add More Sensors",
      tag: "SENSOR SUITE EXPANSION",
      icon: Gauge,
      description:
        "Expanding beyond ambient and moisture telemetry to integrate direct soil NPK nutrient spectrometry, multispectral NDVI crop canopy reflectance sensors, and optical chlorophyll cameras for micro-nutrient tracking.",
      deliverables: [
        "Real-time Nitrogen, Phosphorus & Potassium (NPK) sensing",
        "Multispectral NDVI leaf canopy vigor assessment",
        "Micro-meteorological wind and solar radiation monitoring",
      ],
    },
    {
      num: "02",
      title: "Make All Processes Autonomous",
      tag: "END-TO-END AUTONOMY",
      icon: Bot,
      description:
        "Advancing from assisted single-task cycles to complete autonomous multi-acre farm workflows. Autonomous furrow tilling, precision seed bed preparation, continuous weeding, and robotic harvesting.",
      deliverables: [
        "Full autonomous row navigation with zero operator supervision",
        "End-to-end crop cycle from seed sowing to harvest gathering",
        "Multi-robot swarm coordination for contiguous smallholder lands",
      ],
    },
    {
      num: "03",
      title: "AI Suggestions to Physical Actions",
      tag: "CLOSED-LOOP PHYSICAL AI",
      icon: Sparkles,
      description:
        "Closing the loop between cloud machine learning recommendations and on-field robotic actuation. When AI identifies pest infestations or moisture deficits, MARS autonomously deploys precision micro-doses or mechanical weeder passes.",
      deliverables: [
        "Automated actuation dispatch without manual confirmation",
        "Precision spot-weeding with targeted mechanical blades",
        "Dynamic micro-watering adjustments matching live evapotranspiration",
      ],
    },
    {
      num: "04",
      title: "Solar Power & Mobile App Integration",
      tag: "OFF-GRID SUSTAINABILITY",
      icon: Sun,
      description:
        "Integrating high-efficiency photovoltaic solar roofs for infinite off-grid daytime running, paired with an intuitive voice-driven vernacular mobile app allowing Indian farmers to monitor their fields in Hindi, Punjabi, Marathi, Telugu, and Tamil.",
      deliverables: [
        "Solar self-charging battery bank for perpetual off-grid operation",
        "Multilingual voice-guided mobile interface for farmers",
        "Real-time WhatsApp & SMS agronomic alert gateway",
      ],
    },
  ];

  return (
    <section id="future" className="border-b border-border bg-background py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest font-semibold text-accent">
              DEVELOPMENT ROADMAP // PHASE 2
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Future Plans &amp; Next Horizons
            </h2>
          </div>
          <p className="max-w-md font-sans text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">
            Expanding sensor perception, achieving full end-to-end autonomy, and translating AI insights into physical field actions.
          </p>
        </div>

        {/* 4 Plans Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-foreground/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/80 pb-4 font-mono text-xs">
                    <span className="font-bold text-accent">{plan.num} //</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-sans">
                      {plan.tag}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-foreground">
                      {plan.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/80 pt-4">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-foreground block mb-2">
                    Key Objectives
                  </span>
                  <ul className="space-y-1.5 font-sans text-[11px] text-muted-foreground">
                    {plan.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-2xl text-foreground font-medium">
              Human-robot collaboration is the future of sustainable farming.
            </h4>
            <p className="font-sans text-xs sm:text-sm text-muted-foreground">
              By combining affordable hardware under ₹45,000 with autonomous intelligence, MARS turns smallholder farming into a viable, modern profession.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 font-sans text-xs uppercase tracking-wider font-bold text-background transition-colors hover:bg-foreground/90"
          >
            <span>Partner With MARS</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FuturePlansSection;
