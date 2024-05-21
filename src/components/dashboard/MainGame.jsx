import { useEffect, useState } from "react";
import BoardHole from "./BoardHole";
import Count from "./Count";
import GameBoard from "./GameBoard";
import GameSeed from "./GameSeed";
import ScoreCard from "./ScoreCard";
import Hole from "./Hole";
import { init, board as initialBoard } from "./utils/gameFunctions";
import toast from "react-hot-toast";

function MainGame() {
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [winner, setWinner] = useState("");
  const [board, setBoard] = useState(initialBoard);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  useEffect(() => {
    initBoard();
  }, []);

  useEffect(() => {
    init(); // Style the seeds whenever the board updates
  }, [board]);

  function initBoard() {
    init();
    setBoard([...initialBoard]); // Ensure initial board state is set
  }

  function onClickPit(data, player) {
    if (currentPlayer !== player) {
      toast.error("It's not your turn");
      return;
    }
    if (player === "Player 1" && (data.id < 1 || data.id > 6)) {
      alert("You can't play from this pot");
    } else if (player === "Player 2" && (data.id < 7 || data.id > 12)) {
      alert("You can't play from this pot");
    } else {
      distributeSeed(data);
    }
  }

  function distributeSeed(data) {
    const newBoard = [...board];
    const { seed, id } = data;
    const numSeeds = seed.length;
    const totalPots = newBoard.length;

    if (numSeeds === 0) return; // No seeds to distribute

    newBoard[id - 1].seed = []; // Clear the seeds from the current pot

    let curPotId = id;
    let lastPotId = id;

    for (let i = 0; i < numSeeds; i++) {
      curPotId = (curPotId % totalPots) + 1;
      const nextPot = newBoard.find((pot) => pot.id === curPotId);
      nextPot.seed.push({
        name: `pot_${nextPot.id}_seed_${nextPot.seed.length + 1}`,
        key: nextPot.name,
      });
      lastPotId = nextPot.id;
    }

    captureSeeds(newBoard, lastPotId);
    setBoard(newBoard);
    switchPlayer();
    checkWinCondition(newBoard);
  }

  function captureSeeds(newBoard, lastPotId) {
    const lastPot = newBoard.find((pot) => pot.id === lastPotId);
    const oppositePotId = 13 - lastPotId;
    const oppositePot = newBoard.find((pot) => pot.id === oppositePotId);

    if (
      lastPot.seed.length === 1 &&
      ((currentPlayer === "Player 1" && lastPotId >= 1 && lastPotId <= 6) ||
        (currentPlayer === "Player 2" && lastPotId >= 7 && lastPotId <= 12))
    ) {
      const capturedSeeds = lastPot.seed.length + oppositePot.seed.length;
      lastPot.seed = [];
      oppositePot.seed = [];

      if (currentPlayer === "Player 1") {
        setScores((prevScores) => ({
          ...prevScores,
          player1: prevScores.player1 + capturedSeeds,
        }));
      } else {
        setScores((prevScores) => ({
          ...prevScores,
          player2: prevScores.player2 + capturedSeeds,
        }));
      }
    }
  }

  function switchPlayer() {
    setCurrentPlayer((prevPlayer) =>
      prevPlayer === "Player 1" ? "Player 2" : "Player 1"
    );
  }

  function checkWinCondition(newBoard) {
    const player1Pots = newBoard.slice(0, 6);
    const player2Pots = newBoard.slice(6, 12);

    const player1Seeds = player1Pots.reduce(
      (acc, pot) => acc + pot.seed.length,
      0
    );
    const player2Seeds = player2Pots.reduce(
      (acc, pot) => acc + pot.seed.length,
      0
    );

    if (player1Seeds === 0 || player2Seeds === 0) {
      if (scores.player1 > scores.player2) {
        setWinner("Player 1");
      } else if (scores.player2 > scores.player1) {
        setWinner("Player 2");
      } else {
        setWinner("Draw");
      }
    }
  }

  const renderHoles = (items, player) => {
    return items.map((item) => (
      <BoardHole key={item.id}>
        <Hole
          num={item.id}
          key={item.id}
          onClick={() => onClickPit(item, player)}
        >
          {item.seed.map((sd) => (
            <GameSeed key={sd.name} />
          ))}
          <Count>{item.seed.length}</Count>
        </Hole>
      </BoardHole>
    ));
  };

  return (
    <>
      <div className="player player-1">
        <div className="player-display">
          <div className="separator"></div>
          <div>
            <span className="player-name">
              {currentPlayer === "Player 1" ? currentPlayer : ""}
            </span>
            <span className="turn-badge">
              {currentPlayer === "Player 1" && "Your turn"}
            </span>
            <span className="winner-badge">
              {winner === "Player 1"
                ? "You win"
                : winner === "Draw"
                ? "Draw"
                : ""}
            </span>
          </div>
          <div className="separator"></div>
        </div>
        <div className="captured">
          <div className="pit-summary">Score: {scores.player1}</div>
        </div>
      </div>

      <div className="ugo-game">
        <ScoreCard>
          <p>{scores.player1}</p>
        </ScoreCard>
        <div className="ugo--board">
          <GameBoard num={1}>
            {renderHoles(board.slice(0, 6), "Player 1")}
          </GameBoard>

          <div className="hand sowing"></div>
          <div className="hand capturing"></div>

          <GameBoard num={2}>
            {renderHoles(board.slice(6), "Player 2")}
          </GameBoard>
        </div>
        <ScoreCard>
          <p>{scores.player2}</p>
        </ScoreCard>
      </div>

      <div className="player player-2">
        <div className="player-display">
          <div className="separator"></div>
          <div>
            <span className="player-name">
              {currentPlayer === "Player 2" ? currentPlayer : ""}
            </span>
            <span className="turn-badge">
              {currentPlayer === "Player 2" && "Your turn!"}
            </span>
            <span className="winner-badge">
              {winner === "Player 2"
                ? "You win"
                : winner === "Draw"
                ? "Draw"
                : ""}
            </span>
          </div>
          <div className="separator"></div>
        </div>
        <div className="captured">
          <div className="pit-summary">Score: {scores.player2}</div>
        </div>
      </div>
    </>
  );
}

export default MainGame;
