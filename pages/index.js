// import library functionality
import React, { useState, useEffect } from 'react';

// import custom functionality
import siteContent from '../content';
import { empty } from '../helpers';

// import components
import Head from 'next/head'
import ArtistHeader from '../components/ArtistHeader';
import DistributionLinks from '../components/DistributionLinks';
import Albums from '../components/Albums';
import PlayerModal from '../components/PlayerModal';

export default function Home(props) {

  const { host } = props;
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    switch(host) {
      case 'drfloydbeck.com':
        setContent(siteContent[host])
        break;
      case 'crouchandfoster.com':
        setContent(siteContent[host])
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
      {loading ? (
        <></>
      ) : (
        <div className="app-container">
          <Head>
            <title>{content.pageTitle}</title>
            <meta name="description" content={content.bandBio} />
            <link rel="icon" href="/favicon.ico" />
            <script type="application/ld+json">
              {`{
                  "@context": "http://schema.org",
                  "@type": "MusicGroup",
                  "url": "https://${host}",
                  "image": ${content.schemaImages},
                  "name": "${content.bandName}",
                  "sameAs": "${content.links.spotify}",
                  "description": "${content.bandBio}"
                }`}
            </script>
          </Head>

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
      )}
    </>
  )
}
