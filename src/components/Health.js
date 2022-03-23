import React from "react";
import "./Health.css";
import Footer from "../pages/Footer";

function Health() {
  return (
    <div className="health">
      <div className="health__text">
        <a href="/search">
          <img
            className="health__img"
            src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
            alt="home"
          />
        </a>
        <p>Health!</p>
      </div>
      <div className="health__social">
        <a href="https://www.1mg.com/">
          <img
            className="health__social__img"
            src="https://1.bp.blogspot.com/-e3dX_ruT3eQ/XuJBrECw3dI/AAAAAAAAAlY/jSY-2QQHr4ER1lWYPofG6mte_c-daS_gQCLcBGAsYHQ/s1600/1mg.webp"
            alt="1mg"
          />
        </a>
        <a href="https://www.netmeds.com/">
          <img
            className="health__social__img"
            src="https://1.bp.blogspot.com/-EsnxyLGFtjc/XuJCiURlugI/AAAAAAAAAvk/QJaU9B8P_ts1kWxp61AF2B6hb4unqHJXQCLcBGAsYHQ/s1600/netmeds.webp"
            alt="netmeds"
          />
        </a>
        <a href="https://pharmeasy.in/">
          <img
            className="health__social__img"
            src="https://1.bp.blogspot.com/-EiqYzoO6Es8/XuJCbo45XvI/AAAAAAAAAuk/bXzSvsrUCJ0qSNWauctmq26dXRgkCffegCLcBGAsYHQ/s1600/medlife.webp"
            alt="pharmeasy"
          />
        </a>
        <a href="https://www.healthkart.com/">
          <img
            className="health__social__img"
            src="https://1.bp.blogspot.com/-Et_7WhCaw9Q/XuJCI4KmJFI/AAAAAAAAAq0/XYkovTmEA6IM0cInKADZUdbORv67bD4AwCLcBGAsYHQ/s1600/healthkart.webp"
            alt="healthkart"
          />
        </a>
        <a href="https://himalayawellness.in/">
          <img
            className="health__social__img"
            src="https://1.bp.blogspot.com/-FUvYI2E7s-Q/XuJCJiJU2qI/AAAAAAAAAq8/dNfmIXQsFLU1v7cPJWxUD3TICkNJURvfQCLcBGAsYHQ/s1600/himalaya.webp"
            alt="himalayawellness"
          />
        </a>
        <a href="https://www.nutrafy.com/">
          <img
            className="health__social__img"
            src="https://1.bp.blogspot.com/-TiWZ-Yr_lFo/XuJCj0wZlAI/AAAAAAAAAv4/fl0d3hm0xgYADXGZAzH7cmIE99YD_XzpgCLcBGAsYHQ/s1600/nutrafy.webp"
            alt="nutrafy"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Health;
