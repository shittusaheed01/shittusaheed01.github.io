import React from "react";
import "./Work.css";
import TwitterImg from "./images/TwitterImg.png";
import Item7 from "./images/RestaurantImg.png";
import TextColor from "./images/TextColorGen.png";

const Work = () => {
 return (
    <div className="projects" name="work">
        <div className="work-container">
            <div className="work-heading">
                <h2>Work</h2>
                <p>Check out some of my recent work:</p>
            </div>

            <div className="work-grid">
                <div className="work-card">
                    <div className="work-img">
                        <img src={Item7} alt="Restaurant Preview" />
                    </div>
                    <div className="work-overlay">
                        <p>Restaurant Website with Vanilla JS</p>
                        <a href="/">
                        <button>Demo</button>
                        </a>
                        <a href="/">
                        <button>Code</button>
                        </a>
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-img">
                        <img src={TwitterImg} alt="Restaurant Preview" />
                    </div>
                    <div className="work-overlay">
                        <p>Restaurant Website with Vanilla JS</p>
                        <a href="/">
                        <button>Demo</button>
                        </a>
                        <a href="/">
                        <button>Code</button>
                        </a>
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-img">
                        <img src={TextColor} alt="Restaurant Preview" />
                    </div>
                    <div className="work-overlay">
                        <p>Restaurant Website with Vanilla JS</p>
                        <a href="/">
                        <button>Demo</button>
                        </a>
                        <a href="/">
                        <button>Code</button>
                        </a>
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-img">
                        <img src={Item7} alt="Restaurant Preview" />
                    </div>
                    <div className="work-overlay">
                        <p>Restaurant Website with Vanilla JS</p>
                        <a href="/">
                        <button>Demo</button>
                        </a>
                        <a href="/">
                        <button>Code</button>
                        </a>
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-img">
                        <img src={Item7} alt="Restaurant Preview" />
                    </div>
                    <div className="work-overlay">
                        <p>Restaurant Website with Vanilla JS</p>
                        <a href="/">
                        <button>Demo</button>
                        </a>
                        <a href="/">
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
