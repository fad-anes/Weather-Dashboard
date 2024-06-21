import React from 'react';
import { Table } from 'react-bootstrap';

interface ForecastTableProps {
  forecast: Array<{ date: string; temperature: number }>;
  unit: string;
}

const ForecastTable: React.FC<ForecastTableProps> = ({ forecast, unit }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temperature ({unit === 'C' ? '°C' : '°F'})</th>
        </tr>
      </thead>
      <tbody>
        {forecast.map((day, index) => (
          <tr key={index}>
            <td>{day.date}</td>
            <td>{day.temperature}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ForecastTable;
