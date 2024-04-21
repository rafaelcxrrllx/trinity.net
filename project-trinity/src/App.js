import './App.css';
import './LoadingScreen.css';
import './NavBar.css';
import './Aurora.css';
import './styles.css'; // Global Styling
import LoadingScreen from './LoadingScreen';
import NavBar from './NavBar';
import Aurora from './Aurora';
import {motion, AnimatePresence} from "framer-motion";
import React, { useState } from 'react';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <LoadingScreen/>
      <header className="App-header">
      {/* <Aurora/> */}
      
      </header>    
    </div>
  );
}

export default App;
