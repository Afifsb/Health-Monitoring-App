// DiabetesPrecaution.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DiabetesPrecaution.css';

const DiabetesPrecaution = () => {
  return (
    <div className="precautions-container">
      <h2>Diabetes Precautions</h2>
      <p>If you have high blood sugar (hyperglycemia), consider the following precautions:</p>
      <ul>
        <li>Monitor blood sugar levels regularly.</li>
        <li>Take insulin or medication as prescribed by your doctor.</li>
        <li>Stay hydrated and avoid sugary foods.</li>
        <li>Engage in physical activity to lower blood sugar levels.</li>
      </ul>
      <p>If you have low blood sugar (hypoglycemia), consider the following precautions:</p>
      <ul>
        <li>Consume fast-acting carbohydrates, such as glucose tablets or juice.</li>
        <li>Check blood sugar levels and recheck after 15 minutes.</li>
        <li>Eat a balanced meal or snack to stabilize blood sugar levels.</li>
      </ul>
      <p>If your blood sugar levels are within the normal range, maintain them by following a balanced diet, exercising regularly, and adhering to your prescribed medication regimen.</p>
      <Link to="/dashboard">
        <button>Go back to Dashboard</button>
      </Link>
    </div>
  );
};

export default DiabetesPrecaution;