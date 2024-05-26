import Button from "../components/Auth/Button";

function LogoutModal({ onClick }) {
  return (
    <div className="quit">
      <h1>Quit</h1>

      <p>Are you sure you want to logout?</p>

      <Button onClick={onClick}>
        <span>Logout</span>
      </Button>
    </div>
  );
}

export default LogoutModal;
