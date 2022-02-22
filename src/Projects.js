import React from "react";
import "./App.css";
// import Commento from "./Commento.js";
import Expenso from './Expenso.js';
import Empl from './Empl.js';
import Commento from './Commento.js';
import Recycling from './Recycling.js';

function Projects() {
  return (
    <div className="outer">
        <h1>Project Porfolio</h1>
        <h3 className="checkout">Feel free to click on the project logos to be redirected to the respective projects.</h3>

        <Expenso/>
        <Empl/>
        <Commento/>
        <Recycling/>
        
    </div>
  )
}
 
export default Projects;