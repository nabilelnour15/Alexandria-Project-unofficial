import type { FactId } from "./facts";
import type { ImageCredit } from "./imageCredit";

// Optional `factId` fields point at an entry in ./facts so the UI can show a source chip.
export interface HeroStat {
  readonly label: string;
  readonly value: string;
  readonly factId?: FactId;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly subCategory?: string;
  readonly status:
    | "Completed"
    | "Operational"
    | "Under Construction"
    | "Pipeline"
    | "Early Implementation"
    | "Under Development"
    | "Planning"
    | "Detailed Study Required";
  readonly budget: string;
  readonly year: string;
  readonly description: string;
  readonly technicalSpecs: Readonly<Record<string, string>>;
  readonly financialFramework: readonly {
    readonly source: string;
    readonly amount: string;
    readonly instrument?: string;
  }[];
  readonly vision2030Pillars: readonly string[];
  readonly stakeholders?: readonly {
    readonly level: string;
    readonly entity: string;
    readonly role?: string;
  }[];
  readonly imagePlaceholder: string;
  readonly image?: string;
  /** Photo credit for `image`, shown under it. */
  readonly credit?: ImageCredit;
  /** True when `image` is an AI-generated concept illustration (shows a label on the card). */
  readonly isConcept?: boolean;
  readonly quote?: string;
  /** Fact behind `budget`, if any. */
  readonly factId?: FactId;
  /** Facts behind individual `technicalSpecs` entries, keyed by spec name. */
  readonly specFactIds?: Readonly<Record<string, FactId>>;
}

// `status` values are identifiers (ProjectCard styles key on them; facts.projectsUnderConstruction
// counts them). Show these sentence-case labels instead.
export const statusLabels: Readonly<Record<Project["status"], string>> = {
  Completed: "Completed",
  Operational: "Operational",
  "Under Construction": "Under construction",
  Pipeline: "Pipeline",
  "Early Implementation": "Early implementation",
  "Under Development": "Under development",
  Planning: "Planning",
  "Detailed Study Required": "Detailed study required",
};

