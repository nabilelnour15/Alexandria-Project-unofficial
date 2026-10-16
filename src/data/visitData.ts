import { 
  Plane, Train, Bus, Car, 
  MapPin, Camera, ShoppingBag, 
  Landmark, BookOpen, GraduationCap, 
  Briefcase, Sun,
  type LucideIcon,
} from 'lucide-react';
import type { FactId } from './facts';

// Optional `factId` fields point at an entry in ./facts so the UI can show a source chip.
// They are typed as FactId, so a typo fails to compile.

export interface TransportItem {
  type: string;
  icon: LucideIcon;
  description: string;
  factId?: FactId;
}

export interface TransportTab {
  id: string;
  label: string;
  content: TransportItem[];
}

export interface Attraction {
  name: string;
  desc: string;
  location: string;
  image: string;
  factId?: FactId;
}

export interface AttractionCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  items: Attraction[];
}

export const climateData = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  // 1991–2020 normals for El Nouzha (WMO 62318), see facts.climateNormals.
  highs: [18.4, 19.0, 21.1, 24.1, 26.9, 29.1, 30.5, 31.0, 30.2, 27.8, 24.0, 20.1],
  lows: [9.5, 9.7, 11.8, 14.3, 17.8, 21.7, 23.9, 24.4, 22.5, 19.3, 15.1, 11.1],
  precipitation: [61.4, 35.2, 12.8, 2.6, 1.0, 0, 0, 0, 0.8, 8.3, 36.8, 52.7],
  /** Months the description below recommends (spring and autumn). */
  bestMonths: ['Mar', 'Apr', 'May', 'Jun', 'Sep', 'Oct', 'Nov'],
  seaTemp: [18, 17, 17, 18, 20, 23, 25, 26, 26, 25, 22, 20],
  description: "Alexandria has a hot desert climate (BWh), but highly influenced by sea breeze. Summers are sunny, hot (highs around 30–31°C) and humid, though evenings are breezy. Winters are mild (lows around 10–12°C), and most of the year's rain falls from November to February. Best time to visit is spring (March–June) and autumn (September–November)."
};

export const transportTabs: TransportTab[] = [
  {
    id: 'get-in',
    label: 'Getting in',
    content: [
      {
        type: 'By plane',
        icon: Plane,
        description: 'Borg el Arab (HBE) is 45km SW. No public transport; taxis cost LE400+ and take 60-90 min. Serves Cairo, Luxor, Gulf States, and Istanbul.'
      },
      {
        type: 'By train',
        icon: Train,
        description: 'Frequent AC trains from Cairo. "Specials" take 2.5hrs. Tickets are priced in EGP and vary by class; check Egyptian National Railways for current fares. Arrive Misr Station (Downtown) or Sidi Gaber.'
      },
      {
        type: 'By bus',
        icon: Bus,
        description: 'Operators include Go Bus, West Delta, Super Jet (LE100-300). Main station is Moharam Bek, but some stop at Sidi Gaber.'
      },
      {
        type: 'By car',
        icon: Car,
        description: 'Agriculture Road (90km/h, crowded) or Desert Road (100km/h, faster). Both routes take approx 3 hours from Cairo.'
      }
    ]
  },
  {
    id: 'get-around',
    label: 'Getting around',
    content: [
      {
        type: 'Taxi & rideshare',
        icon: Car,
        description: 'Yellow/black taxis are unmetered; agree on fare first. Uber and Careem are available (Careem requires local #).'
      },
      {
        type: 'Tram',
        icon: Train,
        description: 'Blue (Raml) and Yellow (City) lines. The Raml line has run since 1863 (horse-drawn at first) and is being modernised. Fares are low and paid in EGP on board. First car in Blue trams is women-only.',
        factId: 'ramlTramOpened'
      },
      {
        type: 'Bus & minibus',
        icon: Bus,
        description: '14-person microbuses operate on hop-and-go basis. Confusing for non-locals; rely on hand signals or destination shouts.'
      },
      {
        type: 'Walking',
        icon: MapPin,
        description: 'The long seafront Corniche is perfect for walking. Downtown/Bahari areas are very walkable.'
      }
    ]
  }
];

