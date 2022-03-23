import React from "react";
import "./Food.css";
import Footer from "../pages/Footer";

function Food() {
  return (
    <div className="food">
      <div className="food__text">
        <a href="/search">
          <img
            className="food__img"
            src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
            alt="home"
          />
        </a>
        <p>Foods!</p>
      </div>
      <div className="food__social">
        <a href="https://pizzaonline.dominos.co.in/">
          <img
            className="food__social__img"
            src="https://1.bp.blogspot.com/-ZICK7wKHFAM/XuJB6f1SqTI/AAAAAAAAAoQ/5TlYe4oiZls1axTboajS9lAamdZYfPWPACLcBGAsYHQ/s1600/dominos.webp"
            alt="dominos"
          />
        </a>
        <a href="https://www.swiggy.com/">
          <img
            className="food__social__img"
            src="https://1.bp.blogspot.com/-mCe26-BOKp8/XuJC0ToU43I/AAAAAAAAAy4/yFpF4RhGamgJwX3TOWB3qT1bK_tYRH7JQCLcBGAsYHQ/s1600/swiggy.webp"
            alt="swiggy"
          />
        </a>
        <a href="https://www.zomato.com/">
          <img
            className="food__social__img"
            src="https://1.bp.blogspot.com/-zAEsDfBQiew/XuJDFERfHoI/AAAAAAAAA1g/TSKsCl4AvWgnPa-ZzSicwec8vIW44RoCQCLcBGAsYHQ/s1600/zomato.webp"
            alt="zomato"
          />
        </a>
        <a href="https://online.kfc.co.in/">
          <img
            className="food__social__img"
            src="https://1.bp.blogspot.com/-vpV-81yN_bY/XuJCXSHkeHI/AAAAAAAAAtk/UtqmH_0_IEAgOGVi_LP8BW-zTFBm56TqQCLcBGAsYHQ/s1600/kfc.webp"
            alt="kfc"
          />
        </a>
        <a href="https://www.pizzahut.co.in/">
          <img
            className="food__social__img"
            src="https://1.bp.blogspot.com/-_Da3_36X2-I/XuJCqLLIoBI/AAAAAAAAAw4/Pz38833e7h0z3kK1CIZJZswiNBLAiMu1ACLcBGAsYHQ/s1600/pizzahut.webp"
            alt="pizzahut"
          />
        </a>
        <a href="https://bigbasket.go2cloud.org/">
          <img
            className="food__social__img"
            src="https://1.bp.blogspot.com/-6wwNXxOrV_s/XuJBxzmMiJI/AAAAAAAAAmo/kfg1fuA_D6MQKr07T3FFhrgP2DWR7PzbACLcBGAsYHQ/s1600/bigbasket.webp"
            alt="bigbasket"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Food;
