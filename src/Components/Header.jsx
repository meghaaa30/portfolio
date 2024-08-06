import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {HashLink as Link} from 'react-router-hash-link'

function Header(){
     
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
            <h5 className="Typography-root header-logo-text">Portfolio</h5>
         
          <div className="header-empty-6"></div>
          <div className="header-space-8"></div>
          <button className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div className={`nav-links ${isMenuOpen ? 'open' : 'close'}`}>
            <hr className="nav-divider" />
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3" onClick={closeMenu}>
             <Link to='#home' smooth> Home </Link>
            </button>
            <hr className="nav-divider" />
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3" onClick={closeMenu}>
            <Link to='#about' smooth>  About Me </Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3" onClick={closeMenu}>
             <Link to='#skills' smooth> Skills </Link>
            </button>
            <hr className="nav-divider" />
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3" onClick={closeMenu}>
              <Link to='#project' smooth> Projects </Link>
            </button>
            <hr className="nav-divider" />
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3" onClick={closeMenu}>
             <Link to='#contact' smooth> Contact </Link>
            </button>

        
          </div>
        </div>
      </header>
    </div>
    </div>
  )
}

export default Header
