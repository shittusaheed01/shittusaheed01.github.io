'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { StaggeredContainer } from '@/components/StaggeredContainer';
import { Code2, Database, Cloud, Users } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Enterprise Clients', value: '900+' },
    { label: 'Users Served', value: '5K+' },
    { label: 'Uptime Record', value: '99.8%' },
  ];

  const highlights = [
    {
      icon: Code2,
      label: 'Backend Architecture',
      desc: 'Node.js, TypeScript, Microservices',
    },
    {
      icon: Database,
      label: 'Data Systems',
      desc: 'PostgreSQL, MongoDB, Redis optimization',
    },
    {
      icon: Cloud,
      label: 'Cloud & DevOps',
      desc: 'AWS, Docker, Kubernetes, CI/CD',
    },
    {
      icon: Users,
      label: 'Event-Driven Systems',
      desc: 'NATS, distributed tracing, real-time',
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent font-mono">
            About Me
          </div>
          <h2 className="mb-12 font-mono text-3xl font-bold sm:text-4xl">
            Building the future, one system at a time
          </h2>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-base text-foreground/70 leading-relaxed">
                Currently a Lead Backend Engineer at Sunsystems, architecting
                enterprise-grade systems serving thousands of users and hundreds
                of enterprise clients. I specialize in designing
                high-availability backends, implementing event-driven
                architectures, and solving complex distributed systems
                challenges with Node.js and TypeScript.
              </p>
              <p className="text-base text-foreground/70 leading-relaxed">
                My expertise spans microservices design, database optimization,
                HIPAA-compliant systems, and DevOps/CI-CD pipelines. I'm
                passionate about building fault-tolerant systems, implementing
                distributed tracing, and mentoring engineers through technical
                growth and knowledge sharing.
              </p>
              <p className="text-base text-foreground/70 leading-relaxed">
                Continuous learner with a B.Eng in Electrical & Electronics
                (First Class Honors) and a Diploma in Backend Engineering from
                AltSchool Africa. Author of published research on power systems
                stability.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <div>
              <h3 className="mb-6 font-mono text-lg font-semibold text-accent">
                Quick Stats
              </h3>
              <motion.div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="rounded-lg border border-accent/20 bg-card/40 p-4 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <h3 className="mb-6 font-mono text-lg font-semibold text-accent">
                Core Strengths
              </h3>
              <StaggeredContainer className="space-y-3">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 rounded-lg border border-accent/10 bg-card/20 p-3"
                    >
                      <Icon
                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.label}
                        </h3>
                        <p className="text-sm text-foreground/60">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </StaggeredContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
