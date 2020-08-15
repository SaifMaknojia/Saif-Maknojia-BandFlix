import React from 'react';
import "./Upload.scss";
import uploadImage from "../../assets/Images/Upload-video-preview.jpg"

// import { Link } from 'react-router-dom';

function Upload() {

    return (
        <section className="upload">
            <div className="upload__section1">
                <h2 className="upload__section1--heading">Upload Video</h2>
            </div>
            <div className="upload__container">
                <div className="upload__section2">
                    <h4 className="upload__section2--heading">Video Thumbnail</h4>
                    <img className="upload__section2--image" src={uploadImage} alt="upload Thumbnail"></img>
                </div>
                <div class="upload__container2">
                <div className="upload__section3">
                    <h4 className="upload__section3--heading">title your video</h4>
                    <input className="upload__section3--input" type="text" placeholder="Add a title to your video"></input>
                </div>
                <div className="upload__section4">
                    <h4 className="upload__section4--heading">ADD A VIDEO DESCRIPTION</h4>
                    <textarea className="upload__section4--textarea" type="text" placeholder="Add a title to your video"></textarea>
                </div>
                </div>
            </div>
            <div className="upload__section5">
                <input className="upload__section5--input" type="submit" value="PUBLISH"></input>
                <h4 className="upload__section5--heading">Cancel</h4>
            </div>

        </section>
    )

}


export default Upload;

