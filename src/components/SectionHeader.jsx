export default function SectionHeader({ label, title, highlight, description, className = '' }) {
  return (
    <header className={`section-header ${className}`}>
      <div className="section-header__eyebrow">
        <span className="section-header__bar" />
        <span className="section-header__label">{label}</span>
      </div>
      {title && (
        <h2 className="section-header__title">
          {title}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
      )}
      {description && <p className="section-header__desc">{description}</p>}
    </header>
  );
}
