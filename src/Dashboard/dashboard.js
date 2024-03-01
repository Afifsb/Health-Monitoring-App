import React from 'react';
import { Navbar } from "react-bootstrap";
import '../styles/dashboard.css'; 
import logo from '../Images/Logo.jpg';
import backgroundImg from '../Images/ECG.jpg'

import BMI from './BMI';
import Diabetes from './Diabetes';
import BloodPressure from './BloodPressure';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <img className="background-image" src={backgroundImg} alt="backgroundImage"/>
      <div className="dashboard-content">
        <Navbar>
          <Navbar.Brand>
            <h1 className="app-title">Afif's Health App</h1>
          </Navbar.Brand>
        </Navbar>
        <div className="dashboard-components">
          <img src={logo} alt="Logo" className="logo" />
          <div className="dashboard-component">
            <BloodPressure />
          </div>
          <div className="dashboard-component">
            <BMI />
          </div>
          <div className="dashboard-component">
            <Diabetes />
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>copyright:&copy; Afif Balde</p>
      </footer>
    </div>
  );
};

export default Dashboard;
