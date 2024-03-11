import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BloodPressurePrecaution.css';

const BloodPressurePrecaution = () => {
  return (
    <div className="precautions-container">
      <h2>Blood Pressure Precautions</h2>
      <p>If you have high blood pressure (hypertension), consider the following precautions:</p>
      <ul>
        <li>Follow a low-sodium diet.</li>
        <li>Engage in regular physical activity.</li>
        <li>Limit alcohol consumption.</li>
        <li>Take prescribed medications as directed by your doctor.</li>
        <li>Monitor blood pressure regularly.</li>
      </ul>
      <p>If you have low blood pressure (hypotension), consider the following precautions:</p>
      <ul>
        <li>Stay hydrated.</li>
        <li>Consume small, frequent meals.</li>
        <li>Avoid standing up quickly.</li>
        <li>Use compression stockings if recommended by your doctor.</li>
        <li>Avoid hot environments.</li>
      </ul>
      <p>If your blood pressure is within the normal range, continue with a healthy lifestyle including a balanced diet and regular exercise. Monitor blood pressure periodically.</p>
      <Link to="/dashboard">
        <button>Go back to Dashboard</button>
      </Link>
    </div>
  );
};

export default BloodPressurePrecaution;