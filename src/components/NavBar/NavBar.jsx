import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./navBar.css";
import logo from '../../assets/logo.png';

const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuVisible) {
        setIsMenuVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuVisible]);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  return (
    <div className="container-navbar">
      <div className="navbar align-content-center ">
        <div className="nav-logo d-flex align-items-center gap-2 m-3">
          <NavLink to="/" className="nav-logo d-flex align-items-center gap-2 m-3">
            <img src={logo} className="nav-logo-img" alt="Logo" />
            <p>R e s i d u o s <br />N o M á s</p>
          </NavLink>

        </div>
        <ul className={`nav-menu d-flex align-items-center ${isMenuVisible ? 'nav-menu-visible' : 'nav-menu-hidden'}`}>

          {/* ! tienda */}
          <li className="menu-item"><NavLink to="/tienda">T i e n d a</NavLink></li>
          <li><NavLink to="/nosotros">N o s o t r o s</NavLink></li>
          <li><NavLink to="/info">C o n t a c t o</NavLink></li>
          <li><NavLink to="/login" className="btn btn-custom d-flex align-items-center">A C C E D E R / R E G I S T R A R S E</NavLink></li>
        </ul>
        <div className="nav-toggle" aria-label={isMenuVisible ? "Cerrar menú" : "Abrir menú"} onClick={toggleMenu}>
          <i className="uil uil-bars" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

