import React from 'react';
import './MapPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Map from '../../Components/Map/Map';

const MapPage = () => {
    return (
        <div className="map-page">
            <div className="map-header">
                <h1>Mapa da Missão</h1>
                <p>Siga o percurso para completar a missão</p>
                <div className="route-info">
                    <div className="info-item">
                        <span className="label">Distância</span>
                        <span className="value">2.5 km</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Tempo estimado</span>
                        <span className="value">30 min</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Capibas</span>
                        <span className="value">50</span>
                    </div>
                </div>
            </div>
            <div className="map-content">
                <div className="map-container">
                    <Map />
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default MapPage; 