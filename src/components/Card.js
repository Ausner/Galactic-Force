import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import VideoDialog from '../dialogs/VideoDialog';

export const Card = ({ card }) => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openVideoDialog = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeVideoDialog = () => {
    setIsOpen(false);
    setVideoUrl('');
  };
  

  return (
  <div className="card">
    <img src={card.img} alt="starWarsLogo" className='stw-logo'/>
    <div className={`card__content ${isOpen ? 'open-content' : ''}`}>
      <p className="card__title">{card.name}</p>
      <p className="card__description">{card.desc}</p>
      <div className='button-container'>
          <button className="button__stw" onClick={() => navigate(`/checkout/${card.id}/alquiler`)}>
              Alquilar
          </button>
          <button className="button__stw" onClick={() => navigate(`/checkout/${card.id}/compra`)}>
              Comprar
          </button>
          <button className="button__stw" onClick={() => openVideoDialog(card.video)}>
            Ver trailer
          </button>
      </div>
      <VideoDialog isOpen={isOpen} onClose={closeVideoDialog} videoUrl={videoUrl} />
    </div>
  </div>
  )
}

