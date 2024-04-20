import React, { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';
import logo from './trinity.svg';
  
function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const loadingScreenRef = useRef(null);

    useEffect(() => {
        // Simulate data loading delay
        const timeoutId = setTimeout(() => {
            // Hide loading screen after data is loaded
            setVisible(false);
        }, 1000); // 3 seconds delay (adjust as needed)

        // Cleanup function to clear the timeout if the component unmounts or the data loads before the timeout
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={`loading-screen ${visible ? 'fade-in' : 'fade-out'}`} ref={loadingScreenRef}>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        
    );
}

export default LoadingScreen;
