import React from 'react';
import '../styles/Dashboard.css';

const RiskMap = ({ zones }) => {
  return (
    <div className="risk-map-widget">
      <h2>Mapa de Riesgo</h2>
      <div className="map-container">
        <img src="/map-placeholder.png" alt="Mapa de riesgo" className="map-image" />
        <div className="zone-markers">
          {zones.map(zone => (
            <div key={zone.id} className={`marker ${zone.risk}`}>
              <span>{zone.name}</span>
              <span>{zone.taxis} taxis</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskMap;