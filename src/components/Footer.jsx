import { contactInfo } from '../data/skills';

export default function Footer({ embedded = false }) {
  const links = [
    { label: 'Portfolio', href: contactInfo.portfolio },
    { label: 'LinkedIn', href: contactInfo.linkedin },
    { label: 'GitHub', href: contactInfo.github },
    { label: 'Email', href: `mailto:${contactInfo.email}` },
  ];

  return (
    <footer
      className={
        embedded
          ? 'flex flex-wrap items-center justify-between gap-3 pt-2'
          : 'site-container flex flex-wrap items-center justify-between gap-3 py-6'
      }
      style={embedded ? undefined : { borderTop: '1px solid var(--border)' }}
    >
      <span
        className="font-mono text-[length:var(--text-xs)] uppercase tracking-wide"
        style={{ color: 'var(--text-muted)' }}
      >
        © 2026 Sakthi Kumar B
      </span>
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label !== 'Email' ? '_blank' : undefined}
            rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
            className="hover-footer-link font-mono text-[length:var(--text-xs)]"
            style={{ color: 'var(--text-sub)' }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
