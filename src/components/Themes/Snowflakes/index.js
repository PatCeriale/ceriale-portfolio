import React from 'react';
import './style.css';

export default function Snowflakes() {
  const numFlakes = 40;

  return (
    <div className='Snowflakes'>
      <div id='flakes'>
        {Array.from({ length: numFlakes }).map((_, index) => {
          const leftPosition = Math.random() * 100;
          return (
            <i
              key={index}
              style={{ left: `${leftPosition}vw`, '--i': index + 1 }}
            ></i>
          );
        })}
      </div>
    </div>
  );
}
