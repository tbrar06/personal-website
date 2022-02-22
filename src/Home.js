import React from "react"
import './App.css';
import profile from './images/profile.png';
import graphic from './images/logo-graphic.png';

function Home(props) {
  return (
    <div className="outer" >
      <div className="intro-left">
        <h3>Welcome!</h3>
        <h1>I'm Tanveer Brar, a second year Software Engineering student at McMaster University.</h1>
        <p>I am interested in gaining experience with web development. This is my website featuring my skills and passion projects!</p>
      </div>
      <div className="intro-right">
        <img src={profile} alt="profile"/>
      </div>
      <div className="folbody-left">
        <img src={graphic} alt="logo-graphic" />
      </div>
      <div className="folbody-right">
        <p>
          I developed interest in programming after I took some courses in Java and OOP during high school. 
          I was intrigued to see how we can analyse complex, real-world problems and design abstract solutions to solve them.
          I knew that my future career path had to be along the lines of developing engineering solutions, which is why I choose to study software engineering for my undergraduate studies.
          Since last year, I have been expanding my skills in web development to React and back-end.
        </p>
        <p>
          Feel free to hover over to different parts of the website to view my projects and skills.
        </p>
        <p>
          Here're some of my social links:
        </p>
        <p>
          <a href="https://www.linkedin.com/in/brart5/">LinkedIn</a>
          <a href="https://github.com/tbrar06">Github</a>
          <a href="https://devpost.com/brart5">Devpost</a>
          <a href="mailto:brart5@mcmaster.ca">Email Me</a>
        </p>
      </div>
    </div>
  )
}
 
export default Home;