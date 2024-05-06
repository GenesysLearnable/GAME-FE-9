import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default AppLayout;
