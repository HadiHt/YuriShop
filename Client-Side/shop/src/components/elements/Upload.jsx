import React, { useContext, useState } from 'react';
import './Upload.css'
import axios from 'axios';
import { imageContext } from '../../contexts/imageContext';

const Upload = () => {
    const { image, setImage } = useContext(imageContext);
    var base64String = "";
    function Uploaded() {
        var file = document.querySelector(
            'input[type=file]')['files'][0];
        var reader = new FileReader();
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
          //  console.log(typeof reader.result);
          //  console.log("Base64String about to be printed");
          //  console.log(base64String);
            setImage(base64String);
            var img = document.getElementById('productImage');
            img.src = 'data:image/png;base64,' + base64String;
        }
        reader.readAsDataURL(file);
    }
    return (
        <div className='uploadContainer'>
            <img className='productImage' id='productImage' src='https://cdn.iconscout.com/icon/free/png-256/photo-size-select-actual-1782180-1512958.png' alt=''></img>
            <h3>Upload your product image:</h3>
            <div>
                <div>
                    <p>Select Image :</p>
                    <input className='custom-file-input' type="file" name="upload_file" onChange={Uploaded} />
                </div>
            </div>
        </div>
    );
}

export default Upload;