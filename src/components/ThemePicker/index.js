import React, { useState } from 'react';
import './style.css';

export default function ThemePicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(0);

  const options = [
    {
      id: 0,
      label: 'Spring',
      description: 'This is the first option',
      image: '#',
    },
    {
      id: 1,
      label: 'Summer',
      description: 'This is the second option',
      image: '#',
    },
    {
      id: 2,
      label: 'Fall',
      description: 'This is the third option',
      image: '#',
    },
    {
      id: 3,
      label: 'Winter',
      description: 'This is the fourth option',
      image: '#',
    },
  ];

  const nextOption = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
    console.log(currentIndex);
  };

  const prevOption = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + options.length) % options.length
    );
    console.log(currentIndex);
  };

  const selectTheme = () => {
    setCurrentTheme(currentIndex);
    console.log(currentTheme);
  };

  return (
    <div className='container my-5 '>
      <div className='row'>
        <div id='info-box' className='col-md-10 mb-5 py-5 mx-auto '>
          <h1>Themes</h1>
          <hr />
          <br />
          <div className='themePicker'>
            <div className='themePicker-container'>
              <div className='themePicker-preview'>
                <button className='themePicker-btn' onClick={prevOption}>
                  <i class='fa-solid fa-angle-left'></i>
                </button>
                <div className='themePicker-item'>
                  <img src={options[currentIndex].image} alt='Theme preview' />
                </div>
                <button className='themePicker-btn' onClick={nextOption}>
                  <i class='fa-solid fa-angle-right'></i>
                </button>
              </div>
            </div>
            <br />
            <h2>{options[currentIndex].label}</h2>
            <p>{options[currentIndex].description}</p>
            <button className='themePicker-btn' onClick={selectTheme}>
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
