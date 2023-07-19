import Head from 'next/head'

export default function Home(props) {

  console.log(props);

  return (
    <div className="app-container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Band website.</h1>
      </main>

      <footer>
        <p>&copy; Copyright {new Date().getFullYear()} Rustin Dodd.  All rights reserved.</p>
      </footer>
    </div>
  )
}
