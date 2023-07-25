export default function DistributionLinks(props) {

  const { links } = props;

  return (
    <div className="dist-links">
      <a href={links.spotify} target="_blank">
        <div>
          <img src="/img/dist/spotify.png" alt="Spotify" title="Spotify" />
          <p className="sr-only">Spotify</p>
        </div>
      </a>
      <a href={links.apple} target="_blank">
        <div>
          <img src="/img/dist/apple.png" alt="iTunes" title="iTunes" />
          <p className="sr-only">Apple Music</p>
        </div>
      </a>
      <a href={links.amazon} target="_blank">
        <div>
          <img src="/img/dist/amazon.png" alt="Amazon" title="Amazon" />
          <p className="sr-only">Amazon</p>
        </div>
      </a>
      <a href={links.pandora} target="_blank">
        <div>
          <img src="/img/dist/pandora.png" alt="Pandora" title="Pandora" />
          <p className="sr-only">Pandora</p>
        </div>
      </a>
    </div>
  )
}