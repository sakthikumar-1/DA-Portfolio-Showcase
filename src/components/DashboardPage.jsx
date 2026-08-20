import { useEffect } from 'react';
import { getProjectById } from '../data/projects';

export default function DashboardPage({ projectId }) {
  const project = getProjectById(projectId);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} · Dashboard`;
    return () => {
      document.title = 'Portfolio';
    };
  }, [project]);

  if (!project) {
    return (
      <div className="site-container" style={{ padding: '6rem 1rem' }}>
        <h2 style={{ color: 'var(--text-heading)' }}>Dashboard not found</h2>
        <p style={{ color: 'var(--text-sub)' }}>No dashboard exists for the requested project.</p>
      </div>
    );
  }

  return (
    <div className="site-container" style={{ padding: '2.5rem 1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <h1 style={{ margin: 0, color: 'var(--text-heading)' }}>{project.title}</h1>
        <span style={{ color: 'var(--text-muted)', fontFamily: 'JetBrains Mono' }}>{project.domain}</span>
      </div>

      {/* If the project provides a dashboardUrl (embed or live link), show it in an iframe. Otherwise show the dashboard screenshot. */}
      {project.dashboardUrl ? (
        <div style={{ width: '100%', minHeight: 480 }}>
          <iframe
            title={`${project.title} live dashboard`}
            src={project.dashboardUrl}
            style={{ width: '100%', height: '80vh', border: 'none', borderRadius: 10 }}
          />
        </div>
      ) : (
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img
            src={project.img}
            alt={`${project.title} dashboard`}
            style={{ maxWidth: '100%', borderRadius: 10, boxShadow: '0 12px 40px rgba(0,0,0,0.35)' }}
          />
          <div style={{ marginTop: 12 }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-sm"
              style={{ textDecoration: 'none' }}
            >
              View project repo
            </a>
          </div>
        </div>
      )}

      <div style={{ marginTop: 18 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="btn-ghost btn-sm">← Back to portfolio</a>
      </div>
    </div>
  );
}
