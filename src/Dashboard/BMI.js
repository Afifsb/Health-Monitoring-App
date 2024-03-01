import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/BMI.css';

const BMI = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiEntries, setBmiEntries] = useState([]);

  const calculateBMI = () => {
    if (!name || !age || !weight || !height) {
      alert('Please provide all required information.');
      return;
    }

    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmiValue = weightInKg / (heightInM * heightInM);

    const newEntry = {
      name,
      age: parseInt(age),
      weight: parseFloat(weight),
      height: parseFloat(height),
      bmi: bmiValue.toFixed(2)
    };

    setBmiEntries([...bmiEntries, newEntry]);
    clearInputs();
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...bmiEntries];
    updatedEntries.splice(index, 1);
    setBmiEntries(updatedEntries);
  };

  const clearInputs = () => {
    setName('');
    setAge('');
    setWeight('');
    setHeight('');
  };

  return (
    <Container className="bmi-container">
      <h2 className="bmi-heading">BMI Calculator</h2>
      <Row>
        <Col>
          <div className="bmi-input-Container">
            <label className="bmi-label">Name:</label>
            <input className="bmi-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </Col>
        <Col>
          <div className="bmi-input-Container">
            <label className="bmi-label">Age:</label>
            <input className="bmi-input" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="bmi-input-Container">
            <label className="bmi-label">Weight (in kg):</label>
            <input className="bmi-input" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
        </Col>
        <Col>
          <div className="bmi-input-Container">
            <label className="bmi-label">Height (in cm):</label>
            <input className="bmi-input" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
        </Col>
      </Row>
      <Button className="bmi-button" onClick={calculateBMI}>Calculate BMI</Button>
      <div className="bmi-entries">
        {bmiEntries.map((entry, index) => (
          <div key={index} className="bmi-entry">
            <p>Name: {entry.name}</p>
            <p>Age: {entry.age}</p>
            <p>Weight: {entry.weight} kg</p>
            <p>Height: {entry.height} cm</p>
            <p>BMI: {entry.bmi}</p>
            <Button onClick={() => deleteEntry(index)}>Delete</Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BMI;
