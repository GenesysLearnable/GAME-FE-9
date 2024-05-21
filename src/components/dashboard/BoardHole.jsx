function BoardHole({ children, onClick, className }) {
  return (
    <div className={`ugo-hole ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default BoardHole;
