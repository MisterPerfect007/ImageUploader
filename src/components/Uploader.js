import React from 'react';
import '../css/Uploader.css';
import PickFile from './PickFile';
import Uploading from './Uploading';

function Uploader() {
    return (
        <div className="uploader">
            <Uploading />
            {/* <PickFile /> */}
        </div>
    )
}

export default Uploader
