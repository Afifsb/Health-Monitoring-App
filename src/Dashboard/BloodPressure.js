import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/BloodPressure.css';
import bloodPressureIMG from '../Images/bloodpressure_img.jpg'; 

const BloodPressure = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [result, setResult] = useState('');
  const [userData, setUserData] = useState([]);

  const calculateBloodPressure = (e) => {
    e.preventDefault();

    if (!name || !age || !systolic || !diastolic) {
      alert('Please provide all required information.');
      return;
    }

    const sys = parseFloat(systolic);
    const dia = parseFloat(diastolic);

    let bloodPressureRange = '';
    if (sys < 90 || dia < 60) {
      bloodPressureRange = 'Low Blood Pressure';
    } else if (sys >= 90 && sys <= 120 && dia >= 60 && dia <= 80) {
      bloodPressureRange = 'Normal Blood Pressure';
    } else if ((sys > 120 && sys <= 140) || (dia > 80 && dia <= 90)) {
      bloodPressureRange = 'Prehypertension';
    } else if (sys > 140 || dia > 90) {
      bloodPressureRange = 'High Blood Pressure';
    }

    setResult(bloodPressureRange);

    const userDataEntry = {
      name: name,
      age: age,
      systolic: sys,
      diastolic: dia,
      result: bloodPressureRange
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
    <div className="bloodpressure-background" style={{ backgroundImage: `url(${bloodPressureIMG})` }}>
      <Container className="bloodpressure-container">
        <h2 className="bloodpressure-heading">Blood Pressure Checker</h2>
        <div className="bloodpressure-ranges">
          <p>Normal Blood Pressure: Systolic 90-120 mmHg and Diastolic 60-80 mmHg</p>
          <p>Low Blood Pressure: Systolic &lt; 90 mmHg or Diastolic &lt; 60 mmHg</p>
          <p>High Blood Pressure: Systolic &gt; 140 mmHg or Diastolic &gt; 90 mmHg</p>
        </div>
        <form onSubmit={calculateBloodPressure}>
          <Row>
            <Col>
              <div className="bloodpressure-input-Container">
                <label className="bloodpressure-label">Name:</label>
                <input className="bloodpressure-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </Col>
            <Col>
              <div className="bloodpressure-input-Container">
                <label className="bloodpressure-label">Age:</label>
                <input className="bloodpressure-input" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="bloodpressure-input-Container">
                <label className="bloodpressure-label">Systolic Pressure (mmHg):</label>
                <input className="bloodpressure-input" type="number" value={systolic} onChange={(e) => setSystolic(e.target.value)} />
              </div>
            </Col>
            <Col>
              <div className="bloodpressure-input-Container">
                <label className="bloodpressure-label">Diastolic Pressure (mmHg):</label>
                <input className="bloodpressure-input" type="number" value={diastolic} onChange={(e) => setDiastolic(e.target.value)} />
              </div>
            </Col>
          </Row>
          <Button type="submit" className="bloodpressure-button">Check Blood Pressure</Button>
        </form>
        {result && (
          <div className="bloodpressure-result">
            <p>Blood Pressure Result: {result}</p>
          </div>
        )}
        <div className="bloodpressure-user-data">
          {userData.map((entry, index) => (
            <div key={index} className="bloodpressure-entry">
              <p>Name: {entry.name}</p>
              <p>Age: {entry.age}</p>
              <p>Systolic Pressure: {entry.systolic} mmHg</p>
              <p>Diastolic Pressure: {entry.diastolic} mmHg</p>
              <p>Blood Pressure Result: {entry.result}</p>
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

export default BloodPressure;