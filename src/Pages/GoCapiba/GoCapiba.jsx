import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./GoCapiba.css";
import Nav from '../../Components/Navbar/Navbar';
import Map from '../../Pages/Map/Map'

function GoCapiba() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/gocapiba" element={<Nav />}>
                    <Route path="/map" element={<Map />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default GoCapiba;