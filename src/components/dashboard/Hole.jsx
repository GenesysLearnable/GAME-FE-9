function Hole({ children, num, onClick }) {
  return (
    <button className={`pit pit-${num}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Hole;
