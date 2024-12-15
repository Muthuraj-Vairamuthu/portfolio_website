import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <ScrollIndicator />
      <Header scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, projectsRef, contactRef }} />
      <main>
        <section ref={homeRef}><Home /></section>
        <section ref={aboutRef}><About /></section>
        <section ref={projectsRef}><Projects /></section>
        <section ref={contactRef}><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
