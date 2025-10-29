import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    if (!formData.name || !formData.date || !formData.time || !formData.guests) {
      alert("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-yellow-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-800">
        Little Lemon Booking 🍋
      </h2>

      {submitted ? (
        <div className="text-center text-green-600 font-semibold">
          🎉 Booking confirmed for {formData.name} on {formData.date} at{" "}
          {formData.time}!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Casual">Casual</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800"
          >
            Book Table
          </button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;