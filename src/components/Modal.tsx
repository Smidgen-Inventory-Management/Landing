import '../css/modal.css';
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

  return (
    <div className={`modal-area ${state ? '' : 'closed'}`}>
      <div className="modal-container">
        <button className="modal-close-button" onClick={toggleModal}>
          X
        </button>
        <h1 className="modal-header">{header}</h1>
        <div className="modal-content">{content}</div>
      </div>
      <div className="modal-background-nonvisible" onClick={toggleModal}></div>
    </div>
  );
};

export { Modal };
