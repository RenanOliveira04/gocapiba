import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Missions.css";
import DailyMissions from "./DailyMissions/DailyMissions";
import WeeklyMissions from "./WeeklyMissions/WeeklyMissions";
import MonthlyMissions from "./MonthlyMissions/MonthlyMissions";

function Missions() {
    const [activeTab, setActiveTab] = useState("daily");

    const renderMissions = () => {
        switch (activeTab) {
            case "daily":
                return <DailyMissions />;
            case "weekly":
                return <WeeklyMissions />;
            case "monthly":
                return <MonthlyMissions />;
            default:
                return <DailyMissions />;
        }
    };

    return (
        <div className="missions-container">
            <div className="missions-header">
                <h1>Missões</h1>
                <Link to="/gocapiba" className="back-button">Voltar</Link>
            </div>

            <div className="missions-tabs">
                <button
                    className={`tab-button ${activeTab === "daily" ? "active" : ""}`}
                    onClick={() => setActiveTab("daily")}
                >
                    Diárias
                </button>
                <button
                    className={`tab-button ${activeTab === "weekly" ? "active" : ""}`}
                    onClick={() => setActiveTab("weekly")}
                >
                    Semanais
                </button>
                <button
                    className={`tab-button ${activeTab === "monthly" ? "active" : ""}`}
                    onClick={() => setActiveTab("monthly")}
                >
                    Mensais
                </button>
            </div>

            <div className="missions-content">
                {renderMissions()}
            </div>
        </div>
    );
}

export default Missions; 