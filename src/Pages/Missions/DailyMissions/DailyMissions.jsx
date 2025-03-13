import React from "react";
import { useNavigate } from "react-router-dom";
import "./DailyMissions.css";

function DailyMissions() {
    const navigate = useNavigate();

    // Dados de exemplo para missões diárias
    const missions = [
        {
            id: 1,
            title: "Visitar o Marco Zero",
            description: "Visite o Marco Zero no Recife Antigo",
            reward: 50,
            completed: false
        },
        {
            id: 2,
            title: "Conhecer o Paço do Frevo",
            description: "Visite o museu do Paço do Frevo",
            reward: 30,
            completed: false
        },
        {
            id: 3,
            title: "Passear na Rua do Bom Jesus",
            description: "Conheça a famosa rua do Recife Antigo",
            reward: 25,
            completed: true
        }
    ];

    const handleMissionSelect = (missionId) => {
        // Aqui você pode adicionar lógica para marcar a missão como selecionada
        // e depois redirecionar para o mapa
        navigate("/gocapiba/map", { state: { selectedMission: missionId } });
    };

    return (
        <div className="daily-missions">
            <h2>Missões Diárias</h2>
            <p className="missions-description">Complete estas missões para ganhar moedas capibas diariamente.</p>

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

export default DailyMissions; 