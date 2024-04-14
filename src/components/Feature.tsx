import placeholder from '../assets/placeholder.png';
import '../css/feature.css';

interface FeatureProps {
  featureName: string;
  featureBrief: string;
  featureBullets?: string[];
  featureImage: string;
  imageRight?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  featureName,
  featureBrief,
  featureBullets,
  featureImage,
  imageRight,
}) => {
  return (
    <div className="feature" id="home">
      <img
        className={`feature-grid-left feature-image ${
          imageRight ? 'feature-right' : ''
        }`}
        src={featureImage}
        alt={featureBrief}
      />
      <div className="feature-grid-right">
        <h2>{featureName}</h2>
        <p>{featureBrief}</p>
        {featureBullets && featureBullets.length > 0 && (
          <ul className="feature-list-container">
            {featureBullets.map((bullet, index) => (
              <li key={index} className="feature-list">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export { Feature };
