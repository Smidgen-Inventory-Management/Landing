import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="subcontainer-left">
            <Link to="/">
              <h1>SMIDGEN</h1>
            </Link>
          </div>
          <div className="subcontainer-right">
            <h5 aria-hidden={true} className="footer-cta">
              Reclaim a Smidgen of your day
            </h5>
            <p>
              Smidgen aims to simplify and automate common tasks that
              logisticians conduct on a daily basis so they can focus on the
              effective distribution of materiel, as well as maintain an
              accurate record keeping book of receiving, issuance, audits,
              surpluses, amongst other logistical tasks.
            </p>
          </div>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li className="footer-link">
              <a
                href="https://github.com/Smidgen-Inventory-Management/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="footer-link">
              <Link to="/contact">Suport</Link>
            </li>
            <li className="footer-link">
              <a href="#">Security</a>
            </li>
          </ul>
          <ul className="footer-links">
            <li className="footer-link">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-link">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="footer-link">
              <a
                href="https://github.com/Smidgen-Inventory-Management/"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Documentation
              </a>
            </li>
          </ul>
          <ul className="footer-links">
            <li className="footer-link">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="footer-link">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer-credits">
        Copyright {new Date().getFullYear()} © Smidgen Inc. All rights
        reserved.&nbsp;<Link to="privacy">Privacy Policy</Link>
      </span>
    </footer>
  );
};

export { Footer };
