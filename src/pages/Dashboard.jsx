import MainDashboard from "../components/dashboard/MainDashboard";
import TopNav from "../components/dashboard/TopNav";
import Footer from "../components/dashboard/Footer";
import { useState } from "react";
// import Chatmod from '../components/ChatModa';

function Dashboard() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div>
      <TopNav />
      <div className="ugo--dashboard-ugo">
        <MainDashboard isPaused={isPaused} setIsPaused={setIsPaused} />
      </div>
      {/* <Chatmod /> */}
      <Footer isPaused={isPaused} setIsPaused={setIsPaused} />
    </div>
  );
}

export default Dashboard;
