import React from 'react';
import './confirmation-page.css';

import MoodRecap from './mood-recap';

export function ConfirmationPage(props) {
    return (
    <div className="confirmation-container">
    <h1>Confirm Your Entry</h1>
        <div className="recap-container">
            <MoodRecap />
        </div>
        <div className="notes">
            <p className="notes-recap">
              Some text the user put in regarding whatever here.
            </p>
        </div>
    </div>
    )
}

export default ConfirmationPage;