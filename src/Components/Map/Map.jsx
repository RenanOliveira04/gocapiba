import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css";


const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", 
  iconSize: [40, 40],
  iconAnchor: [20, 40], 
});

function LocationMarker() {
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
        map.setView([latitude, longitude], 15); 
      },
      (err) => {
        console.error("Erro ao obter localização:", err);
      },
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={userIcon}>
      <Popup>Você está aqui!</Popup>
    </Marker>
  );
}

function Map() {
  return (
    <div className="map-container">
      <MapContainer center={[-8.05, -34.9]} zoom={20} scrollWheelZoom={true}>
        {/* Camada de fundo (mapa) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marcador do usuário com GPS */}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