export const projectsData = {
  hero: {
    title: "Transport, energy and water projects in Alexandria",
    subtitle:
      "What is planned or being built, who is paying for it, and how far each project has got.",
    // Sum of listed budgets: 592 + 1,764 + 20 + 30 + 33 + 50 + 35 = €2,524M (see facts.projectsTotal).
    // GCAP: 20 + 64.6 + 60 + 35 = €179.6M across the listed pipeline items.
    stats: [
      { label: "Listed project budgets", value: "≈€2.5B", factId: "projectsTotal" },
      { label: "Coordination", value: "4 MDBs" },
      { label: "Under construction", value: "4 projects", factId: "projectsUnderConstruction" },
      { label: "GCAP listed pipeline items", value: "≈€180M" },
    ] as readonly HeroStat[],
    summary:
      "The projects listed here add up to ≈€2.5B in listed project budgets, dominated by two flagship rail projects—the €592 million Raml Tram Modernization and the €1.764 billion Abu Qir Metro Phase 1. Four of the listed projects are under construction. Both rail projects are aligned with Egypt Vision 2030 and co-financed by multilateral lenders.",
  },
  categories: [
    {
      id: "transport",
      label: "Sustainable transport",
      description:
        "Rail-based mass transit modernization complemented by intelligent surface transport systems.",
    },
    {
      id: "energy",
      label: "Energy & efficiency",
      description:
        "Waste-to-energy innovation, solar infrastructure expansion, and grid modernization.",
    },
    {
      id: "water",
      label: "Water & wastewater",
      description:
        "Network expansion, treatment upgrades, and climate-resilient supply.",
    },
    {
      id: "climate",
      label: "Climate resilience",
      description:
        "Integrated adaptation strategies combining coastal protection and sustainable drainage.",
    },
    {
      id: "industrial",
      label: "Industrial & logistics",
      description: "Strategic industrial development and port decarbonization.",
    },
  ],
  projects: [
    // Sustainable Transport - Rail
    {
      id: "raml-tram",
      title: "Alexandria Raml Tram Modernization",
      category: "transport",
      subCategory: "Rail-based mass transit",
      status: "Under Construction",
      budget: "€592 million",
      factId: "ramlTramCost",
      year: "2026-2027",
      description:
        "The Alexandria Raml Tram Modernization Project transforms one of the world's oldest tram systems (opened 1863 as a horse-drawn line, electrified 1902) into a digitally controlled light rail transit (LRT) system.",
      technicalSpecs: {
        Length: "13.2 km",
        Stations: "24",
        "Speed increase": "+91%",
        "Target ridership": "500,000 passengers/day",
        Vehicles: "Hyundai Rotem LRT",
        Signaling: "Hitachi Rail",
      },
      specFactIds: {
        Length: "ramlTramLength",
        Stations: "ramlTramStations",
        "Target ridership": "ramlTramRidershipTarget",
      },
      financialFramework: [
        { source: "EIB", amount: "€138M" },
        { source: "AFD", amount: "€100M" },
        { source: "EU", amount: "€8M" },
        { source: "Egypt Govt", amount: "€346M" },
      ],
      vision2030Pillars: [
        "Sustainable transport",
        "Environmental sustainability",
        "Cultural heritage",
      ],
      imagePlaceholder: "Modernized Raml tram concept",
      image: "/images/raml-tram-concept.jpg",
      isConcept: true,
    },
    {
      id: "abu-qir-metro",
      title: "Alexandria Abu Qir Metro Phase 1",
      category: "transport",
      subCategory: "Rail-based mass transit",
      status: "Under Construction",
      budget: "€1.764 billion",
      factId: "abuQirMetroCost",
      year: "2025-2028",
      description:
        "Transforms an underutilized suburban railway into a high-capacity metro system, co-financed by four multilateral lenders (EIB, EBRD, AFD and AIIB) and the Government of Egypt.",
      technicalSpecs: {
        Length: "21.7 km",
        Stations: "20",
        Capacity: "60,000 pax/hr/direction",
        "Journey time": "25 min",
      },
      specFactIds: {
        Length: "abuQirMetroLength",
        Stations: "abuQirMetroStations",
        Capacity: "abuQirMetroCapacity",
      },
      financialFramework: [
        { source: "EIB", amount: "€750M" },
        { source: "EBRD", amount: "€250M" },
        { source: "AFD", amount: "€250M" },
        { source: "AIIB", amount: "€250M" },
        { source: "Egypt Govt", amount: "€264M" },
      ],
      vision2030Pillars: [
        "100% green economy transition",
        "Transit-oriented development",
        "Gender-responsive design",
      ],
      imagePlaceholder: "Abu Qir metro viaduct",
      image: "/images/abu-qir-metro-concept.jpg",
      isConcept: true,
    },
    // Sustainable Transport - Surface
    {
      id: "electric-bus",
      title: "Electric Bus Initiative",
      category: "transport",
      subCategory: "Surface transport",
      status: "Operational",
      budget: "Not disclosed",
      year: "2018-present",
      description:
        "Alexandria's electric bus program, which began in 2018 when the first 15 BYD electric buses arrived in the city. The fleet was reported at 55 buses in 2025.",
      technicalSpecs: {
        "Initial fleet": "15 buses (2018)",
        "Fleet (2025)": "55 buses (reported)",
        Range: "250 km",
        Supplier: "BYD",
      },
      specFactIds: {
        "Fleet (2025)": "electricBusFleet",
      },
      financialFramework: [],
      vision2030Pillars: ["Sustainable transport", "Technology demonstration"],
      imagePlaceholder: "Electric bus fleet",
      image: "/images/electric-bus-alexandria.jpg",
      credit: {
        author: "Abdelrhman 1990",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Alexandria_Electric_bus.jpg",
      },
    },
    {
      id: "brt-corridors",
      title: "BRT Corridors",
      category: "transport",
      subCategory: "Surface transport",
      status: "Planning",
      budget: "€20 million (est.)",
      year: "Planning phase",
      description:
        "Cost-effective intermediate-capacity solution identified in GCAP for short-medium term implementation.",
      technicalSpecs: {
        Corridors: "2 priority routes",
        "Cost efficiency": "5-10% of rail",
        Integration: "With metro/tram",
      },
      financialFramework: [],
      vision2030Pillars: ["Sustainable transport", "Urban mobility"],
      imagePlaceholder: "BRT concept",
      image: "/images/brt-corridor-concept.jpg",
      isConcept: true,
    },
    // Energy & Efficiency
    {
      id: "sludge-to-energy",
      title: "Sludge-to-Energy Facility (E1)",
      category: "energy",
      subCategory: "Waste-to-energy",
      status: "Early Implementation",
      budget: "€30 million",
      year: "Early implementation",
      description:
        'Addresses critical environmental challenge: 200 tons of sewage sludge daily transported to saturated "9N" landfill.',
      technicalSpecs: {
        Technology: "Anaerobic digestion",
        "Biogas production": "18,500 m³/day",
        Electricity: "5 MWh/day",
        "Sludge reduction": "30-35%",
      },
      financialFramework: [],
      vision2030Pillars: ["Circular economy", "Renewable energy"],
      imagePlaceholder: "Biogas facility",
      image: "/images/sludge-to-energy-concept.jpg",
      isConcept: true,
    },
    {
      id: "solar-water-treatment",
      title: "Scaling Solar for Water Treatment (E2)",
      category: "energy",
      subCategory: "Solar infrastructure",
      status: "Under Development",
      budget: "€33 million",
      year: "Under development",
      description:
        "Dedicated solar installations for water treatment plant electricity supply, demonstrating sectoral decarbonization pathway.",
      technicalSpecs: {
        "Annual energy": "106,000 MWh",
        "GHG reduction": "44,200 tCO₂e",
        Sites: "4 WWTPs + booster",
      },
      financialFramework: [],
      vision2030Pillars: ["Renewable energy", "Decarbonization"],
      imagePlaceholder: "Solar panels at water plant",
      image: "/images/solar-water-treatment-concept.jpg",
      isConcept: true,
    },
    {
      id: "regional-control-center",
      title: "Regional Control Center Modernization",
      category: "energy",
      subCategory: "Grid modernization",
      status: "Under Construction",
      budget: "€50 million",
      year: "Under construction",
      description:
        "Critical infrastructure for Egypt’s electricity sector transformation with exceptional 20% grant share.",
      technicalSpecs: {
        "Loss reduction": "10%",
        Coverage: "9M population",
        Components: "ADMS, renewable forecasting",
      },
      financialFramework: [
        { source: "EU Grant", amount: "€10M (20%)" },
        { source: "AFD", amount: "€40M" },
      ],
      vision2030Pillars: ["Energy security", "Renewable integration"],
      imagePlaceholder: "Control center",
      image: "/images/regional-control-center-concept.jpg",
      isConcept: true,
    },
    // Water & Wastewater
    {
      id: "wastewater-network",
      title: "Wastewater Network Expansion",
      category: "water",
      status: "Detailed Study Required",
      budget: "TBD",
      year: "Study phase",
      description:
        "Expansion of sewerage coverage to unserved areas, identified as priority in GCAP water sector roadmap.",
      technicalSpecs: {
        Focus: "Informal discharge reduction",
        Goal: "Environmental protection",
      },
      financialFramework: [],
      vision2030Pillars: ["Health", "Environment"],
      imagePlaceholder: "Infrastructure expansion",
    },
    // Climate Resilience
    {
      id: "suds",
      title: "Sustainable Drainage Systems (SuDS)",
      category: "climate",
      status: "Under Development", // Labeled "Short-Term Priority" in text, mapping to closest status or adding new one
      budget: "€35 million",
      year: "1-3 year implementation",
      description:
        "Green infrastructure approach targeting city hotspots. Co-benefits: Flood risk reduction, groundwater recharge, urban cooling.",
      technicalSpecs: {
        Approach: "Green infrastructure",
        Target: "City hotspots",
      },
      financialFramework: [],
      vision2030Pillars: ["Climate action", "Urban resilience"],
      imagePlaceholder: "Urban green drainage",
      image: "/images/suds-green-drainage-concept.jpg",
      isConcept: true,
    },
    // Industrial
    {
      id: "alstom-complex",
      title: "Alstom Industrial Complex — Borg El Arab",
      category: "industrial",
      status: "Under Construction",
      budget: "Strategic investment",
      year: "Announced 2025",
      description:
        "Strategic industrial development focusing on railway manufacturing localization.",
      technicalSpecs: {
        "Total area": "40 feddans",
        Scope: "LRT, Monorail, HSR",
        Impact: "Export capacity to Africa & Middle East",
      },
      financialFramework: [],
      vision2030Pillars: ["Localization", "Economic growth"],
      imagePlaceholder: "Industrial complex",
      image: "/images/rail-factory-borg-el-arab-concept.jpg",
      isConcept: true,
    },
  ],
  vision2030: {
    title: "Egypt Vision 2030 strategic alignment",
    description:
      "All major infrastructure projects demonstrate explicit Vision 2030 alignment across economic, social, and environmental dimensions, with four projects currently under construction.",
    pillars: [
      {
        title: "Economic competitiveness",
        items: [
          "Productivity gains",
          "Manufacturing localization",
          "Logistics efficiency",
        ],
      },
      {
        title: "Social equity",
        items: ["Transport access", "Affordable services", "Universal design"],
      },
      {
        title: "Environmental sustainability",
        items: [
          "Modal shift impact",
          "Renewable expansion",
          "Circular economy",
        ],
      },
    ],
  },
  gcap: {
    title: "Alexandria Green City Action Plan (GCAP)",
    budget: "≈€180M in listed pipeline items",
    description:
      "A comprehensive 10-15 year strategic framework integrating all infrastructure sectors.",
    pipeline: [
      { sector: "Transport", value: "€20M+ (BRT)" },
      { sector: "Energy", value: "€64.6M identified" },
      { sector: "Water/Wastewater", value: "€60M+" },
      { sector: "Climate resilience", value: "€35M+ (SuDS)" },
    ],
  },
} as const;
