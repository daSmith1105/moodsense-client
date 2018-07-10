import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './header-bar.css';

export class HeaderBar extends React.Component {

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }

        return (
            <div className="header-bar">
                <h1 className="header-title">Moodsense</h1>
                <div className="home-btn">
                    <Link to='/'>Home</Link>
                </div>
                <div className="logout-btn">
                {logOutButton}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(HeaderBar);