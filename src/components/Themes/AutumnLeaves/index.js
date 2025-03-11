import React from 'react';
import './style.css';
import leaf1 from './leaf1.png';
import leaf2 from './leaf2.png';
import leaf3 from './leaf3.png';
import leaf4 from './leaf4.png';

export default function AutumnLeaves() {
  const leaves = [leaf1, leaf2, leaf3, leaf4];
  const numLeaves = 10;

  return (
    <div className='AutumnLeaves'>
      <div id='leaves'>
        {Array.from({ length: numLeaves }).map((_, index) => {
          const leafImage = leaves[Math.floor(Math.random() * leaves.length)];
          return (
            <i
              key={index}
              style={{
                backgroundImage: `url(${leafImage})`,
                '--i': index + 1,
              }}
            ></i>
          );
        })}
      </div>
    </div>
  );
}
