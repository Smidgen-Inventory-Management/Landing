import { BrowserWindow } from '../components';
import placeholder from '../assets/placeholder.png';

import '../css/hero.css';

const Home = () => {
  return (
    <div className="hero" id="home">
      <div className="grid-left">
        <h1 className="hero-header">SMIDGEN</h1>
        <p className="hero-text">
          Reclaim a smidgen of your day with a powerful and modular logistics
          management solution.
        </p>
        <button className="hero-button button-tertiary">Learn More</button>
      </div>
      <div className="grid-right">
        <BrowserWindow
          address="http://smidgen.com/"
          content={
            <img
              className="browser-image"
              src={placeholder}
              alt="placeholder"
            />
          }
        />
      </div>
    </div>
  );
};

export { Home };
