function Error({ children }) {
  return (
    <div style={{ color: "red", fontSize: "18px", fontWeight: "400" }}>
      {children}
    </div>
  );
}

export default Error;
