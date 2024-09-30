import React, { useState } from 'react';
import './Machine.css';

const timeSlots = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

const Machine = ({ floor, machine, booked, handleBooking }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const isBooked = booked.floor === floor && booked.machine === machine;

  const handleTimeSlotChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleBookingClick = () => {
    if (selectedTime) {
      handleBooking(floor, machine, selectedTime);
    } else {
      alert('Please select a time slot');
    }
  };

  return (
    <div className={`machine ${isBooked ? 'booked' : ''}`}>
      <h3>Machine {machine}</h3>
      <select onChange={handleTimeSlotChange} value={selectedTime}>
        <option value="">Select a time slot</option>
        {timeSlots.map((slot, index) => (
          <option key={index} value={slot}>{slot}</option>
        ))}
      </select>
      <button onClick={handleBookingClick} disabled={isBooked}>
        {isBooked ? 'Booked' : 'Book'}
      </button>
    </div>
  );
};

export default Machine;
