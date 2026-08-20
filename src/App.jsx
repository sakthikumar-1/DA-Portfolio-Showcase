import { useState, useEffect, useCallback } from 'react';
import PageBackground from './components/PageBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProjectDetailView from './components/ProjectDetailView';
import DashboardPage from './components/DashboardPage';
import { getProjectById } from './data/projects';

export default function App() {
  // routeType: 'home' | 'project' | 'dashboard'
  const [route, setRoute] = useState({ type: 'home', id: null });

  const navigateToHash = useCallback((hash) => {
    // normalize hash (ensure leading #)
    if (!hash) {
      window.location.hash = '';
      return;
    }
    if (hash.startsWith('#')) window.location.hash = hash;
    else window.location.hash = `#${hash}`;
  }, []);

  const handleProjectSelect = (id) => {
    // open project detail in-app and update hash for shareability
    navigateToHash(`project-${id}`);
  };

  const handleBack = () => {
    navigateToHash('');
  };

  const handleNavClick = useCallback((href) => {
    // set hash; hashchange listener will update route
    navigateToHash(href);
  }, [navigateToHash]);

  useEffect(() => {
    const parseHash = () => {
      const h = window.location.hash || '';

      if (h.startsWith('#dashboard-')) {
        const id = h.replace('#dashboard-', '');
        setRoute({ type: 'dashboard', id });
        return;
      }

      if (h.startsWith('#project-')) {
        const id = h.replace('#project-', '');
        setRoute({ type: 'project', id });
        return;
      }

      setRoute({ type: 'home', id: null });

      if (!h) return;

      const safeHash = h.startsWith('#') ? h : `#${h}`;

      try {
        const target = document.querySelector(safeHash);
        if (target) {
          setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
        } else if (/\s/.test(h.replace(/^#/, '')) || /[^a-zA-Z0-9\-_]/.test(h.replace(/^#/, ''))) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      } catch {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };

    // parse on mount
    parseHash();
    // update on hash change
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  useEffect(() => {
    if (route.type !== 'home') {
      window.scrollTo({ top: 0, behavior: route.type === 'project' ? 'smooth' : 'auto' });
    }
  }, [route]);

  const project = route.type === 'project' || route.type === 'dashboard' ? getProjectById(route.id) : null;

  return (
    <>
      <PageBackground />
      <div className="app-shell">
        <Navbar onNavClick={handleNavClick} />
        <main>
          {route.type === 'dashboard' ? (
            <>
              <DashboardPage projectId={route.id} />
            </>
          ) : route.type === 'project' && project ? (
            <>
              <ProjectDetailView project={project} onBack={handleBack} />
              <Footer />
            </>
          ) : (
            <>
              <HomeView onProjectSelect={handleProjectSelect} onScrollTo={handleNavClick} />
              <Footer />
            </>
          )}
        </main>
      </div>
    </>
  );
}
