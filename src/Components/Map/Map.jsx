import React, { useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Coordenadas do Mirante do Paço (ponto de partida) [longitude, latitude]
const MIRANTE_DO_PACO = [-34.87311582042351, -8.065316419408827];

function MapUpdater({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
}

function Map({ destination, onRouteCalculated }) {
    const [route, setRoute] = React.useState(null);

    const calculateRoute = useCallback(async (start, end) => {
        if (!start || !end) return;

        try {
            // Usando a API do OSRM (OpenStreetMap Routing Machine)
            const response = await fetch(
                `https://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=full&geometries=geojson`,
                {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            );
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            
            if (data.routes && data.routes[0]) {
                const routeData = data.routes[0];
                setRoute(routeData.geometry.coordinates.map(coord => [coord[1], coord[0]]));
                
                if (onRouteCalculated) {
                    onRouteCalculated({
                        distance: routeData.distance / 1000,
                        duration: Math.round(routeData.duration / 60)
                    });
                }
            }
        } catch (error) {
            console.error("Error calculating route:", error);
            setRoute([start, end]);
            // Calcula distância usando a fórmula de Haversine
            const R = 6371;
            const lat1 = start[1] * Math.PI / 180;
            const lat2 = end[1] * Math.PI / 180;
            const deltaLat = (end[1] - start[1]) * Math.PI / 180;
            const deltaLon = (end[0] - start[0]) * Math.PI / 180;

            const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
                    Math.cos(lat1) * Math.cos(lat2) *
                    Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            const distance = R * c;

            if (onRouteCalculated) {
                onRouteCalculated({
                    distance: Number(distance.toFixed(1)),
                    duration: Math.round(distance * 2)
                });
            }
        }
    }, [onRouteCalculated]);

    useEffect(() => {
        if (destination) {
            calculateRoute(MIRANTE_DO_PACO, destination);
        }
    }, [destination, calculateRoute]);

    return (
        <div className="map-container">
            <MapContainer
                center={[MIRANTE_DO_PACO[1], MIRANTE_DO_PACO[0]]}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
            >
                <MapUpdater center={[MIRANTE_DO_PACO[1], MIRANTE_DO_PACO[0]]} zoom={15} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[MIRANTE_DO_PACO[1], MIRANTE_DO_PACO[0]]}>
                    <Popup>Mirante do Paço</Popup>
                </Marker>
                {destination && (
                    <>
                        <Marker position={[destination[1], destination[0]]}>
                            <Popup>Destino da Missão</Popup>
                        </Marker>
                        {route && (
                            <Polyline
                                positions={route}
                                color="#4CAF50"
                                weight={3}
                                opacity={0.7}
                            />
                        )}
                    </>
                )}
            </MapContainer>
        </div>
    );
}

export default Map;
