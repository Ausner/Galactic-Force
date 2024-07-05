import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

Modal.setAppElement('#root'); // Set the root element for accessibility

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '800px',
    maxHeight: '80%',
    height: '60%',
    'text-align': 'end'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const VideoDialog = ({ isOpen, onClose, videoUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Video Popup"
    >
        <span className='x-dialog' onClick={onClose}>X</span>
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
    </Modal>
  );
};

export default VideoDialog;
