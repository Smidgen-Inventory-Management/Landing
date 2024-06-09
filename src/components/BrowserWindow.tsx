import '../css/BrowserWindow.css';
import React from 'react';

interface BrowserProps {
  address?: string;
  content?: JSX.Element;
}

const BrowserWindow: React.FC<BrowserProps> = ({ address, content }) => {
  return (
    <div className="browser-container" role="presentation">
      <div className="browser-row" aria-hidden={true}>
        <div className="browser-column browser-left">
          <span
            className="browser-dot"
            style={{ background: '#ED594A' }}
          ></span>
          <span
            className="browser-dot"
            style={{ background: '#FDD800' }}
          ></span>
          <span
            className="browser-dot"
            style={{ background: '#5AC05A' }}
          ></span>
        </div>
        <div className="browser-column browser-middle">
          <input
            disabled={true}
            type="text"
            className="browser-address-bar"
            value={address}
          />
        </div>
      </div>

      <div className="browser-content">{content}</div>
    </div>
  );
};

export { BrowserWindow };
