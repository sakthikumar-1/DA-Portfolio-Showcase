/* ─────────────────────────────────────────────────────────
   components.js — All React UI components
   ───────────────────────────────────────────────────────── */

const { useState, useEffect, useRef, createElement: h } = React;
const { ResponsiveContainer, BarChart, Bar, LineChart, Line,
        PieChart, Pie, Cell, XAxis, YAxis, Tooltip } = Recharts;

/* ── Shared tooltip style ── */
function ttStyle(a) {
  return {
    contentStyle: {
      background: '#111827',
      border: `1px solid ${a.border}`,
      borderRadius: 8,
      fontSize: 11,
      fontFamily: 'JetBrains Mono, monospace',
      color: '#8898aa',
    },
    cursor: { fill: 'rgba(255,255,255,0.03)' },
  };
}

/* ── Chart ── */
function Chart({ proj, fi }) {
  const a = ACCENT[proj.color];
  const mult = [1, 0.81, 0.93, 0.74][fi % 4];
  const tt = ttStyle(a);

  const getFormatter = () => {
    if (proj.id === 1) return (v) => [`${v}%`, 'Importance'];
    if (proj.id === 2) return (v) => [`₹${v}M`, 'Revenue'];
    if (proj.id === 3) return (v) => [`${v}%`, 'Share'];
    if (proj.id === 4) return (v) => [`${v}%`, 'Risk weight'];
    return (v) => [v, 'Value'];
  };
  const fmt = getFormatter();

  if (proj.chartType === 'bar') {
    const d = proj.chartData.map(x => ({ ...x, v: Math.round(x.v * mult * 10) / 10 }));
    return h(ResponsiveContainer, { width: '100%', height: 180 },
      h(BarChart, { data: d, barCategoryGap: '35%' },
        h(XAxis, { dataKey: 'n', tick: { fill: '#4b5a6e', fontSize: 10, fontFamily: 'JetBrains Mono,monospace' }, axisLine: { stroke: '#1a2236' }, tickLine: false }),
        h(YAxis, { tick: { fill: '#4b5a6e', fontSize: 10 }, axisLine: false, tickLine: false }),
        h(Tooltip, { ...tt, formatter: fmt }),
        h(Bar, { dataKey: 'v', fill: a.hi, radius: [4, 4, 0, 0], maxBarSize: 30 })
      )
    );
  }

  if (proj.chartType === 'line') {
    const d = proj.chartData.map(x => ({ ...x, v: Math.round(x.v * mult * 10) / 10 }));
    return h(ResponsiveContainer, { width: '100%', height: 180 },
      h(LineChart, { data: d },
        h(XAxis, { dataKey: 'n', tick: { fill: '#4b5a6e', fontSize: 10, fontFamily: 'JetBrains Mono,monospace' }, axisLine: { stroke: '#1a2236' }, tickLine: false }),
        h(YAxis, { tick: { fill: '#4b5a6e', fontSize: 10 }, axisLine: false, tickLine: false }),
        h(Tooltip, { ...tt, formatter: fmt }),
        h(Line, { type: 'monotone', dataKey: 'v', stroke: a.hi, strokeWidth: 2.5, dot: { fill: a.hi, r: 2.5, strokeWidth: 0 }, activeDot: { r: 4.5, fill: a.hi } })
      )
    );
  }

  if (proj.chartType === 'pie') {
    return h(ResponsiveContainer, { width: '100%', height: 180 },
      h(PieChart, {},
        h(Pie, { data: proj.chartData, cx: '50%', cy: '50%', innerRadius: 48, outerRadius: 76, paddingAngle: 3, dataKey: 'v' },
          proj.chartData.map((e, i) => h(Cell, { key: i, fill: e.c }))
        ),
        h(Tooltip, { contentStyle: ttStyle(a).contentStyle, formatter: (v, n) => [`${v}%`, n] })
      )
    );
  }
}

/* ── Section Label ── */
function SLabel({ text, color }) {
  const a = ACCENT[color];
  return h('div', { className: 'sec-label' },
    h('div', { className: 'sec-label__bar', style: { background: a.hi } }),
    h('span', { className: 'sec-label__text' }, text)
  );
}

/* ── Navbar ── */
function Navbar() {
  return h('nav', { className: 'navbar' },
    h('div', { className: 'navbar__brand' },
      h('div', { className: 'navbar__avatar' }, 'S'),
      h('span', { className: 'navbar__name' }, 'Sakthi Kumar B'),
      h('span', { className: 'navbar__divider' }),
      h('span', { className: 'navbar__role' }, 'Data Analyst')
    ),
    h('div', { className: 'navbar__links' },
      h('a', {
        href: 'https://analysewithsakthi.vercel.app',
        target: '_blank',
        rel: 'noreferrer',
        className: 'navbar__link',
      }, '↗ Portfolio')
    )
  );
}

