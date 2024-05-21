import { useState } from "react";
import Modal from "../../ui/Modal";
import Quit from "../../ui/Quit";
import Chatmodal from "../ChatModa/Chatmoda";
// import Chatmodal from "../ChatModa/Chatmodal";
import ImgContainer from "./ImgContainer";

function Footer() {
  const [isPlaying, setIsPlaying] = useState(true);

  function handlePlay() {
    setIsPlaying((isp) => !isp);
  }
  return (
    <footer className="ugo-footer">
      <ImgContainer>
        <img src="/dashboard/audio.svg" alt="audio" />
      </ImgContainer>

      <ImgContainer onClick={handlePlay}>
        {!isPlaying ? (
          <img src="/dashboard/bk-arrow.png" alt="play" />
        ) : (
          <>
            <img src="/dashboard/pause.svg" alt="pause" />
            <img src="/dashboard/pause.svg" alt="pause" />
          </>
        )}
      </ImgContainer>
      <Modal>
        <Modal.Open opens={"chat"}>
          <ImgContainer>
            <img src="/dashboard/replay.svg" alt="replay" />
          </ImgContainer>
        </Modal.Open>
        <Modal.Window name={"chat"}>
          <Quit />
        </Modal.Window>
      </Modal>

      <ImgContainer>
        <Modal>
          <Modal.Open opens={"chat"}>
            <img src="/dashboard/chat.svg" alt="chat" />
          </Modal.Open>
          <Modal.Window name={"chat"}>
            <p style={{ padding: "40px" }}>coming soon</p>
          </Modal.Window>
        </Modal>
      </ImgContainer>
    </footer>
  );
}

export default Footer;
