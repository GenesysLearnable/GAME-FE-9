function Button({ children, onClick, disabled }) {
  return (
    <button className="btn-auth" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
