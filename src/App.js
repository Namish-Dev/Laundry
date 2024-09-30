import React, { useState } from 'react';
import Floor from './components/Floor';
import './App.css';

const floors = [1, 2, 3, 4, 5];

function App() {
  const [booked, setBooked] = useState({});

  const handleBooking = (floor, machine, timeSlot) => {
    setBooked({ floor, machine, timeSlot });
    alert(`Booked machine ${machine} on floor ${floor} at ${timeSlot}`);
  };

  return (
    <div className="App">
      <h1>Laundry Booking System</h1>
      <div className="floor-container">
        {floors.map((floor) => (
          <Floor 
            key={floor} 
            floor={floor} 
            booked={booked} 
            handleBooking={handleBooking} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
