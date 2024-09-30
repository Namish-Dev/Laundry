import React from 'react';
import Machine from './Machine';
import './Floor.css';

const machines = [1, 2]; // 2 machines per floor

const Floor = ({ floor, booked, handleBooking }) => {
  return (
    <div className="floor">
      <h2>Floor {floor}</h2>
      <div className="machine-container">
        {machines.map((machine) => (
          <Machine 
            key={machine} 
            floor={floor} 
            machine={machine} 
            booked={booked} 
            handleBooking={handleBooking} 
          />
        ))}
      </div>
    </div>
  );
};

export default Floor;
