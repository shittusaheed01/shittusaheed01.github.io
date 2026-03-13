'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Mail, Linkedin, Github, Twitter, PhoneCall } from 'lucide-react';

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shittusaheed01@gmail.com',
      href: 'mailto:shittusaheed01@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shittusaheed01',
      href: 'https://www.linkedin.com/in/shittusaheed01/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shittusaheed01',
      href: 'https://github.com/shittusaheed01',
    },
    {
      icon: PhoneCall,
      label: 'Phone',
      value: '+2348133023119',
      href: 'tel:+2348133023119',
    },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent font-mono">
              Get in Touch
            </div>
            <h2 className="mb-6 font-mono text-3xl font-bold sm:text-4xl">
              Let's work together
            </h2>
            <p className="mb-12 max-w-2xl text-base text-foreground/70 sm:text-lg">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out through any of the channels
              below.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith('http');
            return (
              <motion.a
                key={index}
                href={contact.href}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
                whileHover={{ y: -5 }}
                className="glow-card group p-6 text-center"
                aria-label={`Contact via ${contact.label}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-4 flex justify-center"
                >
                  <div className="rounded-lg bg-accent/10 p-3 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                </motion.div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {contact.label}
                </h3>
                <p className="text-sm text-foreground/60 group-hover:text-accent transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <motion.a
              href="mailto:shittusaheed01@gmail.com"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 229, 255, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-lg bg-gradient-to-r from-accent to-secondary px-10 py-4 font-semibold text-primary-foreground transition-all hover:shadow-lg"
            >
              Send me an Email
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 border-t border-border/40 pt-8 text-center"
        >
          <p className="text-sm text-foreground/50">
            © 2025 Saheed Ademola Shittu · Backend Engineer · Lagos, Nigeria
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
