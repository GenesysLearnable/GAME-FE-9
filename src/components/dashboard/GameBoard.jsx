import React from "react";

function GameBoard({ children, num, onClickPit }) {
  return (
    <div className={`ugo-board side side-${num}`}>
      {children.map((child, index) =>
        React.cloneElement(child, { onClickPit, key: index })
      )}
    </div>
  );
}

export default GameBoard;
