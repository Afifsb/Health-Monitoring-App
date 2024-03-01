import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Diabetes.css';

const Diabetes = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [bloodSugarResult, setBloodSugarResult] = useState('');
  const [userData, setUserData] = useState([]);

  const calculateBloodSugarLevel = () => {
    if (!name || !age || !bloodSugar) {
      alert('Please provide all required information.');
      return;
    }

    const sugarLevel = parseFloat(bloodSugar);
    let result = '';

    if (sugarLevel < 70) {
      result = 'Low Blood Sugar';
    } else if (sugarLevel >= 70 && sugarLevel <= 130) {
      result = 'Normal Blood Sugar';
    } else if (sugarLevel > 130 && sugarLevel <= 180) {
      result = 'High Blood Sugar';
    } else if (sugarLevel > 180) {
      result = 'Very High Blood Sugar';
    }

    const userDataEntry = {
      name: name,
      age: age,
      bloodSugar: sugarLevel,
      result: result
    };

    setUserData([...userData, userDataEntry]);
    setBloodSugarResult(result);
    clearInputs();
  };

  const deleteEntry = (index) => {
    const newData = [...userData];
    newData.splice(index, 1);
    setUserData(newData);
    setBloodSugarResult('');
  };

  const clearInputs = () => {
    setName('');
    setAge('');
    setBloodSugar('');
  };

  return (
    <Container className="diabetes-container">
      <h2 className="diabetes-heading">Blood Sugar Level Checker</h2>
      <Row>
        <Col>
          <div className="diabetes-input-Container">
            <label className="diabetes-label">Name:</label>
            <input className="diabetes-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </Col>
        <Col>
          <div className="diabbetes-input-Container">
            <label className="diabetes-label">Age:</label>
            <input className="diabetes-input" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="diabetes-input-Container">
            <label className="diabetes-label">Blood Sugar Level (mg/dL):</label>
            <input className="diabetes-input" type="number" value={bloodSugar} onChange={(e) => setBloodSugar(e.target.value)} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button className="diabetes-button" onClick={calculateBloodSugarLevel}>Check Blood Sugar Level</Button>
        </Col>
      </Row>
      {bloodSugarResult && (
        <Row>
          <Col className="text-center">
            <div className="blood-sugar-result">Result: {bloodSugarResult}</div>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <div className="diabetes-entries">
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
        </Col>
      </Row>
    </Container>
  );
};

export default Diabetes;
