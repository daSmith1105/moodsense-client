import React from 'react';
import MoodRecap from './mood-recap';

import './notes-page.css';

export function NotesPage(props) {

    return (
        <div className="page">
            <h1>Your Selected Mood(s)</h1>
            <div className="recap-container">
                <MoodRecap />
            </div>
            <form className="notes-form">
                <textarea className="text-area" placeholder="add your thoughts..."></textarea>
            </form>
        </div>
    )
}

export default NotesPage;