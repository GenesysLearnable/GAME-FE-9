import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import LandingPage from "./pages/LandingPage";
import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import ChangeAvatar from "./pages/ChangeAvatar";
import Dashboard from "./pages/Dashboard";
import GameLevel from "./pages/GameLevel";
import HowToPlay from "./pages/HowToPlay";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Nickname from "./pages/Nickname";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Invite from "./pages/Invite";
import { UserContextProvider } from "./contexts/UserContext";
import { AuthenticationContext } from "./contexts/AuthenticationContext";
import ProtectedRoutes from "./components/Auth/ProtectedRoutes";
import PasswordReset from "./pages/PasswordReset";
import Verification from "./pages/Verification";
import { GameProvider } from "./components/dashboard/utils/GameContext";
import { AvatarContextProvider } from "./contexts/AvatarContext";
import { AudioProvider } from "./contexts/AudioContext";
import AudioPlayer from "./components/settings/AudioPlayer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <AuthenticationContext>
          <GameProvider>
            <AvatarContextProvider>
              <AudioProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="login" element={<Login />} />

                    <Route path="signup" element={<Signup />} />
                    <Route path="nickname" element={<Nickname />} />
                    <Route path="passwordreset" element={<PasswordReset />} />
                    <Route path="about" element={<About />} />

                    <Route
                      path="/passwordreset/verify"
                      element={<Verification />}
                    />

                    <Route
                      element={
                        <ProtectedRoutes>
                          <AppLayout />
                          <AudioPlayer />
                        </ProtectedRoutes>
                      }
                    >
                      <Route path="avatar" element={<ChangeAvatar />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="level" element={<GameLevel />} />
                      <Route path="how-to-play" element={<HowToPlay />} />
                      <Route path="leaderboard" element={<LeaderBoard />} />
                      <Route path="menu" element={<Menu />} />
                      <Route path="settings" element={<Settings />} />
                      <Route path="invite" element={<Invite />} />
                      <Route path="*" element={<PageNotFound />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </AudioProvider>
            </AvatarContextProvider>
          </GameProvider>
        </AuthenticationContext>
      </UserContextProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-brand-50)",
            color: "var(--color-brand-900)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
