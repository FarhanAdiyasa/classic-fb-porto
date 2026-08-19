export const EXPERIENCES = [
  {
    company: "PT PAM Jaya DKI JAKARTA",
    role: "Fullstack Developer, Full-time",
    period: "July 2025 - Present",
    desc: "Leading the development of key modules for an integrated IT Helpdesk platform, architecting the system with Spring Boot for core backend services and utilizing Laravel as an API Gateway to manage requests. Contributing to the development of a transaction module for Key Performance Indicators (KPIs) to enable more accurate performance tracking. Improving and maintaining the Water Distribution Monitoring (WDM) application by enhancing data visualization modules, and optimizing SCADA sensor integration."
  },
  {
    company: "PT Super Sinar Abadi",
    role: "Fullstack Developer, Project Based",
    period: "June 2025 - Aug 2025",
    desc: "Building an enterprise Project Management System using Laravel with Clean Architecture, implementing project lifecycle management, task tracking, and real-time analytics to optimize business operations and team collaboration, resulting in 50% faster project setup and 35% improvement in task visibility."
  },
  {
    company: "PT Akebono Brake Astra Indonesia",
    role: "Fullstack Developer, Internship",
    period: "Feb 2025 - June 2025",
    desc: "Migrated the IT Helpdesk system from PHP 5 and MySQL to PHP 8 and PostgreSQL using Laravel Framework, integrating it with SSO AAIJ Apps, resulting in 20-40 seconds faster login time. Developed a Project Management System using Laravel with Clean Architecture, resulting in a 60% improvement in project tracking efficiency."
  },
  {
    company: "PT Astra Honda Motor",
    role: "Fullstack Developer, Project Based",
    period: "Apr 2024 - Sept 2024",
    desc: "Designed and developed a vendor order management platform using Spring Boot, improving operational efficiency by reducing order processing time by 30% and enhancing communication with automated email notifications, leading to a 20% increase in on-time document reporting."
  },
  {
    company: "PT Lanskap Indonesia Ideal",
    role: "Fullstack Developer, Project Based",
    period: "Sept 2023 - Jan 2024",
    desc: "Designed and developed 'Ideally', an educational platform and Content Management System (CMS) using Laravel, improving content management efficiency by 40% and company SEO by 30%."
  }
];

export const EDUCATION = [
  {
    school: "Astra Polytechnic – Indonesia",
    degree: "Informatics Management",
    year: "'24",
    details: "GPA: 3.85 / 4.00. Studied in a highly industrialized environment, designed to align with Astra Group's professional standards. Final project: 'Development of a Project Management System Using Clean Architecture Principles' at PT Akebono Brake Astra."
  },
  {
    school: "Polytechnic University of Porto – Portugal",
    degree: "Electrical and Computing Engineering",
    year: "'24",
    details: "Selected for the prestigious and fully funded IISMA program to explore international engineering practices and advanced computing topics."
  }
];

export const AWARDS = [
  {
    title: "Fully Funded IISMA Program",
    year: "2024",
    issuer: "Ministry of Education, Culture, Research, and Technology",
    details: "Selected for the prestigious Indonesia International Student Mobility Awards (IISMA), representing Indonesia at ISEP, Porto, Portugal. The program covered full academic tuition and provided comprehensive support for development abroad."
  },
  {
    title: "3rd Place Natixis Hackathon",
    year: "2024",
    issuer: "Natixis (Groupe BPCE)",
    details: "Achieved 3rd place in a competitive hackathon organized by Natixis. Developed an AI-supported language app designed to facilitate language correction and learning. The platform leveraged OpenAI's GPT-3.5 for text generation and correction, Whisper for speech-to-text transcription, and TTS-1 for text-to-speech synthesis, delivering a seamless, interactive language learning experience."
  }
];

