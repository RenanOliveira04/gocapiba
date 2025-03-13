import React from "react";
import { useNavigate } from "react-router-dom";
import "./WeeklyMissions.css";

function WeeklyMissions() {
    const navigate = useNavigate();

    // Dados de exemplo para missões semanais
    const missions = [
        {
            id: 101,
            title: "Tour pelo Recife Antigo",
            description: "Visite 5 pontos turísticos no Recife Antigo",
            reward: 150,
            progress: {
                current: 2,
                total: 5
            },
            completed: false
        },
        {
            id: 102,
            title: "Conhecer museus de Recife",
            description: "Visite 3 museus diferentes em Recife",
            reward: 120,
            progress: {
                current: 1,
                total: 3
            },
            completed: false
        },
        {
            id: 103,
            title: "Gastronomia Pernambucana",
            description: "Visite 4 restaurantes tradicionais",
            reward: 100,
            progress: {
                current: 4,
                total: 4
            },
            completed: true
        }
    ];

    const handleMissionSelect = (missionId) => {
        navigate("/gocapiba/map", { state: { selectedMission: missionId } });
    };

    return (
        <div className="weekly-missions">
            <h2>Missões Semanais</h2>
            <p className="missions-description">Complete estas missões para ganhar moedas capibas semanalmente.</p>

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

export default WeeklyMissions; 