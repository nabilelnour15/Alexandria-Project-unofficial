import { Globe, Landmark, Building2 } from "lucide-react";

export const aboutEssence = {
  geography: {
    title: "The Unique Essence of Alexandria",
    subtitle: "Principal Port & Second City",
    description:
      "Alexandria occupies a singular position in Egypt's urban geography as the nation's principal Mediterranean port and second-largest city, with a metropolitan population of approximately 5 million residents.",
    location:
      "Located roughly 225 kilometers northwest of Cairo at the western edge of the Nile Delta, the city stretches across 30 kilometers of Mediterranean coastline between Agamy and Abu Qeir.",
    strategy:
      "The site's selection by Alexander the Great in April 331 BCE reflected exceptional strategic foresight. The natural harbor, protected by the offshore island of Pharos, offered superior anchorage while avoiding the silting problems that plagued river-mouth ports.",
    character: {
      title: "Mediterranean Character",
      description:
        "Alexandria's Mediterranean identity manifests in multiple dimensions. Climatically, the city enjoys moderated temperatures and higher humidity than the desert interior, with winter rainfall sufficient that locals joke about owning umbrellas—a rarity in Egypt.",
      architecture:
        "Architecturally, Alexandria preserves extensive evidence of its European-influenced past. The belle époque apartment buildings, Rococo villas, and Art Deco structures of the downtown area create streetscapes that would appear more at home in Marseille or Naples than in Cairo.",
    },
  },
  comparison: {
    title: "Alexandria vs. Nile Cities",
    rows: [
      {
        dim: "Climate",
        alex: "Mediterranean: mild, humid, winter rainfall",
        nile: "Desert continental: extreme heat, minimal rain",
      },
      {
        dim: "Architecture",
        alex: "European-influenced: balconies, verandas",
        nile: "Islamic/traditional: courtyards, inward-oriented",
      },
      {
        dim: "Public Space",
        alex: "Corniche (waterfront promenade)",
        nile: "Nile Corniche (highway/privatized)",
      },
      {
        dim: "Cuisine",
        alex: "Seafood, Mediterranean ingredients",
        nile: "River fish, legumes, agricultural products",
      },
    ],
  },
};

