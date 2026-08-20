/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: '#f8f9fc',
        card: '#ffffff',
        panel: '#f1f4f9',
        border: '#e2e8f0',
        heading: '#0f172a',
        body: '#475569',
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card: '12px',
        chip: '6px',
      },
      maxWidth: {
        site: '1280px',
      },
      spacing: {
        'site-1': '8px',
        'site-2': '16px',
        'site-3': '24px',
        'site-4': '32px',
        'site-5': '48px',
        'site-6': '64px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
      screens: {
        tablet: '768px',
        desktop: '1024px',
        wide: '1440px',
      },
    },
  },
  plugins: [],
}
