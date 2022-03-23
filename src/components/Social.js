import React from "react";
import "./Social.css";
import Footer from "../pages/Footer";

function Social() {
  return (
    <div className="soc">
      <div className="soc__text">
        <a href="/search">
          <img
            className="soc__img"
            src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
            alt="home"
          />
        </a>
        <p>Socials!</p>
      </div>
      <div className="soc__social">
        <a href="https://www.amazon.in/">
          <img
            className="soc__social__img"
            src="https://1.bp.blogspot.com/-B4yDxszH3uY/XuJBvlUW6wI/AAAAAAAAAmQ/gafl2YgnOR08He6pUaB2ZUbW2W68mkqMACLcBGAsYHQ/s1600/amazon.webp"
            alt="amazon"
          />
        </a>
        <a href="https://www.flipkart.com/">
          <img
            className="soc__social__img"
            src="https://1.bp.blogspot.com/-PGyDtCBzPfU/XuJCBDstAWI/AAAAAAAAApY/VoGF6k1h-2MaU4iQ4T_659ZzukeyMpVlACLcBGAsYHQ/s1600/flipkart.webp"
            alt="flipkart"
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            className="soc__social__img"
            src="https://1.bp.blogspot.com/-HGH5VHALRUI/XuJCUa6wn0I/AAAAAAAAAtE/aoxGIwCLpWU4JJrqOzhmQvlpmDbQjqM0ACLcBGAsYHQ/s1600/instagram.webp"
            alt="instagram"
          />
        </a>
        <a href="https://www.facebook.com/">
          <img
            className="soc__social__img"
            src="https://1.bp.blogspot.com/-ZrAFe914jkk/XuJB-k9rYSI/AAAAAAAAApM/a07nLJXNcLQMqSt2U5TAvb5UpCjxmweiACLcBGAsYHQ/s1600/facebook.webp"
            alt="facebook"
          />
        </a>
        <a href="https://www.atmegame.com/?utm_source=Tech-ADR&utm_medium=Tech-ADR">
          <img
            className="soc__social__img"
            src="https://1.bp.blogspot.com/-6Ft4oCQwJtc/X9i2SE7i0NI/AAAAAAAABuE/o8BnQE5Fr40Tj3ap-7ZD6L9VurH-wlu8gCLcBGAsYHQ/s512/joysick_1.webp"
            alt="play games"
          />
        </a>
        <a href="https://www.cricbuzz.com/">
          <img
            className="soc__social__img"
            src="https://1.bp.blogspot.com/-nLz9CHn8mUw/XuJB3EheJdI/AAAAAAAAAns/HVuvJedzAocsMQp93f9FQkUI5H4EHgvsgCLcBGAsYHQ/s1600/cricbuzz.webp"
            alt="cricbuzz"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Social;
