import '../css/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="subcontainer-left">
            <a href="#">
              <h1>SMIDGEN</h1>
            </a>
          </div>
          <div className="subcontainer-right">
            <h4 className="footer-cta">Ready to Learn More?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li className="footer-link">
              <a href="#">GitHub</a>
            </li>
            <li className="footer-link">
              <a href="#">Suport</a>
            </li>
            <li className="footer-link">
              <a href="#">Security</a>
            </li>
          </ul>
          <ul className="footer-links">
            <li className="footer-link">
              <a href="#">About</a>
            </li>
            <li className="footer-link">
              <a href="#">FAQ</a>
            </li>
            <li className="footer-link">
              <a href="#">API Documentation</a>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer-credits">
        Copyright {new Date().getFullYear()} © Smidgen Inc. All rights
        reserved. <a href="">Privacy Policy</a>
      </span>
    </footer>
  );
};

export { Footer };
