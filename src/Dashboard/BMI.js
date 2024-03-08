import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/BMI.css';

const BMI = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [userData, setUserData] = useState([]);
  const [heightUnit, setHeightUnit] = useState('cm');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!name || !age || !weight || !height) {
      alert('Please provide all required information.');
      return;
    }

    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);

    const heightInM = heightInCm / 100;
    const bmiValue = weightInKg / (heightInM * heightInM);

    let bmiCategory = '';
    if (bmiValue < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      bmiCategory = 'Normal';
    } else if (bmiValue >= 25 && bmiValue < 30) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }

    setResult(bmiCategory);
    setTimeout(() => {
      setResult('');
    }, 0); // Clear the result immediately

    const userDataEntry = {
      name: name,
      age: age,
      weight: weightInKg,
      height: heightInCm,
      result: bmiCategory
    };

    setUserData([...userData, userDataEntry]);

    clearInputs();
  };

  const deleteEntry = (index) => {
    const newData = [...userData];
    newData.splice(index, 1);
    setUserData(newData);
  };

  const clearInputs = () => {
    setName('');
    setAge('');
    setWeight('');
    setHeight('');
  };

  const toggleHeightUnit = () => {
    setHeightUnit(heightUnit === 'cm' ? 'feet' : 'cm');
  };

  const convertToFeetInches = (heightInCm) => {
    if (heightUnit === 'cm') {
      return `${heightInCm} cm`;
    } else {
      const feet = Math.floor(heightInCm / 30.48);
      const inches = Math.round((heightInCm % 30.48) / 2.54);
      return `${feet}ft ${inches}in`;
    }
  };

  const convertToCentimeters = (height) => {
    if (heightUnit === 'feet') {
      const [feet, inches] = height.split('ft ');
      const heightInCm = parseInt(feet) * 30.48 + parseInt(inches) * 2.54;
      return heightInCm.toString();
    }
    return height;
  };

  return (
    <div>
      <Container className="bmi-container">
        <h2 className="bmi-heading">BMI Calculator</h2>
        <div className="bmi-ranges">
          <p>Normal: BMI &lt; 18.5</p>
          <p>Underweight: 18.5 &lt;= BMI &lt; 25</p>
          <p>Overweight: 25 &lt;= BMI &lt; 30</p>
          <p>Obesity: BMI &gt;= 30</p>
        </div>
        <form onSubmit={calculateBMI}>
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
                <label className="bmi-label">Height (in {heightUnit}):</label>
                <input
                  className="bmi-input"
                  type="number"
                  value={convertToCentimeters(height)}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </Col>
          </Row>
          <Button type="submit" className="bmi-button">Calculate BMI</Button>
        </form>
        {result && (
          <div className="bmi-result">
            <p>BMI Category: {result}</p>
          </div>
        )}
        <div className="bmi-user-data">
          {userData.map((entry, index) => (
            <div key={index} className="bmi-entry">
              <p>Name: {entry.name}</p>
              <p>Age: {entry.age}</p>
              <p>Weight: {entry.weight} kg</p>
              <p>Height: {convertToFeetInches(entry.height)}</p>
              <p>BMI Category: {entry.result}</p>
              <Button onClick={() => deleteEntry(index)}>Delete</Button>
            </div>
          ))}
        </div>
        <Button onClick={toggleHeightUnit}>Toggle Height Unit</Button>
        <Link to="/dashboard">
          <Button variant="secondary" className="go-back-button">Go back to Dashboard</Button>
        </Link>
      </Container>
    </div>
  );
};

export default BMI;