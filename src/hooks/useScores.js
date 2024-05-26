import { useReducer, useEffect } from "react";

function scoreReducer(state, action) {
  switch (action.type) {
    case "UPDATE_SCORE":
      return {
        ...state,
        [action.payload.player]:
          state[action.payload.player] + action.payload.points,
      };
    case "RESET_SCORE":
      return { player1: 0, player2: 0 };
    default:
      return state;
  }
}

function useLocalStorageState(initialState, key) {
  const [value, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "INIT":
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;
      case "SET":
        return action.payload;
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, dispatch];
}

export function useScores() {
  const [score, dispatch] = useLocalStorageState(
    { player1: 0, player2: 0 },
    "gameSCORE"
  );

  const updateScore = (player, points) => {
    dispatch({
      type: "SET",
      payload: { ...score, [player]: score[player] + points },
    });
  };

  const resetScore = () => {
    dispatch({ type: "SET", payload: { player1: 0, player2: 0 } });
  };

  return [score, updateScore, resetScore];
}