export const timelineEvents = [
  {
    year: "331 BCE",
    title: "Foundation by Alexander the Great",
    desc: "Inspired by Homer's dream, laid out by Dinocrates of Rhodes.",
    longDesc:
      "Alexander the Great founded Alexandria in January 331 BCE during his conquest of Egypt, renaming the small fishing village of Rhakotis after himself. The site was strategically chosen for its natural harbor, protected by the island of Pharos, and its position between the Mediterranean Sea and Lake Mareotis, facilitating trade and defense. According to legend, Alexander had a dream in which the poet Homer appeared, reciting verses from the Odyssey about the island of Pharos, which convinced him of the location's potential. The city was planned on a grid system by the architect Dinocrates of Rhodes, featuring wide streets, including the main Canopic Street, and was intended to be a Hellenistic cultural and economic hub blending Greek and Egyptian influences.",
    image: "/images/Alexander-the-Great.jpg",
  },
  {
    year: "323–30 BCE",
    title: "Ptolemaic Glory Period",
    desc: "Library, Lighthouse, Mouseion established. Population peaks at 500k–1M.",
    longDesc:
      "Following Alexander's death in 323 BCE, his general Ptolemy I Soter seized control of Egypt, establishing Alexandria as the capital of the Ptolemaic Kingdom. This era marked its transformation into the intellectual and commercial center of the Hellenistic world. The Great Library, founded around 295 BCE, housed up to 700,000 scrolls. The Pharos Lighthouse, completed around 280 BCE, stood over 100 meters tall and was one of the Seven Wonders. The city's population swelled up to 1 million, making it one of the largest in the ancient world, supported by thriving trade in grain, papyrus, and spices. Alexandria blended Greek, Egyptian, and Jewish cultures, producing the Septuagint translation of the Hebrew Bible.",
    image: "/images/lighthouse.jpg",
  },
  {
    year: "30 BCE",
    title: "Roman Annexation",
    desc: "Egypt becomes imperial province. Alexandria continues as commercial capital.",
    longDesc:
      "After the defeat of Mark Antony and Cleopatra VII at the Battle of Actium, Octavian captured Alexandria in 30 BCE, marking the end of the Ptolemaic dynasty. Alexandria retained its status as a major commercial hub, exporting wheat and papyrus, becoming the second-largest city in the Roman Empire. Roman rule brought infrastructure improvements like aqueducts and baths, but also tensions and conflicts. Christianity spread, with figures like Origen contributing to theological scholarship, though the city faced periodic unrest, including the destruction of parts of the Library during civil conflicts.",
    image: "/images/Ancient-Roman-theater-alexandria.jpg",
  },
  {
    year: "641 CE",
    title: "Islamic Transformation",
    desc: "Arab conquest introduces new religious frameworks. Qaitbay built on Lighthouse ruins.",
    longDesc:
      "In 641 CE, Arab forces under General Amr ibn al-As conquered Alexandria, ending Byzantine rule. This marked a shift to Islam as the dominant religion. The city declined somewhat as the capital moved to Fustat (near Cairo), but remained a key port. The Pharos Lighthouse, damaged by earthquakes, finally collapsed around 1323 CE. In 1477, Sultan Qaitbay built his Citadel on its ruins, using salvaged stones, to defend against Ottoman threats; it stands today as a symbol of medieval Islamic architecture.",
    image: "/images/citadel.jpg",
  },
  {
    year: "19th–20th Century",
    title: "European Influence & Cosmopolitan Era",
    desc: "Belle époque architecture, foreign communities (40% of population by 1940s).",
    longDesc:
      "Muhammad Ali Pasha modernized Alexandria in the 19th century, attracting European investors. The opening of the Suez Canal in 1869 boosted trade, leading to a boom in Belle Époque architecture. By the late 19th century, Alexandria became a cosmopolitan melting pot with Greeks, Italians, and French comprising up to 40% of the population. It was a hub for finance, culture, and nightlife, home to writers like Constantine Cavafy and Lawrence Durrell. The 1952 Revolution led to nationalization and the exodus of many foreigners.",
    image: "/images/MohamedAli.jpg",
  },
  {
    year: "2002–Present",
    title: "Revival and Contemporary Renaissance",
    desc: "Bibliotheca Alexandrina inaugurated, 2025 Culture Capital designation.",
    longDesc:
      "In 2002, the Bibliotheca Alexandrina was inaugurated as a modern revival of the ancient Library, designed by Snøhetta. It serves as a library, museum, and cultural center. Alexandria has undergone urban revival, including waterfront redevelopment. In 2024, it was designated as the first Mediterranean Capital of Culture and Dialogue for 2025. This title highlights its historical role in intercultural exchange, with forums, exhibitions, and performances planned to foster Mediterranean collaboration.",
    image: "/images/Alexandria_Bibliotheca.jpg",
  },
];

export const civilizationalLayers = [
  {
    period: "Foundation & Hellenistic Glory",
    dates: "331–30 BCE",
    details: [
      {
        subtitle: "Alexander's Vision",
        content:
          "Inspired by a dream of Homer, suggesting the location for one of antiquity's greatest cities.",
      },
      {
        subtitle: "Ptolemaic Investment",
        content:
          "Preeminent center of learning with 400k-700k scrolls and the Pharos Lighthouse.",
      },
      {
        subtitle: "Multicultural Metropolis",
        content:
          "Peak population of 500k-1M Greeks, Egyptians, Jews, Syrians, and Romans.",
      },
    ],
    icon: Globe,
  },
  {
    period: "Roman Egypt and Late Antiquity",
    dates: "30 BCE–641 CE",
    details: [
      {
        subtitle: "Roman Annexation",
        content:
          "Imperial province capital and the Mediterranean's premier commercial port.",
      },
      {
        subtitle: "Early Christian Center",
        content:
          "One of five patriarchates; Catechetical School developed innovative biblical interpretations.",
      },
      {
        subtitle: "Theological Development",
        content:
          "Controversies that shaped global Christianity; the death of Hypatia in 415 CE.",
      },
    ],
    icon: Landmark,
  },
  {
    period: "Islamic Era to Contemporary Revival",
    dates: "641 CE – Present",
    details: [
      {
        subtitle: "Islamic Transformation",
        content:
          "Qaitbay Citadel (1477) built on Lighthouse ruins, creating material continuity.",
      },
      {
        subtitle: "European Influence",
        content:
          "Belle époque architecture; 40% foreign-born population by the 1940s.",
      },
      {
        subtitle: "Contemporary Revival",
        content:
          "Bibliotheca Alexandrina (2002) and the 2025 Mediterranean Capital of Culture designation.",
      },
    ],
    icon: Building2,
  },
];

