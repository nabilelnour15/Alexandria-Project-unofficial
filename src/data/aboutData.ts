import { facts, type FactId } from "./facts";
import type { ImageCredit } from "./imageCredit";

// Optional `factId` fields point at an entry in ./facts so the UI can show a source chip.
export interface FactSpec {
  label: string;
  value: string;
  factId?: FactId;
}

export interface ArchaeologyBlock {
  /** Only set when the attribution has been verified. */
  quote?: string;
  author?: string;
  methods: { label: string; desc: string }[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
  longDesc: string;
  image: string;
  /** Describes the photo when it does not show the event itself. */
  imageAlt?: string;
}

interface Landmark {
  name: string;
  legacy: string;
  desc: string;
  image: string;
  /** Caption under the image, e.g. when it is an illustration rather than a photograph. */
  caption?: string;
  credit?: ImageCredit;
  /** Fact behind `legacy`. */
  factId?: FactId;
  /** Fact behind `desc`. */
  descFactId?: FactId;
}

interface Monument {
  name: string;
  stats: string;
  fact: string;
  image: string;
  factId?: FactId;
}

interface Fortification {
  name: string;
  origin: string;
  function: string;
  image: string;
  factId?: FactId;
}

interface Essence {
  geography: {
    title: string;
    subtitle: string;
    factId: FactId;
    description: string;
    location: string;
    strategy: string;
    character: { title: string; description: string; architecture: string };
  };
  comparison: {
    title: string;
    rows: { dim: string; alex: string; nile: string }[];
  };
}

export const aboutEssence: Essence = {
  geography: {
    title: "What sets Alexandria apart",
    subtitle: "Egypt's main port and second city",
    factId: "population",
    description:
      "Alexandria occupies a singular position in Egypt's urban geography as the nation's principal Mediterranean port and second-largest city, with a governorate population of about 5.6 million (CAPMAS, January 2024).",
    location:
      "Located roughly 225 kilometers northwest of Cairo at the western edge of the Nile Delta, the city stretches along the Mediterranean coastline between Agamy and Abu Qir.",
    strategy:
      "The site's selection by Alexander the Great in 331 BCE reflected exceptional strategic foresight. The natural harbor, protected by the offshore island of Pharos, offered superior anchorage while avoiding the silting problems that plagued river-mouth ports.",
    character: {
      title: "Mediterranean character",
      description:
        "Alexandria's Mediterranean identity manifests in multiple dimensions. Climatically, the city enjoys moderated temperatures and higher humidity than the desert interior, with winter rainfall sufficient that locals joke about owning umbrellas—a rarity in Egypt.",
      architecture:
        "Architecturally, Alexandria preserves extensive evidence of its European-influenced past. The belle époque apartment buildings, Rococo villas, and Art Deco structures of the downtown area create streetscapes that would appear more at home in Marseille or Naples than in Cairo.",
    },
  },
  comparison: {
    title: "Alexandria and the Nile cities",
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
        dim: "Public space",
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

export const timelineEvents: TimelineEvent[] = [
  {
    year: "331 BCE",
    title: "Founded by Alexander the Great",
    desc: "Inspired by Homer's dream, laid out by Dinocrates of Rhodes.",
    longDesc:
      "Alexander the Great founded Alexandria in 331 BCE during his conquest of Egypt, renaming the small fishing village of Rhakotis after himself. The site was strategically chosen for its natural harbor, protected by the island of Pharos, and its position between the Mediterranean Sea and Lake Mareotis, facilitating trade and defense. According to legend, Alexander had a dream in which the poet Homer appeared, reciting verses from the Odyssey about the island of Pharos, which convinced him of the location's potential. The city was planned on a grid system by the architect Dinocrates of Rhodes, featuring wide streets, including the main Canopic Street, and was intended to be a Hellenistic cultural and economic hub blending Greek and Egyptian influences.",
    image: "/images/Alexander-the-Great.jpg",
  },
  {
    year: "323–30 BCE",
    title: "The Ptolemaic capital",
    desc: "The Library, the Lighthouse and the Mouseion are founded. One of the largest cities of the ancient world.",
    longDesc:
      "Following Alexander's death in 323 BCE, his general Ptolemy I Soter seized control of Egypt, establishing Alexandria as the capital of the Ptolemaic Kingdom. This era marked its transformation into the intellectual and commercial center of the Hellenistic world. The Great Library, founded around 295 BCE, became a vast collection of scrolls. The Pharos Lighthouse, completed around 280 BCE, towered over the harbour and was one of the Seven Wonders. The city grew into one of the largest in the ancient world, supported by thriving trade in grain, papyrus, and spices. Alexandria blended Greek, Egyptian, and Jewish cultures, producing the Septuagint translation of the Hebrew Bible.",
    image: "/images/lighthouse.jpg",
  },
  {
    year: "30 BCE",
    title: "Roman annexation",
    desc: "Egypt becomes an imperial province. Alexandria continues as commercial capital.",
    longDesc:
      "After the defeat of Mark Antony and Cleopatra VII at the Battle of Actium, Octavian captured Alexandria in 30 BCE, marking the end of the Ptolemaic dynasty. Alexandria retained its status as a major commercial hub, exporting wheat and papyrus, becoming the second-largest city in the Roman Empire. Roman rule brought infrastructure improvements like aqueducts and baths, but also tensions and conflicts. Christianity spread, with figures like Origen contributing to theological scholarship, though the city faced periodic unrest, including the destruction of parts of the Library during civil conflicts.",
    image: "/images/Ancient-Roman-theater-alexandria.jpg",
  },
  {
    year: "641 CE",
    title: "Arab conquest",
    desc: "Arab forces end Byzantine rule, and the capital of Egypt moves inland to Fustat.",
    longDesc:
      "In 641 CE, Arab forces under Amr ibn al-As took Alexandria, ending Byzantine rule. Islam gradually became the majority religion. The capital of Egypt moved to Fustat, near present-day Cairo, and Alexandria lost its political role, but it remained Egypt's main Mediterranean port for trade with Europe.",
    image: "/images/Sidi-Morsi-Abu-al-Abbas-Mosque-alexandria.jpg",
    imageAlt: "The Abu al-Abbas al-Mursi Mosque, a later landmark of Islamic Alexandria",
  },
  {
    year: "1477–1479",
    title: "Qaitbay builds his citadel",
    desc: "The Mamluk sultan Qaitbay fortifies the harbour on the ruins of the Lighthouse.",
    longDesc:
      "Earthquakes in the 14th century brought down what remained of the Pharos Lighthouse, which had collapsed by 1323. Between 1477 and 1479 the Mamluk sultan al-Ashraf Qaitbay built a fortress on its site at the eastern tip of Pharos island, reusing some of its stone, to guard the harbour against attack from the sea. The Citadel of Qaitbay still stands there today.",
    image: "/images/citadel.jpg",
    imageAlt: "The Citadel of Qaitbay",
  },
  {
    year: "1517",
    title: "Ottoman rule",
    desc: "Egypt becomes an Ottoman province, and Alexandria shrinks to a small port town.",
    longDesc:
      "The Ottomans conquered Egypt in 1517. Under their rule Alexandria remained a port, but trade shifted towards Rosetta and Damietta and the city shrank to a small town around its harbours. It did not grow again until the 19th century.",
    image: "/images/alexandria-castle-egypt.jpg",
    imageAlt: "Fishing boats in the Eastern Harbour below the Citadel of Qaitbay",
  },
  {
    year: "19th–20th Century",
    title: "The cosmopolitan city",
    desc: "Belle époque architecture and large Greek, Italian and other foreign communities.",
    longDesc:
      "Muhammad Ali Pasha modernized Alexandria in the 19th century, attracting European investors. The opening of the Suez Canal in 1869 boosted trade, leading to a boom in Belle Époque architecture. By the late 19th century, Alexandria became a cosmopolitan melting pot with large Greek, Italian, and French communities. It was a hub for finance, culture, and nightlife, home to writers like Constantine Cavafy and Lawrence Durrell. The 1952 Revolution led to nationalization and the exodus of many foreigners.",
    image: "/images/MohamedAli.jpg",
  },
  {
    year: "2002–Present",
    title: "The Bibliotheca and after",
    desc: "The Bibliotheca Alexandrina opens; Alexandria is named a 2025 Mediterranean Capital of Culture.",
    longDesc:
      "In 2002, the Bibliotheca Alexandrina was inaugurated as a modern revival of the ancient Library, designed by Snøhetta. It serves as a library, museum, and cultural center. Alexandria has undergone urban revival, including waterfront redevelopment. In 2024, it was designated as the first Mediterranean Capital of Culture and Dialogue for 2025. This title highlights its historical role in intercultural exchange, with forums, exhibitions, and performances planned to foster Mediterranean collaboration.",
    image: "/images/Alexandria_Bibliotheca.jpg",
  },
];

export const summaryData = {
  title: "Twenty-three centuries on the coast",
  description:
    "From Alexander's foundation to its year as a Mediterranean Capital of Culture, Alexandria has been a port, a seat of learning and a meeting point of cultures for more than twenty-three centuries.",
  pillars: [
    {
      title: "Learning",
      desc: "The Bibliotheca Alexandrina carries on the name of the ancient Library",
    },
    {
      title: "The sea",
      desc: "A coastal city with a character distinct from Egypt's Nile valley",
    },
    {
      title: "Exchange",
      desc: "Named a 2025 Mediterranean Capital of Culture and Dialogue",
    },
  ],
};

export const landmarksData: {
  ancient: Landmark[];
  monuments: Monument[];
  fortifications: Fortification[];
} = {
  ancient: [
    {
      name: "Great Library of Alexandria",
      legacy:
        "Modern Bibliotheca Alexandrina (2002) explicitly revives this heritage, designed to hold millions of books.",
      factId: "bibliothecaCapacity",
      desc: "The ancient world's premier center of knowledge. Ancient sources claim 400,000–700,000 scrolls; modern scholars think far fewer.",
      descFactId: "ancientLibraryScrolls",
      image: "/images/great-library-corven-engraving.jpg",
      caption:
        "19th-century engraving by O. Von Corven: an imagined view of the Great Library, not a photograph. Public domain.",
      credit: {
        author: "O. Von Corven (19th century)",
        license: "Public domain",
        licenseUrl: "https://commons.wikimedia.org/wiki/Template:PD-old",
        source: "https://commons.wikimedia.org/wiki/File:Ancientlibraryalex.jpg",
      },
    },
    {
      name: "Lighthouse of Alexandria (Pharos)",
      legacy:
        "One of the Seven Wonders, estimated at 100–140 metres high.",
      factId: "pharosHeight",
      desc: "Practical maritime navigation combined with monumental architecture. Recent archaeology brought 22 monumental blocks to the surface.",
      descFactId: "pharosBlocks",
      image: "/images/lighthouse.jpg",
    },
    {
      name: "Cleopatra's Palace",
      legacy:
        "Submerged royal quarter discovered in the 1990s, now an underwater archaeological zone.",
      desc: "Exceptional preservation conditions with granite columns retaining tool marks.",
      image: "/images/cleopatra-palace-anterhodos.jpg",
    },
  ],
  monuments: [
    {
      name: "Pompey's Pillar",
      stats:
        "26.85 m red granite column. Erected for Emperor Diocletian, c. 298 CE.",
      factId: "pompeysPillarHeight",
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
      factId: "qaitbayCitadelBuilt",
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

// The UI shows only the first word of `value`, so keep the number first.
const bibliothecaSpecs: FactSpec[] = [
  { label: "Designed to hold (books)", value: "Millions of books", factId: "bibliothecaCapacity" },
  { label: "Reading hall seats", value: `${facts.bibliothecaReadingSeats.value} seats`, factId: "bibliothecaReadingSeats" },
  { label: "Museums", value: `${facts.bibliothecaMuseums.value} museums`, factId: "bibliothecaMuseums" },
  { label: "Annual visitors", value: "1.5M a year", factId: "bibliothecaVisitors" },
];

export const modernInfrastructure = {
  bibliotheca: {
    title: "The Bibliotheca Alexandrina",
    specs: bibliothecaSpecs,
    symbol:
      "The Manuscript Museum holds a copy of Aristotle's Constitution of Athens scroll fragment.",
  },
  corniche: {
    title: "The Corniche",
    length: "A long seafront promenade along the city's waterfront.",
    social:
      "Historic cafés like Athineos, Trianon, and Délices maintain social life along the waterfront.",
    image: "/images/Alexandria-Corniche-alexandria.jpg",
  },
  montaza: {
    title: "Montaza Palace and gardens",
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
    image: "/images/Greco-Roman-Museum-in-Alexandria.jpg",
  },
];

export const culture2025 = {
  title: "2025 Mediterranean Capital of Culture",
  themes: [
    "Youth and digital skills",
    "Creative industries",
    "Bilateral cooperation",
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

// Dish images are AI-generated illustrations (owner's Gemini batch, Oct 2026); show ConceptBadge.
export const culinaryTraditions = {
  seafood:
    "Daily catch from the Mediterranean and Lake Mariout combines Egyptian, Greek, and Levantine techniques.",
  dishes: [
    {
      name: "Sayadieh",
      desc: "Spiced rice with caramelized onions and fish.",
      image: "/images/sayadieh-concept.jpg",
    },
    {
      name: "Shrimp tagine",
      desc: "Shrimp in herb-infused tomato sauce.",
      image: "/images/shrimp-tagine-concept.jpg",
    },
    {
      name: "Grilled mullet (bouri)",
      desc: "Simply grilled whole fish with lemon.",
      image: "/images/grilled-mullet-concept.jpg",
    },
    {
      name: "Grilled calamari",
      desc: "Grilled squid with garlic and herbs.",
      image: "/images/grilled-calamari-concept.jpg",
    },
  ],
};

export const integrationData: {
  architectural: { district: string; style: string }[];
  archaeology: ArchaeologyBlock;
} = {
  architectural: [
    { district: "Downtown", style: "Neoclassical, Art Nouveau, Art Deco" },
    { district: "Anfushi", style: "Islamic monuments, vernacular housing" },
    { district: "Eastern", style: "Modernist towers, resort development" },
  ],
  // The unattributed quote "Old Alexandria is just below your feet." was removed:
  // its source could not be verified.
  archaeology: {
    methods: [
      { label: "Side-scan sonar", desc: "Seafloor mapping" },
      { label: "Magnetometry", desc: "Ferrous materials detection" },
      { label: "ROVs", desc: "Visual survey" },
      { label: "Photogrammetry", desc: "3D modeling" },
    ],
  },
};
