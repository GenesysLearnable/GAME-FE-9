import React from "react";
import API from "../../services/leaderboardAPI";
import "./styles.css";
import { range } from "./utils";
// import { coin } from "../../constants";
import Star from "./Star";
import Medal from "./Medal";

function LeaderboardItem() {
  const [players, setPlayers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(
          "https://ayo-ayo.onrender.com/api/v1/leaderboard"
        );
        setPlayers(response.data.data);
        // setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [players]);

  return (
    <div className="leaderboard-items">
      {players.map((user) => (
        <div className="leaderboard-item" key={user._id}>
          <Medal rank={user.rank} />
          <div className="leaderboard-item__details">
            <div className="leaderboard-item__left">
              <div className="leaderboard-item__avatar">
                <img src={user.avatar} alt={`${user.name} avatar`} />
              </div>
              <p>{user.name}</p>
            </div>
            <div className="leaderboard-item__right">
              <div className="leaderboard-rating">
                {range(5).map((num) => {
                  const className =
                    user.stars > num ? "star filled" : "star hollow";
                  return <Star className={className} key={num} />;
                })}
              </div>
              <div className="leaderboard-item__score">
                <p>Score</p>
                <p>{user.score}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeaderboardItem;
