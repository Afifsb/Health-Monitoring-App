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
  const [results, setResults] = useState([]);
  const [heightUnit, setHeightUnit] = useState('cm');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!name || !age || !weight || !height) {
      alert('Please provide all required information.');
      return;
    }

    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(convertToCentimeters(height));

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

    setResult({ value: bmiValue.toFixed(2), category: bmiCategory });

    const userDataEntry = {
      name: name,
      age: age,
      weight: weightInKg,
      height: heightInCm
    };

    const resultObject = { value: bmiValue.toFixed(2), category: bmiCategory };

    setUserData([...userData, userDataEntry]);
    setResults([...results, resultObject]);

    clearInputs();
  };

  const deleteEntry = (index) => {
    const newData = [...userData];
    const newResults = [...results];
    newData.splice(index, 1);
    newResults.splice(index, 1);
    setUserData(newData);
    setResults(newResults);
  };

  const clearInputs = () => {
    setName('');
    setAge('');
    setWeight('');
    setHeight('');
    clearResult();
  };

  const clearResult = () => {
    setResult('');
  };

  const toggleHeightUnit = () => {
    setHeightUnit(heightUnit === 'cm' ? 'feet' : 'cm');
  };

  const convertToFeetInches = (heightInCm) => {
    if (heightUnit === 'cm') {
      return `${heightInCm} cm`;
    } else {
      const feet = Math.floor(heightInCm / 30.48);
      const inches = ((heightInCm % 30.48) / 2.54).toFixed(2);
      return `${feet}'${inches}`;
    }
  };

  const convertToCentimeters = (height) => {
    if (heightUnit === 'feet') {
      if (height.includes("'")) {
        const [feet, inches] = height.split("'");
        const heightInCm = (parseFloat(feet) * 30.48) + (parseFloat(inches) * 2.54);
        return isNaN(heightInCm) ? '' : heightInCm.toString();
      } else {
        // If the input is a single number, assume it's in feet
        const heightInFeet = parseFloat(height);
        const heightInCm = heightInFeet * 30.48;
        return heightInCm.toString();
      }
    }
    return height;
  };

  const formatHeightInput = (height) => {
    if (heightUnit === 'feet') {
      if (height.includes("'")) {
        return height;
      } else {
        const heightInFeet = parseFloat(height) / 30.48;
        const feet = Math.floor(heightInFeet);
        const inches = ((heightInFeet % 1) * 12).toFixed(2);
        return `${feet}'${inches}`;
      }
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
                  type="text"
                  value={formatHeightInput(height)}
                  onChange={(e) => setHeight(e.target.value)}
                  min={0}
                />
              </div>
            </Col>
          </Row>
          <Button type="submit" className="bmi-button">Calculate BMI</Button>
        </form>
        {result && (
          <div className="bmi-result">
            <p>Numerical Result: {result.value}</p>
            <p>BMI Category: {result.category}</p>
          </div>
        )}
        <div className="bmi-user-data">
          {userData.map((entry, index) => (
            <div key={index} className="bmi-entry">
              <p>Name: {entry.name}</p>
              <p>Age: {entry.age}</p>
              <p>Weight: {entry.weight} kg</p>
              <p>Height: {convertToFeetInches(entry.height)}</p>
              <p>Numerical Result: {results[index]?.value}</p>
              <p>BMI Category: {results[index]?.category}</p>
              <Button onClick={() => deleteEntry(index)}>Delete</Button>
            </div>
          ))}
        </div>
        <Button onClick={toggleHeightUnit}>Change Height Unit</Button>
        <Link to="/dashboard">
          <Button variant="secondary" className="go-back-button">Go back to Dashboard</Button>
        </Link>
      </Container>
    </div>
  );
};

export default BMI;