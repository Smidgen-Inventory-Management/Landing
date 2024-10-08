import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/header.css';

interface HeaderProps {
  state: boolean;
  setState: (state: boolean) => void;
}

const Navbar: React.FC<HeaderProps> = ({ state, setState }) => {
  const [menuInactive, setMenuInactive] = useState(false);
  const isMobbile = window.innerWidth <= 750;
  const toggleMenu = () => {
    setMenuInactive(!menuInactive);
  };

  const toggleModal = () => {
    setState(!state);
  };
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    // For first page render, if screen size is less than or equal to specified, hide the menu
    if (isMobbile && !menuInactive) {
      setMenuInactive(true);
    } else {
      setMenuInactive(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <header>
      <nav className="header-container">
        <button
          className="hamburger-menu"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <div className={`header-section`}>
          <NavLink to="/" className="header-link">
            <img
              src={logo}
              width="300"
              className="header-hero"
              alt="Smidgen Logo"
            />
          </NavLink>
        </div>
        <div
          className={`header-section ${
            isMobbile && menuInactive && 'nav-hidden'
          }`}
        >
          <ul className="header-links">
            <li className="header-item">
              <NavLink to="pricing" className={`header-link`}>
                Pricing
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink to="support" className="header-link">
                Support
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink to="about" className="header-link">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`header-section  ${
            isMobbile && menuInactive && 'nav-hidden'
          }`}
        >
          <div className="darkmode-toggle">
            <p style={{ color: 'white' }} id="toggle-dark">
              Toggle Dark Mode
            </p>
            <input
              checked={isDarkMode}
              readOnly
              aria-labelledby="toggle-dark"
              type="checkbox"
              className="toggle"
              onClick={toggleDarkMode}
            />
          </div>
          <div
            className={`login-button ${
              isMobbile && menuInactive && 'nav-hidden'
            }`}
          >
            <button
              onClick={toggleModal}
              className={`button-primary`}
              aria-label="Click Here to Login"
            >
              Log In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
