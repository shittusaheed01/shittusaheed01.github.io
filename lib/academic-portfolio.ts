export const academicProfile = {
  name: 'Saheed Shittu',
  email: 'shittusaheed01@gmail.com',
  location: 'Nigeria',
  discipline: 'Electrical and Electronics Engineering',
  summary: 'First-class electrical engineering graduate researching stable, resilient electricity systems.',
  canonicalUrl: 'https://shittusaheed01.github.io/academic-portfolio/',
} as const;

export const academicNavigation = [
  { label: 'Research', href: '#research' },
  { label: 'Publication', href: '#publication' },
  { label: 'Project', href: '#projects' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
] as const;

export const academicMetrics = [
  { value: 'First Class', label: 'BEng honours' },
  { value: '4.60 / 5.00', label: 'cumulative GPA' },
  { value: '2nd of 32', label: 'Power Systems and Machines option' },
  { value: '2025', label: 'peer-reviewed publication' },
] as const;

export const academicResearchInterests = [
  'Power-system stability',
  'Renewable-energy integration',
  'Smart grids',
  'Sustainable electricity systems',
] as const;

export const academicEducation = {
  degree: 'BEng, Electrical and Electronics Engineering',
  institution: 'University of Ilorin, Nigeria',
  period: '2018–2024',
  distinction: 'First Class Honours · CGPA 4.60/5.00',
  rank: 'Ranked 2nd of 32 in the Power Systems and Machines option',
  selectedResults: [
    'Electric Circuit Theory I — 92/100',
    'Electrical Power System Analysis — 84/100',
    'Power Transmission Line Characteristics — 84/100',
    'Power System Protection — 83/100',
  ],
} as const;

export const academicPublication = {
  title: 'Comprehensive eigenvalue-based assessment of rotor angle stability in Nigeria’s 330 kV power grid',
  authors: 'Jokojeje Rufus Akinnusimi, Adenekan Olujide Adeyinka, Akinleye Temitope Grace, and Saheed Ademola Shittu',
  journal: 'International Journal of Allied Research in Engineering and Technology',
  citation: '16(9), 1–11 · 2025',
  doi: '10.5281/zenodo.17232491',
  doiUrl: 'https://doi.org/10.5281/zenodo.17232491',
  summary: 'Co-authored a study comparing small-signal stability in a 36-bus, 13-generator network under no control, governor control, and combined governor and power-system-stabiliser control.',
} as const;

export const academicProject = {
  title: '2.5 kVA Inverter and Sunwise Solar Sizing Application',
  context: 'Final-year project · University of Ilorin · 2023–2024',
  summary: 'Led a five-member team in the design, assembly, testing, troubleshooting, and documentation of a functional 2.5 kVA inverter.',
  details: [
    'Selected components and developed the MOSFET circuit for the inverter system.',
    'Built the original Sunwise calculator to estimate inverter, battery, and solar-array requirements.',
    'Earned a project grade of 80/100 (A).',
  ],
  calculatorUrl: 'https://rating-calculator.vercel.app/',
} as const;

export const academicTeaching = {
  role: 'Assistant Lecturer and Research Assistant',
  institution: 'Moshood Abiola Polytechnic, Abeokuta, Nigeria',
  period: 'February 2025 – January 2026',
  summary: 'Taught first-year Electric Circuits and Power Systems through lectures, tutorials, and worked examples while supporting research preparation.',
  contributions: [
    'Prepared course materials, assessments, and examination questions.',
    'Invigilated, graded, and provided academic support to students.',
    'Supported literature reviews, manuscript preparation, reference management, and research presentations.',
  ],
} as const;

export const academicCertificates = [
  { title: 'Embedded Systems (Arduino)', issuer: 'Professional development', year: '2019' },
  { title: 'Renewable Power and Electricity Systems', issuer: 'University of Colorado Boulder via Coursera', year: '2026' },
] as const;

