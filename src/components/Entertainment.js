import React from "react";
import "./Entertainment.css";
import Footer from "../pages/Footer";

function Entertainment() {
  return (
    <div className="ent">
      <div className="ent__text">
        <a href="/search">
          <img
            className="ent__img"
            src="https://i.ibb.co/ZxrbB5q/finding-neemo-logo.png"
            alt="Profile"
          />
        </a>
        <p>Entertainments!</p>
      </div>
      <div className="ent__social">
        <a href="https://www.youtube.com/">
          <img
            className="ent__social__img"
            src="https://1.bp.blogspot.com/-xVhZ9sLABAM/XuJDCfVjwcI/AAAAAAAAA1M/J9alhc3s-_EvLb8TnNDmZu0mW84SMne1wCLcBGAsYHQ/s1600/youtube.webp"
            alt="youtube"
          />
        </a>
        <a href="https://gaana.com/">
          <img
            className="ent__social__img"
            src="https://images.assettype.com/freepressjournal/2019-08/f9334648-e8f2-4c8e-8ec4-d73b23b9f78e/Gaana.jpg?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true"
            alt="gaana"
          />
        </a>
        <a href="https://www.hungama.com/">
          <img
            className="ent__social__img"
            src="https://1.bp.blogspot.com/-p55e5U72Pok/XuJCSrjvncI/AAAAAAAAAsw/9AMPflpHrHkwnodmvMqDLSKxFqQj2saAgCLcBGAsYHQ/s1600/hungama.webp"
            alt="Hungama"
          />
        </a>
        <a href="https://www.hotstar.com/">
          <img
            className="ent__social__img"
            src="https://1.bp.blogspot.com/-sD-3A7D1V2I/XuJCSAPH5eI/AAAAAAAAAso/NXeFA8DkvgwZiRS_wqLF3jnnq1l6Nmx_ACLcBGAsYHQ/s1600/hotstar.webp"
            alt="Hotstar"
          />
        </a>
        <a href="https://www.zee5.com/">
          <img
            className="ent__social__img"
            src="https://1.bp.blogspot.com/-fq2FpRuEkhc/XuJDDjF8GJI/AAAAAAAAA1U/FMwg1cfYyVcrp_j2roWkbqlga9ADUIyTwCLcBGAsYHQ/s1600/zee5.webp"
            alt="zee5"
          />
        </a>
        <a href="https://www.sonyliv.com/">
          <img
            className="ent__social__img"
            src="https://1.bp.blogspot.com/-OCeJa8pyenw/XuJCx4kZeLI/AAAAAAAAAyY/ey6hedSSlf0kfsTzfE_UYFISKvb0e4wbgCLcBGAsYHQ/s1600/sonyliv.webp"
            alt="SonyLiv"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Entertainment;
