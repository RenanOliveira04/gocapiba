import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css";

// Corrigindo o ícone do marcador
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Componente para atualizar a visualização do mapa
function MapUpdater({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
}

// Componente para o marcador de localização
function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();
  const hasSetInitialPosition = useRef(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocalização não suportada pelo navegador");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const newPosition = [pos.coords.latitude, pos.coords.longitude];
        setPosition(newPosition);

        if (!hasSetInitialPosition.current) {
          setTimeout(() => {
            try {
              map.invalidateSize();
              map.setView(newPosition, 15, { animate: false });
              hasSetInitialPosition.current = true;
            } catch (error) {
              console.error("Erro ao atualizar mapa:", error);
            }
          }, 250);
        }
      },
      (err) => {
        console.error("Erro ao obter localização:", err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
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
  const mapRef = useRef(null);
  const defaultPosition = [-8.05, -34.9]; // Recife

  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 250);
    }
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        ref={mapRef}
        center={defaultPosition}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        whenReady={(map) => {
          setTimeout(() => {
            map.target.invalidateSize();
          }, 250);
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
        <MapUpdater center={defaultPosition} zoom={15} />
      </MapContainer>
    </div>
  );
}

export default Map;