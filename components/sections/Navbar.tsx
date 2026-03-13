'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { MobileMenu } from '@/components/MobileMenu';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shittusaheed01@gmail.com', label: 'Email' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-accent/20 bg-background/40 backdrop-blur-xl shadow-lg'
          : 'border-b border-border/20 bg-background/30 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-secondary">
              <span className="font-mono text-sm font-bold text-primary-foreground">SA</span>
            </div>
            <span className="hidden font-mono font-semibold text-accent sm:inline">
              Saheed
            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ textShadow: '0 0 8px rgba(0, 229, 255, 0.5)' }}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu navItems={navItems} />
          </div>

          {/* Social Links */}
          <div className="hidden items-center gap-4 sm:flex">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-foreground/60 transition-colors hover:text-accent"
                  aria-label={`Visit ${social.label}`}
                >
                  <Icon size={20} aria-hidden="true" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
