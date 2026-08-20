import { ACCENTS } from '../data/projects';

export default function ProjectCard({ project, index, onClick }) {
  const accent = ACCENTS[project.color];

  const openDetail = () => onClick(project.id);

  return (
    <article
      className="glass-card card-hover project-card animate-fade-up"
      style={{
        animationDelay: `${index * 50}ms`,
        opacity: 0,
        cursor: 'pointer',
      }}
      onClick={openDetail}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDetail();
        }
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accent.border;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      <div className="project-card__header">
        <div
          className="project-card__icon"
          style={{
            backgroundColor: accent.bg,
            border: `1px solid ${accent.border}`,
            color: accent.text,
          }}
        >
          {project.icon}
        </div>
        <span
          className="project-card__category"
          style={{
            backgroundColor: accent.bg,
            border: `1px solid ${accent.border}`,
            color: accent.text,
          }}
        >
          {project.domain}
        </span>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__metrics">
        {project.stats.map((stat) => (
          <div key={stat.label} className="project-card__metric">
            <div className="project-card__metric-value" style={{ color: accent.text }}>
              {stat.value}
            </div>
            <div className="project-card__metric-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="project-card__tools">
        {project.tools.slice(0, 4).map((tool) => (
          <span key={tool} className="project-card__tool hover-chip">{tool}</span>
        ))}
      </div>

      <div className="project-card__actions">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost btn-sm"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub
        </a>
        <button type="button" onClick={(e) => { e.stopPropagation(); openDetail(); }} className="btn-primary btn-sm">
          Live Demo
        </button>
        <a
          href={`#dashboard-${project.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost btn-sm"
          onClick={(e) => e.stopPropagation()}
          style={{ marginLeft: 8 }}
        >
          Open Dashboard Page
        </a>
      </div>

      <div
        className="project-screenshot-wrap"
        onClick={openDetail}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openDetail();
          }
        }}
        aria-label={`Preview ${project.title} dashboard`}
      >
        <img
          src={project.img}
          alt={`${project.title} dashboard preview`}
          className="project-screenshot"
          loading="lazy"
          decoding="async"
        />
        <div className="project-screenshot-overlay">VIEW DASHBOARD</div>
      </div>
    </article>
  );
}
