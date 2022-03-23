import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <a href="/">
        <img
          className="abt__img"
          src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
          alt="Go to Home"
        />
      </a>
      <div className="aboutapp">
        <h2>About the App</h2>
        <h3>
          Search engine web app built in Reactjs which uses google custom search
          api to retrieve/display search results on the web page programmed
          using my custom react hook. used react router for display results
          instantly and firebase for hosting, designed by{" "}
          <a href="/developer">Niranjan</a> for end-semester college project. If
          you need to report an issue or suggest any other improvements feel
          free to reach me out. you can reach me at my{" "}
          <a href="/developer">Developer page</a>
        </h3>
      </div>
    </div>
  );
}

export default About;
