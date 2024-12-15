import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import TransitionWrapper from './components/TransitionWrapper';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<TransitionWrapper><Home /></TransitionWrapper>}
        />
        <Route
          path="/about"
          element={<TransitionWrapper><About /></TransitionWrapper>}
        />
        <Route
          path="/projects"
          element={<TransitionWrapper><Projects /></TransitionWrapper>}
        />
        <Route
          path="/contact"
          element={<TransitionWrapper><Contact /></TransitionWrapper>}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
