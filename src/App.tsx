// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from './components/Footer';
import Education from './components/Education';   
import Awards from './components/Awards';   
import Projects from './components/Projects'; 
import Team from './components/Team'; 
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <main className="bg-black text-white">
          <Hero />
          <About />
          <Education />
          <Awards />
          <Projects />
          <Team />
          <Footer />
         
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
