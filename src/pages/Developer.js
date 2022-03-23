import React from "react";
import "./Developer.css";
function Developer() {
  return (
    <div className="whole">
      <div>
        <a href="/">
          <img
            className="abt__img1"
            src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
            alt="Profile"
          />
        </a>
        <div className="aboutdev">
          <img
            className="dev__img"
            src="https://i.ibb.co/KFyjPxd/Picture1.png"
            alt="Developer loading"
          />
          <h2>Niranjan</h2>
          <h3>
            Hi there! I am a frontend developer and UX designer, interested in
            building helpful and meaningful products. The majority of my work is
            self-initiated. It is focused on learning skills, that should be
            helpful for others to get benefitted from and also to support my
            career too. I always wanted to help and change people's life better
            and optimized by my skills. I'd read books for motivation
          </h3>
          <div className="social">
            <a href="mailto:niranjan.ct19@bitsathy.ac.in">
              <img
                className="social__image"
                src="https://i.ibb.co/n6L9916/5968534.png"
                alt="mail via gmail"
              />
            </a>
            <a href="https://niranjan-v.web.app/">
              <img
                className="social__image"
                src="https://i.ibb.co/SVXKjhM/841364.png"
                alt="view portfolio"
              />
            </a>
            <a href="https://www.linkedin.com/in/niranjanv849/">
              <img
                className="social__image"
                src="https://i.ibb.co/1RzbXMr/2504923.png"
                alt="view linkedin profile"
              />
            </a>
            <a href="https://github.com/niranjanv849/">
              <img
                className="social__image"
                src="https://i.ibb.co/YWnfbD6/2504911.png"
                alt="view github profile"
              />
            </a>
            <a href="https://twitter.com/niranjanv849">
              <img
                className="social__image"
                src="https://i.ibb.co/HDxLx6f/2504947.png"
                alt="view twitter profile"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