export const summaryData = {
  title: "Alexandria: Timeless Pearl of the Mediterranean",
  description:
    "From Alexander's visionary foundation to its contemporary revival as a Mediterranean Capital of Culture, Alexandria remains Egypt's most distinctive urban treasure—a city where ancient wisdom meets modern creativity, where Mediterranean breezes carry the echoes of twenty-five centuries of civilization.",
  pillars: [
    {
      title: "Ancient Wisdom",
      desc: "Reviving the legacy of the Great Library for contemporary scholarship",
    },
    {
      title: "Mediterranean Spirit",
      desc: "Unique coastal identity distinct from Egypt's Nile-centered civilization",
    },
    {
      title: "Global Dialogue",
      desc: "2025 Mediterranean Capital of Culture connecting civilizations",
    },
  ],
};

export const landmarksData = {
  ancient: [
    {
      name: "Great Library of Alexandria",
      legacy:
        "Modern Bibliotheca Alexandrina (2002) explicitly revives this heritage with capacity for 8 million volumes.",
      desc: "The ancient world's premier center of knowledge, with collections of 400,000 to 700,000 scrolls.",
      image: "/images/14298.png",
    },
    {
      name: "Lighthouse of Alexandria (Pharos)",
      legacy:
        "One of the Seven Wonders, standing 100-140 meters high. Recent archaeology recovered 22 massive stone blocks.",
      desc: "Practical maritime navigation combined with monumental architecture.",
      image: "/images/lighthouse.jpg",
    },
    {
      name: "Cleopatra's Palace",
      legacy:
        "Submerged royal quarter discovered in the 1990s. 2.5 sq km of underwater archaeological zone.",
      desc: "Exceptional preservation conditions with granite columns retaining tool marks.",
      image: "/images/cleopatra-palace-anterhodos.jpg",
    },
  ],
  monuments: [
    {
      name: "Pompey's Pillar",
      stats:
        "26.85m red granite column. Erected for Emperor Diocletian in 297 CE.",
      fact: "Monolith quarried at Aswan, representing extraordinary logistical achievement.",
      image: "/images/Serapeum-of-Alexandria.jpg",
    },
    {
      name: "Catacombs of Kom El Shoqafa",
      stats:
        "Largest Roman burial site in Egypt (2nd century CE). Reaches depths of 35 meters.",
      fact: "Unique fusion of styles: Anubis in Roman military costume.",
      image: "/images/the-tombs-of-Kom-el-Shoqafa.jpg",
    },
  ],
  fortifications: [
    {
      name: "Citadel of Qaitbay",
      origin:
        "Built 1477–1479 on the ruins of the Lighthouse, reusing its stones.",
      function: "Maritime museum with panoramic views.",
      image: "/images/feature-citadel-1.jpg",
    },
    {
      name: "El-Mursi Abu'l-'Abbas Mosque",
      origin: "14th-century Sufi shrine with a 73-meter minaret.",
      function: "Major Friday prayer destination and site for Sufi ceremonies.",
      image: "/images/Al-Mursi-Abu-Al-Abbas-Mosque-alexandria.jpg",
    },
  ],
};