export const attractionCategories: AttractionCategory[] = [
  {
    id: "historical",
    label: "Historical",
    icon: Landmark,
    items: [
      {
        name: "Citadel of Qaitbay",
        desc: "Fortress built 1477–1479 on the Pharos site. Maritime Museum inside. LE150 foreigners.",
        location: "Anfushi",
        factId: "qaitbayCitadelBuilt",
        image: "/images/citadel.jpg",
      },
      {
        name: "Catacombs of Kom el Shoqafa",
        desc: 'Roman burial site, "Mound of Shards". Deep spiral stairway. LE150.',
        location: "Karmouz",
        image: "/images/the-tombs-of-Kom-el-Shoqafa.jpg",
      },
      {
        name: "Pompey's Pillar",
        desc: "26.85 m granite column for Diocletian (c. 298 CE). LE150.",
        location: "Karmouz",
        factId: "pompeysPillarHeight",
        image: "/images/Serapeum-of-Alexandria.jpg",
      },
      {
        name: "Roman Amphitheatre",
        desc: "Kom el-Dikka. Marble seating for 800, Villa of the Birds mosaics. LE150.",
        location: "Kom el-Dikka",
        image: "/images/Ancient-Roman-theater-alexandria.jpg",
      },
      {
        name: "Montaza Palace",
        desc: "Royal gardens (LE25 entry) and palace complex (Salamlek hotel).",
        location: "Montaza",
        image: "/images/A-wonderful-picture-of-Montazah-Palace.jpg",
      },
      {
        name: "Ras El-Tin Palace",
        desc: "Oldest royal palace in Egypt (Exterior/Gardens only).",
        location: "Western Harbor",
        image: "/images/Ras-El-Tin-Palace-Alexandria-Egypt.jpg",
      },
    ],
  },
  {
    id: "museums",
    label: "Museums",
    icon: BookOpen,
    items: [
      {
        name: "Alexandria National Museum",
        desc: "1800+ pieces, Pharaonic to Islamic. LE100.",
        location: "Tariq el-Horreyya",
        image: "/images/The-National-Museum-from-the-outside-in.jpg",
      },
      {
        name: "Graeco-Roman Museum",
        desc: "Vast collection (3rd century BCE – 3rd century CE). LE150.",
        location: "Latin Quarter",
        image: "/images/Greco-Roman-Museum-in-Alexandria.jpg",
      },
      {
        name: "Royal Jewelry Museum",
        desc: "Opulent jewelry of the Muhammad Ali Dynasty.",
        location: "Zizenia",
        image: "/images/Royal-Jewelery-Museum.jpg",
      },
      {
        name: "Cavafy Museum",
        desc: "House of the Greek-Alexandrian poet. Reopened in May 2024 after restoration by the Onassis Foundation.",
        factId: "cavafyReopened",
        location: "Downtown",
        image: "/images/Cavafy-Museum.jpg",
      },
      {
        name: "Museum of Fine Arts",
        desc: "Features works by Egyptian and Middle Eastern artists.",
        location: "Moharam Bek",
        image: "/images/AlexFineArtsMuseum.jpg",
      },
    ],
  },
  {
    id: "religious",
    label: "Religious",
    icon: Sun,
    items: [
      {
        name: "El-Mursi Abul-Abbas Mosque",
        desc: "Stunning mosque with 73m minaret over a Sufi saint's tomb.",
        location: "Anfushi",
        image: "/images/Sidi-Morsi-Abu-al-Abbas-Mosque-alexandria.jpg",
      },
      {
        name: "Eliyahu Hanavi Synagogue",
        desc: "Neo-Gothic synagogue standing since 1850.",
        location: "Nabi Daniel St",
        image: "/images/Eliyahu-Hanavi-Synagogue.jpg",
      },
      {
        name: "St. Mark's Cathedral",
        desc: "Historical seat of the Coptic Orthodox Pope.",
        location: "Raml Station",
        image: "/images/St-Mark-Cathedral.jpg",
      },
    ],
  },
  {
    id: "modern",
    label: "Modern",
    icon: Camera,
    items: [
      {
        name: "Bibliotheca Alexandrina",
        desc: "Opened 2002. Massive library, planetarium, antiquities museum. LE150 foreigners.",
        location: "Shatby",
        factId: "bibliothecaOpened",
        image: "/images/Alexandria_Bibliotheca.jpg",
      },
      {
        name: "Stanley Bridge",
        desc: "Iconic bridge with panoramic sea views.",
        location: "Stanley",
        image: "/images/Stanley-Bridge-alexandria.jpg",
      },
      {
        name: "Planetarium Science Center",
        desc: "Neon-lit spherical theater inside the Library complex.",
        location: "Shatby",
        image: "/images/PL.jpg",
      },
    ],
  },
];

