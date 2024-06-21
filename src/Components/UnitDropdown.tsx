import React from 'react';
import { Form } from 'react-bootstrap';

interface UnitDropdownProps {
  unit: string;
  setUnit: (unit: string) => void;
}

const UnitDropdown: React.FC<UnitDropdownProps> = ({ unit, setUnit }) => {
  return (
    <Form.Group controlId="unit">
      <Form.Label>Unit</Form.Label>
      <Form.Control as="select" value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </Form.Control>
    </Form.Group>
  );
};

export default UnitDropdown;
