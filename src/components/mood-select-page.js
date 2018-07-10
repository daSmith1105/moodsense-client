import React from 'react';
import {reduxForm} from 'redux-form';
import './mood-select-page.css';
import MoodSelect from './mood-select';

export class MoodSelectPage extends React.Component { 
    onSubmit(values) {
        console.log(values)
    }
    render() {
    return (
        <div className="mood-select-container">
                <h1>Select your Mood</h1>
                <div className="mood-container">
                    <MoodSelect />
                    </div>
        </div>
    )
}
}

export default MoodSelectPage;