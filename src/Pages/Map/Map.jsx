import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { useLocation } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ícones personalizados
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const missionIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function LocationMarker({ setUserPosition }) {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocalização não suportada pelo navegador");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
        setUserPosition([latitude, longitude]);
        map.setView([latitude, longitude], 15);
      },
      (err) => console.error("Erro ao obter localização:", err),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [map, setUserPosition]);

  return position === null ? null : (
    <Marker position={position} icon={userIcon}>
      <Popup>Você está aqui!</Popup>
    </Marker>
  );
}

function Map() {
  const location = useLocation();
  const mission = location.state?.mission || null;
  const [userPosition, setUserPosition] = useState(null);

  return (
    <div className="map-container">
      <MapContainer center={[-8.05, -34.9]} zoom={15} scrollWheelZoom={true}>
        {/* Camada do mapa */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marcador do usuário */}
        <LocationMarker setUserPosition={setUserPosition} />

        {/* Marcador da missão, se existir */}
        {mission && (
          <Marker
            position={[parseFloat(mission.longitude), parseFloat(mission.latitude)]}
            icon={missionIcon}
          >
            <Popup>{mission.title}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
