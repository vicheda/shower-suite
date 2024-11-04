import React, { useState } from 'react';

export const TrafficLight = () => {
    const [status, setStatus] = useState('green');  // default status is 'Shower Free'
    const [note, setNote] = useState('');  // store user notes
    const [noteHistory, setNoteHistory] = useState([]);  // list of saved notes

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);  // update the traffic light
    };

    const handleNoteChange = (event) => {
        setNote(event.target.value);  // capture the note input
    };

    const handleNoteSubmit = () => {
        if (note.trim()) {
          setNoteHistory([...noteHistory, note]);  // add current note to the history
          setNote('');  // clear input
        }
    };

    const handleClearNotes = (index) => {
        // const updatedNotes = noteHistory.filter((_, i) => i !== index); // remove note at index
        setNoteHistory([]);
    };    

    return (
        <div className="App">
        <h1>Shower Traffic Light</h1>

        {/* traffic light display */}
        <div className="traffic-light">
            <div className={`light red ${status === 'red' ? 'active' : ''}`} />
            <div className={`light yellow ${status === 'yellow' ? 'active' : ''}`} />
            <div className={`light green ${status === 'green' ? 'active' : ''}`} />
        </div>

        {/* status buttons */}
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
            <div className="notes-btns">
                <button className="send-note-btn" onClick={handleNoteSubmit}>send</button>
                <button className="delete-notes-btn" onClick={handleClearNotes}>clear</button>
            </div>
            
            {/* display notes */}
            <div className="note-history">
                {/* <h2>Note History</h2> */}
                <ul>
                {noteHistory.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
                </ul>
            </div>

        </div>
        </div>
    );
}