
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly subCategory?: string;
  readonly status:
    | "Completed"
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
  readonly quote?: string;
}

export const projectsData = {
  hero: {
    title: "Alexandria's Green Infrastructure Revolution",
    subtitle:
      "Egypt's Mediterranean Gateway Transforms Through Sustainable Transport and Energy Innovation",
    stats: [
      { label: "Invested (2016-2026)", value: "€2.65B+" },
      { label: "Coordination", value: "4 MDBs" },
      { label: "Major Projects", value: "6 Flagship" },
      { label: "GCAP Pipeline", value: "€506M" },
    ],
    summary:
      "Alexandria has mobilized over €2.5 billion in sustainable infrastructure investments from 2016–2026, dominated by two flagship rail projects—the €592 million Raml Tram Modernization and the €1.39 billion Abu Qir Metro Phase 1. Both projects are explicitly aligned with Egypt Vision 2030 and financed through unprecedented multilateral coordination.",
  },
  categories: [
    {
      id: "transport",
      label: "Sustainable Transport",
      description:
        "Rail-based mass transit modernization complemented by intelligent surface transport systems.",
    },
    {
      id: "energy",
      label: "Energy & Efficiency",
      description:
        "Waste-to-energy innovation, solar infrastructure expansion, and grid modernization.",
    },
    {
      id: "water",
      label: "Water & Wastewater",
      description:
        "Network expansion, treatment upgrades, and climate-resilient supply.",
    },
    {
      id: "climate",
      label: "Climate Resilience",
      description:
        "Integrated adaptation strategies combining coastal protection and sustainable drainage.",
    },
    {
      id: "industrial",
      label: "Industrial & Logistics",
      description: "Strategic industrial development and port decarbonization.",
    },
  ],
  projects: [
    // Sustainable Transport - Rail
    {
      id: "raml-tram",
      title: "Alexandria Raml Tram Modernization",
      category: "transport",
      subCategory: "Rail-Based Mass Transit",
      status: "Under Construction",
      budget: "€592 Million",
      year: "2026-2027",
      description:
        "The Alexandria Raml Tram Modernization Project transforms the world’s oldest continuously operating electric tram system (1863) into a digitally controlled light rail transit (LRT) system.",
      technicalSpecs: {
        Length: "13.2 km",
        Stations: "24",
        "Speed Increase": "+91%",
        Capacity: "500,000/day",
        Vehicles: "Hyundai Rotem LRT",
        Signaling: "Hitachi Rail",
      },
      financialFramework: [
        { source: "EIB", amount: "€138M" },
        { source: "AFD", amount: "€100M" },
        { source: "EU", amount: "€8M" },
        { source: "Egypt Govt", amount: "€346M" },
      ],
      vision2030Pillars: [
        "Sustainable Transport",
        "Environmental Sustainability",
        "Cultural Heritage",
      ],
      imagePlaceholder: "Modernized Raml Tram Concept",
      image:
        "https://railwaynews.net/wp-content/uploads/ZDRT5BD6NetGnU_gLb1sC.jpg",
    },
    {
      id: "abu-qir-metro",
      title: "Alexandria Abu Qir Metro Phase 1",
      category: "transport",
      subCategory: "Rail-Based Mass Transit",
      status: "Under Construction",
      budget: "€1.39 Billion",
      year: "2025-2028",
      description:
        "Transforms an underutilized suburban railway into a high-capacity metro system. The four-multilateral-bank coordination is unprecedented.",
      technicalSpecs: {
        Length: "21.7 km",
        Stations: "20",
        Capacity: "60,000 pax/hr",
        "Journey Time": "25 min",
      },
      financialFramework: [
        { source: "EBRD", amount: "€250M" },
        { source: "EIB", amount: "[Redacted]" },
        { source: "AFD", amount: "[Redacted]" },
        { source: "AIIB", amount: "First Urban Rail" },
      ],
      vision2030Pillars: [
        "100% Green Economy Transition",
        "Transit-oriented development",
        "Gender-responsive design",
      ],
      quote:
        "The four-MDB coordination mechanism represents unprecedented harmonization in Egyptian infrastructure.",
      imagePlaceholder: "Abu Qir Metro Viaduct",
      image: "https://images.dailynewsegypt.com/2021/11/Cairo-Line-2.jpg",
    },
    // Sustainable Transport - Surface
    {
      id: "electric-bus",
      title: "Electric Bus Initiative",
      category: "transport",
      subCategory: "Surface Transport",
      status: "Completed",
      budget: "Not Disclosed",
      year: "2023-2026",
      description:
        "Egypt's first operational municipal electric bus deployment, launched March 2023.",
      technicalSpecs: {
        "Current Fleet": "15 operational",
        "Expansion Target": "40 buses total",
        Range: "250 km",
        Supplier: "BYD",
      },
      financialFramework: [],
      vision2030Pillars: ["Sustainable Transport", "Technology Demonstration"],
      imagePlaceholder: "Electric Bus Fleet",
      image: "https://images.dailynewsegypt.com/2019/01/electric-bus.jpg",
    },
    {
      id: "brt-corridors",
      title: "BRT Corridors",
      category: "transport",
      subCategory: "Surface Transport",
      status: "Planning",
      budget: "€20 Million (Est.)",
      year: "Planning Phase",
      description:
        "Cost-effective intermediate-capacity solution identified in GCAP for short-medium term implementation.",
      technicalSpecs: {
        Corridors: "2 priority routes",
        "Cost Efficiency": "5-10% of rail",
        Integration: "With metro/tram",
      },
      financialFramework: [],
      vision2030Pillars: ["Sustainable Transport", "Urban Mobility"],
      imagePlaceholder: "BRT Concept",
      image:
        "https://aqarmap.com.eg/ar/advice/wp-content/uploads/2022/07/%D8%A7%D8%AA%D9%88%D8%A8%D9%8A%D8%B3-brt-1.jpg",
    },
    // Energy & Efficiency
    {
      id: "sludge-to-energy",
      title: "Sludge-to-Energy Facility (E1)",
      category: "energy",
      subCategory: "Waste-to-Energy",
      status: "Early Implementation",
      budget: "€30 Million",
      year: "Early Implementation",
      description:
        'Addresses critical environmental challenge: 200 tons of sewage sludge daily transported to saturated "9N" landfill.',
      technicalSpecs: {
        Technology: "Anaerobic Digestion",
        "Biogas Production": "18,500 m³/day",
        Electricity: "5 MWh/day",
        "Sludge Reduction": "30-35%",
      },
      financialFramework: [],
      vision2030Pillars: ["Circular Economy", "Renewable Energy"],
      imagePlaceholder: "Biogas Facility",
    },
    {
      id: "solar-water-treatment",
      title: "Scaling Solar for Water Treatment (E2)",
      category: "energy",
      subCategory: "Solar Infrastructure",
      status: "Under Development",
      budget: "€33 Million",
      year: "Under Development",
      description:
        "Dedicated solar installations for water treatment plant electricity supply, demonstrating sectoral decarbonization pathway.",
      technicalSpecs: {
        "Annual Energy": "106,000 MWh",
        "GHG Reduction": "44,200 tCO₂e",
        Sites: "4 WWTPs + booster",
      },
      financialFramework: [],
      vision2030Pillars: ["Renewable Energy", "Decarbonization"],
      imagePlaceholder: "Solar Panels at Water Plant",
    },
    {
      id: "regional-control-center",
      title: "Regional Control Center Modernization",
      category: "energy",
      subCategory: "Grid Modernization",
      status: "Under Construction",
      budget: "€50 Million",
      year: "Under Construction",
      description:
        "Critical infrastructure for Egypt’s electricity sector transformation with exceptional 20% grant share.",
      technicalSpecs: {
        "Loss Reduction": "10%",
        Coverage: "9M population",
        Components: "ADMS, Renewable Forecasting",
      },
      financialFramework: [
        { source: "EU Grant", amount: "€10M (20%)" },
        { source: "AFD", amount: "€40M" },
      ],
      vision2030Pillars: ["Energy Security", "Renewable Integration"],
      imagePlaceholder: "Control Center",
    },
    // Water & Wastewater
    {
      id: "wastewater-network",
      title: "Wastewater Network Expansion",
      category: "water",
      status: "Detailed Study Required",
      budget: "TBD",
      year: "Study Phase",
      description:
        "Expansion of sewerage coverage to unserved areas, identified as priority in GCAP water sector roadmap.",
      technicalSpecs: {
        Focus: "Informal discharge reduction",
        Goal: "Environmental protection",
      },
      financialFramework: [],
      vision2030Pillars: ["Health", "Environment"],
      imagePlaceholder: "Infrastructure Expansion",
    },
    // Climate Resilience
    {
      id: "suds",
      title: "Sustainable Drainage Systems (SuDS)",
      category: "climate",
      status: "Under Development", // Labeled "Short-Term Priority" in text, mapping to closest status or adding new one
      budget: "€35 Million",
      year: "1-3 Year Implementation",
      description:
        "Green infrastructure approach targeting city hotspots. Co-benefits: Flood risk reduction, groundwater recharge, urban cooling.",
      technicalSpecs: {
        Approach: "Green Infrastructure",
        Target: "City Hotspots",
      },
      financialFramework: [],
      vision2030Pillars: ["Climate Action", "Urban Resilience"],
      imagePlaceholder: "Urban Green Drainage",
    },
    // Industrial
    {
      id: "alstom-complex",
      title: "Alstom Industrial Complex — Borg El Arab",
      category: "industrial",
      status: "Under Construction",
      budget: "Strategic Investment",
      year: "Announced 2025",
      description:
        "Strategic industrial development focusing on railway manufacturing localization.",
      technicalSpecs: {
        "Total Area": "40 feddans",
        Scope: "LRT, Monorail, HSR",
        Impact: "Export capacity to Africa & Middle East",
      },
      financialFramework: [],
      vision2030Pillars: ["Localization", "Economic Growth"],
      imagePlaceholder: "Industrial Complex",
    },
  ],
  vision2030: {
    title: "Egypt Vision 2030 Strategic Alignment",
    description:
      "All major infrastructure projects demonstrate explicit Vision 2030 alignment across economic, social, and environmental dimensions, with six flagship initiatives currently under construction.",
    pillars: [
      {
        title: "Economic Competitiveness",
        items: [
          "Productivity Gains",
          "Manufacturing Localization",
          "Logistics Efficiency",
        ],
      },
      {
        title: "Social Equity",
        items: ["Transport Access", "Affordable Services", "Universal Design"],
      },
      {
        title: "Environmental Sustainability",
        items: [
          "Modal Shift Impact",
          "Renewable Expansion",
          "Circular Economy",
        ],
      },
    ],
  },
  gcap: {
    title: "Alexandria Green City Action Plan (GCAP)",
    budget: "€506M Total Identified",
    description:
      "A comprehensive 10-15 year strategic framework integrating all infrastructure sectors.",
    pipeline: [
      { sector: "Transport", value: "€20M+ (BRT)" },
      { sector: "Energy", value: "€64.6M identified" },
      { sector: "Water/Wastewater", value: "€60M+" },
      { sector: "Climate Resilience", value: "€35M+ (SuDS)" },
    ],
  },
} as const;
