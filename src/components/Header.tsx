import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/navbar.css';

interface HeaderProps {
  state: boolean;
  setState: (state: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ state, setState }) => {
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
              <Link to="about" className="header-link">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-section">
          <Link to="/" className="header-link">
            <img
              src={logo}
              width="300"
              className="header-hero"
              alt="Smidgen Logo"
            />
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
            <p style={{ color: 'black' }} id="toggle-dark">
              Toggle Dark Mode
            </p>
            <input
              aria-labelledby="toggle-dark"
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

export { Header as Navbar };
