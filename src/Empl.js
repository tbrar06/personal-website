import React from "react";
import "./App.css";
// import employee from './images/employee.png';

function Empl() {
    return(
    <div>
        {/* <div className="left">
            <a href="https://github.com/tbrar06/rest_api"><img src={employee} alt="api-logo"/></a>
        </div> */}
        <div className="right">
            <h3>Employee REST API</h3>
            <p>This was my first attempt at working with databases and creating a REST API. The Sqlite3 database 
                is written in Python and contains tables for information about employees, along with their 
                departments and salaries. The REST API is written in Express JS but I still need to make some
                improvements to get the server working.
            </p>
            <a href="https://github.com/tbrar06/rest_api">Github</a>
        </div>
    </div>
    )
}

export default Empl;