import React from "react";
import "./GoCapiba.css";
import Navbar from '../../Components/Navbar/Navbar';
import Header from "../../Components/Header/Header";
import Map from "../../Components/Map/Map";

function GoCapiba() {
    return (
        <div className="gocapiba-container">
            <Header />
            <Map />
            <Navbar />
        </div>
    );
}

export default GoCapiba;