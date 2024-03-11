// Components/Dashboard.js
import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';
import LogoutButton from '../Components/LogoutButton;';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Navbar>
          <Navbar.Brand>
            <h1 className="app-title">Afif's Health App</h1>
          </Navbar.Brand>
          <LogoutButton />
        </Navbar>
        <div className="dashboard-components">
          <div className="welcome-page">
            <div className="welcome-paragraph-container">
              <h2>Welcome to Afif's Health App!</h2>
              <p>
                This app is designed to empower you to take control of your well-being by monitoring your health metrics. Whether you're tracking your BMI, managing your blood pressure, or monitoring your diabetes, Afif's Health App provides you with the tools and insights you need to make informed decisions about your health.
              </p>
              <p>
                With easy access to essential health metrics, personalized recommendations, and intuitive interfaces, you can stay proactive about your health and make positive lifestyle changes. Whether you're on a fitness journey, managing a chronic condition, or simply prioritizing your wellness, Afif's Health App is here to support you every step of the way.
              </p>
            </div>
          </div>
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
            <Link to="/BloodPressurePrecaution">
              <Button variant="primary">Blood Pressure Precaution</Button>
            </Link>
            <Link to="/BMIPrecaution">
              <Button variant="primary">BMI Precaution</Button>
            </Link>
            <Link to="/DiabetesPrecaution">
              <Button variant="primary">Diabetes Precaution</Button>
            </Link>
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