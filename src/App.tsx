import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Awards from './components/Awards';
import Team from './components/Team';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Hero />
        <About />
        <Awards />
        <Education />
        <Projects />
        <Team />
        <Footer />
    </Router>
  );
}

export default App;
