import React from 'react';
import '../styles/Dashboard.css';

const TaxiList = ({ taxis }) => {
  return (
    <div className="taxi-list-widget">
      <h2>Taxis Activos</h2>
      <table className="taxi-table">
        <thead>
          <tr>
            <th>Placa</th>
            <th>Conductor</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {taxis.map(taxi => (
            <tr key={taxi.id}>
              <td>{taxi.plate}</td>
              <td>{taxi.driver}</td>
              <td className={`status ${taxi.status}`}>
                {taxi.status === 'active' ? 'Activo' : 'Mantenimiento'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxiList;