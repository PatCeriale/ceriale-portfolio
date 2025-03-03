import React, { useState } from 'react';
import './style.css';
import SpringBackground from '../Themes/images/CherryBlossomOilPainting.png';
import SummerBackground from '../Themes/images/CascadePassOilPainting.png';
import FallBackground from '../Themes/images/SeattleFallRanier.png';
import WinterBackground from '../Themes/images/LeavenworthWinter.png';

export default function ThemePicker({ onThemeSelect, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const options = [
    {
      id: 0,
      label: 'Spring',
      description: 'This is the first option',
      image: SpringBackground,
    },
    {
      id: 1,
      label: 'Summer',
      description: 'This is the second option',
      image: SummerBackground,
    },
    {
      id: 2,
      label: 'Fall',
      description: 'This is the third option',
      image: FallBackground,
    },
    {
      id: 3,
      label: 'Winter',
      description: 'This is the fourth option',
      image: WinterBackground,
    },
  ];

  const nextOption = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
  };

  const prevOption = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + options.length) % options.length
    );
  };

  const selectTheme = () => {
    onThemeSelect(currentIndex);
    document.getElementById('home').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const closePicker = () => {
    onClose();
  };

  return (
    <div className='ThemePicker'>
      <div className='container '>
        <div className='row'>
          <div id='themePicker-box' className='col-md-10  pb-5  '>
            <div className='themePicker-close'>
              <button
                className='themePicker-close-btn'
                onClick={() => closePicker()}
              >
                <i className='fa-solid fa-xmark'></i>
              </button>
            </div>
            <h1>Themes</h1>
            <hr />
            <br />
            <div className='themePicker-container'>
              <div className='themePicker-preview'>
                <button className='themePicker-btn' onClick={prevOption}>
                  <i className='fa-solid fa-angle-left'></i>
                </button>
                <div className='themePicker-item'>
                  <img
                    className='themePicker-image'
                    src={options[currentIndex].image}
                    alt='Theme preview'
                  />
                </div>
                <button className='themePicker-btn' onClick={nextOption}>
                  <i className='fa-solid fa-angle-right'></i>
                </button>
              </div>
              <p>
                {options[currentIndex].label}:{' '}
                {options[currentIndex].description}
              </p>
              <div className='themePicker-preview'>
                <button
                  className='themePicker-btn themePicker-btn-cancel'
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button className='themePicker-btn' onClick={selectTheme}>
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
