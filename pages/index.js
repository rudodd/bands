// Import library functionality
import React, { useState, useEffect } from 'react';

// Import custom functionality and variables
import siteContent from '../content';
import { empty } from '../helpers';

// Import components
import ArtistHeader from '../components/ArtistHeader';
import DistributionLinks from '../components/DistributionLinks';
import Albums from '../components/Albums';
import PlayerModal from '../components/PlayerModal';
import AppHead from '../components/AppHead';

export default function Home(props) {

  const { host } = props;
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    switch(host) {
      case 'www.drfloydbeck.com':
        setContent(siteContent['drfloydbeck.com'])
        break;
      case 'www.crouchandfoster.com':
        setContent(siteContent['crouchandfoster.com'])
        break;
      default:
        setContent(siteContent['ezrafoster.com'])
    }
  }, [host]);

  useEffect(() => {
    if (loading && !empty(content)) {
      setLoading(false);
    }
  }, [content])

  useEffect(() => {
    if (!empty(selectedPlayer)) {
      setModalOpen(true);
    }
  }, [selectedPlayer])

  return (
    <>
      {!loading &&
        <div className="app-container">
          <AppHead host={host} content={content} />
          <main>
            <DistributionLinks links={content.links} />
            <ArtistHeader name={content.bandName} imgPath={content.imgPath} />
            <div className="bio">
              <p>{content.bandBio}</p>
            </div>
            <Albums albums={content.albums} imgPath={content.imgPath} name={content.bandName} setPlayer={setSelectedPlayer} />
          </main>
          {modalOpen &&
            <PlayerModal open={modalOpen} setOpen={setModalOpen} player={selectedPlayer} setPlayer={setSelectedPlayer} />
          }
          <footer>
            <p>&copy; Copyright {new Date().getFullYear()} Rustin Dodd.  All rights reserved.</p>
          </footer>
        </div>
      }
    </>
  )
}
