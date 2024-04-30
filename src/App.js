import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Birds from './components/Birds';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Switch> */}
      {/* <Route exact path='/'> */}
      <div className='hrefDiv' id='home'></div>
      <div className='BirdDiv'>
        <Birds />
      </div>
      <Home />
      {/* <About />
          <Portfolio />
          <Contact /> */}
      {/* </Route> */}
      {/* <Route exact path='/about'> */}
      <div className='hrefDiv' id='about'></div>
      <About />
      {/* </Route> */}
      {/* <Route exact path='/portfolio'> */}
      <div className='hrefDiv' id='portfolio'></div>
      <Portfolio />
      {/* </Route> */}
      {/* <Route exact path='/contact'> */}
      <div className='hrefDiv' id='contact'></div>
      <Contact />
      {/* </Route> */}
      {/* <Route exact path='/resume'> */}
      <div className='hrefDiv' id='resume'></div>
      <Resume />
      {/* </Route> */}
      {/* </Switch> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
