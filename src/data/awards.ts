export interface AwardItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: "Robotics & Hardware" | "Industrial AI" | "Venture & Capital" | "Design & Safety";
  project: string;
  citation: string;
  impactMetric: {
    value: string;
    label: string;
  };
  badge: string;
  isFeatured?: boolean;
}

export const awardCategories = [
  "All",
  "Robotics & Hardware",
  "Industrial AI",
  "Venture & Capital",
  "Design & Safety",
] as const;

export type AwardCategory = (typeof awardCategories)[number];

export const awardsData: AwardItem[] = [
  {
    id: "ieee-2025",
    year: "2025",
    title: "IEEE Robotics & Automation Society Technology Innovation Award",
    organization: "IEEE Robotics & Automation Society (RAS)",
    category: "Robotics & Hardware",
    project: "Zero-Lag 7-DOF Kinematic Collision Trajectory Engine",
    citation:
      "Awarded for pioneering sub-20ms real-time inverse kinematics synthesis around human operators in high-throughput manufacturing cells without physical safety cages.",
    impactMetric: {
      value: "99.999%",
      label: "Collision-Free Uptime",
    },
    badge: "Winner // Gold Standard",
    isFeatured: true,
  },
  {
    id: "wef-2025",
    year: "2025",
    title: "World Economic Forum Global Lighthouse Network Pioneer",
    organization: "World Economic Forum & McKinsey",
    category: "Industrial AI",
    project: "Air-Gapped Edge VLA Swarm Orchestration",
    citation:
      "Selected as a fourth industrial revolution pioneer for transforming heavy legacy metal fabrication into a resilient, decentralized, self-optimizing robotic workcell.",
    impactMetric: {
      value: "+340%",
      label: "Throughput Efficiency",
    },
    badge: "Global Lighthouse 2025",
    isFeatured: true,
  },
  {
    id: "rd100-2024",
    year: "2024",
    title: "R&D 100 Award — Mechanical & Materials Engineering",
    organization: "R&D World Magazine",
    category: "Robotics & Hardware",
    project: "Multi-Frequency Piezoresistive Tactile Telemetry Skin",
    citation:
      "Honored as one of the 100 most technologically significant innovations of the year for closed-loop 1,000Hz slip prevention in mixed recycling automation.",
    impactMetric: {
      value: "0.01 N",
      label: "Force Resolution",
    },
    badge: "R&D 100 Winner",
    isFeatured: false,
  },
  {
    id: "automate-2024",
    year: "2024",
    title: "Automate Innovation Award — Premier Autonomous Systems",
    organization: "Association for Advancing Automation (A3)",
    category: "Robotics & Hardware",
    project: "MARS Autonomous Heavy Sortation & Billet Core",
    citation:
      "Recognized as the premier industrial automation breakthrough for end-to-end autonomous picking and heavy manipulation under extreme dust and thermal variance.",
    impactMetric: {
      value: "2,000+",
      label: "Robotic Cells Deployed",
    },
    badge: "Best in Show",
    isFeatured: true,
  },
  {
    id: "reddot-2024",
    year: "2024",
    title: "Red Dot Design Award: Best of the Best",
    organization: "Design Zentrum Nordrhein Westfalen",
    category: "Design & Safety",
    project: "Integrated Industrial HMI & Collaborative Optical Curtains",
    citation:
      "Celebrated for extraordinary human-robot collaborative ergonomics, intuitive visual status light integration, and uncompromised industrial durability.",
    impactMetric: {
      value: "SIL-3 / PLe",
      label: "Safety Envelope Rating",
    },
    badge: "Best of the Best",
    isFeatured: false,
  },
  {
    id: "ft-sifted-2023",
    year: "2023",
    title: "Financial Times / Sifted Top Deeptech Venture Portfolio",
    organization: "Financial Times & Sifted",
    category: "Venture & Capital",
    project: "MARS Robotics Capital Fund I",
    citation:
      "Top-ranked physical automation capital platform bridging private equity operational discipline with deeptech venture upside across legacy supply chains.",
    impactMetric: {
      value: "$140M",
      label: "Deployed Capital",
    },
    badge: "Rank #1 Deeptech Fund",
    isFeatured: true,
  },
  {
    id: "fastcompany-2023",
    year: "2023",
    title: "Fast Company World Changing Ideas Award: Industrial Resilience",
    organization: "Fast Company",
    category: "Industrial AI",
    project: "Vision-Language-Action On-Premise Industrial Foundation Model",
    citation:
      "Acknowledged for eliminating critical supply chain bottlenecks by enabling zero-shot robotic sorting of unsegregated post-consumer recycling materials.",
    impactMetric: {
      value: "94.8%",
      label: "Material Purity Rate",
    },
    badge: "World Changing Idea",
    isFeatured: false,
  },
  {
    id: "sric-2023",
    year: "2023",
    title: "Surgical Robotics Industry Council Breakthrough Milestone",
    organization: "SRIC International",
    category: "Design & Safety",
    project: "Sub-Millimeter Compliant Actuator Suite for Laparoscopy",
    citation:
      "Distinguished for achieving ultra-low backlash motion transfer and tactile tissue boundary detection in minimally invasive surgical procedures.",
    impactMetric: {
      value: "±0.05 mm",
      label: "Position Repeatability",
    },
    badge: "Clinical Milestone",
    isFeatured: false,
  },
];

export const awardStats = [
  { value: "18", label: "International Honors", detail: "Global Industry Standards" },
  { value: "42+", label: "Patents Granted & Filed", detail: "Kinematics & Edge VLA" },
  { value: "2,000+", label: "Active Cells Deployed", detail: "North America & EU" },
  { value: "$140M", label: "Robotics Capital", detail: "PE Discipline & VC Upside" },
];
