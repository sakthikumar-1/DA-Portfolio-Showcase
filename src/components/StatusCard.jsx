const GRADIENT_BARS = [
  { width: '85%', gradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { width: '62%', gradient: 'linear-gradient(90deg, #ec4899, #f472b6)' },
  { width: '48%', gradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
];

export default function StatusCard({ className = '' }) {
  return (
    <div
      className={`glass-card animate-fade-up p-4 sm:p-5 ${className}`}
      style={{ animationDelay: '100ms', opacity: 0 }}
    >
      <p
        className="mb-4 font-mono text-[length:var(--text-xs)] uppercase tracking-wider"
        style={{ color: 'var(--text-muted)' }}
      >
        System Status: Optimized
      </p>

      <div className="mb-4 space-y-2">
        {GRADIENT_BARS.map((bar, i) => (
          <div
            key={i}
            className="status-bar"
            style={{ width: bar.width, background: bar.gradient }}
          />
        ))}
      </div>

      <p
        className="font-sans font-bold gradient-text"
        style={{ fontSize: 'var(--text-2xl)', letterSpacing: '-0.03em' }}
      >
        4 dashboards
      </p>
      <p className="mt-1 font-mono text-[length:var(--text-xs)]" style={{ color: 'var(--text-muted)' }}>
        shipped across 4 industries
      </p>
    </div>
  );
}
