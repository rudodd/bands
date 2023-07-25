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

export default function Home(props) {

  const { host } = props;
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(siteContent[host])
  }, [host]);

  useEffect(() => {
    if (loading && !empty(content)) {
      setLoading(false);
    }
  }, [content])

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
                  "image": [
                    "https://${host}${content.imgPath}/1x1/ezra-foster.jpg",
                    "https://${host}${content.imgPath}4x3/ezra-foster.jpg",
                    "https://${host}${content.imgPath}16x9/ezra-foster.jpg"
                  ],
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
            <Albums albums={content.albums} imgPath={content.imgPath} name={content.bandName} />
          </main>

          <footer>
            <p>&copy; Copyright {new Date().getFullYear()} Rustin Dodd.  All rights reserved.</p>
          </footer>
        </div>
      )}
    </>
  )
}
