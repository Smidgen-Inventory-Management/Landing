import { useState } from 'react'
import { Privacy } from './Privacy';
import { Modal } from './Modal';
import '../css/footer.css';

const Footer = () => {
  const [privacyModalOpened, setPrivacyModalOpened] = useState(false);
  const toggleModal = () => {
    setPrivacyModalOpened(!privacyModalOpened);
  };
  return (
    <footer>
      <Modal
        state={privacyModalOpened}
        setState={setPrivacyModalOpened}
        header="Smidgen Privacy Policy"
        content={Privacy()}
      />
      <div className="footer-container">
        <div className="footer-left">
          <div className="subcontainer-left">
            <a href="#">
              <h1>SMIDGEN</h1>
            </a>
          </div>
          <div className="subcontainer-right">
            <h5 aria-hidden={true} className="footer-cta">Reclaim a Smidgen of your day</h5>
            <p>
              Smidgen aims to simplify and automate common tasks that logisticians conduct on a daily basis so they can focus on the effective distribution of materiel, as well as maintain an accurate record keeping book of receiving, issuance, audits, surpluses, amongst other logistical tasks.
            </p>
          </div>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li className="footer-link">
              <a href="https://github.com/">GitHub</a>
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
        reserved.&nbsp;<a onClick={toggleModal} >Privacy Policy</a>
      </span>
    </footer>
  );
};

export { Footer };
