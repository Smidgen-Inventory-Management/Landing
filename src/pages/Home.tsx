import { BrowserWindow } from '../components';
import { Feature } from '../sections';
import placeholder from '../assets/placeholder.png';
import { useNavigate } from 'react-router-dom';
import '../css/hero.css';
import '../css/home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="squares-container" aria-hidden>
        <div className="square-1"></div>
        <div className="square-2"></div>
        <div className="square-3"></div>
      </div>
      <section>
        <div className="hero">
          <div className="grid-left">
            <h1 className="hero-header">SMIDGEN</h1>
            <p className="hero-text">
              Reclaim a smidgen of your day with a powerful and modular
              logistics management solution.
            </p>
            <a href="#feature">
              <button className="hero-button button-tertiary">
                Learn More
              </button>
            </a>
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
      </section>

      <section id="feature" className="feature-container">
        <h1>Features</h1>
        <Feature
          featureName="Modular Asset Logging"
          featureBrief="Smidgen assists you in tracking all types of assets. Managing a new type of asset? All you have to do is define its type, and it's ready to track!"
          featureImage={placeholder}
        />
        <Feature
          featureName="Detailed Audit Trails"
          featureBrief="Every time any action is taken on an asset, whether it's being added to inventory, removed from inventoried, modified, or anything else, there will always be a detailed audit trail!"
          featureImage={placeholder}
          imageRight={true}
        />
        <section id="cta" className="call-to-action">
          <div className="left">
            <h2>Ready to get started?</h2>
            <h2>Sign Up or Contact Us.</h2>
          </div>
          <div className="right">
            <button
              className="button-tertiary"
              style={{ marginRight: '20px' }}
              onClick={() => navigate('/pricing')}
            >
              Pricing
            </button>
            <button
              className="button-tertiary"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export { Home };
