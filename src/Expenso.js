import React from "react";
import "./App.css";
// import expenso from './images/expenso.png';

function Expenso() {
    return(
    <div>
        <h3>Expenso</h3>
        <div className="right">
            <p>My two teammates and I created this application for Stem Warrior Hacks to guide students
                through budget planning and help them record all transactions on it. Users can post their
                expenses and record them for future reference. Each of us were new to React and MongoDB so
                it was definitely a learning experience for each one of us. I contributed mostly to the front-end.
            </p>
            <a href="https://github.com/nivetha-kuruparan/expenso">Github</a>
            <a href="https://devpost.com/software/expenso-9biwcu">Demo</a>
        </div>
    </div>
    )
}

export default Expenso;