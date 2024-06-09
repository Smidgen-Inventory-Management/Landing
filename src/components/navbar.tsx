import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import '../css/navbar.css';

interface HeaderProps {
  state: boolean;
  setState: (state: boolean) => void;
}

const Navbar: React.FC<HeaderProps> = ({ state, setState }) => {
  const toggleModal = () => {
    setState(!state);
  };
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
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
        <div className="header-section">
          <ul className="header-links">
            <li className="header-item">
              <a href="#feature" className="header-link">
                Features
              </a>
            </li>
            <li className="header-item">
              <a href="#team" className="header-link">
                Meet the Team
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div className="header-section">
          <Link to="/" className="header-link">
            <img src={logo} width="250" className="header-hero" alt="Smidgen Logo" />
          </Link>
        </div>
        <div className="header-section">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ color: 'black' }} id="toggle-dark" >Toggle Dark Mode</p>
            <input
              aria-labelledby='toggle-dark'
              type="checkbox"
              className="toggle"
              onClick={toggleDarkMode}
            />
          </div>
          <button
            onClick={toggleModal}
            className="button-primary"
            disabled={false}
            aria-label="Click Here to Login"
          >
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
