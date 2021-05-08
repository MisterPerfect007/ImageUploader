import React from 'react';
import '../css/UploadComplete.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import devImage from '../image/dev.png';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function UploadComplete({ fileDownloadURL }) {


    function onCopyLink() {
        navigator.clipboard.writeText(fileDownloadURL);
        NotificationManager.success('Link Copied !', '', 2000)
    }

    return (
        <div className="uploadComplete">
            <div className="uploadComplete__icon">
                <CheckCircleIcon style={{ fontSize: 40 }}/>
            </div>
            <h1 className="uploadComplete__title big-title">Uploaded Successfully!</h1>
            <img className="uploadComplete__image" src={ fileDownloadURL || devImage} alt="" />
            <div className="uploadComplete__link">
                <input className="uploadComplete__link-input" type="text" value={fileDownloadURL} disabled/>
                <div 
                    className="uploadComplete__link-btn"
                    onClick={onCopyLink}
                >Copy Link</div>
            </div>
            <NotificationContainer/>
        </div>
    )
}

export default UploadComplete;