export const site = {
  name: 'Sai Kaung Khant Zaw',
  role: 'Data Analyst / ML Engineer',
  tagline:
    'Developer-turned-data-scientist building measurable, data-driven products.',
  location: 'Bristol, UK (open to relocation)',
  email: 'hello@saikaungkhantzaw.com',
  photo: '/profile.jpg',
  cvHref: '/Sai_Kaung_Khant_Zaw_General_CV.docx',
  url: 'https://saikaungkhantzaw.com',
  links: {
    github: '',
    linkedin: '',
  },
}

export const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export const heroMetrics = [
  {
    value: '1 → 4.6★',
    label: 'App Store rating, Heal by Pun Hlaing',
    trend: 'up',
  },
  {
    value: '−50%',
    label: 'User complaints, same rebuild',
    trend: 'down',
  },
  {
    value: '100k+ / 40%',
    label: 'EMR records standardised / faster retrieval',
    trend: 'up',
  },
]

export const credential = {
  value: 'MSc Data Science',
  label: 'Distinction, University of the West of England',
}

export const projects = [
  {
    slug: 'fair-shift-scheduling',
    title: 'AI-Powered Fair Shift Scheduling System',
    image: '/projects/fair-shift-scheduling.png',
    year: '2024',
    type: 'MSc Dissertation',
    stack: ['FastAPI', 'MongoDB', 'Vue.js', 'Prophet', 'Figma'],
    problem:
      'Manual shift rotas at hospitality and retail sites routinely produced unfair distributions of unpopular shifts, driving staff dissatisfaction and turnover.',
    role: 'Sole researcher and developer — problem framing, forecasting model, scheduling engine, and UX validation.',
    decisions: [
      'Used Prophet to forecast demand and staffing needs from historical shift data rather than relying on fixed rosters.',
      'Built a custom constraint-based scheduling engine instead of an off-the-shelf solver, because existing solvers could not hold the real fairness and availability constraints gathered from staff.',
      'Designed the scheduling UI in Figma and validated the concept with a staff survey before building the working prototype.',
    ],
    result:
      'Delivered a working system that generates rotas balancing forecasted demand against fairness constraints, validated against real staff feedback rather than assumptions.',
    links: [],
  },
  {
    slug: 'starbucks-task-bot',
    title: 'Starbucks Task-Tracking Bot',
    image: '/projects/starbucks-task-bot.png',
    year: 'Ongoing',
    type: 'Self-initiated, in production',
    stack: ['Python', 'Streamlit', 'Supabase', 'PostgreSQL', 'WhatsApp API'],
    problem:
      'Shift handovers at a high-volume airport store relied on verbal handoffs and paper notes, so tasks were regularly missed or duplicated between shifts.',
    role: 'Built and deployed independently, alongside day-to-day operational duties.',
    decisions: [
      'Chose WhatsApp as the interface since it required zero training or new habits from staff already using it daily.',
      'Used Supabase/Postgres as a lightweight, low-maintenance backend suited to a small team rather than standing up dedicated infrastructure.',
      'Added a Streamlit dashboard for managers to review task history without needing database access.',
    ],
    result:
      'In active use for logging and tracking shift-handover tasks, reducing dropped handoffs between shifts.',
    links: [],
  },
  {
    slug: 'ev-charging-infrastructure',
    title: 'EV Charging Infrastructure App',
    image: '/projects/ev-charging-infrastructure.png',
    year: '2024',
    type: 'Personal project',
    stack: ['Flutter', 'MongoDB', 'Uber H3'],
    problem:
      'Identifying good locations for new EV charging stations requires reasoning about geographic coverage and demand density, not just plotting existing stations on a map.',
    role: 'Sole developer — geospatial analysis, backend, and mobile app.',
    decisions: [
      "Used Uber's H3 hexagonal grid system to bucket geography into uniform cells, making coverage gaps and demand density directly comparable across a region.",
      'Modelled station and grid-cell data in MongoDB to keep geospatial queries flexible during exploratory analysis.',
    ],
    result:
      'A working mobile app that surfaces candidate siting locations for new charging infrastructure based on grid-cell coverage analysis.',
    links: [],
  },
  {
    slug: 'heal-by-pun-hlaing',
    title: 'Heal by Pun Hlaing',
    image: '/projects/heal-by-pun-hlaing.png',
    year: '2022–2023',
    type: 'Employer work · Pun Hlaing International Hospitals',
    stack: ['Figma', 'Miracle EMR', 'Kotlin', 'Swift'],
    problem:
      "The hospital group's patient-facing app had a 1★ App Store rating and a high volume of user complaints, undermining trust in an otherwise capable care network.",
    role: 'Mobile Application Analyst & Data Analyst — led the rebuild of the patient app and standardisation of EMR data behind it.',
    decisions: [
      'Ran a structured review of complaint data to prioritise fixes by actual patient impact rather than assumption.',
      'Redesigned core flows in Figma before touching code, validating changes against real complaint themes.',
      'Standardised over 100,000 EMR records against Miracle EMR to make patient data faster and more reliable to retrieve inside the app.',
    ],
    result:
      'App Store rating rose from 1★ to 4.6★, user complaints fell by 50%, daily active usage grew 35% within three months, and patient satisfaction scores rose from 60% to 85%.',
    links: [],
  },
]

