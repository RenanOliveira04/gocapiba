import React from "react";
import { useNavigate } from "react-router-dom";
import "./MonthlyMissions.css";

function MonthlyMissions() {
    const navigate = useNavigate();

    // Dados de exemplo para missões mensais
    const missions = [
        {
            id: 201,
            title: "Explorador de Recife",
            description: "Visite 15 pontos turísticos em Recife",
            reward: 500,
            progress: {
                current: 8,
                total: 15
            },
            completed: false
        },
        {
            id: 202,
            title: "Conhecedor da Cultura Pernambucana",
            description: "Participe de 5 eventos culturais em Recife",
            reward: 450,
            progress: {
                current: 2,
                total: 5
            },
            completed: false
        },
        {
            id: 203,
            title: "Mestre da Culinária Local",
            description: "Experimente 10 pratos típicos de Pernambuco",
            reward: 400,
            progress: {
                current: 10,
                total: 10
            },
            completed: true
        }
    ];

    const handleMissionSelect = (missionId) => {
        navigate("/gocapiba/map", { state: { selectedMission: missionId } });
    };

    return (
        <div className="monthly-missions">
            <h2>Missões Mensais</h2>
            <p className="missions-description">Complete estas missões para ganhar moedas capibas mensalmente.</p>

            <div className="missions-list">
                {missions.map((mission) => (
                    <div
                        key={mission.id}
                        className={`mission-card ${mission.completed ? "completed" : ""}`}
                        onClick={() => handleMissionSelect(mission.id)}
                    >
                        <div className="mission-info">
                            <h3>{mission.title}</h3>
                            <p>{mission.description}</p>
                            {!mission.completed && (
                                <div className="progress-container">
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${(mission.progress.current / mission.progress.total) * 100}%` }}
                                        ></div>
                                    </div>
                                    <span className="progress-text">
                                        {mission.progress.current}/{mission.progress.total}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="mission-reward">
                            <span className="reward-amount">{mission.reward}</span>
                            <span className="reward-label">capibas</span>
                            {mission.completed && <div className="completed-badge">Concluída</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MonthlyMissions; 