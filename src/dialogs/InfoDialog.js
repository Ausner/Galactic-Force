import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    maxWidth: '800px',
    maxHeight: '80%',
    height: '20%',
    'text-align': 'end'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const InfoDialog = ({ isOpen, onClose, mensaje }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Info Popup"
    >
        <span className='x-dialog' onClick={onClose}>X</span>
        <p className='info-mesaje'>{mensaje}</p>
    </Modal>
  );
};

export default InfoDialog;
