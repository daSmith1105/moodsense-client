import React from 'react';
import './mood-recap.css';

export function MoodRecap(props) {

    return (
        <div className="mood-recap-container">
            <div className="emotion-container">
                <div className="emotion-recap">
                    <img src='https://cdn.shopify.com/s/files/1/1061/1924/files/Slightly_Smiling_Face_Emoji_Icon_42x42.png?16228697460559734940' alt="emotion icon"/>
                    <p className="emotion-label">title</p>
                </div>
            </div>
        </div>
    )
}

export default MoodRecap;