import './App.css';
import { lazy} from 'react';

// Component imports
const NavBar = lazy(() => import('./components/NavBar'));
const Home = lazy(() => import('./components/Home'));
const SocialLinks = lazy(() => import('./components/SocialLinks'));
const About = lazy(() => import('./components/About'));
const Experiences = lazy(() => import('./components/Experiences')); 
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));

/**
 * Main App component that serves as the root of the application
 * Implements code-splitting using React.lazy for optimized loading
 */
function App() {
  return (
    <div className="app-container">
        <NavBar />
        <main>
          <Home />
          <SocialLinks />
          <About />
          <Experiences />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
    </div>
  );
}

export default App;
