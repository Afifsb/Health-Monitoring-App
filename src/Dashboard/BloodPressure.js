import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/BloodPressure.css';

const BloodPressure = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [userData, setUserData] = useState([]);

  const calculateBloodPressure = () => {
    if (!name || !age || !systolic || !diastolic) {
      alert('Please provide all required information.');
      return;
    }

    const sys = parseFloat(systolic);
    const dia = parseFloat(diastolic);

    let result = '';
    if (sys < 90 || dia < 60) {
      result = 'Low Blood Pressure';
    } else if (sys >= 90 && sys <= 120 && dia >= 60 && dia <= 80) {
      result = 'Normal Blood Pressure';
    } else if ((sys > 120 && sys <= 140) || (dia > 80 && dia <= 90)) {
      result = 'Prehypertension';
    } else if (sys > 140 || dia > 90) {
      result = 'High Blood Pressure';
    }

    const userDataEntry = {
      name: name,
      age: age,
      systolic: sys,
      diastolic: dia,
      result: result
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
    setSystolic('');
    setDiastolic('');
  };

  return (
    <Container className="bloodpressure-container">
      <h2 className="bloodpressure-heading">Blood Pressure Checker</h2>
      <Row>
        <Col>
          <div className="bloodpressure-inputContainer">
            <label className="bloodpressure-label">Name:</label>
            <input className="bloodpressure-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </Col>
        <Col>
          <div className="bloodpressure-inputContainer">
            <label className="bloodpressure-label">Age:</label>
            <input className="bloodpressure-input" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="bloodpressure-inputContainer">
            <label className="bloodpressure-label">Systolic Pressure (mmHg):</label>
            <input className="bloodpressure-input" type="number" value={systolic} onChange={(e) => setSystolic(e.target.value)} />
          </div>
        </Col>
        <Col>
          <div className="bloodpressure-inputContainer">
            <label className="bloodpressure-label">Diastolic Pressure (mmHg):</label>
            <input className="bloodpressure-input" type="number" value={diastolic} onChange={(e) => setDiastolic(e.target.value)} />
          </div>
        </Col>
      </Row>
      <Button className="bloodpressure-button" onClick={calculateBloodPressure}>Check Blood Pressure</Button>
      
      <div className="bloodpressure-user-data">
        {userData.map((entry, index) => (
          <div key={index} className="entry">
            <p>Name: {entry.name}</p>
            <p>Age: {entry.age}</p>
            <p>Systolic Pressure: {entry.systolic} mmHg</p>
            <p>Diastolic Pressure: {entry.diastolic} mmHg</p>
            <p>Blood Pressure Result: {entry.result}</p>
            <Button onClick={() => deleteEntry(index)}>Delete</Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BloodPressure;
