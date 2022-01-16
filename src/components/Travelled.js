import React from "react";
import "../index.css";
import bandarban from "../images/Bandarban.jpg";
export default function Travelled() {
  return (
    <div>
      <section className="main">
        <img src={bandarban} alt="" className="place--image" />
        <div className="place--info">
          <span>Bangladesh</span>
          <a href="">View on Google Maps</a>
          <h1 className="place--name">Thanchi</h1>
          <strong>12 Jan, 2017 - 16 Jan, 2017</strong>
          <p className="place--description">
            Bandarban Hill District is blissed with beauties & culture. You’ll
            find great mountain views in bandarban. It treks through virgin
            forests and chance to meet more than 15 tribes. Bandarban town which
            lies on the Sangu River, 92km from Chittagong. The river is the
            center of local life: epically long bamboo rafts, steered by a
            solitary boatman.
          </p>
        </div>
      </section>
    </div>
  );
}
