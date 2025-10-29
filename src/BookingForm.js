import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed! 🍋");
  };

  return (
    <div className="booking-container">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />

        <label>Guests:</label>
        <input type="number" name="guests" value={formData.guests} min="1" max="10" onChange={handleChange} required />

        <label>Occasion:</label>
        <select name="occasion" value={formData.occasion} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="birthday">Birthday 🎂</option>
          <option value="anniversary">Anniversary 💐</option>
          <option value="casual">Casual✨</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;