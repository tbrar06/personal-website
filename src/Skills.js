import React from "react";
import "./App.css";


function Skills() {
  return (
    <div className="outer">
      Here're some of my areas of experience:
    <div className="row">
      <div className="box">
        <h3>Data Structures and Algorithms</h3>
        <p>I have familiarity with common data structures, as well as sorting and searching algorithms through 
          my coursework. I hope to expand my grasp of data structures and algorithms as the term progresses.
        </p>
      </div>
      <div className="box">
        <h3>Web Development</h3>
        <p> I have experience with HTML, CSS, React, Node JS and Express JS. Some of my projects are listed in the Projects section of this website.
        </p>
        <p>
            I am constantly looking for new opportunities to expand my skills, and if you'd like to work
            on a project with me feel free to reach out to me.
        </p>
      </div>
      <div className="box">
        <h3>Databases</h3>
        <p>I have basic familiarity of databases and their usages through an extra course that I have taken. In fact,
          I recently created a multiple table datastructure using Python in Sqlite3. 
        </p>
      </div>
    </div>
      <div>
        <h3>Language familiarity:</h3>
        <p>Python, C(in Linux environment), Javascript, Java, HTML, CSS</p>
      </div>
      <div>
        <h3>Tools familiarity:</h3>
        <p>React, Node JS, Express JS, Sqlite3, GitHub</p>
      </div>
    </div>
  )
}
 
export default Skills;