// Import components
import Head from 'next/head'

export default function AppHead(props) {

  const { host, content } = props;

  return (
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
  )
}