import React from "react";

interface ModalProps {
    modalOpen: boolean
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
    return ( 
      <div className={`${modalOpen ? "modal modal-open" : "hidden "}`}>
        <div className="modal-box modal-open">
          <label 
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
                x
          </label>
          {children}
        </div>
      </div>
    );
};

export default Modal;