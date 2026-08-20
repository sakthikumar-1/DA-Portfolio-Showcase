/* ─────────────────────────────────────────────────────────
   app.js — Root app component and React mount
   ───────────────────────────────────────────────────────── */


function App() {
  const [active, setActive] = useState(null);
  const rootRef = useRef(null);

  /* Scroll to top on view change */
  useEffect(() => {
    if (rootRef.current) rootRef.current.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [active]);

  /* Update page title */
  useEffect(() => {
    const p = active ? PROJECTS.find(x => x.id === active) : null;
    document.title = p
      ? `${p.title} — Sakthi Kumar B | Data Analytics Portfolio`
      : 'Sakthi Kumar B | Data Analytics Portfolio';
  }, [active]);

  const proj = active ? PROJECTS.find(x => x.id === active) : null;

  return h('div', { ref: rootRef },
    !active
      ? h(HomeView, { onSelect: setActive })
      : h(ProjectView, { proj, onBack: () => setActive(null) })
  );
}

/* Mount */
ReactDOM.createRoot(document.getElementById('root')).render(h(App));
