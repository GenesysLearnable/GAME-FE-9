function ImgContainer({ children, onClick }) {
  return (
    <button className="ugo-img-div" onClick={onClick}>
      {children}
    </button>
  );
}

export default ImgContainer;
