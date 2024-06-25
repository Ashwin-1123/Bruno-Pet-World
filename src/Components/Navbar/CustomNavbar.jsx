import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const CustomNavbar = () => {
  const location = useLocation(); // Use useLocation hook to get current path
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn based on token presence
  }, [location]); // Watch for changes in location to update isLoggedIn

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-dark navbar-dark">
        <Link to="/" className="navbar-brand ms-lg-3">
          <h2 className="m-0 text-uppercase">
            <FontAwesomeIcon icon={faHome} /> <span /> Bruno Pet World
          </h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link text-white">Home</Link>
            <Link to="/Contact" className="nav-item nav-link text-white">Contact</Link>
            <Link to="/Service" className="nav-item nav-link text-white">Service</Link>
            <Link to="/Product" className="nav-item nav-link text-white">Product</Link>
            {isLoggedIn ? (
              <Link to="/" onClick={handleLogout} className="nav-item nav-link px-3 lg-2 px-2 ps-2 text-white">
                Logout <FontAwesomeIcon icon={faSignOut} className='ps-2'/>
              </Link>
            ) : (
              <Link to="/Login" className="nav-item nav-link px-3 lg-2 px-2 ps-2 text-white">
                Login <FontAwesomeIcon icon={faSignIn} className='ps-2'/>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
