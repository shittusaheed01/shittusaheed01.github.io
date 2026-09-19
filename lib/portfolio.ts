export const profile = {
  name: 'Saheed Shittu',
  alternateNames: ['Saheed Shittu', 'Saheed Shittu Ademola', 'Saheed Ademola Shittu', 'shittusaheed01'],
  email: 'shittusaheed01@gmail.com',
  github: 'https://github.com/shittusaheed01',
  linkedin: 'https://www.linkedin.com/in/shittusaheed01/',
  phone: '+2348133023119',
};

export const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    number: '01', name: 'SmartCare', category: 'Healthcare infrastructure',
    title: 'A backend built for healthcare.',
    description: 'I built a HIPAA-compliant backend serving 900+ registered hospitals, with a fault-tolerant notification system.',
    metric: '900+', metricLabel: 'registered hospitals',
    detail: 'The notification system achieved a 95%+ delivery rate and reduced failures by 40%.',
    tech: ['Node.js', 'TypeScript', 'MongoDB', 'AWS', 'NATS', 'Docker'],
    link: 'https://smartcare.com.ng/', visual: 'healthcare',
  },
  {
    number: '02', name: 'Bookum', category: 'Distributed systems',
    title: 'From monolith to microservices.',
    description: 'I split a monolithic backend into independent services and added distributed tracing to make issues easier to find.',
    metric: '40%', metricLabel: 'less debugging time',
    detail: 'OpenTelemetry made it possible to trace requests across services. The engineering work also achieved 85%+ code coverage.',
    tech: ['Node.js', 'Express', 'NATS', 'Redis', 'OpenTelemetry', 'Docker'],
    link: 'https://www.bookumapp.com/', visual: 'services',
  },
  {
    number: '03', name: 'Ifako-Ijaiye', category: 'Public services',
    title: 'Public services, made accessible.',
    description: 'I built the CMS and public API infrastructure for a local government portal serving more than 2,000 residents.',
    metric: '35%', metricLabel: 'faster query responses',
    detail: 'Query optimization reduced response time by 35%. The platform maintained 99.8% uptime.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'GitHub Actions'],
    link: 'https://ifakoijaiye.lg.gov.ng/', visual: 'portal',
  },
];

export const experiences = [
    {
      title: 'Lead Backend Engineer',
      company: 'Sunsystems',
      period: 'Mar 2025 - Present',
      description:
        'Built an enterprise CMS and healthcare SaaS serving 900+ registered hospitals. Maintained 99.8% uptime and reduced query response time by 35%.',
      highlights: ['Node.js', 'TypeScript', 'MongoDB', 'AWS', 'HIPAA Compliance', 'Docker'],
    },
    {
      title: 'Backend Engineer',
      company: 'Bookum Inc',
      period: 'Jun 2023 - Feb 2025',
      description:
        'Split a monolithic system into microservices and added distributed tracing. The work achieved 85%+ code coverage and cut debugging time by 40%.',
      highlights: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'NATS', 'OpenTelemetry'],
    },
    {
      title: 'Backend Engineering Trainee',
      company: 'AltSchool Africa',
      period: 'May 2022 - Jun 2023',
      description:
        'Completed an accredited backend engineering program. Built applications with REST APIs, real-time WebSocket communication, and OAuth 2.0 authentication.',
      highlights: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Docker', 'API Design'],
    },
    {
      title: 'B.Eng Electrical & Electronics',
      company: 'University of Ilorin',
      period: '2018 - 2024',
      description:
        'Graduated with First Class Honors (4.60/5.00), in the top 3% of the class. Published research on power systems stability and worked as a Research Assistant at the SCEMIT International Conference.',
      highlights: ['Power Systems', 'Research', 'Technical Writing', 'NSE Member'],
    },
  ];

export const skillCategories = [
    {
      title: 'Languages & Runtimes',
      skills: ['Node.js', 'TypeScript', 'JavaScript', 'Express', 'Next.js'],
    },
    {
      title: 'Databases & Caching',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'],
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS (EC2, RDS)', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'],
    },
    {
      title: 'Architecture & Systems',
      skills: ['Microservices', 'Event-Driven', 'Distributed Systems', 'System Design', 'Performance Tuning'],
    },
    {
      title: 'Message Queues & Observability',
      skills: ['NATS', 'Socket.io', 'OpenTelemetry', 'Distributed Tracing', 'Logging'],
    },
    {
      title: 'Specializations',
      skills: ['HIPAA Compliance', 'Healthcare Systems', 'API Development', 'Testing', 'DevOps'],
    },
  ];
