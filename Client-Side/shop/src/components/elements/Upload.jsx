import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    var base64String = "";
    function Uploaded() {
        var file = document.querySelector(
            'input[type=file]')['files'][0];
        var reader = new FileReader();
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
        }
        reader.readAsDataURL(file);
    }
    function decode() {
        console.log("Base64String about to be printed");
        console.log(base64String);
        var image = new Image();
        image.src = 'data:image/png;base64,'+base64String;
        document.body.appendChild(image);
    }
    return (
        <div >
            <h3>Upload </h3>
            <div>
                <div>
                    <label>Select Image :</label>
                    <input type="file" name="upload_file" onChange={Uploaded} />
                </div>
                <div>
                    <button type="submit" className="btn" onClick={decode}> Save </button>
                </div>
            </div>
        </div>
    );
}

export default Upload;