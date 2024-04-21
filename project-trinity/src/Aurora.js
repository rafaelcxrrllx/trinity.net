import React, { useEffect, useRef } from 'react';
import './styles.css'; // Global Styling
import './Aurora.css'; 

const Aurora = () => {
  const filterRef = useRef(null);

  useEffect(() => {
    const filter = filterRef.current;
    let frames = 0;
    const rad = Math.PI / 180;
    let bfx = 0.005; // Define bfx here
    let bfy = 0.005; // Define bfy here

    function freqAnimation() {
      frames += 0.5;
      bfx += 0.0025 * Math.cos(frames * rad);
      bfy += 0.0025 * Math.sin(frames * rad);

      const bf = `${bfx} ${bfy}`;
      filter.setAttribute('baseFrequency', bf);
      window.requestAnimationFrame(freqAnimation);
    }

    window.requestAnimationFrame(freqAnimation);

    return () => {
      cancelAnimationFrame(freqAnimation);
    };
  }, []);

  return (
    <div className="aurora">
      <div className="g-aurora"></div>
      <div className="g-aurora"></div>
      <svg id='blob' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <filter id='wave' ref={filterRef}>
            <feTurbulence baseFrequency='0.00510 0.01099' id='turbulence' numOctaves='3' result='noise' seed='10' />
            <feDisplacementMap id='displacement' in2='noise' in='SourceGraphic' scale='96' />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Aurora;
