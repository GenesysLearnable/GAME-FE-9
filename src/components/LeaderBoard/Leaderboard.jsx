import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { backButton, leaderboardStar } from "../../constants";
import { data } from "./data";
import LeaderboardItem from "./LeaderBoardItem";

function Leaderboard() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // This takes you back to the previous page
  };
  return (
    <div className="leaderboard">
      <div className="back-button" onClick={goBack}>
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
