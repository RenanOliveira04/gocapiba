import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Profile.css";
import capivaraMascote from "../../assets/capivara_1.png";
import anaAvatar from "../../assets/photo.jpg";

function Profile() {
    const [userLevel] = useState({
        current: 1,
        progress: 75,
        name: "Filhote",
        nextLevel: "Jovem"
    });

    const [userStats] = useState({
        coins: 1250,
        completedMissions: 15,
        totalMissions: 20,
        achievements: 8
    });

    const achievements = [
        {
            icon: "🌱",
            title: "Primeiros Passos",
            description: "Completou sua primeira missão no GoCapiba"
        },
        {
            icon: "🪙",
            title: "Poupança Capiba",
            description: "Acumulou 100 moedas capibas"
        },
        {
            icon: "🗺️",
            title: "Explorador Iniciante",
            description: "Visitou 5 pontos no mapa de Recife"
        },
        {
            icon: "🌳",
            title: "Amigo da Natureza",
            description: "Participou de 3 atividades ambientais"
        },
        {
            icon: "🤝",
            title: "Cidadão em Formação",
            description: "Contribuiu com 5 sugestões para a cidade"
        },
        {
            icon: "🎯",
            title: "Missão Cumprida",
            description: "Completou 10 missões com sucesso"
        },
        {
            icon: "🌟",
            title: "Estrela em Ascensão",
            description: "Alcançou 50% do progresso para o próximo nível"
        },
        {
            icon: "💡",
            title: "Ideias Brilhantes",
            description: "Proposta de melhoria foi implementada"
        }
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="profile-container">
            {/* Header com informações básicas */}
            <div className="profile-header" data-aos="fade-down">
                <div className="profile-avatar">
                    <img src={anaAvatar} alt="Avatar da Ana" />
                    <div className="level-badge">{userLevel.name}</div>
                </div>
                <div className="profile-info">
                    <h1>Ana</h1>
                    <p>ID: #12345</p>
                    <div className="login-method">
                        <span className="gov-br-badge">gov.br</span>
                    </div>
                </div>
            </div>

            {/* Seção de Moedas Capibas */}
            <div className="coins-section" data-aos="fade-right">
                <div className="coins-card">
                    <h2>Moedas Capibas</h2>
                    <div className="coins-amount">
                        <span className="coin-icon">🪙</span>
                        <span className="amount">{userStats.coins}</span>
                    </div>
                </div>
            </div>

            {/* Barra de Progresso do Nível */}
            <div className="level-progress" data-aos="fade-up">
                <div className="level-info">
                    <h3>Nível: {userLevel.name}</h3>
                    <span>Próximo nível: {userLevel.nextLevel}</span>
                </div>
                <div className="progress-bar">
                    <div 
                        className="progress-fill"
                        style={{ width: `${userLevel.progress}%` }}
                    ></div>
                </div>
                <div className="progress-text">
                    <span>{userLevel.progress}%</span>
                </div>
            </div>

            {/* Missões Concluídas */}
            <div className="missions-section" data-aos="fade-left">
                <h3>Missões Concluídas</h3>
                <div className="missions-progress">
                    <div className="missions-bar">
                        <div 
                            className="missions-fill"
                            style={{ width: `${(userStats.completedMissions / userStats.totalMissions) * 100}%` }}
                        ></div>
                    </div>
                    <div className="missions-text">
                        <span>{userStats.completedMissions}/{userStats.totalMissions} missões</span>
                    </div>
                </div>
            </div>

            {/* Conquistas */}
            <div className="achievements-section" data-aos="fade-up">
                <h3>Conquistas</h3>
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-card">
                            <div className="achievement-icon">{achievement.icon}</div>
                            <div className="achievement-info">
                                <h4>{achievement.title}</h4>
                                <p>{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mascote Capivara */}
            <div className="mascot-guide" data-aos="fade-left">
                <img src={capivaraMascote} alt="Mascote Capivara" />
                <div className="mascot-message">
                    <p>Continue participando para ganhar mais moedas e subir de nível!</p>
                </div>
            </div>
        </div>
    );
}

export default Profile; 