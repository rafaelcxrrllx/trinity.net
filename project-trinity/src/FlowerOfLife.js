import React, { useState, useEffect } from 'react';
import flower from './assets/flower.svg';
import "./FlowerOfLife.css";
import {motion, AnimatePresence} from "framer-motion";


function FlowerOfLife() {

  
    return (
        <div className='FlowerDiv'>
        <motion.img     
        initial={{ opacity: 0 }} // Initial opacity and scale of the image
        animate={{ opacity: 1, y: -33 }} // Fade in and scale in animation
        exit={{ opacity: 0, scale: 72 }} // Scale out animation when component exits
        transition={{  duration: 1 }} // Duration of the animation
        src={flower} id="flower" className="Spinning-logo" alt="logo" />
        <h2>
            I am an emanation from the Divine Mind.
        </h2>
       
        </div>
        
    );
}

export default FlowerOfLife;
