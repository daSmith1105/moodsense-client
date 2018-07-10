import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import './landing-page.css';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="landing-container">
            <h1 className="landing-welcome">Welcome to Moodsense</h1>
            <h2 className="tagline">Awareness Tracking</h2>
            <p className="description">A healthier and happier life through mood tracking and individual emotional awareness analysis.</p>  
            <p className="purpose">The purpose of this app is to track and reflect on your emotions.
            <br />
            <br />It will allow you to:</p>
        
            <ul className="bullet-points">
                <li>Select your current mood</li>
                <li>Select the intensity of that mood</li>
                <li>Make notes on your current mood</li>
                <li>Maintain a log of all your mood entries</li>
            </ul>
            <h3 className="actionCall">GET STARTED</h3>
            <div className="link-container">
                <Link to="/login" className="landing-link">LOGIN</Link>
                <Link to="/register" className="landing-link" >SIGNUP</Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);