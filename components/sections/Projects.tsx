import { ArrowUpRight, Activity, ArrowRight, Building2, ChevronDown, GitBranch, LockKeyhole } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { projects, profile } from '@/lib/portfolio';

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === 'healthcare') return (
    <div className="project-visual visual-healthcare" aria-hidden="true">
      <div className="visual-label">
<Activity size={16} /> HEALTHCARE NETWORK</div>
      <div className="health-network">
<span className="network-end">
<Building2 size={20} />
</span>
<i />
<span className="network-core">
<Activity size={30} />
</span>
<i />
<span className="network-end">
<LockKeyhole size={20} />
</span>
</div>
      <div className="visual-foot">
<span>Hospitals</span>
<span>Connected care</span>
<span>Secure access</span>
</div>
    </div>
  );
  if (kind === 'services') return (
    <div className="project-visual visual-services" aria-hidden="true">
      <div className="visual-label">
<GitBranch size={16} /> INDEPENDENT SERVICES</div>
      <div className="service-flow">
<span>API</span>
<ArrowRight size={20} />
<div>
<span>Service 01</span>
<span>Service 02</span>
<span>Service 03</span>
</div>
</div>
      <div className="visual-foot">
<span>Event-driven</span>
<span>Traceable requests</span>
</div>
    </div>
  );
  return (
    <div className="project-visual visual-portal" aria-hidden="true">
      <div className="visual-label">
<Building2 size={16} /> PUBLIC SERVICE INFRASTRUCTURE</div>
      <div className="portal-window">
<div className="portal-toolbar">
<span />
<span />
<span />
</div>
<div className="portal-content">
<div className="portal-sidebar" />
<div className="portal-body">
<i />
<i />
<div>
<span />
<span />
<span />
</div>
</div>
</div>
</div>
      <div className="visual-foot">
<span>Public portal</span>
<span>CMS + API</span>
</div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section shell" aria-label="Selected work" tabIndex={-1}>
      <SectionHeading number="01" label="Selected work" title="Built for the real world." description="A few systems I’ve helped build, and the problems they solve." />
      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.name} className={`project-card project-${project.visual}`}>
            <ProjectVisual kind={project.visual} />
            <div className="project-body">
              <p className="project-category">
<span>{project.number} / {project.category}</span>
</p>
              <h3>{project.name}<span>{project.title}</span>
</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-result">
<strong>{project.metric}</strong>
<span>{project.metricLabel}</span>
</div>
              <ul className="tags" aria-label={`${project.name} technologies`}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
              <details className="project-details">
<summary>Engineering details <ChevronDown size={16} aria-hidden="true" />
</summary>
<p>{project.detail}</p>
</details>
            </div>
            <div className="project-footer">
<a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>Visit website <ArrowUpRight size={17} aria-hidden="true" />
</a>
<span>Source unavailable</span>
</div>
          </article>
        ))}
      </div>
      <a className="text-link projects-more" href={profile.github} target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={17} aria-hidden="true" />
</a>
    </section>
  );
}