// Neutral, technical tech badge colors
export const TECH_COLORS: Record<string, string> = {
  'React.js': 'bg-gray-100 text-gray-700 border border-gray-200',
  'React': 'bg-gray-100 text-gray-700 border border-gray-200',
  'Next.js': 'bg-[#3b5998] text-white border border-[#2d4373]',
  'Spring Boot': 'bg-gray-100 text-gray-700 border border-gray-200',
  'Laravel': 'bg-gray-100 text-gray-700 border border-gray-200',
  'MySQL': 'bg-gray-100 text-gray-700 border border-gray-200',
  'PostgreSQL': 'bg-gray-100 text-gray-700 border border-gray-200',
  'Tailwind': 'bg-gray-100 text-gray-700 border border-gray-200',
  'Bootstrap': 'bg-gray-100 text-gray-700 border border-gray-200',
  'Gemini AI': 'bg-indigo-50 text-indigo-700 border border-indigo-200',
  'TypeScript': 'bg-gray-100 text-gray-700 border border-gray-200',
  'JavaScript': 'bg-gray-100 text-gray-700 border border-gray-200',
  'Java': 'bg-gray-100 text-gray-700 border border-gray-200',
  'Kotlin': 'bg-gray-100 text-gray-700 border border-gray-200',
  'Python': 'bg-gray-100 text-gray-700 border border-gray-200',
  'Grok API': 'bg-black text-white border border-gray-700',
  'Vite': 'bg-purple-50 text-purple-700 border border-purple-200',
  'Supabase': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  'Leaflet': 'bg-green-50 text-green-700 border border-green-200',
  'Go': 'bg-[#00add8] text-white border border-[#0092b7]',
};

export const PROJECTS_DATA = [
  {
    id: 'guru-kita',
    title: 'Guru Kita',
    subtitle: 'Indonesian Teacher Salary Awareness App',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    description: 'An interactive web app to raise awareness about the financial realities of teachers in Indonesia. Features teacher selection, savings calculator with reality-check mode, and shareable results.',
    status: 'live',
    featured: false,
    image: '/guru-kita.png',
    links: {
      github: 'https://github.com/FarhanAdiyasa/guru-kita',
      demo: 'https://gurukita.farhan-adiyasa.site'
    }
  },
  {
    id: 'fomo',
    title: 'Fomo Tech Generator',
    subtitle: 'AI-Powered Tech Stack Analyzer',
    tech: ['Next.js', 'Gemini AI', 'Tailwind'],
    description: 'Scans your GitHub repos for outdated tech, generates a "Tech FOMO Score" and personalized recommendations using Google Gemini API. Increased modern tech adoption by 60%.',
    status: 'live',
    featured: false,
    image: '/fomo-tech.png',
    links: {
      github: 'https://github.com/FarhanAdiyasa/FomoTechGenerator',
      demo: 'https://fomotech.farhan-adiyasa.site'
    }
  },
  {
    id: 'boengkoes-maps',
    title: 'Ikutin Boengkoes',
    subtitle: 'Boengkoes Network Culinary Map',
    tech: ['Vite', 'React', 'Supabase', 'Leaflet'],
    description: 'A specialized culinary map for Boengkoes Network\'s curated recommendations. Features real-time location tracking, automated YouTube metadata enrichment, and a streamlined navigation-focused interface.',
    status: 'live',
    featured: true,
    image: '/ikutin-boengkoes.png',
    links: {
      github: 'https://github.com/FarhanAdiyasa/Boengkoes-maps',
      demo: 'https://ikutin-boengkoes.farhan-adiyasa.site'
    }
  },
  {
    id: 'biarin-aja-dulu',
    title: 'Biarin Aja Dulu',
    subtitle: 'Calm Decision Deferral Protocol',
    tech: ['Next.js', 'Go', 'PostgreSQL'],
    description: 'A quiet place to park distracting thoughts and ideas. Protects focus during deep work by "freezing" context and resurfacing it only when user-defined review periods are met.',
    status: 'live',
    featured: true,
    image: '/biarin-aja-dulu.png',
    links: {
      github: 'https://github.com/FarhanAdiyasa/BiarinAjaDulu',
      demo: 'https://biarin-aja-dulu.vercel.app'
    }
  }
];