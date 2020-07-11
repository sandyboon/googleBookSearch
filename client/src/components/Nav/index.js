import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Nav() {
  const [navState, setNavState] = useState({
    open: false,
    width: window.innerWidth,
  });

  const updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (navState.open && newState.width > 991) {
      newState.open = false;
    }

    setNavState({ ...navState, ...newState });
  };

  const toggleNav = () => {
    setNavState({ ...navState, open: !navState.open });
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return function remoeListener() {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <button
        onClick={toggleNav}
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={`${navState.open ? '' : 'collapse '}navbar-collapse`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              onClick={toggleNav}
              className={
                window.location.pathname === '/'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              to="/"
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={toggleNav}
              className={
                window.location.pathname === '/saved'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              to="/saved"
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
