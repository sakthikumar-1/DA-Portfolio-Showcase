import { ACCENTS } from '../data/projects';

export default function SectionLabel({ label, accentKey = 'blue', className = '', size = 'sm' }) {
  const accent = ACCENTS[accentKey];
  const fontSize = size === 'lg' ? '11px' : '10px';

  return (
    <div className={`flex items-center gap-2 mb-3 ${className}`}>
      <span
        className="inline-block shrink-0"
        style={{
          width: '2px',
          height: '13px',
          backgroundColor: accent.text,
        }}
      />
      <span
        className="font-mono uppercase"
        style={{ fontSize, letterSpacing: '1.2px', color: 'var(--text-muted)' }}
      >
        {label}
      </span>
    </div>
  );
}
