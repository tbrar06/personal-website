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
        <Expenso/>
        <Empl/>
        <Commento/>
        <Recycling/>
        
    </div>
  )
}
 
export default Projects;