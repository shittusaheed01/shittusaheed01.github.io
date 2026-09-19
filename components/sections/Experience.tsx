import { SectionHeading } from '@/components/SectionHeading';
import { experiences } from '@/lib/portfolio';

export function Experience() {
  return (
    <section id="experience" className="section shell" aria-label="Experience and education" tabIndex={-1}>
      <SectionHeading number="02" label="Experience & education" title="The work along the way." />
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience-row" key={experience.company}>
            <div className="experience-meta">
<p>{experience.period}</p>{index === 0 && <span className="current-label">
<span className="status-dot" /> Current role</span>}</div>
            <div className="experience-content">
<div className="experience-title">
<h3>{experience.title}</h3>
<span>{experience.company}</span>
</div>
<p>{experience.description}</p>
<ul className="tags" aria-label={`${experience.company} skills`}>{experience.highlights.map(tech => <li key={tech}>{tech}</li>)}</ul>
</div>
          </article>
        ))}
      </div>
    </section>
  );
}
