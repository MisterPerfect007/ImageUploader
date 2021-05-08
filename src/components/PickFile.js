import React, { useRef, useState } from 'react';
import dragAreaImage from '../image/image.svg';
import '../css/PickFile.css';


function PickFile() {

    const [fileURL, setFileURL] = useState(false);
    //Input ref
    const chooseFileRef = useRef(null);

    //When a file is dragged over the box
    function onDragOver (e) {
        e.preventDefault()
    }
    //input changes
    function onFileInputChange() {
        let file = chooseFileRef.current.files[0]
        readFile(file);
    }

    function onDrop(e) {
        e.preventDefault();
        let file = e.dataTransfer.files[0];
        if(file) readFile(file);
    }

    //Delete the file url
    function onDelete() {
        setFileURL(false)
        console.log("delete file");
    }
    
    //To read the selected
    const readFile = (file) => {
        const expectedImageType = ["image/png", "image/jpeg", "image/jpg"];
        if(!expectedImageType.includes(file.type)) {
            alert("File type not supported.\n\nIf it's an image you can change the file extension to PNG, JPEG or JPG and retry.");
            return;
        }
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let url = fileReader.result;
            setFileURL(url);
        }
        try {
            fileReader.readAsDataURL(file);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="pickFile">
            <h3 className="pickFile__title big-title">Upload your image</h3>
            <h5 className="pickFile__info">File should be Jpeg, Jpg or Png</h5>
            <div 
                onDragOver={(e) => onDragOver(e)}
                // onDragLeave={onDragLeave}
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
            {
                fileURL? 
                <>
                    <button
                        className="pickFile__btn upload-btn"
                    > Upload !</button>
                    <button 
                        className="pickFile__btn-delete"
                        onClick={onDelete}
                    >Delete file</button>
                </>
                :
                <>
                    <span className="pickFile__or">Or</span>
                    <br/>
                    <button 
                        className="pickFile__btn"
                        onClick={() => chooseFileRef.current.click()}
                    >Choose a file</button>
                    <input 
                        ref={chooseFileRef}
                        type="file" accept='image/*' 
                        onChange={(e) => onFileInputChange(e)}
                        hidden
                    />
                </>
            }
        </div>
    )
}

export default PickFile;