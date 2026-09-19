'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface MobileMenuProps {
  navItems: Array<{ label: string; href: string }>;
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        trigger.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setIsOpen(false);
    }
    const desktop = window.matchMedia('(min-width: 900px)');
    function onResize() { if (desktop.matches) setIsOpen(false); }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [isOpen]);

  return (
    <div className="mobile-navigation" ref={root}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false); }}>
      <button ref={trigger} type="button" className="menu-toggle"
        onClick={() => setIsOpen(open => !open)} aria-expanded={isOpen} aria-controls={id}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}>
        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>
      <nav id={id} hidden={!isOpen} className="mobile-menu" aria-label="Mobile navigation">
        {navItems.map(item => (
          <a key={item.href} href={item.href} onClick={() => {
            setIsOpen(false);
            document.querySelector<HTMLElement>(item.href)?.focus({ preventScroll: true });
          }}>{item.label}<ArrowUpRight size={18} aria-hidden="true" /></a>
        ))}
      </nav>
    </div>
  );
}
