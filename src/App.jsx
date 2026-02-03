import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login-page";
import Profile from "./pages/index.jsx";

function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
