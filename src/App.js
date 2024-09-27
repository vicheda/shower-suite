
import React, { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('green');  // Default status is 'Shower Free'
  const [note, setNote] = useState('');  // To store user notes

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);  // Update the traffic light status
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);  // Capture the note input
  };

  return (
    <div className="App">
      <h1>Shower Traffic Light</h1>

      {/* Traffic Light Display */}
      <div className="traffic-light">
        <div className={`light red ${status === 'red' ? 'active' : ''}`} />
        <div className={`light yellow ${status === 'yellow' ? 'active' : ''}`} />
        <div className={`light green ${status === 'green' ? 'active' : ''}`} />
      </div>

      {/* Status Buttons */}
      <div className="button-container">
        <button className="red-btn" onClick={() => handleStatusChange('red')}>I'm Showering</button>
        <button className="yellow-btn" onClick={() => handleStatusChange('yellow')}>Showering Soon</button>
        <button className="green-btn" onClick={() => handleStatusChange('green')}>Shower Free</button>
      </div>

      {/* Notes Section */}
      <div className="notes-section">
        <textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="Add a note... "
          rows="4"
          cols="50"
        />
      </div>
    </div>
  );
}

export default App;
