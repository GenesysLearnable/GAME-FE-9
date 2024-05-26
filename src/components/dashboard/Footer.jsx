import Modal from "../../ui/Modal";
import Quit from "../../ui/Quit";
// import Chatmodal from "../ChatModa/Chatmodal";
import ImgContainer from "./ImgContainer";
import { useAudioPlayer } from "../../contexts/AudioContext";

function Footer({ isPaused, setIsPaused }) {
  const { isPlaying, setIsPlaying } = useAudioPlayer();

  function handlePlay() {
    setIsPlaying((isp) => !isp);
  }

  function handlePause() {
    setIsPaused((isp) => !isp);
  }
  return (
    <footer className="ugo-footer">
      <ImgContainer onClick={handlePlay}>
        {
          <img
            src={isPlaying ? "/dashboard/audio.svg" : "/assets/silent.png"}
            alt="audio"
          />
        }
      </ImgContainer>

      <ImgContainer onClick={handlePause}>
        {isPaused ? (
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
