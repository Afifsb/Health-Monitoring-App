import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Dashboard/dashboard';
import BMI from './Dashboard/BMI';
import BloodPressure from './Dashboard/BloodPressure';
import Diabetes from './Dashboard/Diabetes';
import BloodPressurePrecaution from './Dashboard/BloodPressurePrecaution';
import BMIPrecaution from './Dashboard/BMIPrecaution';
import DiabetesPrecaution from './Dashboard/DiabetesPrecaution';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/BMI" element={<BMI />} />
        <Route path="/BloodPressure" element={<BloodPressure />} />
        <Route path="/Diabetes" element={<Diabetes />} />
        <Route path="/BloodPressurePrecaution" element={<BloodPressurePrecaution />} />
        <Route path="/BMIPrecaution" element={<BMIPrecaution />} />
        <Route path="/DiabetesPrecaution" element={<DiabetesPrecaution />} />
      </Routes>
    </Router>
  );
};

export default App;