import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./GoCapiba.css";
import Nav from '../../Components/Navbar/Navbar';

function GoCapiba() {
    return (
        <div className="gocapiba-container">
            <Nav />
            <div className="gocapiba-content">
                <h1>Bem-vindo ao goCapiba</h1>
                <p>Explore Recife, complete missões e ganhe moedas capibas!</p>

                <div className="menu-options">
                    <Link to="/gocapiba/map" className="menu-option">
                        <div className="option-icon">🗺️</div>
                        <span>Mapa</span>
                    </Link>

                    <Link to="/gocapiba/missions" className="menu-option">
                        <div className="option-icon">🎯</div>
                        <span>Missões</span>
                    </Link>

                    <Link to="/gocapiba/rewards" className="menu-option">
                        <div className="option-icon">🏆</div>
                        <span>Recompensas</span>
                    </Link>

                    <div className="menu-option disabled">
                        <div className="option-icon">👤</div>
                        <span>Perfil</span>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default GoCapiba;