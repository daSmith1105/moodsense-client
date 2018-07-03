import React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage(props) {
    return (
        <div>
            <h1>Welcome to Moodsense</h1>
            <h2>Awareness Tracking</h2>
            <h3>
                A happier and healthier life through mood tracking and individual emotional awareness.
            </h3>
            <p>
                The purpose of this app is to track and reflect on your emotions.
            </p>
            <Link to="/login">Get Started</Link>
        </div>
    )
}

export default LandingPage;