import Hero from './Hero';
import About from './About';
import ProjectCard from './ProjectCard';
import ProjectsHeader from './ProjectsHeader';
import Skills from './Skills';
import Contact from './Contact';
import { projects } from '../data/projects';

export default function HomeView({ onProjectSelect, onScrollTo }) {
  return (
    <>
      <Hero onScrollTo={onScrollTo} />
      <About />

      <section
        id="projects"
        className="page-section page-section--top page-section--projects site-container"
      >
        <div className="page-section__inner">
          <ProjectsHeader />
          <div className="page-section__scroll">
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={onProjectSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Contact onScrollTo={onScrollTo} />
    </>
  );
}