export const modernInfrastructure = {
  bibliotheca: {
    title: "The Bibliotheca Alexandrina",
    specs: [
      { label: "Collection capacity", value: "8 million volumes" },
      { label: "Reading room", value: "2,500 readers" },
      { label: "Museums", value: "4 specialized" },
      { label: "Annual visits", value: "1.5 million+" },
    ],
    symbol:
      "The Manuscript Museum holds a copy of Aristotle's Constitution of Athens scroll fragment.",
  },
  corniche: {
    title: "The Corniche",
    length: "12-mile (19km) waterfront promenade.",
    social:
      "Historic cafés like Athineos, Trianon, and Délices maintain social life along the waterfront.",
    image: "/images/Alexandria-Corniche-alexandria.jpg",
  },
  montaza: {
    title: "Montaza Palace & Gardens",
    role: "19th-century royal hunting lodge, now Alexandria's largest public park.",
    gardens:
      "Extensive tree cover, formal gardens, and beach access offering urban respite.",
    image: "/images/A-wonderful-picture-of-Montazah-Palace.jpg",
  },
};

export const museumRegistry = [
  {
    name: "Alexandria National Museum",
    focus:
      "Pharaonic to modern periods across three floors. Housed in 1928 Al-Saad Bassili Palace.",
    highlights: "Tanagra figurines, mummy room.",
    image: "/images/The-National-Museum-from-the-outside-in.jpg",
  },
  {
    name: "Royal Jewelry Museum",
    focus:
      "Regalia from the Muhammad Ali dynasty in Princess Fatma Al-Zahra's palace.",
    highlights: "Jewelry from 150 years of rule, European diplomatic gifts.",
    image: "/images/Royal-Jewelery-Museum.jpg",
  },
  {
    name: "Graeco-Roman Museum",
    focus:
      "Renovated in 2023, dedicated specifically to Hellenistic and Roman art.",
    highlights: "Fayum mummy portraits (ancient portraiture).",
    image: "/images/roman-amphitheatre.avif",
  },
];

export const culture2025 = {
  title: "2025 Mediterranean Capital of Culture",
  themes: [
    "Youth & Digitalization",
    "Creative Industries",
    "Bilateral Cooperation",
  ],
  tirana:
    "Partnership with Tirana, Albania focus on Ottoman, European, and nationalist influences.",
  initiatives: [
    "Digital content creation workshops",
    "Innovation hackathons",
    "Digital art exhibitions",
    "Mediterranean networking",
  ],
};

export const culinaryTraditions = {
  seafood:
    "Daily catch from the Mediterranean and Lake Mariout combines Egyptian, Greek, and Levantine techniques.",
  dishes: [
    {
      name: "Sayadieh",
      desc: "Spiced rice with caramelized onions and fish.",
      image:
        "https://asif.org/wp-content/uploads/2021/05/Jaffa-9-1-1024x731.jpg",
    },
    {
      name: "Shrimp Tagine",
      desc: "Shrimp in herb-infused tomato sauce.",
      image:
        "https://cairoscene.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/1128523/aaedd28e-0360-4c19-b47c-9d99469632e2.jpg",
    },
    {
      name: "Grilled Mullet (Bouri)",
      desc: "Simply grilled whole fish with lemon.",
      image: "https://slowmed.eu/media/Grilled-Mullet.jpg",
    },
    {
      name: "Calamari Meshwi",
      desc: "Grilled squid with garlic and herbs.",
      image:
        "https://greekislandstaverna.com/wp-content/uploads/2025/09/fried-squid-rings-breaded-with-lemon-on-a-plate-2025-01-09-05-13-04-utc-1-scaled-1.jpg",
    },
  ],
};

export const integrationData = {
  architectural: [
    { district: "Downtown", style: "Neoclassical, Art Nouveau, Art Deco" },
    { district: "Anfushi", style: "Islamic monuments, vernacular housing" },
    { district: "Eastern", style: "Modernist towers, resort development" },
  ],
  archaeology: {
    quote: '"Old Alexandria is just below your feet."',
    methods: [
      { label: "Side-scan sonar", desc: "Seafloor mapping" },
      { label: "Magnetometry", desc: "Ferrous materials detection" },
      { label: "ROVs", desc: "Visual survey" },
      { label: "Photogrammetry", desc: "3D modeling" },
    ],
  },
};
