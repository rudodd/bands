// import library functionality
import React, { useState } from 'react';

export default function Albums(props) {

  const { albums, imgPath, name, setPlayer } = props;

  return (
    <div className="album-container">
      <h2>Preview albums</h2>
      <div className="albums">
        {albums.map((album, index) => (
          <div 
            key={album.name.toLowerCase().replace(' ', '-')} 
            className={`album${index == 0 ? ' latest' : ''}`}
            onClick={() => setPlayer(album.embed)}
          >
            <img src={`${imgPath}/albums/${album.img}`} alt={`${name} - ${album.name}`} />
            <h3>{album.name}</h3>
            <p>{album.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}