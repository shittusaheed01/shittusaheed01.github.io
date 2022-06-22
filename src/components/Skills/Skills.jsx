import React from "react";
import "./Skills.css";

import HTML from "./images/html.png";
import CSS from "./images/css.png";
import Github from "./images/github.png";
import Javascript from "./images/javascript.png";
import ReactImg from "./images/react.png";

const Skills = () => {
  return (
    <div name="skills" className="skills">
      <div className="skills-containter">
        <div className="skills-dets">
          <h2>Skills</h2>
          <p>These are some of the technologies I've worked with:</p>
        </div>
        <div className="skills-grid">
          <div className="skills-img-div">
            <img src={Javascript} alt="Javascript Icon" />
            <p>Javascript</p>
          </div>
          <div className="skills-img-div" >
            <img src={ReactImg} alt="React Icon" />
            <p>React</p>
          </div>
          <div className="skills-img-div">
            <img src={HTML} alt="HTML Icon" />
            <p>HTML</p>
          </div>
          <div className="skills-img-div" >
            <img src={CSS} alt="CSS Icon" />
            <p>CSS</p>
          </div>
          <div className="skills-img-div" >
            <img src={Github} alt="Github Icon" />
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
