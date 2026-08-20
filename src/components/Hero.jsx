import { contactInfo } from '../data/skills';

export default function Hero({ onScrollTo }) {
  const scroll = (id) => {
    if (onScrollTo) onScrollTo(id);
    else document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="page-section site-container">
      <div className="page-section__inner hero-section">
        <div className="badge-pill mb-4 sm:mb-5">
          <span
            className="animate-blink inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: '#22c55e' }}
          />
          {contactInfo.availability}
        </div>

        <h1 className="hero-title">
          Turning raw noise into{' '}
          <span className="gradient-text">strategic signals.</span>
        </h1>

        <p className="hero-subtitle">
          Sakthi Kumar B — {contactInfo.role}. I build dashboards that translate
          complex behavioral data into decisions, across health, security, retail
          and finance.
        </p>

        <div className="hero-actions mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
          <button type="button" onClick={() => scroll('#projects')} className="btn-primary">
            View My Works
          </button>
          <button type="button" onClick={() => scroll('#about')} className="btn-ghost">
            About me
          </button>
        </div>
      </div>
    </section>
  );
}
