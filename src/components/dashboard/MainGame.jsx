import React, { useState } from "react";
import BoardHole from "./BoardHole";
import Count from "./Count";
import GameBoard from "./GameBoard";
import GameSeed from "./GameSeed";
import HoleCount from "./HoleCount";
import ScoreCard from "./ScoreCard";

const MainGame = () => {
  const [playerScores, setPlayerScores] = useState([0, 0]); // Player scores
  const [currentPlayer, setCurrentPlayer] = useState(0); // Current player (0 or 1)
  const [boardState, setBoardState] = useState([
    [4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4],
  ]); // Initial board state
  const [winner, setWinner] = useState(null); // Game winner
  const handleMove = (rowIndex, holeIndex) => {
    // Get the number of seeds in the selected hole
    let seedsToMove = boardState[rowIndex][holeIndex];

    // Clear the selected hole
    let newBoardState = [...boardState];
    newBoardState[rowIndex][holeIndex] = 0;

    // Distribute seeds counterclockwise
    let currentHoleIndex = holeIndex;
    while (seedsToMove > 0) {
      // Move to the next hole counterclockwise
      currentHoleIndex = (currentHoleIndex + 1) % 6;

      // Distribute seeds to the next hole
      newBoardState[rowIndex][currentHoleIndex]++;
      seedsToMove--;
    }

    // Check if the last seed landed in an empty hole on the player's side
    if (
      currentHoleIndex !== 0 && // Ensure the last seed did not land in the store
      rowIndex === currentPlayer && // Check if it's the current player's row
      newBoardState[rowIndex][currentHoleIndex] === 1 && // Check if the last seed landed in an empty hole on the player's side
      newBoardState[1 - rowIndex][5 - currentHoleIndex] > 0 // Check if there are seeds to capture from the opponent's side
    ) {
      // Capture seeds
      const capturedSeeds = newBoardState[1 - rowIndex][5 - currentHoleIndex];
      newBoardState[1 - rowIndex][5 - currentHoleIndex] = 0;
      newBoardState[rowIndex][currentHoleIndex] = 0;
      const updatedScores = [...playerScores];
      updatedScores[currentPlayer] += capturedSeeds + 1;
      setPlayerScores(updatedScores);
    }

    // Switch to the next player's turn
    setCurrentPlayer(1 - currentPlayer);

    // Update the board state
    setBoardState(newBoardState);
  };

  const determineWinner = () => {
    const player1Score = playerScores[0];
    const player2Score = playerScores[1];
    if (player1Score === player2Score) {
      return "It's a draw!";
    } else if (player1Score > player2Score) {
      return "Player 1 wins!";
    } else {
      return "Player 2 wins!";
    }
  };

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
      {determineWinner() && <div>{determineWinner()}</div>}
    </div>
  );
};

export default MainGame;
