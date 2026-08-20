import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onNavClick }) {
  const handleClick = (e, href) => {
    e.preventDefault();
    if (onNavClick) onNavClick(href);
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'var(--bg-nav)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'var(--nav-blur)',
        WebkitBackdropFilter: 'var(--nav-blur)',
      }}
    >
      <nav className="site-container flex items-center justify-between gap-3 py-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-mono text-sm font-semibold tracking-tight shrink-0"
        >
          <span style={{ color: 'var(--text-heading)' }}>SAKTHI</span>
          <span className="gradient-text">.DATA</span>
        </a>

        <div className="hidden items-center md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
        </div>
      </nav>

      <div
        className="site-container md:hidden"
        style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--space-1)' }}
      >
        <div className="mobile-nav-scroll">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="nav-link nav-link--mobile shrink-0 font-mono uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
