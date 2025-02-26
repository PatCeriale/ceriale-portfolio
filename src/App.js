// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
import TechSkills from './pages/TechSkills';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ThemePicker from './components/ThemePicker';

export default function App() {
  return (
    <div>
      <NavBar />
      <div className='routeDiv' id='home'>
        <Home />
        <ThemePicker />
      </div>
      <div className='routeDiv' id='about'>
        <About />
      </div>
      <div className='routeDiv' id='techSkills'>
        <TechSkills />
      </div>
      <div className='routeDiv' id='portfolio'>
        <Portfolio />
      </div>
      <div className='routeDiv' id='contact'>
        <Contact />
      </div>
      <div className='routeDiv' id='resume'>
        <Resume />
      </div>
      <Footer />
    </div>
  );
}
