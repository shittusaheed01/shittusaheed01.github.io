'use client';

import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/TypewriterText';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const roles = [
    'Backend Engineer',
    'Cloud Architect',
    'Microservices Expert',
    'Technical Leader',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-16 sm:pt-20 flex items-center justify-center"
      role="region"
      aria-label="Hero section"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-accent blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-secondary blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent"
          >
            Welcome to my portfolio
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h1 className="mb-6 font-mono text-3xl font-bold sm:text-4xl lg:text-7xl text-balance">
            Saheed Shittu{' '}
            <span className="block text-accent">Backend Engineer</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mb-8 text-lg text-foreground/80 sm:text-xl lg:text-2xl">
            I'm a{' '}
            <TypewriterText
              words={roles}
              className="font-mono font-semibold glow-text"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="mb-10 max-w-2xl text-sm text-foreground/70 sm:text-base lg:text-lg leading-relaxed">
            Backend engineer with 3+ years architecting scalable, high-availability systems
            serving 2,000+ users and 900+ enterprise clients. Expert in Node.js/TypeScript,
            event-driven architecture, and HIPAA-compliant healthcare platforms. First-class
            engineering graduate combining deep technical depth with clear communication.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
              className="rounded-lg bg-accent px-6 py-2.5 sm:px-8 sm:py-3 font-semibold text-primary-foreground text-sm sm:text-base transition-all hover:bg-accent/90"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 229, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView()}
              className="rounded-lg border-2 border-accent/30 px-6 py-2.5 sm:px-8 sm:py-3 font-semibold text-accent text-sm sm:text-base transition-all hover:border-accent/60"
            >
              View Projects
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-accent/50" />
        </motion.div>
      </div>
    </section>
  );
}
