import React from 'react';
import {connect} from 'react-redux';

export function LogPage(props) {

    let list = this.props.logs.map(index, entry, () => {
        <div className="log-entry" key={entry.id}>
            <div className="mood">
                <img src="this.props.moodUrl" alt="mood"/>
                <p className="mood-label">
                    {this.props.moodLabel}
                </p>
                <p className="notes">
                    {this.props.moodNotes}
                </p>
            </div>
        </div>
    });

    return (
        <div className="mood-list">
            {list}
        </div>
    )
}

const mapStateToProps = state => ({
    logs: state.auth.userLog
});

export default requiresLogin()(connect(mapStateToProps)(LogPage));