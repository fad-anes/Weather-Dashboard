import React from 'react';
import { Form } from 'react-bootstrap';

interface CityInputProps {
  city: string;
  setCity: (city: string) => void;
}

const CityInput: React.FC<CityInputProps> = ({ city, setCity }) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <Form.Group controlId="city">
      <Form.Label>City</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter city name"
        defaultValue={city}
        onBlur={handleBlur}
      />
    </Form.Group>
  );
};

export default CityInput;
