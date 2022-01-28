import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import IndexPage from "./pages";
import LoginPage from "./pages/login";
import { RequireAuth } from "./components/RequireAuth";
import "./App.css";
import SignupPage from "./pages/signup";
import { DefaultLayout } from "./layouts/default";
import { AuthLayout } from "./layouts/auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<IndexPage />} />
            </Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
