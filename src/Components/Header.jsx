import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
     
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    

  return (
    <div>
      <div className="app-root-1">
      <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
        <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
          <div className="header-left-4"></div>
         
          <div className="header-vertical-9"></div>
          <button className="ButtonBase-root Button-text header-navButtons-3" onClick={closeMenu}><NavLink to="/">
            <h5 className="Typography-root header-logo-text">Book-Blog</h5>
          </NavLink></button>
          <div className="header-empty-6"></div>
          <div className="header-space-8"></div>
          <button className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div className={`nav-links ${isMenuOpen ? 'open' : 'close'}`}>
            <hr className="nav-divider" />
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3" onClick={closeMenu}>
              <NavLink to="/home">Home</NavLink>
            </button>
            <hr className="nav-divider" />
           
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3" onClick={closeMenu}>
              <NavLink to="/about">About Me</NavLink>
            </button>
            <hr className="nav-divider" />
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3" onClick={closeMenu}>
              <NavLink to="/project">Project</NavLink>
            </button>
            <hr className="nav-divider" />
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3" onClick={closeMenu}>
              <NavLink to="/contact">Contact</NavLink>
            </button>
            <hr className="nav-divider" />
              <>
                <button
                  className="ButtonBase-root Button-root Button-text header-navButtons-3"
                  onClick={() => { closeMenu(); }}
                >
                </button>
              </>
        
          </div>
        </div>
      </header>
    </div>
    </div>
  )
}

export default Header
