import { MotionConfig } from 'framer-motion';
import { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    const timeoutId = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-black min-h-screen">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </MotionConfig>
  );
}

export default App;
