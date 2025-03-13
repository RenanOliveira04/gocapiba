import React from "react";
import { useNavigate } from "react-router-dom";
import "./DailyMissions.css";

function DailyMissions({ activeCategory = "all" }) {
    const navigate = useNavigate();

    // Dados de exemplo para missões diárias
    const allMissions = [
        // Missões de turismo
        {
            id: 1,
            title: "Visitar o Marco Zero",
            description: "Visite o Marco Zero no Recife Antigo",
            reward: 1,
            completed: false,
            category: "tourism",
            longitude: "-8.062921704745952",
            latitude: "-34.87125494918955"
        },
        {
            id: 2,
            title: "Conhecer o Paço do Frevo",
            description: "Visite o museu do Paço do Frevo",
            reward: 2,
            completed: false,
            category: "tourism",
            longitude: "-8.061240354998578",
            latitude: "-34.87151913384772"
        },
        {
            id: 3,
            title: "Passear na Rua do Bom Jesus",
            description: "Conheça a famosa rua do Recife Antigo",
            reward: 1,
            completed: true,
            category: "tourism",
            longitude: "-8.06243181845869",
            latitude: "-34.87152470316405"
        },
        // Missões fitness
        {
            id: 4,
            title: "Caminhada no Parque da Jaqueira",
            description: "Faça uma caminhada de 30 minutos no Parque da Jaqueira",
            reward: 2,
            completed: false,
            category: "fitness",
            longitude: "-8.036711186606723",
            latitude: "-34.90472517227384"
        },

        {
            id: 5,
            title: "Campanha de vacinação",
            description: "Participe de uma campanha de vacinação em andamento",
            reward: 3,
            completed: false,
            category: "health"
        },
        // Missões de adoção de pets
        {
            id: 6,
            title: "Visitar feira de adoção",
            description: "Visite uma feira de adoção do programa Adota Pet Recife",
            reward: 2,
            completed: false,
            category: "pets"
        },
    ];

    // Filtrar missões com base na categoria selecionada
    const filteredMissions = activeCategory === "all"
        ? allMissions
        : allMissions.filter(mission => mission.category === activeCategory);

        const handleMissionSelect = (mission) => {
            if (mission.longitude && mission.latitude) {
                navigate("/gocapiba/desafios", { state: { mission } });
            }
        };
        

    return (
        <div className="daily-missions">
            <h2>Missões Diárias</h2>
            <p className="missions-description">Complete estas missões para ganhar moedas capibas diariamente.</p>

            {filteredMissions.length === 0 ? (
                <div className="no-missions">
                    <p>Não há missões disponíveis nesta categoria.</p>
                </div>
            ) : (
                <div className="missions-list">
                    {filteredMissions.map((mission) => (
                        <div
                            key={mission.id}
                            className={`mission-card ${mission.completed ? "completed" : ""} ${mission.category}`}
                            onClick={() => handleMissionSelect(mission)}
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
            )}
        </div>
    );
}

export default DailyMissions; 