export interface Achievement {
  title: string;
  description: string;
  items: string[];
  stats?: { label: string; value: string }[];
  image: string;
}

export interface GovernorData {
  name: string;
  title: string;
  rank: string;
  born: string;
  education: string;
  appointedDate: string;
  biography: {
    summary: string;
    militaryCareer: string[];
    appointment: string;
  };
  achievements: {
    infrastructure: Achievement;
    sustainability: Achievement;
    publicServices: Achievement;
  };
  vision: {
    tagline: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  quickStats: { label: string; value: string; icon: string }[];
}

export const governorData: GovernorData = {
  name: "Ahmed Khaled Hassan Saeed",
  title: "Governor of Alexandria",
  rank: "Vice-Admiral",
  born: "1961",
  education: "Egyptian Naval Academy (Class of 1983)",
  appointedDate: "July 2024",
  biography: {
    summary:
      "Vice-Admiral Ahmed Khaled Hassan Saeed is a seasoned Egyptian military figure born in 1961. He is a graduate of the Egyptian Naval Academy (class of 1983).",
    militaryCareer: [
      "Commander of the Egyptian Navy (December 2016 – December 2021).",
      "Oversaw strategic military partnerships with the UK and US.",
      "Led joint naval exercises and high-level talks.",
      "Served as Commander of the Strategic Command.",
    ],
    appointment:
      "Following his naval career, he was appointed as Governor of Alexandria by President Abdel Fattah el-Sisi in July 2024.",
  },
  achievements: {
    infrastructure: {
      title: "Mega-Infrastructure & Transport",
      description:
        "Under the Governor’s oversight, Alexandria has entered a significant urban development phase with a focus on large-scale project implementation.",
      items: [
        "63 projects completed (EGP 90.5 billion); 31 projects under implementation.",
        "Approximately 200 km of roads rehabilitated or newly constructed.",
        "Expansion of the Alexandria Corniche covering 117 km.",
        "Abu Qir Metro: Handling 40,000+ passengers per hour.",
        "Raml Tram: Daily capacity increased from 80,000 to 450,000 passengers.",
      ],
      stats: [
        { label: "Completed Projects", value: "63" },
        { label: "Road Rehab", value: "200km" },
        { label: "Metro Capacity", value: "40k/hr" },
      ],
      image: "/images/roads.jpg",
    },
    sustainability: {
      title: "Environmental Sustainability",
      description:
        "Aggressive push toward 'green mobility' and energy rationalization to make Alexandria a smart city.",
      items: [
        "Fleet of 55 electric buses currently in operation.",
        "Conversion of 200 diesel buses to natural gas (scheduled July 2025).",
        "40% reduction in energy consumption from lighting poles.",
        "10% energy reduction from luminous advertising boards.",
        "Strict enforcement via fines for energy violations.",
      ],
      stats: [
        { label: "Electric Buses", value: "55" },
        { label: "Energy Cut", value: "40%" },
        { label: "Conversion", value: "200 buses" },
      ],
      image: "/images/bus-elc.png",
    },
    publicServices: {
      title: "Public Services & Quality of Life",
      description:
        "Upgrading essential services, beach facilities, and economic relief for citizens.",
      items: [
        "Enhanced Beach Readiness: Life-guard training and electronic booking system.",
        "Cleanliness: 99.96% completion rate in spatial change monitoring system.",
        "Economic Relief: Expansion of 'one-day markets' for affordable basic goods.",
        "Education: Upgraded and maintained school infrastructure.",
      ],
      stats: [
        { label: "Monitoring Rate", value: "99.96%" },
        { label: "Spatial Changes", value: "56,400+" },
        { label: "Markets", value: "City-wide" },
      ],
      image: "/images/plaza.jpg",
    },
  },
  vision: {
    tagline: "Building Value and Improving Quality of Life",
    pillars: [
      {
        title: "Comprehensive and Sustainable Development",
        description:
          "Enhance Alexandria’s historical status as a regional and global hub while preserving its cultural character.",
      },
      {
        title: "Smart City Transformation",
        description:
          "Making Alexandria the leading smart city in Egypt through digital infrastructure and asset optimization.",
      },
      {
        title: "International Cooperation",
        description:
          "Pursuing cooperation with international donors for health, education, and infrastructure projects.",
      },
      {
        title: "Social Equity & Housing",
        description:
          "Surveying land for 60,000 new housing units to relocate residents from unsafe buildings.",
      },
    ],
  },
  quickStats: [
    { label: "Projects Completed", value: "63", icon: "Building" },
    { label: "Roads Built", value: "200km", icon: "Route" },
    { label: "Investments", value: "EGP 90.5B", icon: "DollarSign" },
    { label: "Energy Savings", value: "40%", icon: "Zap" },
  ],
};
