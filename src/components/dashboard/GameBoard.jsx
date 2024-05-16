function GameBoard({ children, num }) {
  return <div className={`ugo-board side side-${num}`}>{children}</div>;
}

export default GameBoard;
