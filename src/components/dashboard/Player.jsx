function Player({ name, imgUrl, style }) {
  return (
    <div className="ugo-player " style={style}>
      <p className="ugo-playername " style={{ textTransform: "capitalize" }}>
        {name}
      </p>
      <img
        src={imgUrl}
        alt="player-avatar"
        style={{ width: "40px", borderRadius: "50%" }}
      />
    </div>
  );
}

export default Player;
