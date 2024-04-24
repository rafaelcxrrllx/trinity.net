import React, { useEffect, filterRef } from 'react';
import './styles.css'; // Global Styling
import './Aurora.css'; 

const Aurora = () => {
  
    var filter = document.querySelector("#turbulence");
	var frames = 0;
	var rad = Math.PI / 180;

	function freqAnimation() {
        var bfx = 0.005;
        var bfy = 0.005;
        frames += .5
        bfx += 0.0025 * Math.cos(frames * rad);
        bfy += 0.0025 * Math.sin(frames * rad);

        var bf = bfx.toString() + ' ' + bfy.toString();
        filter.setAttributeNS(null, 'baseFrequency', bf);
        window.requestAnimationFrame(freqAnimation);
	}

	window.requestAnimationFrame(freqAnimation);

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
