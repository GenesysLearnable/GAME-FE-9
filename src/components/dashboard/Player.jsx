function Player({ name, imgUrl, style }) {
  return (
    <div className="ugo-player " style={style}>
      <p className="ugo-playername ">{name}</p>
      <img src={imgUrl} alt="player-avatar" />
    </div>
  );
}

export default Player;
