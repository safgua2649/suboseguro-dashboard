import React from 'react';
import '../styles/Dashboard.css';

const AlertWidget = ({ alerts }) => {
  return (
    <div className="alert-widget">
      <h2>Alertas Recientes</h2>
      <div className="alerts-list">
        {alerts.length === 0 ? (
          <p className="no-alerts">No hay alertas en este momento</p>
        ) : (
          alerts.map(alert => (
            <div key={alert.id} className="alert-item">
              <div className="alert-header">
                <span className={`alert-type type-${alert.type.toLowerCase()}`}>
                  {alert.type}
                </span>
                <span className="alert-time">{alert.time}</span>
              </div>
              <p><strong>Taxi:</strong> {alert.taxi}</p>
              <p><strong>Ubicación:</strong> {alert.location}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlertWidget;