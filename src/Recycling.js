import React from "react";
import "./App.css";
import recycle from './images/recycling.png';

function Empl() {
    return(
    <div>
        <div className="left">
            <a href="https://brartanveerk.wixsite.com/brart5/final-deliverables-2"><img src={recycle} alt="recycle-logo"/></a>
        </div>
        <div className="right">
            <h3>Recycling Project</h3>
            <p>This project was created in a group of four as a part of our first year engineering coursework. We worked 
                together to design a bot in Autodesk Inventor to sort garbage in a simulated environment on Raspberry PI and development a Python
                application to identify different types of garbage using sensors and deliver them to their respective bins
                for recycling. We were successfully able to identify metals, plastics and paper, and
                ensure that the bot follows the correct trajectory when moving to the recycling station.
                I contributed to the software component of the code. The code is available at the end of the document linked to the 
                project logo.
            </p>
        </div>
    </div>
    )
}

export default Empl;