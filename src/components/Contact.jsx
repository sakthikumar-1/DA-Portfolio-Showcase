import SectionHeader from './SectionHeader';
import { contactInfo } from '../data/skills';

export default function Contact({ onScrollTo }) {
  const scrollProjects = () => {
    if (onScrollTo) onScrollTo('#projects');
    else document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="page-section page-section--contact site-container">
      <div className="page-section__inner">
        <div className="glass-card p-5 sm:p-6">
          <SectionHeader
            label="Get in touch"
            title="Let's engineer your"
            highlight=" data strategy."
            description="I'm a data analyst focused on Power BI, SQL and Python — open to full-time roles and high-impact consulting projects."
            className="!mb-5"
          />

          <div className="flex flex-wrap gap-2">
            <a href={`mailto:${contactInfo.email}`} className="btn-primary">
              Email me
            </a>
            <button type="button" onClick={scrollProjects} className="btn-ghost">
              Review my work
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
