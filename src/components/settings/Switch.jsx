function Switch({ onClick, toggle }) {
  return (
    <div className="parent-switch" onClick={onClick}>
      <div
        style={{ right: `${toggle ? "0" : ""}`, left: toggle ? "" : "0" }}
      ></div>
    </div>
  );
}

export default Switch;
