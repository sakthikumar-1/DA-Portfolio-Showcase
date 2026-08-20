import { useState } from 'react';
import { ACCENTS } from '../data/projects';
import SectionLabel from './SectionLabel';
import ProjectChart from './ProjectChart';

export default function ProjectDetailView({ project, onBack }) {
  const [filterIndex, setFilterIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const accent = ACCENTS[project.color];

  return (
    <div className="animate-slide-in">
      <div
        className="sticky top-0 z-40 flex items-center justify-between site-container py-3"
        style={{
          backgroundColor: 'var(--bg-nav)',
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'var(--nav-blur)',
          WebkitBackdropFilter: 'var(--nav-blur)',
        }}
      >
        <button
          type="button"
          onClick={onBack}
          className="font-mono text-[length:var(--text-xs)] transition-colors duration-200"
          style={{ color: 'var(--text-sub)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-heading)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-sub)';
          }}
        >
          ← Back to projects
        </button>
        <span
          className="font-mono text-[length:var(--text-xs)] font-medium"
          style={{
            backgroundColor: accent.bg,
            border: `1px solid ${accent.border}`,
            borderRadius: '6px',
            color: accent.text,
            padding: '3px 10px',
          }}
        >
          {project.domain}
        </span>
      </div>

      <section
        className="site-container py-6 sm:py-8"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-start gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center text-lg"
            style={{
              backgroundColor: accent.bg,
              border: `1px solid ${accent.border}`,
              borderRadius: '10px',
              color: accent.text,
            }}
          >
            {project.icon}
          </div>
          <div>
            <h1
              className="font-sans font-bold"
              style={{
                fontSize: 'var(--text-2xl)',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                color: 'var(--text-heading)',
              }}
            >
              {project.title}
            </h1>
            <p className="mt-0.5 font-mono text-[length:var(--text-xs)]" style={{ color: 'var(--text-muted)' }}>
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="glass-card kpi-hover min-w-[100px] flex-1"
              style={{
                border: `1px solid ${accent.border}`,
                borderRadius: '10px',
                padding: '10px 14px',
              }}
            >
              <div className="text-[length:var(--text-xl)] font-bold" style={{ color: accent.text }}>
                {kpi.value}
              </div>
              <div
                className="font-mono text-[0.625rem] uppercase tracking-wide"
                style={{ color: 'var(--text-muted)' }}
              >
                {kpi.label}
              </div>
              <div className="mt-0.5 text-[length:var(--text-xs)]" style={{ color: 'var(--text-sub)' }}>
                {kpi.delta}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="font-mono text-[length:var(--text-xs)]"
              style={{
                backgroundColor: accent.bg,
                border: `1px solid ${accent.border}`,
                borderRadius: '6px',
                color: accent.text,
                padding: '3px 8px',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <div className="site-container">
        <section className="pt-6">
          <SectionLabel label="Live Dashboard" accentKey={project.color} />

          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.filters.map((filter, idx) => (
              <button
                key={filter}
                type="button"
                onClick={() => setFilterIndex(idx)}
                className="font-mono text-[length:var(--text-xs)] transition-colors duration-200"
                style={{
                  borderRadius: '999px',
                  padding: '4px 12px',
                  border: filterIndex === idx ? '1px solid transparent' : '1px solid var(--border)',
                  backgroundColor: filterIndex === idx ? accent.text : 'transparent',
                  color: filterIndex === idx ? '#ffffff' : 'var(--text-muted)',
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <div
              className="screenshot-container relative cursor-pointer overflow-hidden rounded-xl"
              style={{ border: `1px solid ${accent.border}` }}
              onClick={() => setLightboxOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setLightboxOpen(true);
              }}
            >
              <img
                src={project.img}
                alt={`${project.title} Power BI dashboard`}
                className="detail-screenshot"
                loading="lazy"
              />
              <span
                className="screenshot-badge absolute bottom-2 right-2 font-mono text-[0.625rem] text-[#f1f5f9]"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.55)',
                  borderRadius: '999px',
                  padding: '3px 8px',
                }}
              >
                Power BI · click to zoom
              </span>
            </div>

            <div
              className="glass-card"
              style={{
                border: `1px solid ${accent.border}`,
                borderRadius: '10px',
                padding: '14px 12px',
              }}
            >
              <p className="mb-2 font-mono text-[length:var(--text-xs)]" style={{ color: 'var(--text-muted)' }}>
                {project.chart.label}
              </p>
              <ProjectChart project={project} filterIndex={filterIndex} />
            </div>
          </div>
        </section>

        <section className="mt-6 mb-5">
          <SectionLabel label="Analytics Workflow" accentKey={project.color} />
          <div className="flex flex-wrap items-center gap-1">
            {project.workflow.map((step, idx) => (
              <span key={step} className="flex items-center gap-1">
                <span
                  className="font-mono text-[length:var(--text-xs)]"
                  style={{
                    backgroundColor: 'var(--bg-panel)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    color: 'var(--text-body)',
                    padding: '4px 10px',
                  }}
                >
                  <span style={{ color: accent.text }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>{' '}
                  {step}
                </span>
                {idx < project.workflow.length - 1 && (
                  <span className="px-0.5 font-mono text-[length:var(--text-xs)]" style={{ color: 'var(--text-muted)' }}>
                    ›
                  </span>
                )}
              </span>
            ))}
          </div>
        </section>

        <div className="mb-4 grid gap-3 md:grid-cols-2">
          <div className="glass-card p-4" style={{ borderRadius: '10px' }}>
            <SectionLabel label="Problem Statement" accentKey={project.color} className="mb-2" />
            <p className="text-[length:var(--text-sm)]" style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
              {project.problem}
            </p>
          </div>
          <div className="glass-card p-4" style={{ borderRadius: '10px' }}>
            <SectionLabel label="Why I Chose This" accentKey={project.color} className="mb-2" />
            <p className="text-[length:var(--text-sm)]" style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
              {project.why}
            </p>
          </div>
        </div>

        <div
          className="glass-card mb-4 p-4"
          style={{
            border: `1px solid ${accent.border}`,
            borderRadius: '10px',
          }}
        >
          <SectionLabel label="Key Insights" accentKey={project.color} className="mb-2" />
          {project.insights.map((insight) => (
            <div
              key={`${insight.metric}-${insight.tag}`}
              className="insight-row flex flex-wrap items-start gap-2 sm:flex-nowrap"
              style={{ padding: '6px 4px', borderRadius: '6px' }}
            >
              <span
                className="min-w-[40px] shrink-0 text-[length:var(--text-sm)] font-bold"
                style={{ color: accent.text }}
              >
                {insight.metric}
              </span>
              <span
                className="min-w-[56px] shrink-0 text-center font-mono text-[0.625rem]"
                style={{
                  backgroundColor: accent.bg,
                  border: `1px solid ${accent.border}`,
                  borderRadius: '6px',
                  color: accent.text,
                  padding: '2px 6px',
                }}
              >
                {insight.tag}
              </span>
              <p
                className="min-w-0 flex-1 text-[length:var(--text-xs)]"
                style={{ lineHeight: 1.65, color: 'var(--text-sub)' }}
              >
                {insight.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="glass-card mb-6 p-4"
          style={{
            border: `1px solid ${accent.border}`,
            borderRadius: '10px',
          }}
        >
          <SectionLabel label="Recommended Actions" accentKey={project.color} className="mb-2" />
          {project.recs.map((rec, idx) => (
            <div key={rec} className="flex items-start gap-2" style={{ padding: '6px 0' }}>
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center font-mono text-[0.625rem] font-semibold"
                style={{
                  backgroundColor: accent.bg,
                  border: `1px solid ${accent.border}`,
                  borderRadius: '4px',
                  color: accent.text,
                }}
              >
                {idx + 1}
              </span>
              <p className="text-[length:var(--text-xs)]" style={{ lineHeight: 1.65, color: 'var(--text-body)' }}>
                {rec}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pb-10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
          >
            View on GitHub →
          </a>
          <button type="button" onClick={onBack} className="btn-ghost btn-sm">
            ← All Projects
          </button>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)' }}
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Dashboard fullscreen view"
        >
          <img
            src={project.img}
            alt={`${project.title} dashboard fullscreen`}
            className="max-h-[90vh] max-w-full object-contain"
            style={{ borderRadius: '10px' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
