import React from 'react';
import '../css/UploadComplete.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import devImage from '../image/dev.png';

function UploadComplete() {
    return (
        <div className="uploadComplete">
            <div className="uploadComplete__icon">
                <CheckCircleIcon style={{ fontSize: 40 }}/>
            </div>
            <h1 className="uploadComplete__title big-title">Uploaded Successfully!</h1>
            <img className="uploadComplete__image" src={devImage} alt="" />
            <div className="uploadComplete__link">
                <input className="uploadComplete__link-input" type="text" value="some valuesome valuesome valuesome valuesome valuesome value" disabled/>
                <div className="uploadComplete__link-btn">Copy Link</div>
            </div>
        </div>
    )
}

export default UploadComplete;