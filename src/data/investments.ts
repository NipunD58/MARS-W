import inv1 from "@/assets/inv-1.jpg";
import inv2 from "@/assets/inv-2.jpg";
import inv3 from "@/assets/inv-3.jpg";

export interface InvestmentItem {
  n: string;
  anchorId: string;
  name: string;
  tags: string[];
  img: string;
  body: string;
  stats: [string, string][];
}

export const investments: InvestmentItem[] = [
  {
    n: "01",
    anchorId: "inv-01",
    name: "Loop Sortation",
    tags: ["waste management", "robotics & AI"],
    img: inv1,
    body: "Vision-guided robotic pickers that recover more material from mixed recycling streams, running around the clock with live plant analytics.",
    stats: [
      ["recovery uplift", "31%"],
      ["manual picking cut", "48%"],
      ["line automated", "70%"],
    ],
  },
  {
    n: "02",
    anchorId: "inv-02",
    name: "Aesto Surgical",
    tags: ["healthcare", "deeptech"],
    img: inv2,
    body: "Compact multi-arm surgical systems bringing robotic precision to mid-sized hospitals at a fraction of today's cost.",
    stats: [
      ["procedure time", "-22%"],
      ["hospitals live", "14"],
      ["cost per unit", "-60%"],
    ],
  },
  {
    n: "03",
    anchorId: "inv-03",
    name: "Forgeline",
    tags: ["manufacturing", "automation"],
    img: inv3,
    body: "Self-programming welding cells that learn new parts from CAD in minutes, making automation viable for low-volume fabricators.",
    stats: [
      ["setup time", "-85%"],
      ["weld yield", "99.2%"],
      ["cells deployed", "120"],
    ],
  },
];
