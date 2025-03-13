import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Map from '../../Components/Map/Map';
import Navbar from '../../Components/Navbar/Navbar';
import './Challenges.css';

function Challenges() {
    const location = useLocation();
    const navigate = useNavigate();
    const [mission, setMission] = useState(null);
    const [destination, setDestination] = useState(null);
    const [routeInfo, setRouteInfo] = useState(null);

    useEffect(() => {
        if (location.state && location.state.mission) {
            setMission(location.state.mission);
            if (location.state.mission.longitude && location.state.mission.latitude) {
                setDestination([
                    parseFloat(location.state.mission.latitude),
                    parseFloat(location.state.mission.longitude)
                ]);
            }
        } else {
            navigate('/gocapiba/missoes');
        }
    }, [location, navigate]);

    const handleRouteCalculated = (info) => {
        setRouteInfo(info);
    };

    return (
        <div className="challenges-container">
            <div className="challenges-header">
                <h1>{mission?.title}</h1>
                <p>{mission?.description}</p>
                {routeInfo && (
                    <div className="route-info">
                        <div className="info-item">
                            <span className="label">Distância:</span>
                            <span className="value">{typeof routeInfo.distance === 'number' ? routeInfo.distance.toFixed(1) : routeInfo.distance} km</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Tempo estimado:</span>
                            <span className="value">{routeInfo.duration} minutos</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="challenges-content">
                <Map destination={destination} onRouteCalculated={handleRouteCalculated} />
            </div>
            <Navbar />
        </div>
    );
}

export default Challenges; 