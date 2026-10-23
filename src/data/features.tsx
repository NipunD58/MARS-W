import type { ReactNode } from "react";

export interface FeatureLayer {
  id: string;
  tabLabel: string;
  tag: string;
  title: string;
  summary: string;
  isAccent?: boolean;
  accentColor?: string;
  metrics: [string, string][];
  brief: {
    overview: string;
    hardware: string[];
    capabilities: string[];
    assurance: string;
  };
  renderGraphic: () => ReactNode;
}

export const featureLayers: FeatureLayer[] = [
  {
    id: "robotic-platform",
    tabLabel: "1. Robotic Platform",
    tag: "METHOD 01 // 4x4 HIGH-CLEARANCE CHASSIS",
    title: "Robotic Platform & Modular Chassis",
    summary:
      "Built with ESP32 microcontroller, high-torque motor drivers, and a 4x4 high ground clearance chassis engineered for muddy, unpaved, and terraced smallholder fields.",
    isAccent: false,
    metrics: [
      ["Core Controller", "ESP32 Dual-Core"],
      ["Drivetrain", "4x4 High-Clearance"],
      ["Implement Mounting", "Detachable Bay"],
    ],
    brief: {
      overview:
        "Engineered for rugged agricultural terrains where conventional tractors cannot operate. The base rover houses the ESP32 microcontroller, dual H-bridge motor drivers, regulated power distribution, and quick-connect mechanical tool mounts for interchangeable farm implements.",
      hardware: [
        "ESP32 32-bit dual-core microcontroller (240 MHz) with Wi-Fi & BLE",
        "High-torque DC geared motors with BTS7960/L298N high-current drivers",
        "Rugged 4x4 high ground clearance chassis with deep agricultural chevron tread",
        "Universal quick-release tool bay for sowing, weeding, ploughing, and harvesting",
      ],
      capabilities: [
        "All-terrain field mobility over muddy, furrowed, and terraced plots",
        "Modular quick-swapping between seed drill, rotary weeder, and micro-plough",
        "Low ground pressure preventing soil compaction compared to heavy tractors",
        "Continuous on-field task execution with high mechanical torque",
      ],
      assurance:
        "Water-resistant IP65 electronic enclosure designed for harsh dust, humidity, and mud conditions.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase font-semibold">
            METHOD 01 — 4x4 CHASSIS
          </span>
          <span className="flex items-center gap-1 font-sans text-[10px] text-muted-foreground font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            ESP32 ACTIVE
          </span>
        </div>

        <div className="my-auto space-y-4 py-3">
          <div className="grid grid-cols-2 gap-2 text-center font-sans text-[11px]">
            <div className="rounded border border-border bg-background/80 p-2.5 shadow-xs">
              <span className="text-[9px] text-muted-foreground block font-medium">DRIVETRAIN</span>
              <span className="font-semibold text-foreground">4x4 High Clearance</span>
            </div>
            <div className="rounded border border-border bg-background/80 p-2.5 shadow-xs">
              <span className="text-[9px] text-muted-foreground block font-medium">MCU ARCHITECTURE</span>
              <span className="font-semibold text-foreground">ESP32 240MHz</span>
            </div>
          </div>

          <div className="rounded border border-dashed border-border bg-muted/40 p-3 font-sans">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span className="font-medium">DETACHABLE IMPLEMENTS</span>
              <span className="font-semibold text-foreground">4 INTERCHANGEABLE</span>
            </div>
            <div className="mt-2 grid grid-cols-4 gap-1 text-center text-[9px] font-medium text-foreground">
              <span className="rounded bg-background py-1 border border-border">SOWING</span>
              <span className="rounded bg-background py-1 border border-border">PLOUGH</span>
              <span className="rounded bg-background py-1 border border-border">WEED</span>
              <span className="rounded bg-background py-1 border border-border">HARVEST</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/80 pt-3 flex items-center justify-between font-sans text-[11px] text-muted-foreground font-medium">
          <span>MANEUVERABILITY</span>
          <span className="text-foreground font-semibold">SUB-5 ACRE READY</span>
        </div>
      </div>
    ),
  },
  {
    id: "automation-features",
    tabLabel: "2. Automation",
    tag: "METHOD 02 // AUTONOMOUS TASKS & NAVIGATION",
    title: "* Autonomous Navigation & Operations",
    summary:
      "Autonomous obstacle avoidance and path planning using ultrasonic distance sensors, driving hands-free sowing, harvesting, ploughing, and closed-loop soil moisture irrigation.",
    isAccent: true,
    accentColor: "#AAE841",
    metrics: [
      ["Obstacle Sensing", "Ultrasonic Echo"],
      ["Autonomous Tasks", "Sow / Weed / Plough / Harvest"],
      ["Irrigation Logic", "Moisture Closed-Loop"],
    ],
    brief: {
      overview:
        "Replaces grueling manual fieldwork with automated routines. Ultrasonic distance sensors continuously scan for crop row edges, boundary walls, and obstacles, allowing MARS to execute autonomous turnarounds. Closed-loop pump controllers dispense water only when capacitive moisture drops below calibrated thresholds.",
      hardware: [
        "Multi-angle HC-SR04 ultrasonic sonar transducers",
        "Relay-switched 12V DC precision irrigation micro-pump",
        "Stepper-actuated precision seed metering hopper",
        "Autonomous boundary turnaround algorithm running locally on ESP32",
      ],
      capabilities: [
        "Autonomous row-following and real-time obstacle avoidance",
        "Automated sowing, mechanical weeding, micro-ploughing, and harvesting",
        "Closed-loop precision irrigation conserving up to 60% water",
        "24/7 continuous operation free from human fatigue and sleep limitations",
      ],
      assurance:
        "Instant emergency stop trigger when ultrasonic obstacles are detected within 25 cm.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6 text-black">
        <div className="flex items-center justify-between border-b border-black/20 pb-3">
          <span className="font-sans text-[10px] tracking-wider uppercase font-semibold text-black/70">
            METHOD 02 // AUTONOMOUS WORKFLOW
          </span>
          <span className="font-sans text-[10px] font-bold">RADAR LOCK</span>
        </div>

        <div className="my-auto py-3 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-serif leading-none">*</span>
            <span className="font-display text-xl uppercase tracking-tight font-extrabold">
              Ultrasonic Guidance
            </span>
          </div>

          <p className="text-xs font-sans text-black/85 leading-relaxed font-medium">
            Multi-directional ultrasonic sonar radar detects crop boundaries and obstacles in real time.
          </p>

          <div className="rounded-xl border border-black/20 bg-black/5 p-3 font-sans text-[11px] space-y-2">
            <div className="flex justify-between font-semibold">
              <span>OBSTACLE CLEARANCE</span>
              <span>180 cm [SAFE]</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/20">
              <div className="h-full w-[85%] bg-black" />
            </div>
            <div className="flex justify-between text-[10px] text-black/70">
              <span>CLOSED-LOOP WATER PUMP</span>
              <span className="font-bold text-black">ACTIVE FLOW</span>
            </div>
          </div>
        </div>

        <div className="border-t border-black/20 pt-3 flex items-center justify-between font-sans text-[11px] font-medium text-black/70">
          <span>TASK STATE</span>
          <span className="text-black font-bold">AUTONOMOUS SOWING</span>
        </div>
      </div>
    ),
  },
  {
    id: "ai-iot-integration",
    tabLabel: "3. AI & IoT",
    tag: "METHOD 03 // CLOUD AI & TELEMETRY",
    title: "AI & IoT Cloud Intelligence",
    summary:
      "Seamless cloud connectivity streaming field telemetry to AI models that optimize growing conditions for peak yield and detect weeds, pests, and infected crops in real time.",
    isAccent: false,
    metrics: [
      ["Cloud Sync", "Real-Time DB"],
      ["Yield Optimization", "AI Agronomy Engine"],
      ["Diagnostics", "Pest & Infection Vision"],
    ],
    brief: {
      overview:
        "Transforms traditional farming into intelligent precision agriculture. Real-time sensor logs are synchronized with cloud AI models to predict yield potential, optimize fertilizer and irrigation timing, and diagnose plant health issues.",
      hardware: [
        "ESP32 Wi-Fi & cellular telemetry gateway",
        "Cloud database synchronization pipeline",
        "Edge vision processor for crop leaves and pest inspection",
        "Responsive web & mobile dashboard for farmer access",
      ],
      capabilities: [
        "Dynamic yield optimization based on micro-climate telemetry patterns",
        "Early pest detection before infestation spreads across the farm",
        "Invasive weed identification and mechanical eradication flagging",
        "Automated farmer alerts with actionable agrochemical micro-dosing advice",
      ],
      assurance:
        "Local flash caching ensures zero data loss during rural cellular connectivity dips.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase font-semibold">
            METHOD 03 — CLOUD AI INFERENCE
          </span>
          <span className="flex items-center gap-1 font-sans text-[10px] text-accent font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
            AI CONNECTED
          </span>
        </div>

        <div className="my-auto space-y-3 py-3 font-sans text-[11px]">
          <div className="rounded border border-border bg-background/80 p-3 shadow-xs">
            <div className="flex justify-between text-muted-foreground text-[10px]">
              <span>PEST & INFECTION SCAN</span>
              <span className="text-accent font-semibold">98.2% CONFIDENCE</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-semibold text-foreground">Fall Armyworm Detection</span>
              <span className="text-[10px] rounded bg-destructive/15 text-destructive px-1.5 py-0.5 font-bold">
                FLAGGED
              </span>
            </div>
          </div>

          <div className="rounded border border-border bg-background/80 p-3 shadow-xs">
            <div className="flex justify-between text-muted-foreground text-[10px]">
              <span>AI CROP ADVISORY</span>
              <span className="text-foreground font-semibold">OPTIMIZED</span>
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground leading-relaxed">
              &quot;Increase soil potassium; soil moisture at 48% optimal for vegetative growth.&quot;
            </p>
          </div>
        </div>

        <div className="border-t border-border/80 pt-3 flex items-center justify-between font-sans text-[11px] text-muted-foreground font-medium">
          <span>YIELD PREDICTION</span>
          <span className="text-foreground font-semibold">+31% EXPECTED UPLIFT</span>
        </div>
      </div>
    ),
  },
  {
    id: "affordable-design",
    tabLabel: "4. Affordable Design",
    tag: "METHOD 04 // FRUGAL ACCESSIBILITY",
    title: "Sub-₹45,000 Frugal Engineering",
    summary:
      "Engineered from low-cost, readily available industrial components keeping total system cost under ₹45,000 ($540), with cooperative sharing and leasing options for marginal farmers.",
    isAccent: false,
    metrics: [
      ["Hardware Cost", "< ₹45,000"],
      ["Tractor Ratio", "1 / 18th Cost"],
      ["Ownership", "Purchase / Lease / Co-op"],
    ],
    brief: {
      overview:
        "Tractors cost ₹8,00,000 or more, pricing out 80% of Indian farmers who hold under 5 acres. MARS leverages accessible consumer electronics and modular fabrication to achieve a complete production cost under ₹45,000, bringing robotic mechanization within universal reach.",
      hardware: [
        "Open-source modular electronics easily sourced and replaced in rural markets",
        "Off-the-shelf high torque geared DC motors and chassis steel",
        "Swappable 12V high-capacity rechargeable battery bank",
        "Universal mechanical tool mounting brackets",
      ],
      capabilities: [
        "Accessible to smallholders via village cooperative ownership models",
        "Pay-per-use seasonal leasing options for marginal farmers",
        "Drastically lowers capital barrier to entry for modern agricultural tools",
        "Rapid payback period estimated under one full cropping cycle",
      ],
      assurance:
        "Simple mechanical layout allows straightforward maintenance by local rural mechanics.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase font-semibold">
            METHOD 04 — AFFORDABILITY
          </span>
          <span className="font-sans text-[10px] font-bold text-foreground">
            COST BENCHMARK
          </span>
        </div>

        <div className="my-auto space-y-3 py-3 font-sans text-[11px]">
          <div className="rounded border border-border bg-background/80 p-3 shadow-xs">
            <div className="flex justify-between text-muted-foreground text-[10px]">
              <span>CONVENTIONAL TRACTOR</span>
              <span className="text-destructive font-bold">₹8,00,000+</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-border">
              <div className="h-full w-full bg-destructive/60" />
            </div>
          </div>

          <div className="rounded border border-accent/40 bg-accent/10 p-3 shadow-xs">
            <div className="flex justify-between text-foreground text-[10px] font-bold">
              <span>MARS ROBOTIC SYSTEM</span>
              <span className="text-accent-foreground font-extrabold text-sm">&lt; ₹45,000</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-accent/30">
              <div className="h-full w-[6%] bg-accent" />
            </div>
          </div>

          <p className="text-[10px] text-muted-foreground text-center font-medium">
            94% more affordable than a standard 35 HP tractor.
          </p>
        </div>

        <div className="border-t border-border/80 pt-3 flex items-center justify-between font-sans text-[11px] text-muted-foreground font-medium">
          <span>COOPERATIVE LEASING</span>
          <span className="text-foreground font-semibold">₹150 / ACRE / RUN</span>
        </div>
      </div>
    ),
  },
  {
    id: "data-collection",
    tabLabel: "5. Data Collection",
    tag: "METHOD 05 // MULTI-SENSOR MATRIX",
    title: "Multi-Sensor Environmental Telemetry",
    summary:
      "Comprehensive sensor array collecting temperature & humidity (DHT11), capacitive soil moisture, rain detection, analogue soil pH, light intensity (LDR), and ammonia (MQ137).",
    isAccent: false,
    metrics: [
      ["Telemetry Points", "6 Live Sensors"],
      ["Sensors Active", "DHT11, pH, MQ137, LDR, Rain, Moisture"],
      ["Data Output", "Live Web Dashboard & DB"],
    ],
    brief: {
      overview:
        "Provides unprecedented environmental visibility. Telemetry is logged to a central database, giving farmers real-time dashboard analytics and feeding AI models the exact agronomic indicators needed to suggest precision interventions.",
      hardware: [
        "DHT11 precision Temperature & Relative Humidity sensor",
        "Capacitive corrosion-resistant soil moisture probe",
        "Rain detection precipitation sensor board",
        "Analogue soil pH sensor with ground-spike electrode",
        "Photoresistor (LDR) light sensor for solar radiation tracking",
        "MQ137 sensitive Ammonia (NH3) gas sensor for organic matter detection",
      ],
      capabilities: [
        "Real-time soil moisture monitoring driving closed-loop micro-irrigation",
        "Continuous soil pH telemetry ensuring optimal nutrient uptake",
        "Early ammonia detection monitoring fertilizer breakdown and soil degradation",
        "Live sync to cloud database for continuous AI crop trend evaluation",
      ],
      assurance:
        "Pre-calibrated industrial probes delivering consistent telemetry in all soil compositions.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase font-semibold">
            METHOD 05 — 6-SENSOR MATRIX
          </span>
          <span className="flex items-center gap-1 font-sans text-[10px] text-foreground font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            TELEMETRY LIVE
          </span>
        </div>

        <div className="my-auto grid grid-cols-3 gap-2 py-2 font-sans text-[10px]">
          <div className="rounded border border-border bg-background/80 p-2 text-center">
            <span className="text-[8px] text-muted-foreground block font-medium">DHT11 TEMP</span>
            <span className="font-bold text-foreground">28.4°C</span>
          </div>
          <div className="rounded border border-border bg-background/80 p-2 text-center">
            <span className="text-[8px] text-muted-foreground block font-medium">DHT11 HUMID</span>
            <span className="font-bold text-foreground">64% RH</span>
          </div>
          <div className="rounded border border-border bg-background/80 p-2 text-center">
            <span className="text-[8px] text-muted-foreground block font-medium">MOISTURE</span>
            <span className="font-bold text-foreground">48%</span>
          </div>
          <div className="rounded border border-border bg-background/80 p-2 text-center">
            <span className="text-[8px] text-muted-foreground block font-medium">SOIL pH</span>
            <span className="font-bold text-foreground">6.8</span>
          </div>
          <div className="rounded border border-border bg-background/80 p-2 text-center">
            <span className="text-[8px] text-muted-foreground block font-medium">MQ137 NH3</span>
            <span className="font-bold text-foreground">12 ppm</span>
          </div>
          <div className="rounded border border-border bg-background/80 p-2 text-center">
            <span className="text-[8px] text-muted-foreground block font-medium">RAIN SENSOR</span>
            <span className="font-bold text-foreground">0.0 mm</span>
          </div>
        </div>

        <div className="border-t border-border/80 pt-3 flex items-center justify-between font-sans text-[11px] text-muted-foreground font-medium">
          <span>DATABASE LOGGING</span>
          <span className="text-foreground font-semibold">SYNCED TO DASHBOARD</span>
        </div>
      </div>
    ),
  },
];
