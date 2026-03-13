'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { StaggeredContainer } from '@/components/StaggeredContainer';

export function Skills() {
  const skillCategories = [
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

  return (
    <section id="skills" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent font-mono">
            Skills
          </div>
          <h2 className="mb-12 font-mono text-3xl font-bold sm:text-4xl">
            Technologies & Expertise
          </h2>
        </AnimatedSection>

        <StaggeredContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glow-card p-6"
            >
              <h3 className="mb-4 font-mono font-semibold text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 px-4 py-2 text-sm font-medium text-foreground border border-accent/20 transition-colors hover:border-accent/50"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
