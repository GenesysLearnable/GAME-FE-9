import React from "react";
import "./styles.css";
import { backButton, leaderboardStar } from "../../constants";
// import LeaderboardItem from "./LeaderboardItem";
import { data } from "./data";
import LeaderboardItem from "./LeaderBoardItem";

function Leaderboard() {
  return (
    <div className="leaderboard">
      <img src={backButton} alt="Go Back" />
      <div className="leaderboard__main">
        <header className="leaderboard__header">
          <h1 className="leaderboard__title">LEADERBOARD</h1>
          <img
            className="leaderboard__star"
            src={leaderboardStar}
            alt="Leaderboard Star"
          />
        </header>
        <LeaderboardItem users={data} />
      </div>
    </div>
  );
}

export default Leaderboard;
