import React from 'react';
import { Navbar, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/dashboard.css'; 
import logo from '../Images/Logo.jpg';
import backgroundImg from '../Images/ECG.jpg'

// Import your components
// import BMI from './BMI';
// import Diabetes from './Diabetes';
// import BloodPressure from './BloodPressure';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-paragraph-container">
        <h2>Welcome to Afif's Health App!</h2>
        <p>This app is designed to empower you to take control of your well-being by monitoring your health metrics. Whether you're tracking your BMI, managing your blood pressure, or monitoring your diabetes, Afif's Health App provides you with the tools and insights you need to make informed decisions about your health.</p>
        <p>With easy access to essential health metrics, personalized recommendations, and intuitive interfaces, you can stay proactive about your health and make positive lifestyle changes. Whether you're on a fitness journey, managing a chronic condition, or simply prioritizing your wellness, Afif's Health App is here to support you every step of the way.</p>
      </div>
    </div>
  );
};

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
          <div className="dashboard-half">
            <WelcomePage />
          </div>
          <div className="dashboard-half">
            <div className="button-container">
              <Link to="/BloodPressure">
                <Button variant="primary">Blood Pressure</Button>
              </Link>
              <Link to="/bmi">
                <Button variant="primary">BMI</Button>
              </Link>
              <Link to="/diabetes">
                <Button variant="primary">Diabetes</Button>
              </Link>
            </div>
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
