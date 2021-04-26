import React from 'react';
import '../css/Uploader.css';
import PickFile from './PickFile';
import UploadComplete from './UploadComplete';
import Uploading from './Uploading';

function Uploader() {
    return (
        <div className="uploader">
            <UploadComplete />
            {/* <Uploading /> */}
            {/* <PickFile /> */}
        </div>
    )
}

export default Uploader
