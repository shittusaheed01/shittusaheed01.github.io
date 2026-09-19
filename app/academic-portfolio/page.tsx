import styles from './academic-portfolio.module.css';
import {
  academicCertificates,
  academicEducation,
  academicMetrics,
  academicNavigation,
  academicProfile,
  academicProject,
  academicPublication,
  academicResearchInterests,
  academicTeaching,
} from '@/lib/academic-portfolio';

export default function AcademicPortfolioPage() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <header className={styles.siteHeader}>
        <a className={styles.wordmark} href="#main-content" aria-label="Saheed Shittu academic portfolio home"><span>Saheed Shittu</span><span>Academic portfolio</span></a>
        <nav className={styles.navigation} aria-label="Academic portfolio sections">
          {academicNavigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </header>
      <section id="main-content" className={styles.hero} aria-labelledby="page-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Electrical engineering · Nigeria</p>
          <h1 id="page-title">Saheed Shittu</h1>
          <p className={styles.lede}>{academicProfile.summary}</p>
          <a className={styles.contactLink} href="#contact">Academic contact</a>
        </div>
        <dl className={styles.metricGrid}>{academicMetrics.map((metric) => <div key={metric.label} className={styles.metric}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
      </section>
      <section id="research" className={styles.section} aria-labelledby="research-title"><div className={styles.sectionLabel}>01 — Research direction</div><div className={styles.sectionContent}><h2 id="research-title">Engineering reliable electricity systems for a changing grid.</h2><p>My work sits at the intersection of power-system stability, renewable generation, and practical energy design. I am interested in how analysis and engineering choices can support dependable, sustainable electricity infrastructure.</p><ul className={styles.interestList} aria-label="Research interests">{academicResearchInterests.map((interest) => <li key={interest}>{interest}</li>)}</ul></div></section>
      <section id="publication" className={styles.section} aria-labelledby="publication-title"><div className={styles.sectionLabel}>02 — Publication</div><article className={styles.sectionContent}><p className={styles.kicker}>{academicPublication.journal} · {academicPublication.citation}</p><h2 id="publication-title">{academicPublication.title}</h2><p className={styles.byline}>{academicPublication.authors}</p><p>{academicPublication.summary}</p><a className={styles.textLink} href={academicPublication.doiUrl} target="_blank" rel="noreferrer">Read the publication via DOI <span aria-hidden="true">↗</span></a></article></section>
      <section id="projects" className={styles.section} aria-labelledby="projects-title"><div className={styles.sectionLabel}>03 — Selected engineering project</div><article className={styles.sectionContent}><p className={styles.kicker}>{academicProject.context}</p><h2 id="projects-title">{academicProject.title}</h2><p>{academicProject.summary}</p><ul className={styles.detailList}>{academicProject.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article></section>
      <section id="teaching" className={styles.section} aria-labelledby="teaching-title"><div className={styles.sectionLabel}>04 — Teaching and research support</div><article className={styles.sectionContent}><p className={styles.kicker}>{academicTeaching.institution} · {academicTeaching.period}</p><h2 id="teaching-title">{academicTeaching.role}</h2><p>{academicTeaching.summary}</p><ul className={styles.detailList}>{academicTeaching.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul></article></section>
      <section id="education" className={styles.section} aria-labelledby="education-title"><div className={styles.sectionLabel}>05 — Education</div><article className={styles.sectionContent}><p className={styles.kicker}>{academicEducation.institution} · {academicEducation.period}</p><h2 id="education-title">{academicEducation.degree}</h2><p className={styles.educationNote}>{academicEducation.distinction}</p><p>{academicEducation.rank}</p><h3>Selected results</h3><ul className={styles.resultsGrid}>{academicEducation.selectedResults.map((result) => <li key={result}>{result}</li>)}</ul></article></section>
      <section id="certifications" className={styles.section} aria-labelledby="certifications-title"><div className={styles.sectionLabel}>06 — Certifications</div><div className={styles.sectionContent}><h2 id="certifications-title">Completed professional development</h2><div className={styles.certificateGrid}>{academicCertificates.map((certificate) => <article key={certificate.title} className={styles.certificate}><p>{certificate.year}</p><h3>{certificate.title}</h3><span>{certificate.issuer}</span></article>)}</div></div></section>
      <footer id="contact" className={styles.footer}><div><p className={styles.eyebrow}>Academic contact</p><h2>Open to research conversations and collaboration.</h2></div><a className={styles.emailLink} href={`mailto:${academicProfile.email}`}>{academicProfile.email}</a></footer>
    </main>
  );
}
