import "../css/modal.css"
import React from 'react';

interface ModalProps {
  state: boolean;
  setState: (state: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ state, setState }) => {

  const toggleModal = () => {
    setState(!state);
  };

  return (
    <div className={`modal-area ${state ? '' : 'closed'}`}>
      <div className="modal-container">
        <button className="modal-close-button" onClick={toggleModal}>
          X
        </button>
        <h1 className="modal-header">Modal Header</h1>
        <div className="modal-content">
          <p className="modal-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum qui hic ratione adipisci molestias incidunt, sed asperiores labore ipsam minus? Vitae eos obcaecati atque perferendis provident magnam fuga corporis dolor necessitatibus quod unde repellendus quia neque quam, porro laborum? Est vel atque a architecto sint earum. Deserunt vero ratione tenetur ullam aperiam eaque cupiditate, similique cum quibusdam labore sint quasi ex voluptates, at assumenda incidunt tempore! Obcaecati facilis rerum quibusdam dignissimos aperiam quaerat asperiores veniam. Quibusdam iste eius quos alias accusamus, eum dolorem magnam minus rem excepturi beatae necessitatibus. Voluptatibus aut sint aperiam maxime perferendis ad, consequuntur nihil consequatur assumenda.
          </p>
        </div>
      </div>
      <div className="modal-background-nonvisible" onClick={toggleModal}></div>
    </div>
  );
};

export default Modal;
