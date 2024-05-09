import React from "react";
import "./styles.css";
import { data } from "./data";
import { range } from "./utils";
import Star from "./Star";
import goldMedal from "../../assets/gold.png";
import silverMedal from "../../assets/silver.png";
import bronzeMedal from "../../assets/bronze.png";
import coin from "../../assets/coin.svg";

function LeaderboardItem(user) {
  return (
    <div className="leaderboard-items">
      {/* <div className="leaderboard-item">
    <div className="rank">
      <img src={medal_1} alt="gold medal" width={"90px"} />
    </div>
    <div className="item-details">
      <div className="item-left">
        <div className="avatar">
          <img src={avatar_1} alt="" />
        </div>
        <p>EDOZIE EZE</p>
      </div>
      <div className="item-right">
        <div className="stars">
          {range(5).map((num) => {
            const className = 4 > num ? "star filled" : "star hollow";
            return <Star className={className} key={num} />;
          })}
        </div>
        <div className="coins">
          <img src={coin} alt="coin" />
          <p>26347</p>
        </div>
      </div>
    </div>
  </div> */}
      {data.map((user) => (
        <div className="leaderboard-item" key={user.id}>
          {user.rank <= 3 ? (
            <div className="item-rank">
              {user.rank === 1 && <img src={goldMedal} alt="Gold Medal" />}
              {user.rank === 2 && <img src={silverMedal} alt="Silver Medal" />}
              {user.rank === 3 && <img src={bronzeMedal} alt="Bronze Medal" />}
            </div>
          ) : (
            <div className="item-rank">
              <p>{user.rank}</p>
            </div>
          )}
          <div className="item-details">
            <div className="item-left">
              <div className="avatar">
                <img src={user.avatar} alt="" />
              </div>
              <p>{user.name}</p>
            </div>
            <div className="item-right">
              <div className="stars">
                {range(5).map((num) => {
                  const className =
                    user.stars > num ? "star filled" : "star hollow";
                  return <Star className={className} key={num} />;
                })}
              </div>
              <div className="coins">
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
