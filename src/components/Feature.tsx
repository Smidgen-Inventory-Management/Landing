import '../css/feature.css';

interface FeatureProps {
  featureName: string;
  featureBrief: string;
  featureBullets?: string[];
  featureImage?: string;
  imageRight?: boolean;
  id?: string;
  customClass?: string;
}

const Feature: React.FC<FeatureProps> = ({
  featureName,
  featureBrief,
  featureBullets,
  featureImage,
  imageRight,
  id,
  customClass
}) => {
  return (
    <div className={`${customClass ? customClass : ''} feature`} id={id} >
      {featureImage ? <img
        className={`feature-grid-left feature-image ${
          imageRight ? 'feature-right' : ''
        }`}
        src={featureImage}
        alt={featureBrief}
      /> : null}
      <div className="feature-grid-right">
        <h2>{featureName}</h2>
        <p style={{maxWidth: "50ch"}}>{featureBrief}</p>
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
