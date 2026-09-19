import { ArrowUpRight, GraduationCap, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/lib/portfolio';

export function About() {
  return (
    <section id="about" className="section shell" aria-label="About Saheed" tabIndex={-1}>
      <SectionHeading number="03" label="A little about me" title="An engineer, through and through." />
      <div className="about-grid">
        <div className="about-copy">
<p className="about-lead">I like understanding how things work, then making them work better.</p>
<p>I’m a Lead Backend Engineer at Sunsystems in Lagos. My work covers microservices, database optimization, and the infrastructure that keeps applications available as they grow.</p>
<p>I work with Node.js and TypeScript, design event-driven systems, and use distributed tracing to understand what happens across services. I also mentor engineers and share what I learn with my team.</p>
<p>Before backend engineering, I studied Electrical and Electronics Engineering at the University of Ilorin, graduating with First Class Honors. My published research explores power systems stability.</p>
<a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Find me on LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
</a>
</div>
        <aside className="about-note" aria-label="Background">
<span className="small-label">A foundation in engineering</span>
<GraduationCap size={32} strokeWidth={1.4} aria-hidden="true" />
<h3>From power systems<br />to distributed systems.</h3>
<div className="education-note">
<strong>B.Eng · First Class Honors</strong>
<span>University of Ilorin · 4.60 / 5.00</span>
</div>
<div className="education-note">
<strong>Diploma in Backend Engineering</strong>
<span>AltSchool Africa</span>
</div>
<p className="location">
<MapPin size={15} aria-hidden="true" /> Lagos, Nigeria</p>
</aside>
      </div>
    </section>
  );
}
