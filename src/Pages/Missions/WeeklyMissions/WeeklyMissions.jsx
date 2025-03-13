import React from "react";
import { useNavigate } from "react-router-dom";
import "./WeeklyMissions.css";

function WeeklyMissions({ activeCategory = "all" }) {
    const navigate = useNavigate();

    // Dados de exemplo para missões semanais
    const allMissions = [
        // Missões de turismo
        {
            id: 101,
            title: "Tour pelo Recife Antigo",
            description: "Visite ao menos 2 pontos turísticos no Recife Antigo",
            reward: 5,
            progress: {
                current: 0,
                total: 2
            },
            completed: false,
            category: "tourism"
        },
        {
            id: 102,
            title: "Conhecer museus de Recife",
            description: "Visite 1 museu em Recife",
            reward: 5,
            progress: {
                current: 0,
                total: 1
            },
            completed: false,
            category: "tourism"
        },
        {
            id: 103,
            title: "Gastronomia Pernambucana",
            description: "Visite 2 restaurantes tradicionais",
            reward: 10,
            progress: {
                current: 1,
                total: 2
            },
            completed: true,
            category: "tourism"
        },
        // Missões fitness
        {
            id: 104,
            title: "Semana Fitness",
            description: "Faça check-in em 3 academias diferentes em Recife",
            reward: 15,
            progress: {
                current: 1,
                total: 3
            },
            completed: false,
            category: "fitness"
        },
        {
            id: 105,
            title: "Ciclista Urbano",
            description: "Utilize as ciclovias de Recife por 3 dias diferentes",
            reward: 12,
            progress: {
                current: 0,
                total: 3
            },
            completed: false,
            category: "fitness"
        },
        // Missões de saúde pública
        {
            id: 106,
            title: "Saúde em Dia",
            description: "Visite 2 unidades de saúde diferentes em Recife",
            reward: 10,
            progress: {
                current: 0,
                total: 2
            },
            completed: false,
            category: "health"
        },
        {
            id: 107,
            title: "Doação Solidária",
            description: "Doe sangue em um hemocentro de Recife",
            reward: 20,
            progress: {
                current: 0,
                total: 1
            },
            completed: false,
            category: "health"
        },
        // Missões de adoção de pets
        {
            id: 108,
            title: "Amigo dos Animais",
            description: "Visite 2 feiras de adoção do programa Adota Pet Recife",
            reward: 15,
            progress: {
                current: 0,
                total: 2
            },
            completed: false,
            category: "pets"
        },
        {
            id: 109,
            title: "Voluntário Pet",
            description: "Participe de 2 ações voluntárias em abrigos de animais",
            reward: 18,
            progress: {
                current: 0,
                total: 2
            },
            completed: false,
            category: "pets"
        }
    ];

    // Filtrar missões com base na categoria selecionada
    const filteredMissions = activeCategory === "all"
        ? allMissions
        : allMissions.filter(mission => mission.category === activeCategory);

    const handleMissionSelect = (missionId) => {
        navigate("/gocapiba/map", { state: { selectedMission: missionId } });
    };

    return (
        <div className="weekly-missions">
            <h2>Missões Semanais</h2>
            <p className="missions-description">Complete estas missões para ganhar moedas capibas semanalmente.</p>

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
            )}
        </div>
    );
}

export default WeeklyMissions; 