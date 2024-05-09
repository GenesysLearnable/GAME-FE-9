import React from "react";
import BkArrow from "../GameLevel/img/bk-arrow.png";
import { Link } from "react-router-dom";

function MenuWrapper() {
  return (
    <div className="container">
      <Link to="/dashboard">
        <img src={BkArrow} alt="" />
      </Link>

      <div className="settingWrapper">
        <div className="setting-content">
          <h4>Menu</h4>

          <Link to="/level">Single player mode</Link>
          <Link to="/level">Play with friends</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/about">How to play</Link>
          <Link to="/settings"> Settings</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuWrapper;
