//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero'; // Adjust paths as needed
import About from './components/About';
import Education from './components/Education';
import Awards from './components/Awards';
import Team from './components/Team';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
