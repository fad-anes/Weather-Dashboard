import React, { useState, useEffect } from 'react';
import CityInput from './Components/CityInput';
import UnitDropdown from './Components/UnitDropdown';
import DaysInput from './Components/DaysInput';
import ForecastTable from './Components/ForecastTable';
import api from './Service/api';
import { Container, Row, Col, Spinner, Alert, Card } from 'react-bootstrap';
import './App.css';
import sun from './assets/sun.svg'; 

const App: React.FC = () => {
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('C');
  const [days, setDays] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [forecast, setForecast] = useState<Array<{ date: string; temperature: number }>>([]);

  useEffect(() => {
    const fetchWeather = async () => {
      if (city) {
        setLoading(true);
        setError('');
        try {
          const geoData = await api.geoRes(city);
          const weatherData = await api.weatherRes(geoData.lat, geoData.lon, unit, days);
          const formattedData = weatherData.daily.temperature_2m_max.map((temp: number, index: number) => ({
            date: new Date(weatherData.daily.time[index]).toLocaleDateString(),
            temperature: temp
          }));
          setForecast(formattedData);
        } catch (error: any) {
          setError(error.message);
        }
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, unit, days]);

  return (
    <Container className="container">
      <div className="sun-container">
        <img src={sun} alt="Sun" className="sun"/>
      </div>
      <h1 className="text-center my-4">Weather Forecast</h1>
      <Row className="mb-4">
        <Col md={4}>
          <CityInput city={city} setCity={setCity} />
        </Col>
        <Col md={4}>
          <UnitDropdown unit={unit} setUnit={setUnit} />
        </Col>
        <Col md={4}>
          <DaysInput days={days} setDays={setDays} />
        </Col>
      </Row>
      {loading && <Spinner animation="border" className="d-block mx-auto" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && (
        <Card className="card">
          <Card.Header className="card-header">Forecast</Card.Header>
          <Card.Body>
            <ForecastTable forecast={forecast} unit={unit} />
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default App;
