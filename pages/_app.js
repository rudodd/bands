// import library functionality
import React, { useState, useEffect } from 'react';

// import styles
import '../styles/globals.scss';

// import custom functionality
import { empty } from '../helpers';

function MyApp({ Component, pageProps }) {

  const [host, setHost] = useState(null);

  useEffect(() => {
    if (!empty(window)) {
      setHost(window.location.hostname);
    }
  }, [])

  return <Component {...pageProps} host={host} />
}

export default MyApp
