import React from 'react';
import './footerBar.css';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class FooterBar extends React.Component {

    moodLog() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let moodLogButton;
        if (this.props.loggedIn) {
            moodLogButton = (
                <button onClick={() => this.logOut()}>My Mood Log</button>
            );
        }

        return (
            <div className="footer-bar">
                <div className="moodLog-btn">
                {moodLogButton}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(FooterBar);