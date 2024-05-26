import React, { useState } from "react";
import BkArrow from "./img/bk-arrow.png";
import Coin from "./img/Dollar Coin.png";
import Add from "./img/add.png";
import Avatar1 from "./img/Avatar (1).png";
import Avatar2 from "./img/Avatar (2).png";
import { Link, useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/useUser";
import Spinner from "../../ui/Spinner";

const Levels = [
  {
    id: 1,
    Level: "Amateur",
    Text1: "Stake fee",
    Stake1: 0,
    Text2: "Reward",
    Stake2: 2000,
  },
  {
    id: 2,
    Level: "Intermediate",
    Text1: "Stake fee",
    Stake1: 500,
    Text2: "Reward",
    Stake2: 1000,
  },
  {
    id: 3,
    Level: "Master",
    Text1: "Stake fee",

    Stake1: 1500,
    Text2: "Reward",
    Stake2: 3000,
  },
];

const GameLevelWrapper = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleClick = (id) => {
    const Info = Levels.find((Info) => Info.id === id);
    setSelectedLevel(Info);
  };

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const { user, isLoading } = useUser();

  const { username, avatar } = user || {};

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading)
    return (
      <div
        style={{
          height: "100vh",
          padding: "4rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Spinner />;
      </div>
    );

  return (
    <div className="levelWrapper">
      <div className="top-container">
        <Link to="/menu">
          <img src={BkArrow} alt="" />
        </Link>
        <h1>Choose your challenge</h1>
        <button>
          <img src={Coin} alt="" />
          <span>2000</span>
          <img src={Add} alt="" />
        </button>
      </div>
      <div className="level-content">
        {Levels.map((Info) => {
          return (
            <div
              key={Info.id}
              className="level-box"
              onClick={() => handleClick(Info.id)}
            >
              <h3>{Info.Level}</h3>
              <div className="box-content">
                <h4>{Info.Text1}</h4>
                <span className="stake-fee">
                  <img src={Coin} alt="" />
                  {Info.Stake1}
                </span>

                <h4>{Info.Level}</h4>
                <span className="reward">
                  <img src={Coin} alt="" />
                  {Info.Stake2}
                </span>
              </div>
              <button onClick={openModal}>Play</button>
            </div>
          );
        })}
      </div>
      {isOpen && (
        <div className="pop-up-container">
          <h1>{selectedLevel.Level} Challenge</h1>

          <div className="pop-content">
            <div className="player">
              <img src={avatar === "" ? Avatar1 : avatar} alt="" />
              <h3 style={{ textTransform: "capitalize" }}>
                {username?.split(" ")[0]}
              </h3>
            </div>
            <h1>VS</h1>
            <div className="player">
              <img src={Avatar2} alt="" />
              <h3>AI</h3>
            </div>
          </div>

          <div className="stake">
            <h4>{selectedLevel.Text1}:</h4>
            <img src={Coin} alt="" />
            <p>{selectedLevel.Stake1}</p>
          </div>
          <div className="reward">
            <h4>{selectedLevel.Text2}:</h4>
            <img src={Coin} alt="" />
            <p>{selectedLevel.Stake2}</p>
          </div>

          <span className="reward"></span>
          <div
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <button onClick={closeModal}>Cancel</button>
            <button onClick={() => navigate("/dashboard")}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default GameLevelWrapper;
