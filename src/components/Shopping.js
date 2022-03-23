import React from "react";
import "./Shopping.css";
import Footer from "../pages/Footer";

function Shopping() {
  return (
    <div className="shop">
      <div className="shop__text">
        <a href="/search">
          <img
            className="shop__img"
            src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
            alt="home"
          />
        </a>
        <p>Shopping!</p>
      </div>
      <div className="shop__social">
        <a href="https://www.amazon.in/">
          <img
            className="shop__social__img"
            src="https://1.bp.blogspot.com/-B4yDxszH3uY/XuJBvlUW6wI/AAAAAAAAAmQ/gafl2YgnOR08He6pUaB2ZUbW2W68mkqMACLcBGAsYHQ/s1600/amazon.webp"
            alt="amazon"
          />
        </a>
        <a href="https://www.flipkart.com/">
          <img
            className="shop__social__img"
            src="https://1.bp.blogspot.com/-PGyDtCBzPfU/XuJCBDstAWI/AAAAAAAAApY/VoGF6k1h-2MaU4iQ4T_659ZzukeyMpVlACLcBGAsYHQ/s1600/flipkart.webp"
            alt="flipkart"
          />
        </a>
        <a href="https://www.snapdeal.com/">
          <img
            className="shop__social__img"
            src="https://1.bp.blogspot.com/-8ozAsbNVIrY/XuJCxjcCyOI/AAAAAAAAAyU/bOn49CugNxYwFMzYxh5CusxizAOwRRyswCLcBGAsYHQ/s1600/snapdeal.webp"
            alt="snap deal"
          />
        </a>
        <a href="https://best.aliexpress.com/">
          <img
            className="shop__social__img"
            src="https://1.bp.blogspot.com/-gimlOAlKd08/XuJBvW0d0rI/AAAAAAAAAmM/0AuSBdssIbg7vnqClCwFpfkk75JSl8jPQCLcBGAsYHQ/s1600/aliexpress.webp"
            alt="aliexpress"
          />
        </a>
        <a href="https://www.croma.com/">
          <img
            className="shop__social__img"
            src="https://1.bp.blogspot.com/-oTn93rxHgyU/XuJB3VZYzCI/AAAAAAAAAnw/skW0HqF6WDIHqMKogLC8wj5amxmpWMDXACLcBGAsYHQ/s1600/croma.webp"
            alt="croma"
          />
        </a>
        <a href="https://www.myntra.com/">
          <img
            className="shop__social__img"
            src="https://1.bp.blogspot.com/-SSSysec90B0/XuJCg72tNBI/AAAAAAAAAvM/2se3ZXOpwOsPk9hz54FH1UbjPAeSBeYeQCLcBGAsYHQ/s1600/myntra.webp"
            alt="myntra"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Shopping;
