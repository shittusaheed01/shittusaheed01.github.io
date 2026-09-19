import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profile } from '@/lib/portfolio';

export function Contact() {
  return (
    <>
      <section id="contact" className="contact-section shell" aria-labelledby="contact-title" tabIndex={-1}>
        <div className="contact-panel">
<div>
<p className="eyebrow">
<span>05 /</span> Get in touch</p>
<h2 id="contact-title">Have something<br />in <em>mind?</em>
</h2>
<p className="contact-description">Tell me what you’re building. I’m interested in backend engineering opportunities and projects with a useful problem to solve.</p>
<a className="button button-primary" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={18} aria-hidden="true" />
</a>
</div>
          <div className="contact-links">
<a className="contact-email" href={`mailto:${profile.email}`}>
<Mail size={21} aria-hidden="true" />
<span>
<small>Email me</small>{profile.email}</span>
<ArrowUpRight size={18} aria-hidden="true" />
</a>
<a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
<Linkedin size={20} aria-hidden="true" />
<span>LinkedIn</span>
<ArrowUpRight size={17} aria-hidden="true" />
</a>
<a href={profile.github} target="_blank" rel="noopener noreferrer">
<Github size={20} aria-hidden="true" />
<span>GitHub</span>
<ArrowUpRight size={17} aria-hidden="true" />
</a>
<a href={`tel:${profile.phone}`}>
<Phone size={20} aria-hidden="true" />
<span>{profile.phone}</span>
<ArrowUpRight size={17} aria-hidden="true" />
</a>
</div>
        </div>
      </section>
      <footer className="site-footer shell">
<p>© {new Date().getFullYear()} {profile.name}</p>
<span>Backend engineer · Lagos, Nigeria</span>
<a href="#hero">Back to top <ArrowUp size={15} aria-hidden="true" />
</a>
</footer>
    </>
  );
}
