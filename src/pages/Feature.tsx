import placeholder from '../assets/placeholder.png';
import '../css/feature.css';

const Feature = () => {
  return (
    <div className="feature" id="home">
      <img
        className="feature-grid-left feature-image"
        src={placeholder}
        alt="placeholder"
      />
      <div className="feature-grid-right">
        <h2>Lorem ipsum dolor</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, odit.
        </p>
        <ul className="feature-list-container">
          <li className="feature-list">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
            esse!
          </li>
          <li className="feature-list">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
            esse!
          </li>
          <li className="feature-list">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
            esse!
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Feature };
