export default function ArtistHeader(props) {

  const { name, imgPath } = props;

  return (
    <div className="artist-header">
      <div className="artist-img">
        <img src={`${imgPath}/header.jpg`} alt={name} />
      </div>
      <div className="artist-name">
        <h1>{name}</h1>
      </div>
    </div>
  )
}