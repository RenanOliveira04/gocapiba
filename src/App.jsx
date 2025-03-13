import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import GoCapiba from "./Pages/GoCapiba/GoCapiba";
import Map from "./Pages/Map/Map";
import Missions from "./Pages/Missions/Missions";
import Rewards from "./Pages/Rewards/Rewards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gocapiba" element={<GoCapiba />} />
        <Route path="/gocapiba/map" element={<Map />} />
        <Route path="/gocapiba/missions" element={<Missions />} />
        <Route path="/gocapiba/rewards" element={<Rewards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
