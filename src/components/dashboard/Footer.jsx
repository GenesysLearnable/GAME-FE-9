import Modal from "../../ui/Modal";
import Chatmodal from "../ChatModa/Chatmoda";
// import Chatmodal from "../ChatModa/Chatmodal";
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
        <Modal>
          <Modal.Open opens={"chat"}>
            <img src="/dashboard/chat.svg" alt="chat" />
          </Modal.Open>
          <Modal.Window name={"chat"}>
            <Chatmodal />
          </Modal.Window>
        </Modal>
      </ImgContainer>
    </footer>
  );
}

export default Footer;
