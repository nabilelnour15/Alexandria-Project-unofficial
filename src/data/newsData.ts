import type { NewsArticle } from '../types/news';

export const newsData: NewsArticle[] = [
  {
    id: '1',
    title: 'Alexandria International Film Festival Returns',
    summary: 'The 40th edition of the festival brings cinema stars from around the Mediterranean to our historic city.',
    content: `
      <p>The Alexandria International Film Festival for Mediterranean Countries is back for its 40th edition, promising a spectacular week of cinema, culture, and star-studded events.</p>
      <p>This year's festival will feature over 80 films from 15 different countries, highlighting the rich cultural tapestry of the Mediterranean region. Screenings will be held at the historic Bibliotheca Alexandrina and various cultural centers across the city.</p>
      <h3>Festival Highlights</h3>
      <ul>
        <li>Opening ceremony at the Alexandria Opera House</li>
        <li>Special tribute to Egyptian cinema legends</li>
        <li>Masterclasses with renowned directors</li>
        <li>Open-air screenings by the sea</li>
      </ul>
      <p>Governor Ahmed Khaled announced that the city is fully prepared to host the thousands of visitors expected to attend. "This festival is a testament to Alexandria's enduring status as a beacon of art and culture," he stated.</p>
    `,
    category: 'Culture',
    tags: ['Cinema', 'Festival', 'Events', 'Arts'],
    author: 'Sarah Ahmed',
    publishDate: '2025-10-15',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop',
    isHot: true,
  },
  {
    id: '2',
    title: 'New Eco-Friendly Tram Layout Unveiled',
    summary: 'The city announces a major renovation project for the historic Raml Station tram line.',
    content: `
      <p>In a bid to modernize public transport while preserving heritage, the Alexandria Governorate has unveiled plans for the renovation of the historic Raml Station tram line.</p>
      <p>The new "Blue Tram" project aims to introduce eco-friendly, air-conditioned carriages that retain the vintage aesthetic of Alexandria's iconic yellow trams. The project also includes upgrading the tracks and stations to improve safety and efficiency.</p>
      <p>"We are committed to sustainable urban development," said the Head of the Public Transport Authority. "This project will reduce traffic congestion and carbon emissions while enhancing the commuter experience."</p>
    `,
    category: 'Infrastructure',
    tags: ['Transport', 'Sustainability', 'Development'],
    author: 'Mohamed Ali',
    publishDate: '2025-10-10',
    image: 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=2670&auto=format&fit=crop', // Tram/Train image
    isHot: false,
  },
  {
    id: '3',
    title: 'Bibliotheca Alexandrina Hosts Global Tech Summit',
    summary: 'Tech leaders converge in Alexandria to discuss the future of AI and digital heritage.',
    content: `
      <p>The Bibliotheca Alexandrina (BA) is set to host the "Mediterranean Tech Summit," bringing together technology leaders, startups, and researchers from across the globe.</p>
      <p>The summit will focus on the intersection of Artificial Intelligence and cultural heritage preservation. Keynote speakers include executives from major tech firms and professors from leading universities.</p>
      <p>Dr. Ahmed Zayed, Director of the BA, emphasized the library's role as a bridge between the past and the future. "By embracing new technologies, we can better preserve and share our collective human history," he remarked.</p>
    `,
    category: 'Technology',
    tags: ['Tech', 'AI', 'Bibliotheca Alexandrina', 'Conference'],
    author: 'Nour El-Din',
    publishDate: '2025-10-05',
    image: 'https://images.unsplash.com/photo-1561494576-69666270a305?q=80&w=2670&auto=format&fit=crop', // Library interior
    isHot: true,
  },
  {
    id: '4',
    title: 'Restoration of the Greco-Roman Museum Completed',
    summary: 'After years of renovation, the museum reopens its doors to showcase thousands of artifacts.',
    content: `
      <p>History enthusiasts rejoice! The Greco-Roman Museum in Alexandria has officially reopened following a comprehensive restoration project lasting several years.</p>
      <p>The updated museum features state-of-the-art display cases, improved lighting, and a new layout that chronologically guides visitors through Alexandria's Greco-Roman period. Over 10,000 artifacts are on display, many for the first time.</p>
      <p>Entry is now free for students for the first month to encourage youth engagement with their heritage.</p>
    `,
    category: 'History',
    tags: ['Museum', 'Heritage', 'Tourism'],
    author: 'Laila Hassan',
    publishDate: '2025-09-28',
    image: 'https://images.unsplash.com/photo-1544212260-449e3bf8922c?q=80&w=2670&auto=format&fit=crop', // Museum/Classical art
    isHot: false,
  },
  {
    id: '5',
    title: 'Winter Tourism Season Kickoff',
    summary: 'Hotels and resorts prepare for a busy winter season with special Mediterranean packages.',
    content: `
      <p>As the summer heat fades, Alexandria prepares for its charming winter season. The Ministry of Tourism has launched a new campaign, "Alexandria in Winter," to attract visitors who enjoy the city's rainy, romantic atmosphere.</p>
      <p>Hotels along the Corniche are offering special packages included heated pools, spa treatments, and guided tours of indoor attractions like the Opera House and museums.</p>
    `,
    category: 'Tourism',
    tags: ['Travel', 'Winter', 'Hotels'],
    author: 'Karim Omar',
    publishDate: '2025-11-01',
    image: 'https://images.unsplash.com/photo-1500326463991-38290f653457?q=80&w=2670&auto=format&fit=crop', // Moody sea/winter
    isHot: false,
  },
];
