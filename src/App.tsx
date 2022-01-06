import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import IndexPage from "./pages";
import LoginPage from "./pages/login";
import logo from "./assets/logo.svg";
import { RequireAuth } from "./components/RequireAuth";
import "./App.css";
import { logout } from "./api/auth";
import SignupPage from "./pages/signup";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <div className="bg-nav w-full flex px-6 py-1 h-12 justify-between">
          <div className="flex gap-x-4">
            <img src={logo} alt="" />
            <div className="">
              <h1 className="text-white font-bold text-sm">
                วารสารการส่งเสริมสุขภาพไทย
              </h1>
              <h2 className="text-white text-xs">
                Thai Health Promotion Journal
              </h2>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                logout();
                window.location.pathname = "/login";
              }}
            >
              logout
            </button>
          </div>
        </div>
        <div className="App-content">
          <Routes>
            <Route element={<RequireAuth />}>
              <Route path="/" element={<IndexPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
