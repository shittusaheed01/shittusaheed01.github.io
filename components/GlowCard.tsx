'use client';

import { motion } from 'framer-motion';
import { scaleIn } from '@/lib/animations';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className = '', delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay }}
      className={`glow-card ${className}`}
    >
      {children}
    </motion.div>
  );
}
