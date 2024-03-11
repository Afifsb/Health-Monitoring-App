import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BMIPrecaution.css';

const BMIPrecaution = () => {
  return (
    <div className="precautions-container">
      <h2>BMI Precautions</h2>
      <p>If your BMI is in the overweight or obese range, consider the following precautions:</p>
      <ul>
        <li>Adopt a calorie-controlled, nutrient-rich diet.</li>
        <li>Engage in regular physical activity and exercise.</li>
        <li>Consult a healthcare professional for personalized advice.</li>
        <li>Manage portion sizes and limit intake of high-calorie, processed foods.</li>
      </ul>
      <p>If your BMI is in the underweight range, consider the following precautions:</p>
      <ul>
        <li>Increase your calorie intake with nutrient-dense foods.</li>
        <li>Incorporate strength training exercises to build muscle mass.</li>
        <li>Seek guidance from a healthcare professional or dietitian.</li>
        <li>Address any underlying medical conditions that may contribute to being underweight.</li>
      </ul>
      <p>If your BMI is within the normal range, maintain a balanced lifestyle with a healthy diet and regular physical activity to sustain optimal health.</p>
      <Link to="/dashboard">
        <button>Go back to Dashboard</button>
      </Link>
    </div>
  );
};

export default BMIPrecaution;