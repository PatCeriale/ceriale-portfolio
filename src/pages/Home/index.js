import React from 'react';
import './style.css';
import Birds from '../../components/Themes/Birds';
import CherryBlossoms from '../../components/Themes/CherryBlossoms';
import Snowflakes from '../../components/Themes/Snowflakes';
import AutumnLeaves from '../../components/Themes/AutumnLeaves';

export default function Home(props) {
  const renderTheme = () => {
    switch (props.theme) {
      case 0:
        return <CherryBlossoms />;
      case 1:
        return <Birds />;
      case 2:
        return <AutumnLeaves />;
      case 3:
        return <Snowflakes />;
      default:
        return <Birds />;
    }
  };

  return (
    <div className='Home'>
      <h1 id='welcomeText'>Welcome!</h1>
      <div className='theme-container'>{renderTheme()}</div>
    </div>
  );
}
