import React from 'react';
import dragAreaImage from '../image/image.svg';
import '../css/PickFile.css';
function PickFile() {
    return (
        <div className="pickFile">
            <h3 className="pickFile__title big-title">Upload your image</h3>
            <h5 className="pickFile__info">File should be Jpeg, Jpg or Png</h5>
            <div className="pickFile__dragArea">
                <img src={dragAreaImage} alt="" />
                <div className="pickFile__dragArea-text">Drag and Drop your image here</div>
            </div>
            <span className="pickFile__or">Or</span>
            <br/>
            <button className="pickFile__btn">Choose a file</button>
        </div>
    )
}

export default PickFile;