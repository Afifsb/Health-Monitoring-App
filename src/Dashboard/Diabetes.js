import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Diabetes.css';

const Diabetes = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [result, setResult] = useState('');
  const [userData, setUserData] = useState([]);

  const calculateBloodSugarLevel = (e) => {
    e.preventDefault();

    if (!name || !age || !bloodSugar) {
      alert('Please provide all required information.');
      return;
    }

    const sugarLevel = parseFloat(bloodSugar);
    let sugarLevelRange = '';

    if (sugarLevel < 70) {
      sugarLevelRange = 'Low Blood Sugar';
    } else if (sugarLevel >= 70 && sugarLevel <= 130) {
      sugarLevelRange = 'Normal Blood Sugar';
    } else if (sugarLevel > 130 && sugarLevel <= 180) {
      sugarLevelRange = 'High Blood Sugar';
    } else if (sugarLevel > 180) {
      sugarLevelRange = 'Very High Blood Sugar';
    }

    setResult(sugarLevelRange);

    const userDataEntry = {
      name: name,
      age: age,
      bloodSugar: sugarLevel,
      result: sugarLevelRange
    };

    setUserData([...userData, userDataEntry]);
    clearInputs();
  };

  const deleteEntry = (index) => {
    const newData = [...userData];
    newData.splice(index, 1);
    setUserData(newData);
    setResult('');
  };

  const clearInputs = () => {
    setName('');
    setAge('');
    setBloodSugar('');
  };

  return (
    <div>
    <Container className="diabetes-container">
      <h2 className="diabetes-heading">Blood Sugar Level Checker</h2>
      <div className="diabetes-ranges">
        <p>Normal Blood Sugar: 70 - 130 mg/dL</p>
        <p>High Blood Sugar: 130 - 180 mg/dL</p>
        <p>Low Blood Sugar: Less than 70 mg/dL</p>
      </div>
      <form onSubmit={calculateBloodSugarLevel}>
        <Row>
          <Col>
            <div className="diabetes-input-container">
              <label className="diabetes-label">Name:</label>
              <input className="diabetes-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </Col>
          <Col>
            <div className="diabetes-input-container">
              <label className="diabetes-label">Age:</label>
              <input className="diabetes-input" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="diabetes-input-container">
              <label className="diabetes-label">Blood Sugar Level (mg/dL):</label>
              <input className="diabetes-input" type="number" value={bloodSugar} onChange={(e) => setBloodSugar(e.target.value)} />
            </div>
          </Col>
        </Row>
        <Button type="submit" className="diabetes-button">Check Blood Sugar Level</Button>
      </form>
      {result && (
        <div className="diabetes-result">
          <p>Result: {result}</p>
        </div>
      )}
      <div className="diabetes-user-data">
        {userData.map((entry, index) => (
          <div key={index} className="diabetes-entry">
            <p>Name: {entry.name}</p>
            <p>Age: {entry.age}</p>
            <p>Blood Sugar Level: {entry.bloodSugar} mg/dL</p>
            <p>Blood Sugar Result: {entry.result}</p>
            <Button onClick={() => deleteEntry(index)}>Delete</Button>
          </div>
        ))}
      </div>
      <Link to="/dashboard">
        <Button variant="secondary" className="go-back-button">Go back to Dashboard</Button>
      </Link>
    </Container>
    </div>
  );
};

export default Diabetes;
