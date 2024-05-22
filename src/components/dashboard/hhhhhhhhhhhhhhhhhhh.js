import { useCallback, useEffect, useRef, useState } from "react";
import BoardHole from "./BoardHole";
import Count from "./Count";
import GameBoard from "./GameBoard";
import GameSeed from "./GameSeed";
import ScoreCard from "./ScoreCard";
import Ayo from "malachi-ayoayo";
import Hole from "./Hole";
// import {
//   captureStoreByPlayer,
//   getCaptureStorePosition,
//   getCaptureStoreSummary,
//   getPitAtPosition,
//   getPitPosition,
//   getPitSummary,
//   init,
//   setSummaryTextContent,
//   styleSeed,
// } from "./utils/gameFunctions";
import { useGameState } from "./utils/GameContext";
import { useParams } from "react-router";

function MainGame() {
  const [seed, setSeed] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [winner, setWinner] = useState(null);
  const { game, setGame } = useGameState();
  const board = game.board;
  const [eventQueue, setEventQueue] = useState([]);

  const [currentEvent, setCurrentEvent] = useState(null);
  const { parameterName } = useParams();

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

  const enableOnlyPermissiblePits = useCallback(() => {
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
  }, [game]);

  // }, [onClickNewPVPGame, onClickNewAIGame, parameterName]);

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

      console.log(cellIndex);
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

  function getPitSummary(pit) {
    return pit.parentElement.querySelector(".ugo-count");
  }

  function setSummaryTextContent(elem, count) {
    elem.textContent = count === 0 ? "" : String(count);
  }

  function getPitPosition(row, column, board) {
    const pit = getPitAtPosition(row, column);
    const pitRect = pit.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();
    return { left: pitRect.x - boardRect.x, top: pitRect.y - boardRect.y };
  }

  function getPitAtPosition(row, column) {
    return document.querySelector(`.side-${row + 1} .pit-${column + 1}`);
  }

  function captureStoreByPlayer(player) {
    return document.querySelector(`.player-${player + 1} .captured`);
  }

  function getCaptureStoreSummary(captureStore) {
    return captureStore?.querySelector(".ugo-count");
  }

  function getCaptureStorePosition(player, board) {
    const captureStore = captureStoreByPlayer(player);
    const captureStoreRect = captureStore.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();
    return [captureStoreRect.x - boardRect.x, captureStoreRect.y - boardRect.y];
  }

  const styleSeed = useCallback((seed) => {
    const parentWidth = seed.parentElement.clientWidth;
    const range = (40 * parentWidth) / 90; // by how much will the random position extend
    const offset = (-20 * parentWidth) / 90; // from what point
    const r = Math.round(Math.random() * 360);
    const x = Math.round(Math.random() * range) + offset;
    const y = Math.round(Math.random() * range) + offset;
    seed.style.transform = `rotate(${r}deg) translate(${x}px, ${y}px)`;
  }, []);

  const init = useCallback(() => {
    const seeds = document.querySelectorAll(".ugo-seed");
    seeds.forEach((seed) => {
      styleSeed(seed);
    });
  }, [styleSeed]);

  useEffect(() => {
    init();
  }, [init]);

  // Existing component code...

  const updateTurnBadges = useCallback(
    (nextPlayer) => {
      const otherPlayer = Ayo.togglePlayer(nextPlayer);

      setCurrentPlayer(nextPlayer);
      const turnBadge = document.querySelectorAll(".turn-badge");

      turnBadge.item(nextPlayer).style.display = "inline-block";
      turnBadge.item(otherPlayer).style.display = "none";
    },
    [setCurrentPlayer]
  );

  const initSeedStore = useCallback(
    (store, count) => {
      store?.querySelectorAll(".ugo-seed").forEach((seed) => {
        store.removeChild(seed);
      });

      for (let i = 0; i < count; i++) {
        const seed = document.createElement("div");
        seed.classList.add("ugo-seed");
        store.appendChild(seed);
        styleSeed(seed);
      }
    },
    [styleSeed]
  );

  const initDisplay = useCallback(
    (game) => {
      // Set in-game seeds
      game.board.forEach((row, rowIndex) => {
        row.forEach((cellCount, cellIndex) => {
          const pit = getPitAtPosition(rowIndex, cellIndex);
          initSeedStore(pit, cellCount);
          setSummaryTextContent(getPitSummary(pit), cellCount);
        });
      });

      // Set captured seeds
      game.captured.forEach((capturedCount, index) => {
        const captureStore = captureStoreByPlayer(index);
        initSeedStore(captureStore, capturedCount);
      });

      // Clear seeds in hands
      [SowingHandRef.current, capturingHand.current].forEach((hand) => {
        const seedsInHand = hand?.querySelectorAll(".ugo-seed");
        seedsInHand.forEach((seed) => {
          hand.removeChild(seed);
        });
      });

      setWinner(null);

      updateTurnBadges(game.nextPlayer);
      enableOnlyPermissiblePits();
    },
    [setWinner, updateTurnBadges, enableOnlyPermissiblePits, initSeedStore]
  );

  const onNewGame = useCallback(
    (playerTwoName) => {
      game.on(Ayo.events.PICKUP_SEEDS, onPickupSeeds);
      game.on(Ayo.events.MOVE_TO, onMoveTo);
      game.on(Ayo.events.DROP_SEED, onDropSeed);
      game.on(Ayo.events.SWITCH_TURN, onSwitchTurn);
      game.on(Ayo.events.CAPTURE, onCapture);
      game.on(Ayo.events.GAME_OVER, onGameOver);

      setCurrentPlayer(playerTwoName);
      // noGamePadding.style.display = "none";

      initDisplay(game);

      setCurrentEvent(null);
      setEventQueue([]);
    },
    [
      game,
      initDisplay,
      onCapture,
      onDropSeed,
      onSwitchTurn,
      onGameOver,
      onMoveTo,
      onPickupSeeds,
    ]
  );

  const onClickNewPVPGame = useCallback(() => {
    setGame(new Ayo());
    onNewGame("Player 2");
  }, [setGame, onNewGame]);

  const onClickNewAIGame = useCallback(() => {
    setGame(Ayo.vsMinimax());
    onNewGame("AI");
  }, [setGame, onNewGame]);
  // useEffect(() => {
  useEffect(() => {
    // Initialize the game when the component mounts
    if (parameterName === "AI" || parameterName === "Player") {
      if (parameterName === "AI") {
        onClickNewAIGame();
      } else {
        onClickNewPVPGame();
      }
    }
  }, [parameterName, onClickNewAIGame, onClickNewPVPGame]);

  function handleEventQueue(time) {
    if (!currentEvent) {
      if (eventQueue.length === 0) {
        requestAnimationFrame(handleEventQueue);
        return;
      }

      setCurrentEvent(eventQueue.shift());
      currentEvent.start = time;
    }

    const fractionDone = (time - currentEvent.start) / DEFAULT_EVENT_DURATION;

    if (fractionDone > 1) {
      // End of animation. Enable permissible pits.
      if (eventQueue.length === 0) {
        enableOnlyPermissiblePits();
      }

      setCurrentEvent(null);
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

    console.log(seedsInCapturingHand);
  }

  function handleSwitchTurnEvent(event, fractionDone) {
    if (fractionDone === 0) {
      const [nextPlayer] = event.args;
      updateTurnBadges(nextPlayer);
    }
  }

  function handleCaptureEvent(event, fractionDone) {
    // In the final turn, multiple captures happen consecutively
    // and need to be cleaned up before the next one.
    if (fractionDone === 0) {
      finishLastCapture();
    }

    const [row, column, capturingPlayer] = event.args;

    const pit = getPitAtPosition(row, column);
    const seedsInPit = pit.querySelectorAll(".ugo-seed");
    seedsInPit.forEach((seed) => {
      pit.removeChild(seed);
      capturingHand.current.appendChild(seed);
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

  function onGameEvent(type) {
    return function (...args) {
      eventQueue.push({ type, args });
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
