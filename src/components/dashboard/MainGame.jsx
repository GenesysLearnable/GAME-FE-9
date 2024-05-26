import { useEffect, useState } from "react";
import BoardHole from "./BoardHole";
import Count from "./Count";
import GameBoard from "./GameBoard";
import GameSeed from "./GameSeed";
import ScoreCard from "./ScoreCard";
import Hole from "./Hole";
import {
  init,
  board as initialBoard,
  initialPlayerScores,
} from "./utils/gameFunctions";
import toast from "react-hot-toast";
import WinModal from "../../ui/WinModal";
import WinBadge from "./WinBadge";
import { useScores } from "../../hooks/useScores";
import Button from "../Auth/Button";

function MainGame({ user, isPaused, setIsPaused }) {
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [winner, setWinner] = useState("");
  const [board, setBoard] = useState(initialBoard);
  const [scores, setScores] = useState(initialPlayerScores);

  function resetGame() {
    setScores(initialPlayerScores);
    setCurrentPlayer("Player 1");
    setWinner("");

    initBoard();

    window.location.reload();
  }

  useEffect(() => {
    // const num = Math.random();

    // if (num >= 0 && num <= 0.5) setCurrentPlayer("Player 1");

    // if (num > 0.5) setCurrentPlayer("Player 2");

    initBoard();
  }, []);

  useEffect(() => {
    if (currentPlayer === "Player 2") {
      setTimeout(() => makeAiMove(), 1000);
    }
  }, [currentPlayer]);

  useEffect(() => {
    init();
  }, []);

  function initBoard() {
    init();
    setBoard([...initialBoard]); // Ensure initial board state is set
  }

  function makeAiMove() {
    if (isPaused) return;
    else {
      const validMoves = board.filter((pot, index) => {
        return (
          currentPlayer === "Player 2" &&
          index >= 6 &&
          index < 12 &&
          pot.seed.length > 0
        );
      });

      if (validMoves.length === 0) {
        return;
      }

      const randomMove =
        validMoves[Math.floor(Math.random() * validMoves.length)];
      onClickPit(randomMove, "Player 2");
    }
  }

  function onClickPit(data, player) {
    if (isPaused) return;

    if (currentPlayer !== player) {
      toast.error("It's not your turn");
      return;
    }
    if (player === "Player 1" && (data.id < 1 || data.id > 6)) {
      alert("You can't play from this pot");
    } else if (player === "Player 2" && (data.id < 7 || data.id > 12)) {
      alert("You can't play from this pot");
    } else {
      distributeSeed(data, player);
    }
  }
  function distributeSeed(data, currentPlayer) {
    if (isPaused) return;

    const newBoard = [...board];
    const { seed, id } = data;
    const numSeeds = seed.length;
    const totalPots = newBoard.length;

    if (numSeeds === 0) return; // No seeds to distribute

    newBoard[id - 1].seed = []; // Clear the seeds from the current pot

    let curPotId = id;
    let lastPotId = id;

    function dropSeed(i) {
      if (isPaused) return;

      if (i >= numSeeds) {
        captureOrContinue(newBoard, lastPotId, currentPlayer);
        setBoard(newBoard);
        return;
      }

      curPotId = (curPotId % totalPots) + 1;
      const nextPot = newBoard.find((pot) => pot.id === curPotId);
      nextPot.seed.push({
        name: `pot_${nextPot.id}_seed_${nextPot.seed.length + 1}`,
        key: nextPot.name,
      });
      lastPotId = nextPot.id;

      // Check and capture seeds if the pot now has exactly 4 seeds
      if (nextPot.seed.length === 4) {
        if (
          (currentPlayer === "Player 1" && curPotId >= 1 && curPotId <= 6) ||
          (currentPlayer === "Player 2" && curPotId >= 7 && curPotId <= 12)
        ) {
          captureSeeds(newBoard, nextPot.id, currentPlayer);
        } else {
          // Capture the seeds if it's the last pot and has exactly 4 seeds
          if (i === numSeeds - 1) {
            captureSeeds(newBoard, nextPot.id, currentPlayer);
          } else {
            // Capture the seeds for the owner of the pit
            const owner =
              curPotId >= 1 && curPotId <= 6 ? "Player 1" : "Player 2";
            captureSeeds(newBoard, nextPot.id, owner);
          }
        }
      }

      setBoard([...newBoard]);

      setTimeout(() => {
        requestAnimationFrame(() => dropSeed(i + 1));
      }, 1000); // Adjust the delay time as needed (1000ms in this example)
    }

    dropSeed(0);
    init();
  }

  function captureOrContinue(newBoard, lastPotId, currentPlayer) {
    const lastPot = newBoard.find((pot) => pot.id === lastPotId);

    if (isPaused) return;

    // Check if the board is no longer in its initial state
    const isInitialState = board.every(
      (pot) => pot.seed.length === initialBoard[pot.id - 1].seed.length
    );

    if (!isInitialState) {
      // Capture seeds if any pot on the current player's side or opponent's side has exactly four seeds
      newBoard.forEach((pot) => {
        if (pot.seed.length === 4) {
          captureSeeds(newBoard, pot.id, currentPlayer);
        }
      });

      // Capture seeds if the last seed makes the seed count in that pot exactly 4
      if (lastPot.seed.length === 4) {
        captureSeeds(newBoard, lastPotId, currentPlayer);
      }
    }

    // Continue playing if the last pot had more than one seed
    if (lastPot.seed.length > 1) {
      distributeSeed({ seed: lastPot.seed, id: lastPotId }, currentPlayer);
    } else {
      // Switch player if the last pot had only one seed
      switchPlayer();
    }

    checkWinCondition(newBoard);
  }

  function captureSeeds(newBoard, potId, currentPlayer) {
    if (isPaused) return;
    const pot = newBoard.find((p) => p.id === potId);
    const capturedSeeds = pot.seed.length;
    pot.seed = [];

    if (currentPlayer === "Player 1" && potId >= 1 && potId <= 6) {
      // Player 1 captures from their side
      setScores((prevScores) => ({
        ...prevScores,
        player1: prevScores.player1 + capturedSeeds,
      }));
    } else if (currentPlayer === "Player 2" && potId >= 7 && potId <= 12) {
      // Player 2 captures from their side
      setScores((prevScores) => ({
        ...prevScores,
        player2: prevScores.player2 + capturedSeeds,
      }));
    } else if (potId >= 1 && potId <= 6 && currentPlayer === "Player 2") {
      // Player 2 captures from Player 1's side
      setScores((prevScores) => ({
        ...prevScores,
        player2: prevScores.player2 + capturedSeeds,
      }));
    } else if (potId >= 7 && potId <= 12 && currentPlayer === "Player 1") {
      // Player 1 captures from Player 2's side
      setScores((prevScores) => ({
        ...prevScores,
        player1: prevScores.player1 + capturedSeeds,
      }));
    }

    setBoard([...newBoard]);
  }

  function switchPlayer() {
    if (isPaused) return;
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
    <div className="main--game">
      {/* <p className="player-to-play">
        {currentPlayer === "Player 1" ? " Player 1 your turn" : "AI's turn"}
      </p> */}
      <div className="player player-1">
        <div className="player-display">
          <div className="separator"></div>
          <div>
            <span
              className="player-name"
              style={{ textTransform: "capitalize" }}
            >
              {currentPlayer === "Player 1"
                ? user
                  ? user.username.split(" ")[0]
                  : currentPlayer
                : ""}
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
        <div className="captured"></div>
      </div>

      <div className="ugo-game">
        <ScoreCard>
          <p>{scores.player1}</p>
        </ScoreCard>
        <div className="ugo--board">
          <GameBoard num={1}>
            {renderHoles(board.slice(0, 6).reverse(), "Player 1")}
          </GameBoard>

          {winner && (
            <WinModal>
              <WinBadge winner={winner} user={user} resetPlay={resetGame} />
            </WinModal>
          )}

          {isPaused && (
            <WinModal>
              <span className="winb">
                <button onClick={() => setIsPaused((isp) => !isp)}>
                  Resume
                </button>
              </span>
            </WinModal>
          )}

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
              {currentPlayer === "Player 2" ? "AI" : ""}
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
      </div>
    </div>
  );
}

export default MainGame;
