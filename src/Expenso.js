import React from "react";
import "./App.css";
import expenso from './images/expenso.png';

function Expenso() {
    return(
    <div>
        <div className="left">
            <a href="https://github.com/nivetha-kuruparan/expenso"><img src={expenso} alt="expenso-logo"/></a>
        </div>
        <div className="right">
            <h3>Expenso</h3>
            <p>My two teammates and I created this application for Stem Warrior Hacks to guide students
                through budget planning and help them record all transactions on it. Users can post their
                expenses and record them for future reference. Each of us were new to React and MongoDB so
                it was definitely a learning experience for each one of us. I contributed mostly to the front-end.
            </p>
        </div>
    </div>
    )
}

export default Expenso;