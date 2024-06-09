import { BrowserWindow } from '../components';
import { Feature, Team } from '../sections';
import placeholder from '../assets/placeholder.png';
import '../css/hero.css';

const Home = () => {
  const featureList: string[] = ['item1', 'item2', 'item3'];
  return (
    <div className="home-container">
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
          featureName="A feature"
          featureBrief="The quick brown fox jumps over the lazy dog"
          featureBullets={featureList}
          featureImage={placeholder}
        />
        <Feature
          featureName="A feature"
          featureBrief="The quick brown fox jumps over the lazy dog"
          featureBullets={featureList}
          featureImage={placeholder}
          imageRight={true}
        />
        <Feature
          featureName="A feature"
          featureBrief="The quick brown fox jumps over the lazy dog"
          featureBullets={featureList}
          featureImage={placeholder}
        />
        <section id="cta" className="call-to-action">
          <div className="left">
            <h2>Ready to get started?</h2>
            <h2>Sign Up or Contact Us.</h2>
          </div>
          <div className="right">
            <button className="button-tertiary" style={{ marginRight: '20px' }}>
              Pricing
            </button>
            <button className="button-tertiary">Contact Us</button>
          </div>
        </section>
      </section>

      <section id="team">
        <Team />
      </section>
    </div>
  );
};

export { Home };