/* ── Project Card ── */
function ProjectCard({ proj: p, idx, onClick }) {
  const a = ACCENT[p.color];
  return h('div', {
    className: `project-card project-card--${p.color} anim-up`,
    style: { animationDelay: `${idx * 70}ms` },
    onClick,
  },
    /* Header row */
    h('div', { className: 'project-card__header' },
      h('div', {
        className: 'project-card__icon',
        style: { background: a.bg, border: `1px solid ${a.border}`, color: a.hi },
      }, p.icon),
      h('span', { className: `badge badge--${p.color}` }, p.sector)
    ),

    h('h3', { className: 'project-card__title' }, p.title),
    h('p',  { className: 'project-card__meta mono' }, p.meta),

    /* Dashboard thumbnail */
    h('div', { className: 'card-thumb' },
      h('img', { src: p.img, alt: p.title, loading: 'lazy' }),
      h('div', { className: 'card-thumb__overlay' }),
      h('div', { className: 'card-thumb__cta' },
        h('span', {}, 'OPEN DASHBOARD')
      )
    ),

    /* Stats */
    h('div', { className: 'card-stats' },
      p.stats.map(([v, l]) => h('div', {
        key: l,
        className: 'stat-box',
        style: { borderColor: a.border + '66' },
      },
        h('div', { className: `stat-box__val`, style: { color: a.hi } }, v),
        h('div', { className: 'stat-box__lbl' }, l)
      ))
    ),

    /* Tools */
    h('div', { className: 'card-tools' },
      p.tools.slice(0, 4).map(t => h('span', { key: t, className: 'chip' }, t))
    )
  );
}

/* ── Home View ── */
function HomeView({ onSelect }) {
  return h('div', { className: 'anim-in' },
    h(Navbar),

    /* Hero */
    h('section', { className: 'hero' },
      h('div', { className: 'hero__badge' },
        h('span', { className: 'hero__badge-dot pulse-dot' }),
        h('span', { className: 'hero__badge-text mono' }, 'Power BI · Python · Data Analytics')
      ),
      h('h1', { className: 'hero__title anim-up', style: { animationDelay: '40ms' } },
        'Data Analytics',
        h('br'),
        h('span', { className: 'hero__title-accent' }, 'Portfolio')
      ),
      h('p', { className: 'hero__subtitle anim-up', style: { animationDelay: '100ms' } },
        'Four end-to-end analytics projects — Healthcare, Finance, Retail, and Cybersecurity — each with an interactive dashboard, structured insights, and business recommendations.'
      ),
      h('div', { className: 'hero__tags anim-up', style: { animationDelay: '160ms' } },
        ['Python', 'Power BI', 'Pandas', 'Scikit-learn', 'DAX', 'Matplotlib', 'Seaborn', 'Excel'].map(t =>
          h('span', { key: t, className: 'chip' }, t)
        )
      )
    ),

    /* Cards grid */
    h('div', { className: 'projects-grid' },
      PROJECTS.map((p, i) => h(ProjectCard, { key: p.id, proj: p, idx: i, onClick: () => onSelect(p.id) }))
    ),

    /* Footer */
    h('footer', { className: 'footer' },
      h('span', { className: 'footer__copy mono' }, '© 2025 Sakthi Kumar B · Data Analyst & ML Engineer'),
      h('div', { className: 'footer__links' },
        [
          ['LinkedIn',            'https://linkedin.com/in/sakthikumar1'],
          ['GitHub',              'https://github.com/sakthikumar-1'],
          ['b.sakthikumar10@gmail.com', 'mailto:b.sakthikumar10@gmail.com'],
        ].map(([label, url]) =>
          h('a', { key: label, href: url, target: '_blank', rel: 'noreferrer', className: 'footer__link mono' }, label)
        )
      )
    )
  );
}

