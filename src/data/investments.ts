import marsField from "@/assets/mars-field.jpg";
import marsModules from "@/assets/mars-modules.jpg";
import marsSensors from "@/assets/mars-sensors.jpg";
import marsIot from "@/assets/mars-iot.jpg";
import marsFarmer from "@/assets/mars-farmer.jpg";

export interface InvestmentItem {
  n: string;
  anchorId: string;
  name: string;
  tags: string[];
  img: string;
  challenge: string;
  solution: string;
  body: string;
  stats: [string, string][];
}

export const investments: InvestmentItem[] = [
  {
    n: "01",
    anchorId: "challenge-01",
    name: "Intensive Labor Dependence",
    tags: ["Manual Labor", "Labor Shortages", "Ergonomics"],
    img: marsField,
    challenge:
      "Small-scale farmers rely heavily on manual labor, leading to severe physical strain and inefficiency. Labor shortages caused by rural-to-urban migration exacerbate this crisis.",
    solution:
      "Automates labor-intensive tasks like planting, weeding, and harvesting. Eliminates physical exhaustion and resolves rural labor scarcity with 24/7 autonomous capability.",
    body:
      "Smallholders spend grueling hours in manual fieldwork. MARS executes planting, weeding, and harvesting autonomously, easing physical strain and shielding farmers from hazardous fieldwork.",
    stats: [
      ["manual labor cut", "Up to 70%"],
      ["operational mode", "Autonomous"],
      ["fatigue factor", "Zero"],
    ],
  },
  {
    n: "02",
    anchorId: "challenge-02",
    name: "Lack of Modern Tools & Machinery",
    tags: ["Tractor Cost Barrier", "Fragmented Land", "Frugal Tech"],
    img: marsModules,
    challenge:
      "High costs and financial constraints limit access to modern machinery like tractors and harvesters. Small and fragmented land holdings further deter investment in bulky machinery.",
    solution:
      "Delivers a sub-₹45,000 modular robotic rover with a 4x4 high-clearance chassis engineered specifically for narrow, terraced, and fragmented plots where tractors cannot fit.",
    body:
      "Over 80% of Indian farmers cannot afford ₹8L+ tractors or operate them in small, irregular plots. MARS provides a modular, low-cost robotic platform equipped with interchangeable farming implements.",
    stats: [
      ["system unit cost", "< ₹45,000"],
      ["tractor price ratio", "1 / 18th"],
      ["chassis mobility", "4x4 High-Clear"],
    ],
  },
  {
    n: "03",
    anchorId: "challenge-03",
    name: "Severe Production & Crop Losses",
    tags: ["Pest Management", "Precision Water", "Crop Health"],
    img: marsSensors,
    challenge:
      "Farmers are constantly vulnerable to pests, diseases, and unpredictable weather, causing massive crop losses. Inadequate irrigation and fertilizer misuse compound damage.",
    solution:
      "Deploys closed-loop precision agriculture with real-time soil moisture-driven micro-watering and AI pest detection to eliminate waste and prevent crop disease outbreaks early.",
    body:
      "Unpredictable weather and undetected infestations destroy marginal harvests. MARS uses precision multi-sensors and AI to detect pests early and deliver micro-targeted water and agro-chemicals.",
    stats: [
      ["loss reduction", "Up to 35%"],
      ["chemical efficiency", "+45%"],
      ["water conservation", "Up to 60%"],
    ],
  },
  {
    n: "04",
    anchorId: "challenge-04",
    name: "Agricultural Information Void",
    tags: ["IoT Telemetry", "AI Agronomy", "Digital Extension"],
    img: marsIot,
    challenge:
      "Inadequate agricultural extension services and the digital divide prevent smallholders from accessing vital information on agronomic best practices, weather, and market trends.",
    solution:
      "Integrates with cloud platforms for real-time sensor data logging. AI algorithms analyze micro-climate metrics to advise farmers on optimal sowing, watering, and soil management.",
    body:
      "Extension agents rarely reach remote marginal farms. MARS streams 6 live sensor telemetry parameters to cloud AI models, translating raw environmental metrics into straightforward farmer advice.",
    stats: [
      ["monitored telemetry", "6 Sensors"],
      ["agronomic advice", "AI-Powered"],
      ["decision latency", "Instant"],
    ],
  },
  {
    n: "05",
    anchorId: "challenge-05",
    name: "Financial Constraints & Debt Burden",
    tags: ["Cooperative Leasing", "Farmer Revenue", "Financial Inclusion"],
    img: marsFarmer,
    challenge:
      "Access to affordable credit is limited, leaving farmers vulnerable to high loan interest rates. Crop insurance schemes are poorly implemented, risking severe debt cycles.",
    solution:
      "Improves farm productivity, increases crop yields, and is accessible through community cooperative sharing and pay-per-use leasing—unlocking free time for farmers to earn secondary income.",
    body:
      "By drastically lowering input costs, preventing crop failure, and operating under cooperative or leasing models, MARS transforms farm economics and provides a bridge toward financial resilience.",
    stats: [
      ["yield increase", "+25% to 35%"],
      ["acquisition model", "Lease / Co-op"],
      ["marginal reach", "80%+ Farms"],
    ],
  },
];
