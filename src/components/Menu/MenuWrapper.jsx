import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MenuWrapper() {
  const navigate = useNavigate();
  return (
    <div className="settingWrapper">
      <div className="setting-content">
        <h4>Menu</h4>

        <Link to="/level">Single player mode</Link>
        <Link to="/invite">Play with friends</Link>
        <Link to="/leaderBoard">Leaderboard</Link>
        <Link to="/how-to-play">How to play</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
}

export default MenuWrapper;
