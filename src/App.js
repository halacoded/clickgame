import "./App.css";
import "./assest/CSS/style.css";
import items from "./assest/data/items";
import React, { useState, useEffect } from "react";

import { Howl } from "howler";

function App() {
  const [click, setClick] = useState(0);
  const [point, setPoint] = useState(0);
  const [message, setMessage] = useState("");
  const DisplayIteams = items.filter((item) => {
    if (item.price <= point) {
      return true;
    } else {
      return false;
    }
  });

  const upgrades = DisplayIteams.map((item) => {
    return (
      <button
        onClick={() => {
          HandelPoint(item);
          pointSound.play();
        }}
      >
        {item.name}
      </button>
    );
  });

  const HandelPoint = (item) => {
    if (item.name === "2x point") {
      setPoint(point * 2);
    } else {
      setPoint(point - item.price);
    }
  };
  //to incress number of clicks and points  automaticaly after 10 clicks
  useEffect(() => {
    if (click >= 10) {
      const timer = setTimeout(() => {
        setClick(click + 1);
        setPoint(point + 1);
      }, 140);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [click, point]);

  // sounds code 1-intialize sounds  2-putt vairble name on the specific button exepct for backgroundnoise we use useeffect to loop it
  // 1
  const clickSound = new Howl({
    src: [require("./assest/sounds/tap-notification-180637.mp3")],
  });

  const pointSound = new Howl({
    src: [require("./assest/sounds/coin-donation-2-180438.mp3")],
  });
  const achicmentsound = new Howl({
    src: [require("./assest/sounds/surprise-sound-effect-99300.mp3")],
  });
  const backgroundSound = new Howl({
    src: [require("./assest/sounds/game-music-loop-7-145285.mp3")],
    loop: true,
    volume: 0.3, // Adjust volume as needed
  });

  // 2
  useEffect(() => {
    backgroundSound.play();
  }, []);

  useEffect(() => {
    let timer;
    if (point % 100 === 0 && point !== 0) {
      setMessage(`You've reached ${point} points! Keep it up!`);
      achicmentsound.play();
      timer = setTimeout(() => {
        setMessage("Keep going!");
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [point]);

  return (
    <div className="container">
      <div className="Logo">
        <h1>Hala & Saleh</h1>
        <h1>CliCKERS</h1>
      </div>
      <div className="Achivmentalet">
        <h2>{message}</h2>
      </div>
      <div className="clickPointSection">
        <div className="clickSection">
          <h1>{click}</h1>{" "}
          <button
            className="buttonClick"
            onClick={() => {
              setClick(click + 1);
              setPoint(point + 1);
              clickSound.play();
              pointSound.play();
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
      <div className="itemsSection">
        <h1> available Items : </h1>
        <h1>{upgrades}</h1>
      </div>
    </div>
  );
}

export default App;
