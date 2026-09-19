import { ArrowDown, ArrowDownRight, ArrowUpRight, Database, Layers3, Server } from 'lucide-react';
import { profile } from '@/lib/portfolio';

export function Hero() {
  return (
    <section id="hero" className="hero shell" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
<span className="status-dot" /> Backend engineer · Lagos, Nigeria</p>
          <h1 id="hero-title">Saheed{' '}<em className="block">Shittu</em></h1>
          <p className="hero-description">I’m {profile.name}, a backend engineer working with Node.js and TypeScript. I build the services behind healthcare platforms, enterprise tools, and public services.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={18} aria-hidden="true" />
</a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={18} aria-hidden="true" />
</a>
          </div>
          <p className="hero-caption">Currently Lead Backend Engineer at <span>Sunsystems</span>
</p>
        </div>
        <div className="system-card" role="img" aria-label="Areas of focus: APIs, event-driven services, and data systems">
          <div className="system-card-top">
<span className="small-label">Behind the interface</span>
<span className="system-symbol" aria-hidden="true">↗</span>
</div>
          <div className="system-diagram" aria-hidden="true">
            <div className="system-entry">
<span className="diagram-dot" /> Client applications <span className="mono">HTTPS</span>
</div>
            <div className="connector" />
            <div className="system-node primary-node">
<Server size={21} />
<div>
<strong>APIs & services</strong>
<span>Node.js · TypeScript</span>
</div>
<span className="node-index">01</span>
</div>
            <div className="connector" />
            <div className="system-node">
<Layers3 size={21} />
<div>
<strong>Event-driven systems</strong>
<span>NATS · Microservices</span>
</div>
<span className="node-index">02</span>
</div>
            <div className="connector" />
            <div className="system-node">
<Database size={21} />
<div>
<strong>Data & persistence</strong>
<span>PostgreSQL · MongoDB · Redis</span>
</div>
<span className="node-index">03</span>
</div>
          </div>
          <div className="system-card-bottom">
<span>My engineering focus</span>
<span className="mono">01 — 03</span>
</div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-stack">
<span className="small-label">Built with experience in</span>
<span>Node.js</span>
<span>TypeScript</span>
<span>PostgreSQL</span>
<span>AWS</span>
</div>
        <a href="#projects" className="scroll-link">Scroll to explore <ArrowDown size={15} aria-hidden="true" />
</a>
      </div>
      <dl className="stats-strip">
        <div>
<dt>Years of experience</dt>
<dd>3<span>+</span>
</dd>
</div>
        <div>
<dt>Enterprise clients served</dt>
<dd>900<span>+</span>
</dd>
</div>
        <div>
<dt>Users served</dt>
<dd>5,000<span>+</span>
</dd>
</div>
        <div>
<dt>Recorded uptime</dt>
<dd>99.8<span>%</span>
</dd>
</div>
      </dl>
    </section>
  );
}
