import React from "react";
import "./App.css";
import commento from './images/commento_logo.png';

function Empl() {
    return(
    <div>
        <div className="left">
            <a href="https://github.com/OmarBakr-03/DeltaHacks"><img src={commento} alt="commento-logo"/></a>
        </div>
        <div className="right">
            <h3>Employee REST API</h3>
            <p>This project was created in a group of four as a submission for DeltaHacks. We created a Google Chrome extension 
                that detects if it is on a YouTube video and gathers the comments of the video to generate the net reaction to the video.
                For this we used Vanilla Javascript for the backend and a YouTube API to extract the comments. While we can view the top 10 comments
                of the video, we are still working on including an open source Artifical Intelligence library(written in NodeJS) to judge the net reaction from 
                the video based on the frequency of positive and negative words. 
            </p>
        </div>
    </div>
    )
}

export default Empl;