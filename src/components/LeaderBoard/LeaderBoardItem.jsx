import React from "react";
import "./styles.css";
import { range } from "./utils";
import { coin } from "../../constants";
import Star from "./Star";
import Medal from "./Medal";

function LeaderboardItem({ users }) {
  return (
    <div className="leaderboard-items">
      {users.map((user) => (
        <div className="leaderboard-item" key={user.id}>
          <Medal rank={user.rank} />
          <div className="leaderboard-item__details">
            <div className="leaderboard-item__left">
              <div className="leaderboard-item__avatar">
                <img src={user.avatar} alt={`${user.name} avatar`} />
              </div>
              <p>{user.name}</p>
            </div>
            <div className="leaderboard-item__right">
              <div>
                {range(5).map((num) => {
                  const className =
                    user.stars > num ? "star filled" : "star hollow";
                  return <Star className={className} key={num} />;
                })}
              </div>
              <div className="leaderboard-item__coins">
                <img src={coin} alt="coin" />
                <p>{user.coins}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeaderboardItem;
