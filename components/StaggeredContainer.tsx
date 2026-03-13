'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggeredContainer({
  children,
  className = '',
}: StaggeredContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={staggerItem}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
