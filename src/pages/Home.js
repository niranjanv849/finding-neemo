import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { AppsOutlined } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import Search from "../Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/developer">Developer</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/contact">Contact</Link>
          <Link to="/updates">Updates</Link>
          <AppsOutlined />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
          alt="Search Daniel"
        />
        <div className="home__inputContainer">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
