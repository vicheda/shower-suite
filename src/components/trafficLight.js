import React, { useState } from 'react';

export const TrafficLight = () => {
    const [status, setStatus] = useState('green');  // default status is 'Shower Free'
    const [note, setNote] = useState('');  // store user notes

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);  // update the traffic light
    };

    const handleNoteChange = (event) => {
        setNote(event.target.value);  // capture the note input
    };

    return (
        <div className="App">
        <h1>Shower Traffic Light</h1>

        {/* traffic Light Display */}
        <div className="traffic-light">
            <div className={`light red ${status === 'red' ? 'active' : ''}`} />
            <div className={`light yellow ${status === 'yellow' ? 'active' : ''}`} />
            <div className={`light green ${status === 'green' ? 'active' : ''}`} />
        </div>

        {/* status Buttons */}
        <div className="button-container">
            <button className="red-btn" onClick={() => handleStatusChange('red')}>I'm Showering</button>
            <button className="yellow-btn" onClick={() => handleStatusChange('yellow')}>Showering Soon</button>
            <button className="green-btn" onClick={() => handleStatusChange('green')}>Shower Free</button>
        </div>

        {/* notes Section */}
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