export const activitiesData = [
  {
    title: 'Do',
    icon: Camera,
    items: ['Double Decker Bus (Corniche LE25)', 'Montaza Royal Gardens', 'Diving (Sunken Cities/Cleopatra Palace)', 'Cinema (Renaissance Royal)', 'Boat Ride at Ras El-Tin'],
  },
  {
    title: 'Buy',
    icon: ShoppingBag,
    items: ['Souq El-Attarine (Antiques)', 'Zan\'et El-Sittat (Fabrics/Souvenirs)', 'City Centre Alexandria (Mall)', 'San Stefano Grand Plaza', 'Local Bookshops (Nabi Daniel)'],
  },
  {
    title: 'Learn',
    icon: GraduationCap,
    items: ['Goethe-Institut', 'Institut Français', 'Bibliotheca Alexandrina', 'Arabic Calligraphy Museum'],
  },
  {
    title: 'Work',
    icon: Briefcase,
    items: ['Workstation (Smouha)', 'Mind Yard (Coworking)', 'Espresso Lab (Cafe/Work)', 'Natural gas sector', 'International schools'],
  }
];

export const diningTiers = [
  { key: 'budget', label: 'Budget' },
  { key: 'midRange', label: 'Mid-range' },
  { key: 'splurge', label: 'Splurge' },
] as const;

export const diningData = {
  budget: [
    { name: 'Foul Mohamed Ahmed', desc: 'Legendary fuul and falafel.' },
    { name: 'Tawn Coffee Shop', desc: 'Great Corniche views, budget friendly.' },
    { name: 'Asmak Shabaan', desc: 'Great seafood in Al Max.' },
    { name: 'Alban Swissra', desc: 'Famous for melted cheese dishes.' },
    { name: 'Gad', desc: 'Reliable local chain for shawarma and grills.' }
  ],
  midRange: [
    { name: 'Trianon', desc: 'Historic 1905 cafe/pastry shop.' },
    { name: 'Chicken Tikka', desc: 'Grills with harbour view.' },
    { name: 'Balbaa Village', desc: 'Famous for huge meat and seafood feasts.' },
    { name: 'Chez Gaby', desc: 'Cozy, classic Italian bistro in Downtown.' },
    { name: 'Fish Market', desc: 'Stunning harbour views and fresh catch.' }
  ],
  splurge: [
    { name: 'White and Blue (Greek Club)', desc: 'Terrace overlooking the eastern harbour.' },
    { name: 'San Giovanni', desc: 'Classic hotel dining by the sea.' },
    { name: 'Four Seasons Restaurants', desc: 'Upscale Middle Eastern & International.' },
    { name: 'Santa Lucia', desc: 'Elegant 1930s interiors and fine dining.' },
    { name: 'Sea Gull', desc: 'Top-tier seafood dining in El-Max.' }
  ]
};

export const accommodationData = [
  {
    category: 'Budget',
    options: [
      { name: 'Triomphe Hotel', desc: 'Decent choice with nice lobby.' },
      { name: 'Normandy Hotel', desc: 'Unbeatable harbour views.' },
      { name: 'Ithaka Hostel', desc: 'Friendly seaside hostel.' },
      { name: 'Alexander the Great Hotel', desc: 'Central, clean, and affordable.' }
    ]
  },
  {
    category: 'Mid-range',
    options: [
      { name: 'Steigenberger Cecil', desc: 'Grand old hotel, central location.' },
      { name: 'Le Metropole', desc: 'Turn-of-the-century style, rooftop views.' },
      { name: 'Paradise Inn', desc: 'Classic charm on the Corniche.' },
      { name: 'Windsor Palace', desc: 'Historic hotel with rooftop Blue Harbor cafe.' },
      { name: 'Romance Alexandria', desc: 'Seafront hotel in Saba Pasha.' }
    ]
  },
  {
    category: 'Splurge',
    options: [
      { name: 'Four Seasons San Stefano', desc: 'Upscale resort with private beach.' },
      { name: 'Helnan Palestine', desc: 'Facing Montaza Royal Palace gardens.' },
      { name: 'Hilton Corniche', desc: 'Modern luxury with sea views.' },
      { name: 'Sunrise Alex Avenue', desc: 'Beachfront luxury with multiple pools.' },
      { name: 'Hilton Green Plaza', desc: 'Inside the mall complex, great for business.' }
    ]
  }
];