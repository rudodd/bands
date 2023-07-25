// import library functionality
import React, { useState, useEffect } from 'react';

export default function PlayerModal(props) {

  const { open, setOpen, player, setPlayer } = props;
  const [openClass, setOpenClass] = useState(false);

  const closeModal = () => {
    setOpenClass(false);
    setTimeout(() => {
      setPlayer(null);
      setOpen(false)
    }, 500)
  }

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpenClass(true);
      }, 500)
    }
  }, [open])

  return (
    <div className={`player-modal${openClass ? ' open' : ''}`}>
      <div className="overlay"></div>
      <div className="player">
        <button className="close-button" onClick={() => closeModal()}>&times;</button>
        <div dangerouslySetInnerHTML={{ __html: player }} />
      </div>
    </div>
  )
}