/* ── Project Detail View ── */
function ProjectView({ proj: p, onBack }) {
  const [fi, setFi]     = useState(0);
  const [zoom, setZoom] = useState(false);
  const a = ACCENT[p.color];

  return h('div', { className: 'anim-right' },

    /* Zoom overlay */
    zoom && h('div', { className: 'zoom-overlay', onClick: () => setZoom(false) },
      h('img', { src: p.img, alt: 'Dashboard fullscreen' })
    ),

    h(Navbar),

    /* Breadcrumb bar */
    h('div', { className: 'detail-breadcrumb' },
      h('button', { className: 'btn-back', onClick: onBack },
        '← Back to projects'
      ),
      h('span', { className: `badge badge--${p.color}` }, p.sector)
    ),

    /* Content */
    h('div', { className: 'detail-wrap' },

      /* Header */
      h('div', { className: 'detail-header' },
        h('div', { className: 'detail-header__top' },
          h('div', {
            className: 'detail-header__icon',
            style: { background: a.bg, border: `1px solid ${a.border}`, color: a.hi },
          }, p.icon),
          h('div', {},
            h('h1', { className: 'detail-header__title' }, p.title),
            h('p',  { className: 'detail-header__meta mono' }, p.meta)
          )
        ),

        /* KPIs */
        h('div', { className: 'detail-kpis' },
          p.kpis.map(([v, l, d]) => h('div', {
            key: l,
            className: 'kpi-card',
            style: { borderColor: a.border + '80' },
          },
            h('div', { className: 'kpi-card__val', style: { color: a.hi } }, v),
            h('div', { className: 'kpi-card__lbl mono' }, l),
            h('div', { className: 'kpi-card__desc' }, d)
          ))
        ),

        /* Tools */
        h('div', { className: 'detail-tools' },
          p.tools.map(t => h('span', {
            key: t,
            className: 'chip',
            style: { background: a.bg, border: `1px solid ${a.border}`, color: a.hi },
          }, t))
        )
      ),

      /* Dashboard section */
      h('div', { style: { marginBottom: 32 } },
        h(SLabel, { text: 'Live Dashboard', color: p.color }),

        /* Filter pills */
        h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 } },
          p.filters.map((f, i) => h('button', {
            key: f,
            className: `filter-pill${fi === i ? ' active' : ''}`,
            style: fi === i ? { background: a.hi, color: '#080c14', borderColor: a.hi } : {},
            onClick: () => setFi(i),
          }, f))
        ),

        /* Dashboard image + chart */
        h('div', { className: 'dashboard-grid' },
          h('div', { className: 'dash-img-wrap', onClick: () => setZoom(true), style: { borderColor: a.border + '80' } },
            h('img', { src: p.img, alt: `${p.title} dashboard` }),
            h('div', { className: 'dash-img-badge mono' }, 'Power BI · click to zoom')
          ),
          h('div', { className: 'chart-panel', style: { borderColor: a.border + '60' } },
            h('p', { className: 'chart-panel__label mono' }, p.chartLabel),
            h(Chart, { proj: p, fi })
          )
        )
      ),

      /* Workflow */
      h('div', { style: { marginBottom: 32 } },
        h(SLabel, { text: 'Analytics Workflow', color: p.color }),
        h('div', { className: 'workflow-row' },
          p.workflow.map((s, i) => h('div', { key: s, style: { display: 'flex', alignItems: 'center', gap: 6 } },
            h('div', { className: 'wf-step' },
              h('span', { className: 'wf-step__num', style: { color: a.hi } }, String(i + 1).padStart(2, '0')),
              s
            ),
            i < p.workflow.length - 1 && h('span', { className: 'wf-sep' }, '›')
          ))
        )
      ),

      /* Problem + Why */
      h('div', { className: 'info-grid' },
        [['Problem Statement', p.problem], ['Why I Chose This', p.why]].map(([lbl, txt]) =>
          h('div', { key: lbl, className: 'info-card' },
            h(SLabel, { text: lbl, color: p.color }),
            h('p', {}, txt)
          )
        )
      ),

      /* Key Insights */
      h('div', { className: 'insights-panel', style: { border: `1px solid ${a.border}60` } },
        h(SLabel, { text: 'Key Insights', color: p.color }),
        p.insights.map(([metric, tag, text], i) =>
          h('div', { key: i, className: 'insight-row' },
            h('div', { className: 'insight-row__metric', style: { color: a.hi } }, metric),
            h('div', { className: 'insight-row__tag' },
              h('span', { className: `badge badge--${p.color}` }, tag)
            ),
            h('p', { className: 'insight-row__text' }, text)
          )
        )
      ),

      /* Recommended Actions */
      h('div', { className: 'recs-panel', style: { border: `1px solid ${a.border}60`, marginTop: 12 } },
        h(SLabel, { text: 'Recommended Actions', color: p.color }),
        p.recs.map((rec, i) =>
          h('div', { key: i, className: 'rec-row' },
            h('div', {
              className: 'rec-row__num',
              style: { background: a.bg, border: `1px solid ${a.border}`, color: a.hi },
            }, i + 1),
            h('p', { className: 'rec-row__text' }, rec)
          )
        )
      ),

      /* Action buttons */
      h('div', { className: 'action-row' },
        h('a', {
          href: p.gh,
          target: '_blank',
          rel: 'noreferrer',
          className: 'btn-primary',
          style: { background: a.hi, color: '#080c14' },
        }, '↗ View on GitHub'),
        h('button', { className: 'btn-ghost', onClick: onBack }, '← All Projects')
      )
    )
  );
}
