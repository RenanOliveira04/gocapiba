import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Missions.css";
import DailyMissions from "./DailyMissions/DailyMissions";
import WeeklyMissions from "./WeeklyMissions/WeeklyMissions";
import MonthlyMissions from "./MonthlyMissions/MonthlyMissions";

function Missions() {
    const [activeTab, setActiveTab] = useState("daily");
    const [activeCategory, setActiveCategory] = useState("all");

    const renderMissions = () => {
        switch (activeTab) {
            case "daily":
                return <DailyMissions activeCategory={activeCategory} />;
            case "weekly":
                return <WeeklyMissions activeCategory={activeCategory} />;
            case "monthly":
                return <MonthlyMissions activeCategory={activeCategory} />;
            default:
                return <DailyMissions activeCategory={activeCategory} />;
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

            <div className="category-filter">
                <button
                    className={`category-button ${activeCategory === "all" ? "active" : ""}`}
                    onClick={() => setActiveCategory("all")}
                >
                    Todas
                </button>
                <button
                    className={`category-button ${activeCategory === "tourism" ? "active" : ""}`}
                    onClick={() => setActiveCategory("tourism")}
                >
                    Turismo
                </button>
                <button
                    className={`category-button ${activeCategory === "fitness" ? "active" : ""}`}
                    onClick={() => setActiveCategory("fitness")}
                >
                    Fitness
                </button>
                <button
                    className={`category-button ${activeCategory === "health" ? "active" : ""}`}
                    onClick={() => setActiveCategory("health")}
                >
                    Saúde
                </button>
                <button
                    className={`category-button ${activeCategory === "pets" ? "active" : ""}`}
                    onClick={() => setActiveCategory("pets")}
                >
                    Pets
                </button>
            </div>

            <div className="missions-content">
                {renderMissions()}
            </div>
        </div>
    );
}

export default Missions; 