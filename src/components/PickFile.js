import React, { useEffect, useRef, useState } from 'react';
import dragAreaImage from '../image/image.svg';
import '../css/PickFile.css';


function PickFile() {
    const [fileURL, setFileURL] = useState(false);
    //Input ref
    const chooseFileRef = useRef(null);

    function onDragOver (e) {
        e.preventDefault()
        console.log("dragOver");
    }
    function onDragLeave () {
        console.log("drag leave");
    }

    //'choose e file' button is clicked
    function onFileChooseClick(){
        chooseFileRef.current.click();
    }
    //input changes
    function onFileInputChange(e) {
        console.log("file changed");
    }

    function onDrop(e) {
        e.preventDefault();
        let file = e.dataTransfer.files[0];
        console.log(file);
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let url = fileReader.result;
            console.log(url);
            setFileURL(url)
    
        }
        try {
            fileReader.readAsDataURL(file);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        console.log(fileURL);

    }, [fileURL])
    return (
        <div className="pickFile">
            <h3 className="pickFile__title big-title">Upload your image</h3>
            <h5 className="pickFile__info">File should be Jpeg, Jpg or Png</h5>
            <div 
                onDragOver={(e) => onDragOver(e)}
                onDragLeave={onDragLeave}
                onDrop={(e) => onDrop(e)}
                className={fileURL? "pickFile__dragArea pickFile__dragArea--active" : "pickFile__dragArea"}
            >
                {
                    fileURL? <img className="pickFile__droppedFile" src={fileURL} alt="" /> : 
                    <>
                        <img src={dragAreaImage} alt="" />
                        <div className="pickFile__dragArea-text">Drag and Drop your image here</div>
                    </>
                }
            </div>
            <span className="pickFile__or">Or</span>
            <br/>
            <button 
                className="pickFile__btn"
                onClick={onFileChooseClick}
            >Choose a file</button>
            <input 
                ref={chooseFileRef}
                type="file" accept='image/*' 
                onChange={(e) => onFileInputChange(e)}
                hidden
            />
        </div>
    )
}

export default PickFile;