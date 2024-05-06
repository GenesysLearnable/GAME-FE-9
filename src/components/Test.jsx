import { Link } from "react-router-dom";

function Test() {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    color: "black",
    textDecoration: "none",
    padding: "2rem",
  };
  return (
    <div style={style}>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/level">level</Link>
      <Link to="settings">settings</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/leaderboard">LeaderBoard</Link>
      <Link to="/invite">Invite</Link>
      <Link to="/avatar">ChangeAvatar</Link>
      <Link to="/nickname">Nickname</Link>
    </div>
  );
}

export default Test;
