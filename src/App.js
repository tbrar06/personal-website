import './App.css';

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Home from './Home.js';
import Commento from './Commento.js';
import Expenso from './Expenso.js';
import Empl from './Empl.js';
import Navbar from './Navbar.js';

function App() {
  return (
        <div className="outer">
           <Navbar/>
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/projects" element={<Projects/>}/>
            <Route exact path="/skills" element={<Skills/>}/>
            <Route exact path="/projects/commento" element={<Commento/>}/>
            <Route exact path="/projects/expenso" element={<Expenso/>}/>
            <Route exact path="/projects/employee_API" element={<Empl/>}/>
            </Routes>
        </div>
  );
}

export default App;
