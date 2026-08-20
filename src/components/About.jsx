import SectionHeader from './SectionHeader';
import { contactInfo } from '../data/skills';

const INDUSTRIES = [
  { label: 'Healthcare', color: '#60a5fa', bg: 'rgba(96,165,250,0.12)', border: 'rgba(96,165,250,0.35)' },
  { label: 'E-Commerce', color: '#2dd4bf', bg: 'rgba(45,212,191,0.12)', border: 'rgba(45,212,191,0.35)' },
  { label: 'Cybersecurity', color: '#fb7185', bg: 'rgba(251,113,133,0.12)', border: 'rgba(251,113,133,0.35)' },
  { label: 'Finance', color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.35)' },
];

export default function About() {
  return (
    <section id="about" className="page-section site-container">
      <div className="page-section__inner">
        <SectionHeader
          label="About"
          title="Building dashboards that"
          highlight=" drive decisions."
        />

        <div className="glass-card hover-card p-5 sm:p-6">
          <p className="text-[length:var(--text-sm)]" style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>
            I'm <strong style={{ color: 'var(--text-heading)' }}>Sakthi Kumar B</strong> — a{' '}
            {contactInfo.role} based in {contactInfo.location}. I turn messy, multi-source
            datasets into clear visual stories that stakeholders actually use.
          </p>
          <p
            className="mt-3 text-[length:var(--text-sm)]"
            style={{ color: 'var(--text-body)', lineHeight: 1.7 }}
          >
            My work spans end-to-end analytics — data cleaning, EDA, feature engineering,
            statistical modelling, and Power BI dashboard design — with actionable
            recommendations baked into every deliverable.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {INDUSTRIES.map((item) => (
              <span
                key={item.label}
                className="hover-pill font-mono text-[length:var(--text-xs)]"
                style={{
                  backgroundColor: item.bg,
                  border: `1px solid ${item.border}`,
                  borderRadius: '999px',
                  color: item.color,
                  padding: '6px 14px',
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
