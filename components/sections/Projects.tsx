'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GlowCard } from '@/components/GlowCard';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Enterprise Healthcare Platform',
      description:
        'HIPAA-compliant backend serving 900+ registered hospitals. Architected fault-tolerant notification system with 95%+ delivery rate and 40% failure reduction.',
      tech: ['Node.js', 'TypeScript', 'MongoDB', 'AWS', 'NATS', 'Docker'],
      link: 'https://smartcare.com.ng/',
      github: '#',
    },
    {
      title: 'Microservices Architecture Transformation',
      description:
        'Re-architected monolithic system into independent microservices. Implemented OpenTelemetry distributed tracing, cutting debugging time by 40%.',
      tech: ['Node.js', 'Express', 'NATS', 'Redis', 'OpenTelemetry', 'Docker'],
      link: 'https://www.bookumapp.com/',
      github: '#',
    },
    {
      title: 'Enterprise CMS & Government Portal',
      description:
        'Built scalable CMS and public API infrastructure for local government serving 2,000+ residents at 99.8% uptime. Optimized queries reducing response time by 35%.',
      tech: [
        'Node.js',
        'TypeScript',
        'PostgreSQL',
        'Redis',
        'AWS',
        'GitHub Actions',
      ],
      link: 'https://ifakoijaiye.lg.gov.ng/',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent font-mono">
            Projects
          </div>
          <h2 className="mb-12 font-mono text-3xl font-bold sm:text-4xl">
            Featured Work
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <GlowCard key={index} delay={index * 0.1} className="flex flex-col">
              <div className="flex-1 p-6">
                <h3 className="mb-3 font-mono text-lg font-semibold text-accent">
                  {project.title}
                </h3>
                <p className="mb-6 text-foreground/70">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-accent/10 px-6 py-4">
                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} aria-hidden="true" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    aria-disabled={project.github === '#'}
                    rel="noopener noreferrer"
                    target="_blank"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                    aria-label={`View source code for ${project.title}`}
                  >
                    <span>Code</span>
                    <Github size={16} aria-hidden="true" />
                  </motion.a>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
