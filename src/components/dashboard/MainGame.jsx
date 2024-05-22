import { useEffect, useRef, useState } from "react";
import BoardHole from "./BoardHole";
import Count from "./Count";
import GameBoard from "./GameBoard";
import GameSeed from "./GameSeed";
import HoleCount from "./HoleCount";
import ScoreCard from "./ScoreCard";
import Ayo from "malachi-ayoayo";
import Hole from "./Hole";
import {
  captureStoreByPlayer,
  getCaptureStorePosition,
  getCaptureStoreSummary,
  getPitAtPosition,
  getPitPosition,
  getPitSummary,
  init,
  setSummaryTextContent,
  styleSeed,
} from "./utils/gameFunctions";
import { useGameState } from "./utils/GameContext";
import { useParams } from "react-router";

function MainGame() {
  const [seed, setSeed] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [winner, setWinner] = useState(null);
  const { game, setGame } = useGameState();
  const board = game.board;
  let currentEvent;
  const { parameterName } = useParams();
  // console.log(parameterName);
  // console.log(game);
const MainGame = () => {
  const [playerScores, setPlayerScores] = useState([0, 0]); // Player scores
  const [currentPlayer, setCurrentPlayer] = useState(0); // Current player (0 or 1)
  const player1 = [4, 4, 4, 4, 4, 4];
  const player2 = [4, 4, 4, 4, 4, 4];

  const [boardState, setBoardState] = useState([player1, player2]); // Initial board state
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

  // let game;

  const SowingHandRef = useRef(null);
  const capturingHand = useRef(null);

  // const DEFAULT_EVENT_DURATION = 200;
  const DEFAULT_EVENT_DURATION = 200;

  const eventTypeToHandler = {
    [Ayo.events.PICKUP_SEEDS]: handlePickupSeedsEvent,
    [Ayo.events.MOVE_TO]: handleMoveToEvent,
    [Ayo.events.DROP_SEED]: handleDropSeedEvent,
    [Ayo.events.SWITCH_TURN]: handleSwitchTurnEvent,
    [Ayo.events.CAPTURE]: handleCaptureEvent,

    [Ayo.events.GAME_OVER]: handleGameOverEvent,
  };

  const onPickupSeeds = onGameEvent(Ayo.events.PICKUP_SEEDS);
  const onMoveTo = onGameEvent(Ayo.events.MOVE_TO);
  const onDropSeed = onGameEvent(Ayo.events.DROP_SEED);
  const onSwitchTurn = onGameEvent(Ayo.events.SWITCH_TURN);
  const onCapture = onGameEvent(Ayo.events.CAPTURE);
  const onGameOver = onGameEvent(Ayo.events.GAME_OVER);

  function enableOnlyPermissiblePits() {
    const nextPlayer = game.nextPlayer;
    const otherPlayer = Ayo.togglePlayer(game.nextPlayer);

    game.board[otherPlayer].forEach((_cell, cellIndex) => {
      const pit = getPitAtPosition(otherPlayer, cellIndex);
      pit.classList.add("disabled");
    });

    game.board[nextPlayer].forEach((_cell, cellIndex) => {
      const pit = getPitAtPosition(nextPlayer, cellIndex);
      if (game.permissibleMoves.includes(cellIndex)) {
        pit.classList.remove("dis-able");
      } else {
        pit.classList.add("dis-able");
      }
    });
  }

  useEffect(() => {}, []);

  useEffect(() => {
    console.log("Initializing game with parameter:", parameterName);

    // Initialize the game when the component mounts
    if (parameterName === "AI") {
      onClickNewAIGame();
      init();
    } else {
      onClickNewPVPGame();
      init();
    }
  }, [parameterName]);

  requestAnimationFrame(handleEventQueue);
  function onClickPit(e) {
    if (game && !e.currentTarget.classList.contains("disabled")) {
      // e.g. "3" is in index 4 in "pit-3".
      const startIndexOfCellIndex = 4;
      const cellIndex = e.currentTarget.classList
        .toString()
        .split(" ")
        .find((className) => className.includes("pit-"))[startIndexOfCellIndex];
      game.play(cellIndex - 1);

      console.log(`Playing at cell index: ${cellIndex - 1}`);
      // const childCount = e.currentTarget.querySelectorAll(".ugo-seed");
    }
  }

  // function onClickNewPVPGame() {
  //   setGame(new Ayo());
  //   onNewGame("Player 2");
  // }

  // function onClickNewAIGame() {
  //   setGame(Ayo.vsMinimax());
  //   onNewGame("AI");
  // }

  // Existing component code...

  function onClickNewPVPGame() {
    setGame(new Ayo());
    onNewGame("Player 2");
  }

  function onClickNewAIGame() {
    setGame(Ayo.vsMinimax());
    onNewGame("AI");
  }

  console.log(
    game.on(Ayo.events.GAME_OVER, onGameOver),
    game.on(Ayo.events.DROP_SEED, onDropSeed)
  );

  function onNewGame(playerTwoName) {
    game.on(Ayo.events.PICKUP_SEEDS, onPickupSeeds);
    game.on(Ayo.events.MOVE_TO, onMoveTo);
    game.on(Ayo.events.DROP_SEED, onDropSeed);
    game.on(Ayo.events.SWITCH_TURN, onSwitchTurn);
    game.on(Ayo.events.CAPTURE, onCapture);
    game.on(Ayo.events.GAME_OVER, onGameOver);

    setCurrentPlayer(playerTwoName);
    // noGamePadding.style.display = "none";

    initDisplay(game);

    currentEvent = null;
    eventQueue = [];
  }

  function initDisplay(game) {
    // Set in-game seeds
    game.board.forEach((row, rowIndex) => {
      row.forEach((cellCount, cellIndex) => {
        const pit = getPitAtPosition(rowIndex, cellIndex);
        initSeedStore(pit, cellCount);
        setSummaryTextContent(getPitSummary(pit), cellCount);
      });

      // console.log(game);
    });

    // Set captured seeds
    game.captured.forEach((capturedCount, index) => {
      const captureStore = captureStoreByPlayer(index);
      initSeedStore(captureStore, capturedCount);
      // setSummaryTextContent(
      //   getCaptureStoreSummary(captureStore),
      //   capturedCount
      // );
    });

    // Clear seeds in hands
    [SowingHandRef.current, capturingHand.current].forEach((hand) => {
      const seedsInHand = hand?.querySelectorAll(".ugo-seed");
      console.log(seedsInHand);
      seedsInHand?.forEach((seed) => {
        hand.removeChild(seed);
      });
      // console.log(
      //   [SowingHandRef.current, capturingHand.current].querySelectorAll(
      //     ".ugo-seed"
      //   )
      // );
    });

    setWinner(null);

    updateTurnBadges(game.nextPlayer);
    enableOnlyPermissiblePits();
  }

  function initSeedStore(store, count) {
    store?.querySelectorAll(".ugo-seed").forEach((seed) => {
      store.removeChild(seed);
    });

    for (let i = 0; i < count; i++) {
      const seed = document.createElement("div");
      seed.classList.add("ugo-seed");
      store.appendChild(seed);
      styleSeed(seed);
    }
  }

  function handleEventQueue(time) {
    if (!currentEvent) {
      if (eventQueue.length === 0) {
        requestAnimationFrame(handleEventQueue);
        return;
      }

      currentEvent = eventQueue.shift();
      currentEvent.start = time;
    }

    const fractionDone = (time - currentEvent.start) / DEFAULT_EVENT_DURATION;

    if (fractionDone > 1) {
      // End of animation. Enable permissible pits.
      if (eventQueue.length === 0) {
        enableOnlyPermissiblePits();
      }

      currentEvent = null;
      requestAnimationFrame(handleEventQueue);
      return;
    }

    // // Disable all pits during animations
    // pits.forEach((pit) => {
    //   pit.classList.add("disabled");
    // });

    const handler = eventTypeToHandler[currentEvent.type];
    handler(currentEvent, fractionDone);

    requestAnimationFrame(handleEventQueue);
  }

  function handlePickupSeedsEvent(event, fractionDone) {
    console.log("Handling Pickup Seeds Event");

    if (fractionDone === 0) {
      const [row, column] = event.args;
      const [handX, handY] = getPitPosition(row, column, board);
      SowingHandRef.style.left = `${handX}px`;
      SowingHandRef.style.top = `${handY}px`;

      const pit = getPitAtPosition(row, column);
      const seeds = pit.querySelectorAll(`.ugo-seed`);

      seeds.forEach((seed) => {
        pit.removeChild(seed);
        SowingHandRef.current.appendChild(seed);
        // setSeed(seed);
      });

      setSummaryTextContent(getPitSummary(pit), 0);
    }
  }

  function handleMoveToEvent(event, fractionDone) {
    console.log("Handling Move To Event");

    const [[initialRow, initialColumn], [nextRow, nextColumn]] = event.args;
    const [initialPitX, initialPitY] = getPitPosition(
      initialRow,
      initialColumn
    );
    const [nextPitX, nextPitY] = getPitPosition(nextRow, nextColumn);
    const currentHandX = initialPitX + fractionDone * (nextPitX - initialPitX);
    const currentHandY = initialPitY + fractionDone * (nextPitY - initialPitY);
    SowingHandRef.style.left = `${currentHandX}px`;
    SowingHandRef.style.top = `${currentHandY}px`;

    finishLastCapture();
  }

  function handleDropSeedEvent(event, fractionDone) {
    console.log("Handling Drop Seed Event");

    if (fractionDone === 0) {
      const seedInHand = SowingHandRef.querySelector(".ugo-seed");
      SowingHandRef.current.removeChild(seedInHand);
      setSeed((seed) => seed - 1);

      const [row, column] = event.args;
      const pit = getPitAtPosition(row, column);
      pit.appendChild(seedInHand);

      const pitSummary = getPitSummary(pit);
      setSummaryTextContent(pitSummary, Number(pitSummary.textContent) + 1);
    }
  }

  function finishLastCapture() {
    const seedsInCapturingHand = capturingHand.querySelectorAll(".ugo-seed");
    const playerThatCaptured = capturingHand.style.top[0] === "-" ? 0 : 1;
    const captureStore = captureStoreByPlayer(playerThatCaptured);

    seedsInCapturingHand.forEach((seed) => {
      capturingHand.current.removeChild(seed);
      captureStore.appendChild(seed);
    });

    const pitSummary = getCaptureStoreSummary(captureStore);
    setSummaryTextContent(
      pitSummary,
      Number(pitSummary.textContent) + seedsInCapturingHand.length
    );
  }

  function handleSwitchTurnEvent(event, fractionDone) {
    console.log("Handling Switch Turn Event");

    if (fractionDone === 0) {
      const [nextPlayer] = event.args;
      updateTurnBadges(nextPlayer);
    }
  }

  function updateTurnBadges(nextPlayer) {
    const otherPlayer = Ayo.togglePlayer(nextPlayer);

    setCurrentPlayer(nextPlayer);
    const turnBadge = document.querySelectorAll(".turn-badge");

    turnBadge.item(nextPlayer).style.display = "inline-block";
    turnBadge.item(otherPlayer).style.display = "none";
  }

  function handleCaptureEvent(event, fractionDone) {
    console.log("Handling Capture Event");

    // In the final turn, multiple captures happen consecutively
    // and need to be cleaned up before the next one.
    if (fractionDone === 0) {
      finishLastCapture();
    }

    const [row, column, capturingPlayer] = event.args;

    const pit = getPitAtPosition(row, column);
    const seedsInPit = pit.querySelectorAll(".seed");
    seedsInPit.forEach((seed) => {
      pit.removeChild(seed);
      capturingHand.current.appendChild(seed);
      console.log(pit, column);
    });

    const [pitX, pitY] = getPitPosition(row, column);
    const [captureStoreX, captureStoreY] = getCaptureStorePosition(
      capturingPlayer,
      board
    );

    const currentHandX = pitX + fractionDone * (captureStoreX - pitX);
    const currentHandY = pitY + fractionDone * (captureStoreY - pitY);
    capturingHand.style.left = `${currentHandX}px`;
    capturingHand.style.top = `${currentHandY}px`;

    setSummaryTextContent(getPitSummary(pit), 0);
  }

  function handleGameOverEvent(event, fractionDone) {
    console.log("Handling Game Over Event");

    if (fractionDone === 0) {
      finishLastCapture();

      const [winner] = event.args;

      // turnBadges.forEach((badge) => {
      //   badge.style.display = "none";
      // });
      setCurrentPlayer("");

      if (winner === -1) {
        // winnerBadges.forEach((badge) => {
        //   badge.textContent = "Draw!";
        //   badge.style.display = "inline-block";
        // });

        setWinner(-1);
        return;
      }

      // const badge = winnerBadges.item(winner);
      // badge.textContent = "Winner!";
      // badge.style.display = "inline-block";'

      setWinner(winner);
    }
  }
  let eventQueue = [];

  function onGameEvent(type) {
    return function(...args) {
      eventQueue.push({ type, args });
      console.log("Seed dropped at:", args);
    };
  }

  return (
    <>
      <div className="player player-1">
        <div className="player-display">
          <div className="separator"></div>
          <div>
            <span className="player-name">
              {currentPlayer === "Player 1" || currentPlayer === "AI"
                ? currentPlayer
                : ""}
            </span>
            <span className="turn-badge">
              {currentPlayer === "Player 1" && "Your turn"}
            </span>
            <span className="winner-badge">
              {winner === 0 ? "You win" : winner === -1 ? "Draw" : ""}
            </span>
          </div>
          <div className="separator"></div>
        </div>
        <div className="captured">
          <div className="pit-summary"></div>
        </div>
      </div>
      <div className="ugo-game">
        <ScoreCard>
          <p>15</p>
        </ScoreCard>
        <div className="ugo--board">
          <GameBoard num={1}>
            <BoardHole>
              <Hole num={1} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>
              <Count></Count>
            </BoardHole>
            <BoardHole>
              <Hole num={2} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>
              <Count></Count>
            </BoardHole>
            <BoardHole>
              <Hole num={3} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>
              <Count></Count>
            </BoardHole>
            <BoardHole>
              <Hole num={4} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>
              <Count></Count>
            </BoardHole>
            <BoardHole>
              <Hole num={5} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>
              <Count></Count>
            </BoardHole>
            <BoardHole>
              <Hole num={6} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>
              <Count></Count>
            </BoardHole>
          </GameBoard>

          <div ref={SowingHandRef} className="hand sowing">
            {seed}
          </div>

          <div ref={capturingHand} className="hand capturing"></div>

          <GameBoard num={2}>
            <BoardHole>
              <Count></Count>
              <Hole num={1} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>{" "}
            </BoardHole>
            <BoardHole>
              <Hole num={2} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>{" "}
              <Count></Count>
            </BoardHole>
            <BoardHole>
              <Hole num={3} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>{" "}
              <Count></Count>
            </BoardHole>
            <BoardHole>
              <Hole num={4} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>{" "}
              <Count>4</Count>
            </BoardHole>
            <BoardHole>
              <Hole num={5} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>
              <Count></Count>
            </BoardHole>
            <BoardHole>
              <Hole num={6} onClick={(e) => onClickPit(e)}>
                <GameSeed />
                <GameSeed />
                <GameSeed />
                <GameSeed />
              </Hole>
              <Count></Count>
            </BoardHole>
          </GameBoard>
        </div>
        <ScoreCard>
          <p>10</p>
        </ScoreCard>
      </div>

      <div className="player player-1">
        <div className="player-display">
          <div className="separator"></div>
          <div>
            <span className="player-name">
              {currentPlayer === "Player 2" ? currentPlayer : ""}
            </span>
            <span className="turn-badge">
              {currentPlayer === "Player 2" && " Your turn!"}
            </span>
            <span className="winner-badge">
              {winner === 1 ? "You win" : winner === -1 ? "Draw" : ""}
            </span>
          </div>
          <div className="separator"></div>
        </div>
        <div className="captured">
          <div className="pit-summary"></div>
        </div>
      </div>
    </>
  );
}

export default MainGame;
