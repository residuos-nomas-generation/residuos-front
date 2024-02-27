import React, { useState, useEffect } from 'react';
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
          <img src={logo} className="nav-logo-img" alt="Logo" />
          <p>R e s i d u o s <br />N o M á s</p>
        </div>
        <ul className={`nav-menu d-flex align-items-center ${isMenuVisible ? 'nav-menu-visible' : 'nav-menu-hidden'}`}>
          <li className="menu-item"><a href="#">T i e n d a</a></li>
          <li><a href="#">N o s o t r o s</a></li>
          <li><a href="#">C o n t a c t o</a></li>
          <li><a href='#' className="btn btn-custom d-flex align-items-center">A C C E D E R / R E G I S T R A R S E</a></li>
        </ul>
        <div className="nav-toggle" aria-label={isMenuVisible ? "Cerrar menú" : "Abrir menú"} onClick={toggleMenu}>
          <i className="uil uil-bars" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;


// const NavBar = () => {

//   return (
//     <>
//       <div className="collapse" id="navbarToggleExternalContent">
//         <div className="bg-dark p-4">
//           <h5 className="text-white h4">Collapsed content</h5>
//           <span className="text-muted">Toggleable via the navbar brand.</span>
//         </div>
//       </div>
//       <nav className="navbar navbar-dark bg-dark">
//         <div className="container-fluid">
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>
//       </nav>
//     </>
//   )

// }

// export default NavBar