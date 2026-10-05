// Freely licensed photos for the news blog (Wikimedia Commons). They show the place
// or subject a story is about, never the reported event itself, and never come
// from the news outlet. Each one is also listed in docs/image-credits.md.

export interface NewsImage {
  readonly src: string;
  readonly alt: string;
  readonly author: string;
  /** e.g. "CC BY-SA 4.0" */
  readonly license: string;
  readonly licenseUrl?: string;
  /** Commons file page. */
  readonly source: string;
  readonly width: number;
  readonly height: number;
}

export const newsImages: Readonly<Record<string, NewsImage>> = {
  "raml-tram": {
    src: "/images/news/raml-tram.jpg",
    alt: "Two blue-and-cream Alexandria trams at Raml Station",
    author: "Bilal Detailz",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:TRAM_at_RAML_STATION.jpg",
    width: 1600,
    height: 823,
  },
  "rail": {
    src: "/images/news/rail.jpg",
    alt: "Misr railway station area in central Alexandria",
    author: "Abdelrhman 1990",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Mahatat_Misr,_Alexandria.jpg",
    width: 1600,
    height: 900,
  },
  "port": {
    src: "/images/news/port.jpg",
    alt: "General view of the Port of Alexandria",
    author: "Abdelrhman 1990",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Alexandria_Port.jpg",
    width: 1600,
    height: 900,
  },
  "industry": {
    src: "/images/news/industry.jpg",
    alt: "A factory building in New Borg El Arab industrial city",
    author: "Abdelrhman 1990",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Farag_Allah_factory_2.jpg",
    width: 1600,
    height: 903,
  },
  "library": {
    src: "/images/news/library.jpg",
    alt: "Bibliotheca Alexandrina exterior and outer pool",
    author: "Vyacheslav Argenberg",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Egypt,_Alexandria,_Bibliotheca_Alexandrina.jpg",
    width: 1600,
    height: 1067,
  },
  "corniche": {
    src: "/images/news/corniche.jpg",
    alt: "The Alexandria Corniche and its seawall",
    author: "Abdelrhman 1990",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Corniche_of_Alexandria.jpg",
    width: 1600,
    height: 903,
  },
  "beach": {
    src: "/images/news/beach.jpg",
    alt: "Stanley Beach with beach cabins seen from Stanley Bridge",
    author: "Leonard J. DeFrancisci",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Stanley_Beach_in_Alexandria.jpg",
    width: 1600,
    height: 906,
  },
  "archaeology": {
    src: "/images/news/archaeology.jpg",
    alt: "Kom el-Dikka area including the Roman theatre",
    author: "Abdelrhman 1990",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Kom_el-Dikka,_Alexandria.jpg",
    width: 1600,
    height: 900,
  },
  "hospital": {
    src: "/images/news/hospital.jpg",
    alt: "Alexandria University Faculty of Medicine entrance",
    author: "Abdelrhman 1990",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Faculty_of_Medicine,_Alexandria_University.jpg",
    width: 1280,
    height: 722,
  },
  "city": {
    src: "/images/news/city.jpg",
    alt: "Saad Zaghloul Square with palms and the Saad Zaghloul monument",
    author: "Maher27777",
    license: "Public domain",
    licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Licensing#Public_domain",
    source: "https://commons.wikimedia.org/wiki/File:Saad_Zaghloul_sqaure_Alexandria.jpg",
    width: 1280,
    height: 1024,
  },
};
