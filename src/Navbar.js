import React from "react"
import './App.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="outer nav-bar">
            <div className="name-tag">
               
                 Tanveer
                 
            </div>
           
              <div className="nav-sub">
                <Link to="/" className="item">HOME</Link>
                <Link to="/skills" className="item">SKILLS</Link>
                <Link to="/projects" className="item">PROJECTS</Link> 
              </div>
         
    </div>
  )
}
 
export default Navbar;