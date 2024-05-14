import React from "react";
import "./styles.css";
import { backButton, leaderboardStar } from "../../constants";
import LeaderboardItem from "./LeaderBoardItem";

function Leaderboard() {
  return (
    <div className="leaderboard">
      <div className="back-button">
        <img src={backButton} alt="Go Back" />
      </div>
      <div className="leaderboard__main">
        <header className="leaderboard__header">
          <h1 className="leaderboard__title">LEADERBOARD</h1>
          <img
            className="leaderboard__star"
            src={leaderboardStar}
            alt="Leaderboard Star"
          />
        </header>
        <LeaderboardItem />
      </div>
    </div>
  );
}

export default Leaderboard;
