// import library functionality
import React, { useState } from 'react';

export default function Albums(props) {

  const { albums, imgPath, name } = props;

  return (
    <div className="album-container">
      <h2>Listen to albums</h2>
      <div className="albums">
        {albums.map((album, index) => (
          <div key={album.name.toLowerCase().replace(' ', '-')} className={`album${index == 0 ? ' latest' : ''}`}>
            <img src={`${imgPath}/albums/${album.img}`} alt={`${name} - ${album.name}`} />
            <h3>{album.name}</h3>
            <p>{album.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}