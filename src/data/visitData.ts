import { 
  Plane, Train, Bus, Car, 
  MapPin, Camera, ShoppingBag, 
  Landmark, BookOpen, GraduationCap, 
  Sun,
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
  /** Official page with current tickets and hours. Link out instead of quoting prices, which go stale. */
  infoUrl?: string;
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
        description: 'Borg El Arab Airport (HBE) is about 40 km south-west of the city, with flights mainly to the Gulf, Saudi Arabia, Turkey and Cairo. Most visitors take a taxi or a ride-hailing car into town; agree the fare first.',
        factId: 'airportDistance'
      },
      {
        type: 'By train',
        icon: Train,
        description: 'Frequent air-conditioned trains run from Cairo, arriving at Misr Station (downtown) or Sidi Gaber. Journey times and fares depend on the train; check Egyptian National Railways before you travel.'
      },
      {
        type: 'By bus',
        icon: Bus,
        description: 'Intercity operators include Go Bus, West Delta and Super Jet. Check the operator for current fares and where it stops.'
      },
      {
        type: 'By car',
        icon: Car,
        description: 'Two main roads link Cairo and Alexandria: the Agricultural Road through the Delta, which is busier, and the faster Desert Road. Follow the posted speed limits.'
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
        description: 'Many street taxis do not use the meter, so agree the fare before you set off. Ride-hailing apps also operate in the city.'
      },
      {
        type: 'Tram',
        icon: Train,
        description: 'The trams, including the Raml line that had run since 1863, stopped in 2026 while the line is rebuilt as a modern light-rail line. Replacement buses run along the Raml route until it reopens.',
        factId: 'ramlTramSuspended'
      },
      {
        type: 'Bus & minibus',
        icon: Bus,
        description: 'Shared microbuses run along the main roads and stop on request. Routes are not signposted, so they are hard to use without local help.'
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
        desc: "Fortress built 1477–1479 on the site of the Pharos, with a maritime museum inside.",
        location: "Anfushi",
        factId: "qaitbayCitadelBuilt",
        infoUrl: "https://egymonuments.gov.eg/monuments/qaitbay-fort/",
        image: "/images/citadel.jpg",
      },
      {
        name: "Catacombs of Kom el Shoqafa",
        desc: 'Roman catacombs of the 2nd century CE (the name means "Mound of Shards"), reached by a deep spiral stairway.',
        location: "Karmouz",
        infoUrl: "https://egymonuments.gov.eg/en/archaeological-sites/alexandria",
        image: "/images/the-tombs-of-Kom-el-Shoqafa.jpg",
      },
      {
        name: "Pompey's Pillar",
        desc: "26.85 m granite column for Diocletian (c. 298 CE).",
        location: "Karmouz",
        factId: "pompeysPillarHeight",
        infoUrl: "https://egymonuments.gov.eg/en/archaeological-sites/alexandria",
        image: "/images/Serapeum-of-Alexandria.jpg",
      },
      {
        name: "Roman Theatre",
        desc: "A small Roman theatre with thirteen tiers of seats, beside the Villa of the Birds mosaics.",
        location: "Kom el-Dikka",
        infoUrl: "https://egymonuments.gov.eg/en/archaeological-sites/kom-el-dikka",
        image: "/images/Ancient-Roman-theater-alexandria.jpg",
      },
      {
        name: "Montaza Palace",
        desc: "Royal palace complex in large seaside gardens, which are open to visitors.",
        location: "Montaza",
        image: "/images/A-wonderful-picture-of-Montazah-Palace.jpg",
      },
      {
        name: "Ras El-Tin Palace",
        desc: "The oldest royal palace in Egypt still in use, now a presidential residence. The palace is closed to visitors.",
        location: "Western Harbour",
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
        desc: "Pharaonic to modern collections in the former palace of Asaad Basili Pasha, opened as a museum in 2003.",
        location: "Tariq el-Horreyya",
        infoUrl: "https://egymonuments.gov.eg/museums/alexandria-national-museum/",
        image: "/images/The-National-Museum-from-the-outside-in.jpg",
      },
      {
        name: "Graeco-Roman Museum",
        desc: "Hellenistic and Roman collections, reopened in 2023 after almost 18 years of restoration.",
        factId: "graecoRomanReopened",
        location: "Latin Quarter",
        infoUrl: "https://egymonuments.gov.eg/en/museums/graeco-roman-museum",
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
        desc: "Mosque over the tomb of a 13th-century Sufi saint. The present building and its 73 m minaret date from the 1940s.",
        factId: "mursiMinaret",
        location: "Anfushi",
        image: "/images/Sidi-Morsi-Abu-al-Abbas-Mosque-alexandria.jpg",
      },
      {
        name: "Eliyahu Hanavi Synagogue",
        desc: "19th-century synagogue, restored and reopened in 2020.",
        factId: "eliyahuReopened",
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
        desc: "Opened 2002. Library, planetarium and antiquities museum.",
        location: "Shatby",
        factId: "bibliothecaOpened",
        infoUrl: "https://www.bibalex.org/libraries/Presentation/Static/15510.aspx",
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
    items: ['Double-decker bus along the Corniche', 'Montaza Royal Gardens', 'Diving (Sunken Cities/Cleopatra Palace)', 'Cinema (Renaissance Royal)', 'Boat Ride at Ras El-Tin'],
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
    { name: 'Asmak Shabaan', desc: 'Great seafood in Al Max.' },
    { name: 'Alban Swesra', desc: 'Small, busy spot famous for melted cheese dishes.' },
    { name: 'Gad', desc: 'Big local chain for sandwiches, ta’ameya and grills.' }
  ],
  midRange: [
    { name: 'Trianon', desc: 'Historic café and pastry shop at Raml Station, reportedly from 1905.' },
    { name: 'Tikka Grill', desc: 'Grills with a sea view, in the Fish Market building on the Corniche.' },
    { name: 'Balbaa Village', desc: 'Huge meat and seafood feasts, in Sidi Bishr.' },
    { name: 'Chez Gaby', desc: 'Cosy family-run Italian taverna downtown.' },
    { name: 'Fish Market', desc: 'Seafood priced by weight, with harbour views near Qaitbay.' },
    { name: 'San Giovanni', desc: 'Hotel restaurant by the sea at Stanley.' }
  ],
  splurge: [
    { name: 'White and Blue (Greek Club)', desc: 'Seafood and Greek dishes on a terrace over the Eastern Harbour.' },
    { name: 'Four Seasons San Stefano', desc: 'Several restaurants and cafés in the San Stefano hotel.' },
    { name: 'Santa Lucia', desc: 'Long-standing downtown restaurant, reportedly from the 1930s. Check it is open before you go.' },
    { name: 'Sea Gull', desc: 'Large seafood restaurant in El Max.' }
  ]
};

