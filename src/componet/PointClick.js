import React from "react";
import { Howl } from "howler";
import "../assest/CSS/style.css";

export const PointClick = ({ click, setClick, point, setPoint }) => {
  const clickSound = new Howl({
    src: [require("../assest/sounds/tap-notification-180637.mp3")],
  });

  return (
    <div className="clickPointSection">
      <div className="clickSection">
        <h1>{click}</h1>{" "}
        <button
          className="buttonClick"
          onClick={() => {
            setClick(click + 1);
            setPoint(point + 1);
            clickSound.play();
            // pointSound.play();
          }}
        >
          CliCK
        </button>
      </div>
      <div className="PointSection">
        <h1>{point}</h1>
        <img
          className="coinIMage"
          src="https://www.pngall.com/wp-content/uploads/5/Game-Gold-Coin-PNG-Images.png"
          alt="coin image"
        />
      </div>
    </div>
  );
};
