import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './login-page.css'

export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="login">
            <h2 className="heading">Login</h2>
            <div className="login-container">
            <LoginForm />
            <div className="to-signup">
                <span>New to Moodsense? </span>
                <Link to="/register">Create an account</Link>
            </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);