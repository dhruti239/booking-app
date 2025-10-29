import React from "react";
import BookingForm from "./BookingForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="logo">🍋 Little Lemon</h1>
        <p className="tagline">Book your table in seconds!</p>
      </header>

      <main className="main-content">
        <BookingForm />
      </main>

      <footer className="footer">
        <p>© 2025 Little Lemon Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;