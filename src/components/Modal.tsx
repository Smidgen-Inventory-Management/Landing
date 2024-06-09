import '../css/modal.css';
import { useEffect } from 'react';
import React from 'react';

interface ModalProps {
  header: string;
  content: JSX.Element;
  state: boolean;
  setState: (state: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ header, content, state, setState }) => {
  const toggleModal = () => {
    setState(!state);
  };

  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [state])

  return (
    <div className={`modal-area ${state ? '' : 'closed'}`}>
      <div className="modal-container">
        <button className="modal-close-button" onClick={toggleModal} aria-label='Close Modal'>
          X
        </button>
        <h1 className="modal-header" aria-label={header} >{header}</h1>
        <div className="modal-content">{content}</div>
      </div>
      <div className="modal-background-nonvisible" onClick={toggleModal} aria-hidden={true} ></div>
    </div>
  );
};

export { Modal };
