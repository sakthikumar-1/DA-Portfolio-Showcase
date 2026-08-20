import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative flex h-8 w-12 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200"
      style={{
        backgroundColor: 'var(--bg-panel)',
        border: '1px solid var(--border-strong)',
      }}
    >
      <span
        className="absolute flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-200 ease-in-out"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
            : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
          transform: isDark ? 'translateX(18px)' : 'translateX(0)',
        }}
      >
        {isDark ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
      </span>
    </button>
  );
}
