import React from "react";
import "./Contact.css";
import Footer from "./Footer";
function Contact() {
  return (
    <div className="contact">
      <div className="contact__text">
        <a href="/">
          <img
            className="abt__img1"
            src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
            alt="Profile"
          />
        </a>
        <p>Connect with me!</p>
      </div>
      <div className="sociall">
        <a href="mailto:niranjan.ct19@bitsathy.ac.in">
          <img
            className="social__imagee"
            src="https://i.ibb.co/n6L9916/5968534.png"
            alt="mail via gmail"
          />
        </a>
        <a href="https://niranjan-v.web.app/">
          <img
            className="social__imagee"
            src="https://i.ibb.co/SVXKjhM/841364.png"
            alt="view portfolio"
          />
        </a>
        <a href="https://www.linkedin.com/in/niranjanv849/">
          <img
            className="social__imagee"
            src="https://i.ibb.co/1RzbXMr/2504923.png"
            alt="view linkedin profile"
          />
        </a>
        <a href="https://github.com/niranjanv849/">
          <img
            className="social__imagee"
            src="https://i.ibb.co/YWnfbD6/2504911.png"
            alt="view github profile"
          />
        </a>
        <a href="https://twitter.com/niranjanv849">
          <img
            className="social__imagee"
            src="https://i.ibb.co/HDxLx6f/2504947.png"
            alt="view twitter profile"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
