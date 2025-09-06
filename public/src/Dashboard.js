import React, { useState, useEffect } from 'react';
import RiskMap from './RiskMap';
import TaxiList from './TaxiList';
import AlertWidget from './AlertWidget';

const Dashboard = () => {
  const [taxis, setTaxis] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [riskZones, setRiskZones] = useState([]);

  useEffect(() => {
    setTaxis([
      { id: 1, plate: 'T-1234', driver: 'Juan Pérez', status: 'active' },
      { id: 2, plate: 'T-5678', driver: 'María López', status: 'active' },
      { id: 3, plate: 'T-9012', driver: 'Carlos Ruiz', status: 'maintenance' }
    ]);

    setAlerts([
      { id: 1, taxi: 'T-1234', type: 'Robo', location: 'Zona 6', time: '10:30' },
      { id: 2, taxi: 'T-5678', type: 'Accidente', location: 'Av. Reforma', time: '09:15' }
    ]);

    setRiskZones([
      { id: 1, name: 'Zona 6', risk: 'alto', taxis: 3 },
      { id: 2, name: 'Centro Histórico', risk: 'medio', taxis: 5 }
    ]);
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Panel de Control - Empresa de Taxis</h1>
        <div className="user-info">
          <span>Administrador</span>
          <button>Cerrar Sesión</button>
        </div>
      </header>

      <div className="dashboard-grid">
        <div className="grid-row">
          <AlertWidget alerts={alerts} />
          <RiskMap zones={riskZones} />
        </div>

        <div className="grid-row">
          <TaxiList taxis={taxis} />
        </div>
      </div>

      <footer className="dashboard-footer">
        <button>Descargar Reporte</button>
        <button>Enviar a Policía</button>
      </footer>
    </div>
  );
};

export default Dashboard;