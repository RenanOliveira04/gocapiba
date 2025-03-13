import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import GoCapiba from "./Pages/GoCapiba/GoCapiba";
import Missions from "./Pages/Missions/Missions";
import Rewards from "./Pages/Rewards/Rewards";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gocapiba/mapa" element={<GoCapiba />} />
        <Route path="/gocapiba/desafios" element={<Missions />} />
        <Route path="/gocapiba/loja" element={<Rewards />} />
        <Route path="/gocapiba/perfil" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;