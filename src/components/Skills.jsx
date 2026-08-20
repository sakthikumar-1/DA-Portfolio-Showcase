import SectionHeader from './SectionHeader';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="page-section site-container">
      <div className="page-section__inner">
        <SectionHeader
          label="Capabilities"
          title="Skills & Toolkit"
          description="The analytics, engineering and machine learning stack I use to turn data into decisions."
        />

        <div className="skills-grid">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.id}
              className="glass-card hover-card animate-fade-up p-4 sm:p-5"
              style={{ animationDelay: `${catIdx * 50}ms`, opacity: 0 }}
            >
              <h3
                className="mb-3 font-mono text-[length:var(--text-xs)] uppercase tracking-wider"
                style={{ color: 'var(--accent-blue)' }}
              >
                {cat.label}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="hover-chip font-mono text-[length:var(--text-xs)]"
                    style={{
                      backgroundColor: 'var(--bg-panel)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      color: 'var(--text-body)',
                      padding: '5px 10px',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
