import { SectionHeading } from '@/components/SectionHeading';
import { skillCategories } from '@/lib/portfolio';

export function Skills() {
  return (
    <section id="skills" className="section shell" aria-label="Technical skills" tabIndex={-1}>
      <SectionHeading number="04" label="My toolkit" title="The tools behind the work." description="From API design to deployment and observability." />
      <div className="skills-grid">{skillCategories.map((category, index) => <div className="skill-group" key={category.title}>
<span className="skill-index">0{index + 1}</span>
<h3>{category.title}</h3>
<ul>{category.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
</div>)}</div>
    </section>
  );
}
