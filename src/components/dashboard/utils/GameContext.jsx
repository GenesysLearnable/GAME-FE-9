import React, { useState, createContext, useContext } from "react";
import Ayo from "malachi-ayoayo";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [game, setGame] = useState(new Ayo());

  return (
    // Step 2: Provide the context value to its children
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};

function useGameState() {
  const context = useContext(GameContext);

  if (context === undefined)
    throw new Error("GameContext was used outside of GameContextProvider");

  return context;
}

export { GameProvider, useGameState };
