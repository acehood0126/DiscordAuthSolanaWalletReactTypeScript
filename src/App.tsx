import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Discord from "./pages/Discord";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:username/:userid/:gid" element={<Discord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
