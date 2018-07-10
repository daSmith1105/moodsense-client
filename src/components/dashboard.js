import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

import'./dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="greeting">
                    <h1>Hello {this.props.firstName}!</h1>
                    <h2>Welcome to Moodsense</h2>
                </div>
                <span className="circle-container">
                <Link to="/stepper">
                <div className="question">
                    <h2 className="question-text">How are you feeling?</h2>
                </div>
                </Link>
                </span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        firstName: `${currentUser.firstName}`,
        //protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));