export const accommodationData = [
  {
    category: 'Budget',
    options: [
      { name: 'Triomphe Hostel', desc: 'Simple hostel near Raml Station.' },
      { name: 'Ithaka Hostel', desc: 'Hostel in central Raml.' },
      { name: 'Alexander the Great Hotel', desc: 'Budget hotel near Misr Station.' }
    ]
  },
  {
    category: 'Mid-range',
    options: [
      { name: 'Steigenberger Cecil', desc: 'Grand 1929 hotel on Saad Zaghloul Square.' },
      { name: 'Le Metropole', desc: 'Heritage hotel from 1902 near the Corniche, run by Paradise Inn.' },
      { name: 'Windsor Palace', desc: 'Heritage hotel from 1906 near Raml Station, run by Paradise Inn.' },
      { name: 'Romance Alexandria', desc: 'Seafront hotel in Saba Pasha.' }
    ]
  },
  {
    category: 'Splurge',
    options: [
      { name: 'Four Seasons San Stefano', desc: 'Upscale seafront hotel with a private beach.' },
      { name: 'Helnan Royal Palestine', desc: 'In the grounds of Montaza Palace.' },
      { name: 'Hilton Alexandria Corniche', desc: 'On the Corniche in Sidi Bishr, facing the sea.' },
      { name: 'Sunrise Alex Avenue', desc: 'Seafront hotel with a private beach.' },
      { name: 'Hilton Alexandria Green Plaza', desc: 'Business hotel connected to a large mall in Smouha.' }
    ]
  }
];