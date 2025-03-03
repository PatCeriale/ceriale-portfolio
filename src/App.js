// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
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
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [showThemePicker, setShowThemePicker] = useState(false);

  const handleThemeSelect = (themeIndex) => {
    setSelectedTheme(themeIndex);
    setShowThemePicker(false);
    console.log('Selected Theme:', selectedTheme);
  };

  const handleThemeOpen = () => {
    setShowThemePicker(true);
    console.log('Show theme modal:', showThemePicker);
  };

  const handleThemeClose = () => {
    setShowThemePicker(false);
    console.log('Show theme modal:', showThemePicker);
  };

  return (
    <div>
      <NavBar />
      {showThemePicker ? (
        <ThemePicker
          onThemeSelect={handleThemeSelect}
          onClose={handleThemeClose}
        />
      ) : null}
      <div className='routeDiv' id='home'>
        <Home theme={selectedTheme} />
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
      <Footer onOpen={handleThemeOpen} />
    </div>
  );
}
