import ImgContainer from "./ImgContainer";

function Footer() {
  return (
    <footer className="ugo-footer">
      <ImgContainer>
        <img src="/dashboard/audio.svg" alt="audio" />
      </ImgContainer>
      <ImgContainer>
        <img src="/dashboard/pause.svg" alt="pause" />
        <img src="/dashboard/pause.svg" alt="pause" />
      </ImgContainer>
      <ImgContainer>
        <img src="/dashboard/replay.svg" alt="replay" />
      </ImgContainer>
      <ImgContainer>
        <img src="/dashboard/chat.svg" alt="chat" />
      </ImgContainer>
    </footer>
  );
}

export default Footer;
