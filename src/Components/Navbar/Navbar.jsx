import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/gocapiba" className="navbar-logo">
                    goCapiba
                </Link>

                <div className="navbar-menu">
                    <Link to="/gocapiba" className="navbar-item">
                        Início
                    </Link>
                    <Link to="/gocapiba/missions" className="navbar-item">
                        Missões
                    </Link>
                    <Link to="/gocapiba/rewards" className="navbar-item">
                        Recompensas
                    </Link>
                    <Link to="/gocapiba/map" className="navbar-item">
                        Mapa
                    </Link>
                </div>

                <div className="navbar-user">
                    <div className="user-coins">
                        <span className="coin-icon">💰</span>
                        <span className="coin-amount">120</span>
                    </div>
                    <div className="user-avatar">
                        <span>👤</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;