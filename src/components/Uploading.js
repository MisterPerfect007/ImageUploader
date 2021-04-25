import React from 'react';
import '../css/Uploading.css';

function Uploading() {
    return (
        <div className="uploading">
            <h1 className="uploading__title big-title">Uploading....</h1>
            <div className="uploading__bar">
                <div className="uploading__bar-moving"></div>
            </div>
        </div>
    )
}

export default Uploading;