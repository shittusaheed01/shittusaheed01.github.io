import React from "react";
import "./Work.css";
import TwitterClone from "./images/Socials.jpg";
import Blog from "./images/blog.jpg";
import Markdown from "./images/markdown.jpg";
import Weather from "./images/Weather.jpg";
import Restaurant from './images/Restaurant.jpg'
import ColorGen from "./images/Color.jpg";
import Calculator from "./images/calculator.jpg";
import Quotes from "./images/quotes.jpg";
import Todo from "./images/todo.jpg";


// loading-name css is in the about css
const Work = () => {
  return (
    <div className="projects" name="work">
      <div className="work-container">
        <div className="work-heading">
          <h2 className=" work loading-name">
            <span style={{ "--i": 1 }}>W</span>
            <span style={{ "--i": 2 }}>o</span>
            <span style={{ "--i": 3 }}>r</span>
            <span style={{ "--i": 4 }}>k</span>
          </h2>
          <p>Check out some of my recent work:</p>
        </div>

        <div className="gallery">
          <div className="work-card -stretch">
            <div className="work-img ">
              <img src={Restaurant} alt="Restaurant" />
            </div>
            <div className="work-overlay">
              <p>Restaurant Website with Vanilla JS</p>
              <a href="https://restaurant-sigma.vercel.app/">
                <button>Demo</button>
              </a>
              <a href="https://github.com/shittusaheed01/Restaurant" >
                <button>Code</button>
              </a>
            </div>
          </div>
          <div className="work-card v-stretch">
            <div className="work-img">
              <img src={TwitterClone} alt="Twitter Clone" />
            </div>
            <div className="work-overlay">
              <p>A Twitter Clone using React JS</p>
              <a href="http://twitter-clone-git-main.shittusaheed01.vercel.app/">
                <button>Demo</button>
              </a>
              <a href="https://github.com/shittusaheed01/Twitter-Clone">
                <button>Code</button>
              </a>
            </div>
          </div>
          <div className="work-card h-stretch">
            <div className="work-img">
              <img src={Weather} alt="Weather" />
            </div>
            <div className="work-overlay">
              <p>Weather App using React.js and an external API</p>
              <a href="http://weather-app-git-main.shittusaheed01.vercel.app/">
                <button>Demo</button>
              </a>
              <a href="https://github.com/shittusaheed01/Weather-App">
                <button>Code</button>
              </a>
            </div>
          </div>
          <div className="work-card full-stretch">
            <div className="work-img">
              <img src={Blog} alt="Book" />
            </div>
            <div className="work-overlay">
              <p>Blog API using Node/Express.js and MongoDB</p>
              <a href="https://ill-erin-sea-urchin-hem.cyclic.app/">
                <button>Demo</button>
              </a>
              <a href="https://github.com/shittusaheed01/AltSchool_blog">
                <button>Code</button>
              </a>
            </div>
          </div>
          <div className="work-card">
            <div className="work-img">
              <img src={ColorGen} alt="Color Palettes" />
            </div>
            <div className="work-overlay">
              <p>Text and Color Generator for Hashnode hackathon</p>
              <a href="https://text-color-generator.vercel.app/text-color-generator.vercel.app">
                <button>Demo</button>
              </a>
              <a href="https://github.com/shittusaheed01/Text-Color-Generator">
                <button>Code</button>
              </a>
            </div>
          </div>
          <div className="work-card -stretch">
            <div className="work-img">
              <img src={Markdown} alt="Code" />
            </div>
            <div className="work-overlay">
              <p>Markdown Previewer using React.js</p>
              <a href="http://react-markdown-previewer-git-main-shittusaheed01.vercel.app/">
                <button>Demo</button>
              </a>
              <a href="https://github.com/shittusaheed01/React-Markdown-Previewer">
                <button>Code</button>
              </a>
            </div>
          </div>
          <div className="work-card v-stretch">
            <div className="work-img">
              <img src={Calculator} alt="Calculator" />
            </div>
            <div className="work-overlay">
              <p>Calculator built using React.js</p>
              <a href="https://calculator-psi-five.vercel.app/">
                <button>Demo</button>
              </a>
              <a href="https://github.com/shittusaheed01/React-Calculator">
                <button>Code</button>
              </a>
            </div>
          </div>
          <div className="work-card stretch">
            <div className="work-img">
              <img src={Quotes} alt="Idea Bulb" />
            </div>
            <div className="work-overlay">
              <p>Random quote generator using React</p>
              <a href="https://github.com/shittusaheed01/React-Version-Of-the-Random-Quotes-Generator">
                <button>Demo</button>
              </a>
              <a href="http://react-version-of-the-random-quotes-generator-git-main.shittusaheed01.vercel.app/">
                <button>Code</button>
              </a>
            </div>
          </div>
          <div className="work-card h-stretch">
            <div className="work-img">
              <img src={Todo} alt="List" />
            </div>
            <div className="work-overlay">
              <p>A Todo Ap using React.js</p>
              <a href="http://react-todo-app.shittusaheed01.vercel.app/">
                <button>Demo</button>
              </a>
              <a href="https://github.com/shittusaheed01/React-TodoApp">
                <button>Code</button>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Work;
