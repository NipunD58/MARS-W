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
    id: "perception",
    tabLabel: "Spatial Perception",
    tag: "A01 // SENSORY MATRIX",
    title: "Spatial Perception",
    summary:
      "Multi-spectral 3D LiDAR and stereoscopic depth arrays generating 120 FPS sub-millimeter voxel meshes in harsh, high-dust industrial environments.",
    isAccent: false,
    metrics: [
      ["Frame Rate", "120 FPS"],
      ["Accuracy", "±0.4 mm"],
      ["Latency", "<6 ms"],
    ],
    brief: {
      overview:
        "The spatial perception layer synthesizes dual industrial stereo cameras with solid-state LiDAR. It classifies chaotic material streams in real time without requiring singulated conveyers or pristine lighting.",
      hardware: [
        "Photoneo MotionCam-3D stereoscopic imager",
        "Dual solid-state 905nm LiDAR arrays",
        "Active IR structured-light projectors",
      ],
      capabilities: [
        "Volumetric parcel & scrap mesh reconstruction",
        "Dynamic dust, occlusion, and glare filtering",
        "Semantic surface normals calculation for vacuum & pinch grasps",
      ],
      assurance:
        "Calibrated continuously via auto-aligning fiducials with zero operator intervention.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase font-semibold">
            A01 — POINT CLOUD
          </span>
          <span className="flex items-center gap-1 font-sans text-[10px] text-muted-foreground font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            120 HZ
          </span>
        </div>

        {/* Node Pipeline Diagram */}
        <div className="my-auto space-y-4 py-4">
          <div className="grid grid-cols-3 items-center gap-2 text-center font-sans text-[11px]">
            <div className="rounded border border-border bg-background/80 p-2 shadow-xs">
              <span className="text-[9px] text-muted-foreground block font-medium">STEP 01</span>
              <span className="font-semibold text-foreground">Dual Stereo</span>
            </div>
            <div className="flex items-center justify-center text-muted-foreground">
              <span className="h-px w-full bg-border" />
              <span className="px-1 text-[10px]">►</span>
              <span className="h-px w-full bg-border" />
            </div>
            <div className="rounded border border-border bg-background/80 p-2 shadow-xs">
              <span className="text-[9px] text-muted-foreground block font-medium">STEP 02</span>
              <span className="font-semibold text-foreground">Voxel Field</span>
            </div>
          </div>

          <div className="rounded border border-dashed border-border bg-muted/40 p-3">
            <div className="flex items-center justify-between font-sans text-[10px] text-muted-foreground">
              <span className="font-medium">VOXEL DENSITY</span>
              <span className="font-semibold text-foreground">2.4M pts/sec</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div className="h-full w-[84%] bg-foreground" />
            </div>
          </div>
        </div>

        <div className="border-t border-border/80 pt-3 flex items-center justify-between font-sans text-[11px] text-muted-foreground font-medium">
          <span>COORDINATE LOCK</span>
          <span className="text-foreground font-semibold">VALIDATED</span>
        </div>
      </div>
    ),
  },
  {
    id: "kinematics",
    tabLabel: "Trajectory Synthesis",
    tag: "A02 // MOTION KINEMATICS",
    title: "* Trajectory Synthesis",
    summary:
      "Dynamic 7-DOF inverse kinematics calculating collision-free velocity curves around human operators and variable payload geometries in real time.",
    isAccent: true,
    accentColor: "#AAE841",
    metrics: [
      ["DoF Control", "7-Axis"],
      ["Cycle Replan", "0.02 s"],
      ["Payload Range", "0.5 – 65 kg"],
    ],
    brief: {
      overview:
        "Rather than executing hardcoded teach-pendant waypoints, our kinematic synthesis engine generates fluid spline trajectories on the fly. It adapts dynamically to variable object weights, irregular center-of-mass offsets, and mobile facility personnel.",
      hardware: [
        "Direct-drive cycloidal gearboxes with dual absolute encoders",
        "EtherCAT real-time industrial fieldbus (1 kHz cycle time)",
        "Integrated motor toroid temperature telemetry",
      ],
      capabilities: [
        "Sub-20 millisecond non-linear obstacle avoidance",
        "Jerk-bounded S-curve acceleration profiling",
        "Adaptive momentum compensation for compliant gripping",
      ],
      assurance: "ISO 10218-1 & ISO 13849 Cat 4 certified speed and separation monitoring.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6 text-black">
        <div className="flex items-center justify-between border-b border-black/20 pb-3">
          <span className="font-sans text-[10px] tracking-wider uppercase font-semibold text-black/70">
            PART OF THE SYSTEM
          </span>
          <span className="font-sans text-[10px] font-bold">LIVE VECTOR</span>
        </div>

        {/* Dynamic Curved Wave Graphic */}
        <div className="my-auto py-3 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-serif leading-none">*</span>
            <span className="font-display text-2xl uppercase tracking-tight font-extrabold">
              Motion Synthesis
            </span>
          </div>

          <p className="text-xs font-sans text-black/85 leading-relaxed font-medium">
            Dynamic 7-DOF path optimization solving non-linear inverse kinematics under 20ms.
          </p>

          <div className="rounded-xl border border-black/20 bg-black/5 p-3 font-sans text-[11px]">
            <div className="flex justify-between items-center text-black/80">
              <span className="font-medium">ANGULAR DRIFT</span>
              <span className="font-bold">0.002° MAX</span>
            </div>
            <div className="mt-1 flex justify-between items-center text-black/80">
              <span className="font-medium">COLLISION RISK</span>
              <span className="font-bold text-black">0.000%</span>
            </div>
          </div>
        </div>

        <div className="border-t border-black/20 pt-3 flex items-center justify-between font-sans text-[11px] font-semibold">
          <span>CONTROL BUS</span>
          <span>ETHERCAT 1 KHZ</span>
        </div>
      </div>
    ),
  },
  {
    id: "tactile",
    tabLabel: "Tactile Haptics",
    tag: "A03 // FORCE TELEMETRY",
    title: "Tactile Telemetry",
    summary:
      "6-axis strain gauges and high-density piezoresistive fingertip arrays detecting micro-slip and material compliance at 1,000 Hz.",
    isAccent: false,
    metrics: [
      ["Sampling Rate", "1,000 Hz"],
      ["Sensitivity", "0.01 N"],
      ["Slip Latency", "<4 ms"],
    ],
    brief: {
      overview:
        "Physical automation in recycling and surgery requires continuous force awareness. The tactile telemetry layer provides closed-loop grip force modulation, ensuring fragile surgical tissues are not torn and slippery mixed containers do not drop.",
      hardware: [
        "6-axis wrist-mounted multi-component load cell",
        "Elastomer tactile skin with matrix piezoresistive nodes",
        "High-frequency analog frontend with onboard DSP",
      ],
      capabilities: [
        "Incipient micro-slip detection prior to catastrophic grasp loss",
        "Auto-calibrating crush threshold prevention",
        "Material compliance and hardness classification on touch",
      ],
      assurance: "Hardware-enforced torque and force caps preventing over-exertion.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase font-semibold">
            A03 — STRAIN MATRIX
          </span>
          <span className="font-sans text-[10px] text-muted-foreground font-medium">1,000 HZ</span>
        </div>

        {/* Visual Pressure Grid */}
        <div className="my-auto py-4 space-y-3">
          <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className={`h-8 rounded border flex items-center justify-center font-sans text-[10px] font-medium ${
                  idx === 2 || idx === 5
                    ? "border-accent bg-accent/20 text-foreground font-bold"
                    : "border-border bg-card/60 text-muted-foreground"
                }`}
              >
                {(0.12 + idx * 0.08).toFixed(2)}N
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center font-sans text-[10px] text-muted-foreground">
            <span className="font-medium">SURFACE COMPLIANCE</span>
            <span className="text-foreground font-semibold">ELASTIC CORRELATION</span>
          </div>
        </div>

        <div className="border-t border-border/80 pt-3 flex items-center justify-between font-sans text-[11px] text-muted-foreground font-medium">
          <span>SLIP ANGLE</span>
          <span className="text-foreground font-semibold">0.00° / SEC</span>
        </div>
      </div>
    ),
  },
  {
    id: "edge",
    tabLabel: "Edge Neural Engine",
    tag: "A04 // LOCAL INFERENCE",
    title: "Sub-5ms Edge VLA",
    summary:
      "Air-gapped on-premise vision-language-action neural weights executing on local silicon with zero cloud dependency or roundtrip jitter.",
    isAccent: false,
    metrics: [
      ["Inference Speed", "3.8 ms"],
      ["Compute Density", "285 TOPS"],
      ["Cloud Dependency", "0.0%"],
    ],
    brief: {
      overview:
        "Industrial plants cannot tolerate internet outages or cloud API latency. Our custom Edge Neural Engine runs quantized Vision-Language-Action (VLA) foundation models entirely inside the cell's vibration-hardened control cabinet.",
      hardware: [
        "Dual NVIDIA Jetson AGX Orin industrial modules",
        "ECC LPDDR5 high-bandwidth unified memory",
        "Optically isolated Gigabit Ethernet & CAN FD links",
      ],
      capabilities: [
        "Zero-shot classification of previously unseen packaging & fabrications",
        "Deterministic latency jitter bounded under 200 microseconds",
        "Automatic offline fallback without operational interruption",
      ],
      assurance: "Continuous local watchdog monitoring with automatic model state rollback.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase font-semibold">
            A04 — LOCAL SILICON
          </span>
          <span className="font-sans text-[10px] text-muted-foreground font-medium">
            AIR-GAPPED
          </span>
        </div>

        {/* Neural Quantization Visualizer */}
        <div className="my-auto py-4 space-y-3 font-sans text-xs">
          <div className="rounded border border-border bg-card/50 p-3">
            <div className="flex justify-between text-muted-foreground text-[10px] font-medium">
              <span>TENSOR INFERENCE</span>
              <span className="text-foreground font-bold">FP8 QUANTIZED</span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-border/60 pt-2 text-[11px]">
              <span className="text-muted-foreground font-medium">BATCH SIZE</span>
              <span className="text-foreground font-semibold">1 (REAL-TIME)</span>
            </div>
            <div className="mt-1 flex justify-between text-[11px]">
              <span className="text-muted-foreground font-medium">EXECUTION TIME</span>
              <span className="font-bold text-foreground">3.82 ms</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span className="font-medium">OFFLINE RESILIENCE</span>
            <span className="text-foreground font-semibold">100% AIR-GAPPED</span>
          </div>
        </div>

        <div className="border-t border-border/80 pt-3 flex items-center justify-between font-sans text-[11px] text-muted-foreground font-medium">
          <span>NETWORK DRIFT</span>
          <span className="text-foreground font-semibold">0.00 MS</span>
        </div>
      </div>
    ),
  },
  {
    id: "swarm",
    tabLabel: "Swarm Orchestrator",
    tag: "A05 // PEER COORDINATION",
    title: "Swarm Coordination",
    summary:
      "Distributed peer-to-peer ROS 2 mesh balancing sorting, transfer, and welding queues in real time across multi-robot workcells.",
    isAccent: false,
    metrics: [
      ["Topology", "P2P Mesh"],
      ["Sync Jitter", "<100 µs"],
      ["Single Failure", "0 Point"],
    ],
    brief: {
      overview:
        "Modern facilities employ multiple robotic arms working in tightly coupled tandem. The Swarm Orchestrator executes decentralized peer-to-peer task arbitration, ensuring work is balanced dynamically across cells without a centralized choke point.",
      hardware: [
        "IEEE 802.1AS Time-Sensitive Networking (TSN) switches",
        "Redundant gigabit ring topology",
        "Fast-DDS zero-copy shared memory transports",
      ],
      capabilities: [
        "Autonomous dynamic load re-allocation when an arm halts for maintenance",
        "Synchronized dual-arm heavy lifting and multi-point continuous welding",
        "Millisecond shared spatial occupancy map distribution",
      ],
      assurance: "Byzantine fault-tolerant consensus for critical trajectory handoffs.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase font-semibold">
            A05 — MESH TOPOLOGY
          </span>
          <span className="font-sans text-[10px] text-muted-foreground font-medium">
            DECENTRALIZED
          </span>
        </div>

        {/* Mesh Nodes Diagram */}
        <div className="my-auto py-4 space-y-3">
          <div className="grid grid-cols-3 gap-2 text-center font-sans text-[10px]">
            <div className="rounded border border-border bg-card/60 p-2">
              <span className="text-muted-foreground block text-[9px] font-medium">CELL-1</span>
              <span className="font-semibold text-foreground">Sortation</span>
            </div>
            <div className="rounded border border-accent bg-accent/10 p-2">
              <span className="text-accent block text-[9px] font-bold">DISPATCH</span>
              <span className="font-semibold text-foreground">P2P Sync</span>
            </div>
            <div className="rounded border border-border bg-card/60 p-2">
              <span className="text-muted-foreground block text-[9px] font-medium">CELL-2</span>
              <span className="font-semibold text-foreground">Welding</span>
            </div>
          </div>

          <div className="rounded border border-border bg-background p-2.5 font-sans text-[10px]">
            <div className="flex justify-between text-muted-foreground font-medium">
              <span>WORKLOAD EQUILIBRIUM</span>
              <span className="font-bold text-foreground">98.4%</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/80 pt-3 flex items-center justify-between font-sans text-[11px] text-muted-foreground font-medium">
          <span>FAILOVER LATENCY</span>
          <span className="text-foreground font-semibold">&lt;15 MS</span>
        </div>
      </div>
    ),
  },
  {
    id: "safety",
    tabLabel: "Deterministic Safety",
    tag: "A06 // HARD REAL-TIME",
    title: "Deterministic Safety",
    summary:
      "Hardware-isolated optical light curtains and sub-millisecond power interruption delivering certified safety envelope protection.",
    isAccent: false,
    metrics: [
      ["Certification", "SIL-3 / PLe"],
      ["Trip Response", "<3.2 ms"],
      ["Audit Trail", "100% Signed"],
    ],
    brief: {
      overview:
        "Safety is not software-optional; it is hard-wired. Dual-channel safety relays continuously monitor light curtains, laser scanners, and redundant joint encoders. Any unverified encroachment instantly de-energizes servo brakes through certified hardware interlocks.",
      hardware: [
        "Pilz PNOZ multi-channel safety controllers",
        "Safe Torque Off (STO) certified servo drives",
        "Type 4 safety laser area scanners with dual warning zones",
      ],
      capabilities: [
        "Sub-3.2 millisecond optical-to-brake trip response",
        "Deterministic hardware isolation independent of operating system",
        "Tamper-proof black box telemetry logger for safety audits",
      ],
      assurance:
        "Conforms to ISO 13849-1 Category 4, Performance Level e (PLe), and IEC 62061 SIL 3.",
    },
    renderGraphic: () => (
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase font-semibold">
            A06 — SAFETY CIRCUIT
          </span>
          <span className="font-sans text-[10px] text-muted-foreground font-medium">
            SIL-3 HARDWARE
          </span>
        </div>

        {/* Safety Gate Graphic */}
        <div className="my-auto py-4 space-y-3 font-sans text-xs">
          <div className="rounded border border-border bg-card/60 p-3">
            <div className="flex justify-between items-center text-[10px] font-medium">
              <span className="text-muted-foreground">OPTICAL CURTAINS</span>
              <span className="font-bold text-foreground">ACTIVE LOCKED</span>
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-muted-foreground border-t border-border/60 pt-2 font-medium">
              <span>STO STATUS</span>
              <span className="font-semibold text-foreground">ENERGIZED</span>
            </div>
            <div className="mt-1 flex justify-between text-[10px] text-muted-foreground font-medium">
              <span>DUAL REDUNDANCY</span>
              <span className="font-bold text-foreground">CH-A & CH-B OK</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] text-muted-foreground">
            <span className="font-medium">CERTIFICATION</span>
            <span className="text-foreground font-semibold">ISO 13849 CAT 4</span>
          </div>
        </div>

        <div className="border-t border-border/80 pt-3 flex items-center justify-between font-sans text-[11px] text-muted-foreground font-medium">
          <span>TRIP RESPONSE</span>
          <span className="text-foreground font-semibold">3.18 MS</span>
        </div>
      </div>
    ),
  },
];
