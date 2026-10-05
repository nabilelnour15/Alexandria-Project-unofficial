import type { FactId } from "./facts";
import type { ImageCredit } from "./imageCredit";

// Optional `factId` fields point at an entry in ./facts so the UI can show a source chip.
// They are typed as FactId, so a typo fails to compile.

export interface Port {
  name: string;
  description: string;
  factId?: FactId;
  link?: string;
  image: string;
  credit?: ImageCredit;
}

export interface InvestmentDriver {
  title: string;
  description: string;
  factId?: FactId;
  sectors?: string[];
  types?: string[];
  intensification?: string;
  image: string;
  credit?: ImageCredit;
}

const freeZoneFactId: FactId = "freeZoneArea";

// A "why invest" reason is plain text, or `{ text, factId }` when it quotes a sourced figure.
export type WhyReason = string | { text: string; factId: FactId };

export const investData = {
  whyAlexandria: {
    title: "Why invest in Alexandria?",
    reasons: [
      {
        text: "Alexandria is the first Egyptian trading city. It is the hub, where imports and exports are transported through Egypt's # 1 seaport which handles about 60% of Egypt's foreign trade.",
        factId: "portTradeShare",
      },
      {
        text: "Alexandria and its surroundings account for around 40% of Egypt's industrial activity (2013 estimate).",
        factId: "industrialShare",
      },
      "Alexandria has an outstanding rank in terms of the production of vegetables and fruits.",
      "Alexandria is ranked among the top cities nationwide in terms of the production of fish, poultry, red meat and eggs.",
      "Availability of infrastructure across all areas, e.g. roads transportation, communications, electricity, water and sewage networks.",
      "Availability of a large number of operational companies and plants offered for sale (privatization).",
      "Availability of human resources and experienced calibers of young graduates of all specialties.",
      "Access to the International Northern Coastal Road.",
      "King Mariout area, which is characterized by its healthy dry climate that is suitable for starting businesses such as spas and specialized hospitals.",
      "Tourist villages and their investment throughout the year.",
      "Access to Borg Al-Arab International Airport, which serves the city, increases investment opportunities and facilitates the traffic of imports and exports.",
      "Availability of agricultural projects on lands allocated to young graduates.",
      "The private sector, which, based on experience, has proven that it is the driver that is most capable of achieving economic growth rates and leadership in investment.",
    ] satisfies WhyReason[],
  },
  publicFreeZone: {
    title: "Alexandria Public Free Zone",
    description:
      "Alexandria is the largest Egyptian sea port located on the Mediterranean. The Free Zone is located in Amreya on the Cairo/ Alexandria Road. It spreads across an area of 5.7 million m² (1,357 feddans), about 25 km from the city centre and 20 km from Alexandria Port. The Free Zone provides a wide range of services including shipping, unloading, navigation and transport. It is close to the Alexandria and Al-Dekheila ports and Borg Al-Arab International Airport.",
    stats: "By area, it is the largest public free zone in Egypt.",
    factId: freeZoneFactId,
    businesses: [
      "Chemicals",
      "Oil Refinement",
      "Petrochemicals",
      "Spinning and weaving",
      "Ready-made apparel",
      "Cooking oils and vegetable oil derivatives",
      "Iron and steel production",
    ],
  },
  rawMaterials: [
    {
      name: "White Sand",
      region: "Western Desert (Lower Wadi Al-Natroun)",
      location: "at 115km on Cairo/ Alexandria desert road",
      industries: [
        "Glass products (lenses, glass panes and frosted glass)",
        "Faience, ceramics, bathroom tools, and kitchen utensils",
        "Water filters and liquid filtration equipment",
        "Pulverization (hydraulic crushing)",
        "Metal casting molds",
        "White cement",
        "Abrasives (sandpaper, rock cutting)",
        "Production of sodium silicate (soap and zeolites)",
        "Production of silica firebricks",
        "Manufacture of silicon carbide",
      ],
      image: "/images/white-sand-mediterranean-coast.jpg",
      credit: {
        author: "Fayza",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Marsa_Matrouh_city_in_Egypt_on_the_northern_coast_of_the_Mediterranean_10.JPG",
      },
    },
    {
      name: "Sodium Chloride",
      region: "Alexandria",
      location: "Al-Max",
      description:
        "Extracted from sea water via solar evaporation or vacuum evaporation.",
      uses: "Production of caustic soda and chlorine, used in the salt industry.",
      image: "/images/salt-works-lake-mariout.jpg",
      credit: {
        author: "TheEgyptian (English Wikipedia)",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Salt_refining-Lake_Mariout.JPG",
      },
    },
  ],
  ports: [
    {
      name: "Port of Alexandria",
      description:
        "Main port in Egypt, handling about 60% of Egypt's foreign trade.",
      factId: "portTradeShare",
      link: "https://www.apa.gov.eg/",
      image: "/images/port-of-alexandria.jpg",
    },
    {
      name: "Port of Al-Dekheila",
      description:
        "Natural extension of Alexandria Port. Established at the site of Dekheila air base, 7km west by sea.",
      image: "/images/DekhaliaPort.jpg",
    },
  ] satisfies Port[],
  investmentDrivers: [
    {
      title: "Industrial Investment",
      description:
        "Alexandria and its surroundings account for around 40% of Egypt's industrial activity (2013 estimate). Key areas: Muharram Bey, Kabbari, Al Seyouf, Abu Qir, Borg Al Arab.",
      factId: "industrialShare",
      sectors: [
        "Chemicals",
        "Metallurgy",
        "Leather",
        "Electricals",
        "Engineering",
        "Textiles",
        "Cement",
        "Oil",
      ],
      image: "/images/alexandria-port-cranes.jpg",
      credit: {
        author: "Abdelrhman 1990",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Alexandria_Port.jpg",
      },
    },
    {
      title: "Tourism Investment",
      description:
        "Distinctive destination with a wide range of heritage and coastal attractions. Highlights: Qaitbay Citadel, Pompey's Pillar, Bibliotheca Alexandrina.",
      types: [
        "Leisure",
        "Religious",
        "Medical",
        "Sports",
        "Yachts",
        "Festivals",
        "Conferences",
      ],
      image: "/images/stanley-bridge-alexandria-2019.jpg",
      credit: {
        author: "Шухрат Саъдиев (Shukhrat Sadiev)",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Stanley_Bridge,_Alexandria,_Jan._2019-1.jpg",
      },
    },
    {
      title: "Agricultural Investment",
      description:
        "Farming around Alexandria depends on the Mahmoudiyah Canal and, on the north-west coast, on rainfall.",
      image: "/images/egypt-farmland-green.jpg",
      credit: {
        author: "Amr F.Nagy",
        license: "CC0",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
        source: "https://commons.wikimedia.org/wiki/File:Egyptian_countryside_full_green.jpg",
      },
    },
  ] satisfies InvestmentDriver[],
  investmentZones: {
    objectives: [
      "Dissemination of economic and social development",
      "Establishment of integrated cluster groupings",
      "Excellence in service provision and regulatory procedures",
      "SME development",
      "Private sector participation in land provision",
    ],
    industrialZones: [
      "New Manshia industrial zone",
      "Al Nasseria industrial zone",
      "Upper and Lower Mergham industrial zone",
      "The industrial zone in K 31, Desert Road",
      "SIBCO Industrial Zone",
      "Ajami industrial zone",
      "Al Nahda industrial zone and its expansions",
      "Om Zagheiw Industrial zone",
      "Borg Al Arab industrial zone",
    ],
  },
  investmentLaws: {
    provisions: [
      "Right to remit income earned in Egypt",
      "100% foreign ownership",
      "Guarantees against confiscation/nationalization",
      "Right to own land",
      "Right to maintain foreign currency accounts",
      "Equality regardless of nationality",
    ],
    fields: [
      "Air transportation",
      "Animal, fish, and poultry husbandry",
      "Industry and mining",
      "Land reclamation",
      "Tourism & Housing",
      "Software & Electronics",
      "Waste treatment",
    ],
  },
  opportunities: [
    {
      title: "Utilization of Kuta Land",
      image: "/images/kuta-land-hotel-concept.jpg",
      location: "Central District (near Bibliotheca Alexandrina)",
      area: "16,800 m2",
      purpose: "7-star tourist hotel",
      approach: "BOT",
    },
    {
      title: "Establishment of a Recreational or Medical City",
      image: "/images/recreational-medical-city-concept.jpg",
      location: "Behind Carrefour",
      area: "350 acres",
      purpose: "Full leisure range or specialized medical city",
      approach: "BOT",
    },
    {
      title: "Restoration of the Ancient Lighthouse (Pharos)",
      location: "Port of Alexandria",
      purpose:
        "Scientific museum, hotel (300-400 rooms), conference center, marina",
      approach: "National",
    },
    {
      title: "International Maritime Rowing Stream",
      image: "/images/rowing-stream-concept.jpg",
      location: "Near the former Al Nozha Airport",
      length: "2300 m",
      purpose: "Tourist sports recreational project",
      approach: "BOT",
    },
  ],
  successStories: [
    {
      name: "Coca-Cola",
      industry: "Beverages & Manufacturing",
      successStory:
        "Coca-Cola has positioned Egypt as a strategic regional hub, leveraging Alexandria's industrial infrastructure for expansion. In 2026, the company announced plans to open a new production line in Alexandria to support sustainable manufacturing and access broader markets. This builds on recent inaugurations of production lines at existing facilities, emphasizing long-term partnerships and green growth.",
      year: "2026 Expansion",
      link: "https://www.dailynewsegypt.com/2026/01/21/coca-cola-to-open-alexandria-factory-and-triple-cairo-digital-hub-workforce/",
    },
    {
      name: "General Motors (GM)",
      industry: "Automotive",
      successStory:
        "GM's regional story began in Alexandria in 1926 with its first Middle East operations, establishing a plant that became a hub for vehicle assembly, distribution, and exports. Today, GM continues local production in Egypt, including models like the Chevrolet Optra and T-Series, generating over 7,000 jobs. The company's centennial in 2026 highlights its enduring success.",
      year: "Since 1926",
      link: "https://www.einnews.com/pr_news/891430514/general-motors-africa-and-middle-east-kicks-off-its-centennial-launching-their-short-documentary-on-cbs-and-alarabiya",
    },
    {
      name: "Concentrix",
      industry: "BPO & IT Services",
      successStory:
        "Since entering Egypt in 2009, Concentrix has scaled to 11 centers nationwide, including Alexandria. In 2025, the company committed $1 billion over four years to expand its workforce to 35,000 by 2028. Alexandria's role underscores its appeal for BPO operations, driven by talent availability and cost efficiency.",
      year: "2025 Investment",
      link: "https://itida.gov.eg/English/MediaCenter/News/Pages/Concentrix-to-invest-USD-1-bn-to-expand-Egypt-outsourcing-operations.aspx",
    },
    {
      name: "Orange",
      industry: "Telecommunications & IT",
      successStory:
        "Orange has established operations in Alexandria to tap into Egypt's digital economy. The company offers global IT and telecommunication services to multinational clients under Orange Business Services, contributing to Egypt's 5G rollout and infrastructure development. Its success includes supporting high-speed connectivity and innovation.",
      year: "Global Hub",
      link: "https://www.trade.gov/country-commercial-guides/egypt-digital-economy",
    },
  ],
};