export const otherWork = [
  {
    title: 'Sai Sai Pay',
    org: 'ACE Data Systems',
    blurb:
      'Mobile payments app shipped inside a 2-week deadline. 4.3★ on Google Play, 5.0★ on the Apple App Store.',
    href: '',
  },
  {
    title: 'UAB Pay & UAB Pay Plus',
    org: 'ACE Data Systems',
    blurb: 'Banking and payments apps built for UAB.',
    href: '',
  },
  {
    title: 'Brycen car booking app (beta)',
    org: 'Brycen Myanmar',
    blurb: 'Car booking app beta that drove a 20% increase in user retention.',
    href: '',
  },
  {
    title: 'Shal GO',
    org: 'Attractive Myanmar',
    blurb: 'Explore and connect on the go-to social network for travelers.',
    href: '',
  },
]

export const experience = [
  {
    role: 'Duty Manager',
    org: 'Starbucks (SSP), Bristol Airport',
    dates: 'Sep 2023 – Present',
    note: 'Leading shift operations in a high-volume travel-retail environment while completing an MSc in Data Science.',
    projectLink: 'starbucks-task-bot',
  },
  {
    role: 'Mobile Application Analyst & Data Analyst',
    org: 'Pun Hlaing International Hospitals',
    dates: 'Jan 2022 – Jun 2023',
    note: 'Rebuilt the patient-facing app and standardised EMR data behind it — full case study below.',
    projectLink: 'heal-by-pun-hlaing',
  },
  {
    role: 'Senior React Native Developer & Data Lead',
    org: 'Shal GO',
    dates: 'Jan 2021 – May 2021',
    note: 'Led mobile development and data workstreams.',
    projectLink: null,
  },
  {
    role: 'React Native Developer',
    org: 'ACE Data Systems',
    dates: 'Nov 2019 – Dec 2020',
    note: 'Built payments apps including Sai Sai Pay, UAB Pay, and UAB Pay Plus.',
    projectLink: null,
  },
  {
    role: 'Android Developer',
    org: 'Brycen Myanmar',
    dates: 'Feb 2019 – Oct 2019',
    note: 'Built the car booking app beta.',
    projectLink: null,
  },
]

export const education = [
  {
    degree: 'MSc Data Science — Distinction',
    org: 'University of the West of England, Bristol',
    dates: 'Sep 2023 – Nov 2024',
  },
  {
    degree: 'BEng Information Technology',
    org: 'West Yangon Technological University',
    dates: 'Completed Dec 2018',
    note: 'GPA 4.4 / 5.0',
  },
]

export const certifications = [
  { name: 'Python for Data Science', issuer: 'ELYSIAN' },
  { name: 'Statistics for Data Science & Data Analytics', issuer: 'Ace of Data' },
  { name: 'Professional Diploma in Java Programming', issuer: 'CDAC' },
  { name: 'Professional Certificate in Android Programming', issuer: 'CDAC' },
  { name: 'Professional Android Developing Course', issuer: 'Fairway Technology' },
  { name: 'C++', issuer: 'M3WI' },
  { name: 'Project Management', issuer: 'YMT' },
  { name: 'Professional Graphic Design', issuer: 'GCTI' },
]

export const bio = {
  paragraphs: [
    'Born and raised in Yangon, Myanmar, I got into computers around age seven and never really stopped. I spent most of my career as a mobile and full-stack developer before pivoting deliberately into data science — I wanted to work on the decisions behind the product, not just the interface on top of it.',
    "Outside of work, I hold a black belt in Taekwondo and also train in kickboxing, play guitar, and cook Burmese, Thai, and Chinese food. I'm based in Bristol, UK, and open to relocating for the right role.",
  ],
}
