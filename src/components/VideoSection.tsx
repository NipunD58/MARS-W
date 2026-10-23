import { useState } from "react";
import {
  Activity,
  Bot,
  CloudRain,
  Cpu,
  Droplets,
  ExternalLink,
  Flame,
  Layers,
  Play,
  RotateCcw,
  Sparkles,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";
import marsModules from "@/assets/mars-modules.jpg";
import marsIot from "@/assets/mars-iot.jpg";

export function VideoSection() {
  // Interactive IoT Simulator State
  const [moisture, setMoisture] = useState(48);
  const [isRaining, setIsRaining] = useState(false);
  const [ph, setPh] = useState(6.8);
  const [ammonia, setAmmonia] = useState(12);
  const [activeModule, setActiveModule] = useState<"sowing" | "ploughing" | "weeding" | "harvesting">("sowing");

  const isPumpActive = moisture < 35 && !isRaining;

  const resetSensors = () => {
    setMoisture(48);
    setIsRaining(false);
    setPh(6.8);
    setAmmonia(12);
  };

  return (
    <section id="video" className="border-b border-border bg-[#0d110e] text-[#f4f6f2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-[#f4f6f2]/20 pb-8 md:flex-row md:items-end md:justify-between">
          <div>

            <h2 className="mt-3 font-serif text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              On-Field Operations &amp; IoT Interface
            </h2>
          </div>
          <a
            href="https://youtu.be/dPXay5HAHqo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider font-semibold text-accent hover:underline underline-offset-4"
          >
            <span>Watch on YouTube</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Video & Interface Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Left: Video Player Embed & Details */}
          <div className="space-y-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#f4f6f2]/20 bg-black shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dPXay5HAHqo?rel=0&modestbranding=1"
                title="MARS Autonomous Agricultural Robot Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>

            {/* Field Module Explanatory Narrative from Prompt */}
            <div className="rounded-2xl border border-[#f4f6f2]/15 bg-[#141915] p-6 space-y-4">
              <div className="flex items-center gap-2 font-display text-xs uppercase tracking-wider text-accent font-semibold">
                <Bot className="h-4 w-4" />
                The Autonomous On-Field Work Module
              </div>

              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#f4f6f2]/85">
                This module does most of the on-field work, like <strong>sowing, ploughing, and weeding</strong> through the help of multiple modular detachable attachments as shown in the images. This functions autonomously and automatically across small and fragmented plots.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 font-sans text-xs text-[#f4f6f2]/75">
                <div className="rounded-lg border border-[#f4f6f2]/10 bg-black/30 p-3">
                  <span className="block font-semibold text-[#f4f6f2] mb-1">Autonomous Execution</span>
                  Navigates crop rows and handles fieldwork without requiring tractor drivers or physical strain.
                </div>
                <div className="rounded-lg border border-[#f4f6f2]/10 bg-black/30 p-3">
                  <span className="block font-semibold text-[#f4f6f2] mb-1">Future Expansion</span>
                  Future improvements include adding advanced navigation and support for additional harvesting modules.
                </div>
              </div>
            </div>

            {/* Modular Attachments Photo Strip */}
            <div className="relative overflow-hidden rounded-2xl border border-[#f4f6f2]/15">
              <img
                src={marsModules}
                alt="Detachable tool modules for MARS robot"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <p className="font-sans text-xs text-[#f4f6f2]/90">
                  <strong>Detachable Implement Bay:</strong> Seed drill, rotary weeding tool, micro-plough, and sensor probe modules.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Live IoT Interface & Telemetry Simulation */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#f4f6f2]/20 bg-[#141a15] p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-[#f4f6f2]/15 pb-4">
                <div>
                  <span className="font-display text-[11px] uppercase tracking-wider text-accent block">
                    TELEMETRY DASHBOARD
                  </span>
                  <h3 className="font-display text-lg uppercase tracking-tight text-white mt-1">
                    Live Field Sensor Stream
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent bg-accent/15 px-2 py-1 rounded">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  IOT ACTIVE
                </div>
              </div>

              <p className="font-sans text-xs text-[#f4f6f2]/75 leading-relaxed">
                The IoT interface shows the live statistics of the field on screen. It logs all data collected from the multi-sensor array and stores it in a file for AI to evaluate and suggest improvements.
              </p>

              {/* Live Gauges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-sans">
                {/* 1. DHT11 Temp */}
                <div className="rounded-xl border border-[#f4f6f2]/10 bg-black/40 p-3">
                  <div className="flex items-center justify-between text-muted-foreground text-[10px]">
                    <span className="uppercase tracking-wider">DHT11 Temp</span>
                    <Thermometer className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div className="mt-2 text-xl font-display font-bold text-white">28.4°C</div>
                  <span className="text-[10px] text-accent">Optimal Ambient</span>
                </div>

                {/* 2. DHT11 Humidity */}
                <div className="rounded-xl border border-[#f4f6f2]/10 bg-black/40 p-3">
                  <div className="flex items-center justify-between text-muted-foreground text-[10px]">
                    <span className="uppercase tracking-wider">DHT11 Humid</span>
                    <Wind className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div className="mt-2 text-xl font-display font-bold text-white">64%</div>
                  <span className="text-[10px] text-accent">Normal RH</span>
                </div>

                {/* 3. Capacitive Soil Moisture */}
                <div className={`rounded-xl border p-3 transition-colors ${moisture < 35
                    ? "border-destructive/60 bg-destructive/10"
                    : "border-[#f4f6f2]/10 bg-black/40"
                  }`}>
                  <div className="flex items-center justify-between text-muted-foreground text-[10px]">
                    <span className="uppercase tracking-wider">Moisture</span>
                    <Droplets className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div className="mt-2 text-xl font-display font-bold text-white">{moisture}%</div>
                  <span className={`text-[10px] font-semibold ${moisture < 35 ? "text-destructive" : "text-accent"}`}>
                    {moisture < 35 ? "Dry — Needs Water" : "Moist / Ideal"}
                  </span>
                </div>

                {/* 4. Analogue Soil pH */}
                <div className="rounded-xl border border-[#f4f6f2]/10 bg-black/40 p-3">
                  <div className="flex items-center justify-between text-muted-foreground text-[10px]">
                    <span className="uppercase tracking-wider">Soil pH</span>
                    <Activity className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div className="mt-2 text-xl font-display font-bold text-white">{ph}</div>
                  <span className="text-[10px] text-accent">Neutral / Arable</span>
                </div>

                {/* 5. Rain Sensor */}
                <div className={`rounded-xl border p-3 transition-colors ${isRaining
                    ? "border-accent bg-accent/15"
                    : "border-[#f4f6f2]/10 bg-black/40"
                  }`}>
                  <div className="flex items-center justify-between text-muted-foreground text-[10px]">
                    <span className="uppercase tracking-wider">Rain Droplets</span>
                    <CloudRain className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div className="mt-2 text-xl font-display font-bold text-white">
                    {isRaining ? "RAIN" : "CLEAR"}
                  </div>
                  <span className="text-[10px] text-accent">
                    {isRaining ? "Precipitation On" : "0.0 mm/hr"}
                  </span>
                </div>

                {/* 6. MQ137 Ammonia */}
                <div className="rounded-xl border border-[#f4f6f2]/10 bg-black/40 p-3">
                  <div className="flex items-center justify-between text-muted-foreground text-[10px]">
                    <span className="uppercase tracking-wider">MQ137 NH3</span>
                    <Flame className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div className="mt-2 text-xl font-display font-bold text-white">{ammonia} ppm</div>
                  <span className="text-[10px] text-accent">Safe Soil Threshold</span>
                </div>
              </div>

              {/* Pump & Closed-Loop Actuation Status */}
              <div className="rounded-xl border border-[#f4f6f2]/15 bg-black/50 p-4 font-sans text-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
                    CLOSED-LOOP IRRIGATION PUMP
                  </span>
                  <span className="font-semibold text-white mt-0.5 block">
                    {isPumpActive
                      ? "⚡ PUMP ENGAGED: Dispensing micro-irrigation"
                      : "IDLE: Soil moisture within target threshold"}
                  </span>
                </div>
                <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${isPumpActive
                    ? "bg-accent text-black animate-pulse"
                    : "bg-[#f4f6f2]/10 text-[#f4f6f2]/60"
                  }`}>
                  {isPumpActive ? "Pumping" : "Standby"}
                </span>
              </div>

              {/* AI Real-Time Suggestions Panel */}
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 font-sans text-xs space-y-2">
                <div className="flex items-center gap-1.5 text-accent font-semibold uppercase tracking-wider text-[10px]">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI Suggested Improvements
                </div>
                <p className="text-white/90 leading-relaxed">
                  {moisture < 35
                    ? "⚠️ Soil moisture below 35% threshold. Automatically triggering closed-loop micro-watering sequence to prevent crop stress."
                    : isRaining
                      ? "🌧️ Precipitation detected. Halting irrigation routines and activating furrow drainage tracking."
                      : "✅ Field telemetry stable. Soil pH 6.8 is optimal for nutrient uptake. No pest or weed anomalies detected in current row."}
                </p>
              </div>

              {/* Interactive Telemetry Test Controls */}
              <div className="border-t border-[#f4f6f2]/15 pt-4 space-y-3 font-sans text-xs">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block">
                  Interactive Simulator Controls
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setMoisture((prev) => (prev > 30 ? 24 : 52))}
                    className="rounded-lg border border-[#f4f6f2]/20 bg-black/40 px-3 py-1.5 text-white hover:border-accent transition-colors cursor-pointer text-xs"
                  >
                    Toggle Low Moisture ({moisture > 30 ? "Dry Out" : "Rehydrate"})
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsRaining((prev) => !prev)}
                    className="rounded-lg border border-[#f4f6f2]/20 bg-black/40 px-3 py-1.5 text-white hover:border-accent transition-colors cursor-pointer text-xs"
                  >
                    Toggle Rain ({isRaining ? "Stop Rain" : "Simulate Rain"})
                  </button>
                  <button
                    type="button"
                    onClick={resetSensors}
                    className="inline-flex items-center gap-1 rounded-lg border border-[#f4f6f2]/20 bg-black/40 px-3 py-1.5 text-muted-foreground hover:text-white transition-colors cursor-pointer text-xs"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Reset
                  </button>
                </div>
              </div>

              {/* Implement Switcher */}
              <div className="border-t border-[#f4f6f2]/15 pt-4 font-sans text-xs">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-2">
                  Current Detachable Module Active:
                </span>
                <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-semibold uppercase">
                  {(["sowing", "ploughing", "weeding", "harvesting"] as const).map((mod) => (
                    <button
                      key={mod}
                      type="button"
                      onClick={() => setActiveModule(mod)}
                      className={`rounded-lg py-2 border transition-all cursor-pointer ${activeModule === mod
                          ? "border-accent bg-accent text-black font-bold shadow-md"
                          : "border-[#f4f6f2]/15 bg-black/30 text-[#f4f6f2]/70 hover:border-[#f4f6f2]/40"
                        }`}
                    >
                      {mod}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
