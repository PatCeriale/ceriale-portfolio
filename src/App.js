import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Birds from './components/Birds';
import About from './pages/About';
import TechSkills from './pages/TechSkills';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import './global.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <TechSkills />
      <Portfolio />
      <Contact />
      <Resume />
      {/* <Router>
        <Switch>
          <Route exact path='/'>
            <div className='hrefDiv' id='home'></div>
            <div className='BirdDiv'></div>
            <Home />
            <About />
            <TechSkills />
            <Portfolio />
            <Contact />
            <Resume />
          </Route>
          <Route exact path='/about'>
            <div className='hrefDiv' id='about'>
              <About />
            </div>
          </Route>
          <div className='hrefDiv' id='portfolio'></div>
          <Portfolio />
          <div className='hrefDiv' id='contact'></div>
          <Contact />
          <div className='hrefDiv' id='resume'></div>
          <Resume />
        </Switch>
      </Router> */}
    </div>
  );
}
