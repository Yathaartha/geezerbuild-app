import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./views/auth/LoginPage";
import HomePage from "./views/home/HomePage";
import SubmissionsPage from "./views/submissions/SubmissionsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/submissions" element={<SubmissionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
