interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ number, label, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span>{number} /</span> {label}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
