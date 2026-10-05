// Governor content for an unofficial fan-made site.
// Every fact below comes from one of the sources listed in `sources`.
// Do not add biography details, figures or quotes without a source.

export interface SourceLink {
  label: string;
  url: string;
}

/** One dated line of the tenure record; `sourceUrls` point into `sources`. */
export interface RecordEntry {
  /** Display date, as precise as the source allows. */
  date: string;
  title: string;
  text: string;
  sourceUrls: string[];
}

export interface GovernorData {
  name: string;
  honorific: string;
  title: string;
  appointedDate: string;
  tenure: string;
  background: string;
  previousGovernorNote: string;
  biography: {
    summary: string;
    career: string[];
  };
  /** Oldest first. */
  record: RecordEntry[];
  recordIntro: string;
  sources: SourceLink[];
  asOf: string;
}

export const governorData: GovernorData = {
  name: "Ayman Mohamed Ibrahim Attia",
  honorific: "Eng.",
  title: "Governor of Alexandria",
  appointedDate: "16 February 2026",
  tenure: "Since February 2026",
  background: "Engineer, former Governor of Qalyubia",
  previousGovernorNote:
    "Previous governor: Vice-Admiral Ahmed Khaled Hassan Saeed (July 2024 – February 2026).",
  biography: {
    summary:
      "Ayman Attia is an engineer who graduated in architectural engineering from Alexandria University's Faculty of Engineering in 1997. Before coming to Alexandria he served as Governor of Qalyubia.",
    career: [
      "Graduated with a bachelor's degree in architectural engineering from Alexandria University in 1997.",
      "According to Al-Dostor, he has more than 27 years of experience in construction engineering and the management of major national projects.",
      "Held leadership positions at Arab Contractors, including membership of the company's board, and headed its Alexandria sector.",
      "Projects he worked on, as reported by Al-Dostor, include the Julius Nyerere Dam in Tanzania, bridges and tunnels in Alexandria, marine protection works along the Corniche and the construction of Borg El Arab Stadium.",
    ],
  },
  recordIntro:
    "Dated entries drawn from the sources below. Reported activity is paraphrased from Egyptian news coverage, not from the governorate.",
  record: [
    {
      date: "July 2024",
      title: "Sworn in as Governor of Qalyubia",
      text: "Sworn in as Governor of Qalyubia before President Abdel Fattah El-Sisi.",
      sourceUrls: [
        "https://arabcont.com/English/Release-2024-2050",
        "https://egyptianstreets.com/2024/07/04/egypt-announces-new-governors-for-cairo-alexandria-and-other-cities/",
      ],
    },
    {
      date: "16 February 2026",
      title: "Sworn in as Governor of Alexandria",
      text: "He was sworn in as Governor of Alexandria before President Abdel Fattah El-Sisi, having previously served as Governor of Qalyubia. According to Al-Dostor, on taking office he pledged to put serving citizens first and to respond quickly to residents' needs.",
      sourceUrls: ["https://www.dostor.org/5422366"],
    },
    {
      date: "23 February 2026",
      title: "Citizen services",
      text: "A week after taking office he inspected the governorate's citizen-service department and an Egypt Services centre.",
      sourceUrls: ["https://www.dostor.org/5431175"],
    },
    {
      date: "24 February 2026",
      title: "Urgent executive plans",
      text: "At his first meeting with executive leaders, Al-Dostor reports that he called for urgent plans on sanitation, street discipline and removing violations, protecting farmland from encroachment, and emergency readiness, together with stepped-up market inspections.",
      sourceUrls: ["https://www.dostor.org/5432121"],
    },
    {
      date: "July 2026",
      title: "Cleanliness and waste",
      text: "According to Al-Ahram Gate, he met the Minister of Local Development and Environment to review waste management in Alexandria, which the report says produces about 6,000 tonnes of waste a day.",
      sourceUrls: ["https://gate.ahram.org.eg/News/5769800.aspx"],
    },
  ],
  sources: [
    {
      label: "Al-Dostor: new governor's first statement (16 Feb 2026, Arabic)",
      url: "https://www.dostor.org/5422366",
    },
    {
      label: "Al-Dostor: new governor takes up his duties (Feb 2026, Arabic)",
      url: "https://www.dostor.org/5422613",
    },
    {
      label: "Al-Dostor: inspection of citizen services (23 Feb 2026, Arabic)",
      url: "https://www.dostor.org/5431175",
    },
    {
      label: "Al-Dostor: first meeting with executive leaders (24 Feb 2026, Arabic)",
      url: "https://www.dostor.org/5432121",
    },
    {
      label: "Al-Ahram Gate: cleanliness meeting in Alexandria (13 Jul 2026, Arabic)",
      url: "https://gate.ahram.org.eg/News/5769800.aspx",
    },
    {
      label: "Arab Contractors: Ayman Attia sworn in as Governor of Qalyubia (4 Jul 2024)",
      url: "https://arabcont.com/English/Release-2024-2050",
    },
    {
      label: "Egyptian Streets: Egypt announces new governors (4 Jul 2024)",
      url: "https://egyptianstreets.com/2024/07/04/egypt-announces-new-governors-for-cairo-alexandria-and-other-cities/",
    },
  ],
  asOf: "2026-10",
};
