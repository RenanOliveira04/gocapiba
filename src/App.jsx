import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import GoCapiba from "./Pages/GoCapiba/GoCapiba";
import Missions from "./Pages/Missions/Missions";
import Rewards from "./Pages/Rewards/Rewards";
import Profile from "./Pages/Profile/Profile";
import MapPage from "./Pages/MapPage/MapPage";
import Challenges from "./Pages/Challenges/Challenges";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gocapiba" element={<GoCapiba />} />
        <Route path="/gocapiba/mapa" element={<GoCapiba />} />
        <Route path="/gocapiba/missoes" element={<Missions />} />
        <Route path="/gocapiba/loja" element={<Rewards />} />
        <Route path="/gocapiba/perfil" element={<Profile />} />
        <Route path="/gocapiba/mapa-missao" element={<MapPage />} />
        <Route path="/gocapiba/desafios" element={<Challenges />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;