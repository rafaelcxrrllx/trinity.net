import React, { useState } from 'react';

import './NavBar.css';
import logo from './trinity.svg';
  

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
   
    return (
    <nav className="nav">
        <div>
            <div className='logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div id="mainListDiv" className={`main_list ${isOpen ? 'show_list' : ''}`}>
                    <ul className="navlinks">
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Bio</a></li>
                    </ul>
                </div>
                <span className="navTrigger" onClick={toggleMenu}>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
        </div>
    </nav>
    
        
    );
}

export default NavBar;
