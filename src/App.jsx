import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import ChangeAvatar from "./pages/ChangeAvatar";
import Dashboard from "./pages/Dashboard";
import GameLevel from "./pages/GameLevel";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Nickname from "./pages/Nickname";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Invite from "./pages/Invite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route element={<AppLayout />}>
          <Route path="about" element={<About />} />
          <Route path="avatar" element={<ChangeAvatar />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="level" element={<GameLevel />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="menu" element={<Menu />} />
          <Route path="nickname" element={<Nickname />} />
          <Route path="settings" element={<Settings />} />
          <Route path="invite" element={<Invite />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
