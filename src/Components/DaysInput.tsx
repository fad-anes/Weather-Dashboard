import React from 'react';
import { Form } from 'react-bootstrap';

interface DaysInputProps {
  days: number;
  setDays: (days: number) => void;
}

const DaysInput: React.FC<DaysInputProps> = ({ days, setDays }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDays(Number(e.target.value));
  };

  return (
    <Form.Group controlId="days">
      <Form.Label>Number of Days</Form.Label>
      <Form.Control
        type="number"
        value={days}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default DaysInput;
