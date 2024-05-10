function BoardHole({ children, onClick }) {
  return (
    <div className="ugo-hole" onClick={onClick}>
      {children}
    </div>
  );
}

export default BoardHole;
