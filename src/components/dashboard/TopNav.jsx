import HowtoPlayModal from "../../ui/HowtoPlayModal";
import Modal from "../../ui/Modal";

function TopNav() {
  return (
    <nav className="ugo-nav">
      <div className="ugo-coin">
        <img src="/dashboard/dollar-coin.png" alt="coin" />
        <span>2000</span>
      </div>

      <Modal>
        <Modal.Open opens="how">
          <img src="/dashboard/stop.png" alt="stop" />
        </Modal.Open>
        <Modal.Window name="how">
          <HowtoPlayModal />
        </Modal.Window>
      </Modal>
    </nav>
  );
}

export default TopNav;
