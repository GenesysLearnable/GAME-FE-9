import React, { useState } from "react";
import BoardHole from "./BoardHole";
import Count from "./Count";
import GameBoard from "./GameBoard";
import GameSeed from "./GameSeed";
import HoleCount from "./HoleCount";
import ScoreCard from "./ScoreCard";
import Ayo from "malachi-ayoayo";

const MainGame = () => {
  // const game = new Ayo();

  // console.log(game);

  const [playerScores, setPlayerScores] = useState([0, 0]); // Player scores
  const [currentPlayer, setCurrentPlayer] = useState(0); // Current player (0 or 1)
  const [boardState, setBoardState] = useState([
    [4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4],
  ]); // Initial board state
  const [winner, setWinner] = useState(null); // Game winner

  function handleMove() {}

  return (
    <div className="ugo-game">
      <ScoreCard>
        <p> {playerScores[0]}</p>
      </ScoreCard>
      <div className="ugo--board">
        <HoleCount>
          {boardState[0].map((count, index) => (
            <Count key={index}>{count}</Count>
          ))}
        </HoleCount>
        <GameBoard>
          {boardState[0].map((count, index) => (
            <BoardHole
              key={index}
              onClick={() => {
                handleMove(0, index);
              }}
            >
              {[...Array(count)].map((_, seedIndex) => (
                <GameSeed key={seedIndex} />
              ))}
            </BoardHole>
          ))}
        </GameBoard>
        <GameBoard>
          {boardState[1].map((count, index) => (
            <BoardHole key={index} onClick={() => handleMove(1, index)}>
              {[...Array(count)].map((_, seedIndex) => (
                <GameSeed key={seedIndex} />
              ))}
            </BoardHole>
          ))}
        </GameBoard>
        <HoleCount>
          {boardState[1].map((count, index) => (
            <Count key={index}>{count}</Count>
          ))}
        </HoleCount>
      </div>
      <ScoreCard>
        <p>{playerScores[1]}</p>
      </ScoreCard>
      {/* {determineWinner() && <div>{determineWinner()}</div>} */}
    </div>
  );
};

export default MainGame;
