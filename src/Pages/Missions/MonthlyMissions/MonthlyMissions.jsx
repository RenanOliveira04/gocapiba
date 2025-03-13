import React from "react";
import { useNavigate } from "react-router-dom";
import "./MonthlyMissions.css";

function MonthlyMissions({ activeCategory = "all" }) {
    const navigate = useNavigate();

    // Dados de exemplo para missões mensais
    const allMissions = [
        // Missões de turismo
        {
            id: 201,
            title: "Explorador de Recife",
            description: "Visite 5 pontos turísticos em Recife",
            reward: 15,
            progress: {
                current: 1,
                total: 5
            },
            completed: false,
            category: "tourism"
        },
        {
            id: 202,
            title: "Conhecedor da Cultura Pernambucana",
            description: "Participe de 5 eventos culturais em Recife",
            reward: 30,
            progress: {
                current: 2,
                total: 5
            },
            completed: false,
            category: "tourism"
        },
        // Missões fitness
        {
            id: 203,
            title: "Mestre do shape",
            description: "Faça pelo menos 15 check-ins nas academias do Recife",
            reward: 50,
            progress: {
                current: 10,
                total: 15
            },
            completed: false,
            category: "fitness"
        },
        {
            id: 204,
            title: "Maratonista de Recife",
            description: "Participe de 1 corrida de rua organizada na cidade",
            reward: 50,
            progress: {
                current: 0,
                total: 1
            },
            completed: false,
            category: "fitness"
        },
        {
            id: 205,
            title: "Vida Ativa",
            description: "Acumule 5 check-ins em parques, praias ou academias ao ar livre",
            reward: 45,
            progress: {
                current: 0,
                total: 5
            },
            completed: false,
            category: "fitness"
        },
        // Missões de saúde pública
        {
            id: 206,
            title: "Salva-Vidas",
            description: "Doe Sangue ao menos 1 vez",
            reward: 50,
            progress: {
                current: 0,
                total: 1
            },
            completed: false,
            category: "health"
        },

        // Missões de adoção de pets
        {
            id: 208,
            title: "Protetor dos Animais",
            description: "CADASTRE 1 animal para adoção no programa Adota Pet Recife",
            reward: 50,
            progress: {
                current: 1,
                total: 1
            },
            completed: false,
            category: "pets"
        },
        {
            id: 209,
            title: "Embaixador Pet",
            description: "Adote um animal do programa Adota Pet Recife",
            reward: 50,
            progress: {
                current: 0,
                total: 1
            },
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
        <div className="monthly-missions">
            <h2>Missões Mensais</h2>
            <p className="missions-description">Complete estas missões para ganhar moedas capibas mensalmente.</p>

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
            )}
        </div>
    );
}

export default MonthlyMissions; 