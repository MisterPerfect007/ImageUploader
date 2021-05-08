import React, { useState } from 'react';
import '../css/Uploader.css';
import PickFile from './PickFile';
import UploadComplete from './UploadComplete';
import Uploading from './Uploading';

function Uploader() {
    const [uploaderStep, setUploaderStep] = useState('pickfile');
    const [fileDownloadURL, setFileDownloadURL] = useState('');
    return (
        <div className="uploader">
            {
                uploaderStep === 'pickfile' ? 
                <PickFile 
                    setUploaderStep={setUploaderStep}
                    setFileDownloadURL={setFileDownloadURL}
                />
                : uploaderStep === 'uploading' ? <Uploading />
                : uploaderStep === 'complete' ? <UploadComplete fileDownloadURL={fileDownloadURL}/>
                : 'Something goes wrong'
                
            }
        </div>
    )
}

export default Uploader
