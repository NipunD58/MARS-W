export interface AwardItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: "SDG Goals" | "Observations" | "Conclusions";
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
  "SDG Goals",
  "Observations",
  "Conclusions",
] as const;

export type AwardCategory = (typeof awardCategories)[number];

export const awardStats = [
  { value: "85%", label: "Marginal Farmers Targeted" },
  { value: "SDG 2 & 9", label: "UN Goal Alignment" },
  { value: "< ₹45k", label: "Accessible System Cost" },
  { value: "24/7", label: "Continuous Autonomous Run" },
];

export const awardsData: AwardItem[] = [
  {
    id: "sdg-02",
    year: "UN SDG",
    title: "SDG Goal 2: Zero Hunger & Food Security",
    organization: "United Nations Sustainable Development Goals",
    category: "SDG Goals",
    project: "Precision Yields & Post-Harvest Waste Reduction",
    citation:
      "MARS addresses food security and agricultural production issues related to SDG Goal 2: Zero Hunger by providing real-time data and analysis for precision farming, improving crop yields. Its weed management, pest detection, and crop monitoring enhance agricultural output, while automated harvesting and post-harvest management reduce losses and food waste.",
    impactMetric: {
      value: "SDG 02",
      label: "Zero Hunger Target",
    },
    badge: "UN SDG Alignment",
    isFeatured: true,
  },
  {
    id: "sdg-09",
    year: "UN SDG",
    title: "SDG Goal 9: Industry, Innovation, and Infrastructure",
    organization: "United Nations Sustainable Development Goals",
    category: "SDG Goals",
    project: "Rural AI, Robotics & Smart Agri-Infrastructure",
    citation:
      "MARS advances SDG Goal 9: Industry, Innovation, and Infrastructure in agriculture by integrating AI, robotics, and IoT. Its automation enhances efficiency, reduces costs, and reallocates human resources to skilled tasks, promoting sustainable agricultural infrastructure and smart farming. Additionally, MARS necessitates developing connectivity, data management systems, and reliable power supply, fostering industry growth and agricultural innovation.",
    impactMetric: {
      value: "SDG 09",
      label: "Smart Infrastructure",
    },
    badge: "Tech Infrastructure",
    isFeatured: true,
  },
  {
    id: "obs-efficiency",
    year: "OBS 01",
    title: "Increased Operational Efficiency & 24/7 Productivity",
    organization: "Field Deployment Observation",
    category: "Observations",
    project: "Autonomous Field Task Execution",
    citation:
      "MARS has been observed to autonomously perform tasks, reducing the amount of human labor and boosting overall farm productivity. Operating day and night, it addresses human fatigue and sleep-related constraints.",
    impactMetric: {
      value: "+65%",
      label: "Work Consistency",
    },
    badge: "Observed Uplift",
    isFeatured: true,
  },
  {
    id: "obs-labor-safety",
    year: "OBS 02",
    title: "Labor Savings & Chemical Exposure Protection",
    organization: "Field Deployment Observation",
    category: "Observations",
    project: "Farmer Health & Ergonomic Safeguards",
    citation:
      "Autonomous operation cuts labor costs and ensures work consistency. Furthermore, MARS enhances farmer safety by directly handling toxic fertilizers and agro-chemicals, protecting smallholders from severe occupational health hazards and field-related diseases.",
    impactMetric: {
      value: "100%",
      label: "Toxic Exposure Shield",
    },
    badge: "Farmer Wellbeing",
    isFeatured: true,
  },
  {
    id: "obs-precision",
    year: "OBS 03",
    title: "Precision Agriculture & Resource Optimization",
    organization: "Field Deployment Observation",
    category: "Observations",
    project: "Micro-dosing & Closed-Loop Actuation",
    citation:
      "Advanced multi-sensors optimize resource usage and reduce human error, significantly improving crop yields. Closed-loop capacitive watering applies water only where needed, conserving vital ground water reserves.",
    impactMetric: {
      value: "Up to 60%",
      label: "Water Conservation",
    },
    badge: "Precision Agronomy",
    isFeatured: true,
  },
  {
    id: "obs-ai-iot",
    year: "OBS 04",
    title: "Real-Time AI Integration & IoT Decision Engine",
    organization: "Field Deployment Observation",
    category: "Observations",
    project: "Multi-Sensor Ground Telemetry",
    citation:
      "MARS integrates AI and IoT, enabling real-time data collection and analysis from temperature, humidity, pH, ammonia, rain, and light sensors to make informed agronomic decisions, continuously optimizing agricultural practices.",
    impactMetric: {
      value: "6 Sensors",
      label: "Live Telemetry Suite",
    },
    badge: "Smart Farm IoT",
    isFeatured: true,
  },
  {
    id: "obs-smallholders",
    year: "OBS 05",
    title: "Multifunctional Support for 85% Smallholders",
    organization: "Field Deployment Observation",
    category: "Observations",
    project: "Affordable Tractor Alternative for Narrow Plots",
    citation:
      "For the 85% of small-scale farmers in India, MARS acts as a multifunctional, budget-friendly alternative to heavy tractors that cannot physically enter or economically justify operation in small, terraced fields. This multifunctionality makes it an invaluable tool for small farms, promoting sustainability and efficiency.",
    impactMetric: {
      value: "85%",
      label: "Indian Marginal Share",
    },
    badge: "Smallholder Priority",
    isFeatured: true,
  },
  {
    id: "concl-affordable-robotics",
    year: "CONCL 01",
    title: "Robotics Transforming Small-Scale Agriculture",
    organization: "Research Conclusion",
    category: "Conclusions",
    project: "Frugal Robotic Mechanization",
    citation:
      "MARS demonstrates how robotics can transform small-scale farming by making automation affordable (sub-₹45,000) and user-friendly, proving that advanced technology is not exclusive to large commercial mega-farms.",
    impactMetric: {
      value: "< ₹45k",
      label: "Cost Threshold",
    },
    badge: "Democratic Tech",
  },
  {
    id: "concl-bridging-gaps",
    year: "CONCL 02",
    title: "Bridging Food Security & Labor Shortages",
    organization: "Research Conclusion",
    category: "Conclusions",
    project: "Socio-Economic Impact Model",
    citation:
      "Its success highlights the potential for technology to bridge historical gaps in food security, rural labor shortages, and financial barriers, empowering farmers to transition from subsistence farming to industrialized smart production.",
    impactMetric: {
      value: "Bridged",
      label: "Labor & Financial Gaps",
    },
    badge: "Socio-Economic Impact",
  },
  {
    id: "concl-future-revolution",
    year: "CONCL 03",
    title: "Paving the Way for a Tech-Driven Revolution",
    organization: "Research Conclusion",
    category: "Conclusions",
    project: "Human-Robot Collaboration in Agriculture",
    citation:
      "Future expansions (solar power, mobile app integration, and action-driven AI) will further enhance its impact, showcasing human-robot collaboration's potential in farming and driving ongoing innovation towards a sustainable agricultural future.",
    impactMetric: {
      value: "Phase 2",
      label: "Solar & Full Autonomy",
    },
    badge: "Future Revolution",
  },
];
