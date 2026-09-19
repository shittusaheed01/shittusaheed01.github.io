import { ArrowUpRight } from 'lucide-react';
import { MobileMenu } from '@/components/MobileMenu';
import { navItems, profile } from '@/lib/portfolio';

export function Navbar() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#hero" aria-label={`${profile.name}, back to top`}>
          <span className="brand-mark" aria-hidden="true">ss<span>.</span>
</span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-contact" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
</a>
        <MobileMenu navItems={navItems} />
      </div>
    </header>
  );
}
