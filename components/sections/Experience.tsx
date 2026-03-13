'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GlowCard } from '@/components/GlowCard';

export function Experience() {
  const experiences = [
    {
      title: 'Lead Backend Engineer',
      company: 'Sunsystems',
      period: 'Mar 2025 - Present',
      description:
        'Architected enterprise CMS and healthcare SaaS serving 900+ registered hospitals. Achieved 99.8% uptime and reduced query response time by 35%.',
      highlights: ['Node.js', 'TypeScript', 'MongoDB', 'AWS', 'HIPAA Compliance', 'Docker'],
    },
    {
      title: 'Backend Engineer',
      company: 'Bookum Inc',
      period: 'Jun 2023 - Feb 2025',
      description:
        'Re-architected monolithic system into microservices. Implemented distributed tracing, achieving 85%+ code coverage and 40% debugging time reduction.',
      highlights: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'NATS', 'OpenTelemetry'],
    },
    {
      title: 'Backend Engineering Trainee',
      company: 'AltSchool Africa',
      period: 'May 2022 - Jun 2023',
      description:
        'Completed accredited backend engineering curriculum. Built production-grade apps with REST APIs, WebSocket real-time communication, and OAuth2.0 authentication.',
      highlights: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Docker', 'API Design'],
    },
    {
      title: 'B.Eng Electrical & Electronics',
      company: 'University of Ilorin',
      period: '2018 - 2024',
      description:
        'First Class Honors (4.60/5.00) - Top 3% of class. Published research on power systems stability. Research Assistant at SCEMIT International Conference.',
      highlights: ['Power Systems', 'Research', 'Technical Writing', 'NSE Member'],
    },
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent font-mono">
            Experience
          </div>
          <h2 className="mb-12 font-mono text-3xl font-bold sm:text-4xl">
            My Professional Journey
          </h2>
        </AnimatedSection>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {/* Experiences */}
          {experiences.map((exp, index) => (
            <GlowCard
              key={index}
              delay={index * 0.1}
              className="relative ml-20 md:ml-0 md:w-1/2 md:pr-12 lg:pr-20"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8.5 top-8 h-4 w-4 rounded-full border-2 border-accent bg-background md:-right-8.5 md:left-auto" />

              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-mono text-lg font-semibold text-accent">
                    {exp.title}
                  </h3>
                </div>
                <p className="mb-1 text-sm text-foreground/60">{exp.company}</p>
                <p className="mb-4 text-xs text-foreground/50">{exp.period}</p>
                <p className="mb-4 text-foreground/70">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
