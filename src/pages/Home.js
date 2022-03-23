import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Search from "../Search";
import Footer from "./Footer";
// import styled from "styled-components";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link className="texti" to="/about">
            About
          </Link>
          <Link className="texti" to="/developer">
            Developer
          </Link>
        </div>
        <div className="home__headerRight">
          <Link className="texti" to="/contact">
            Contact
          </Link>
          {/* <AppsOutlined /> */}
          <Avatar
            src="https://i.pinimg.com/originals/6c/67/8c/6c678c23d360432d5dad8c4aae4d48ca.gif"
            alt="Browse anonymously"
          />
        </div>
      </div>

      <div className="home__body">
        <img
          className="neemo"
          src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
          alt="Find neemo"
        />
        <div className="home__inputContainer">
          <Search hideButtons />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// const Footerr = styled.div``;

export default Home;
