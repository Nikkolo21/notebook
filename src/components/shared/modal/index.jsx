import React from 'react';
import ReactModal from 'react-modal';
import './Modal.scss';

ReactModal.setAppElement('#root');

export const Modal = ({onClose = () => {}, isOpen, children}) => {  
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} className="modal_body" overlayClassName="modal">
      {children}
    </ReactModal>
  )
}
