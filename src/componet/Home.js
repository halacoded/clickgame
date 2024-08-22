import "../assest/CSS/style.css";

import React, { useState, useEffect } from "react";
import { Head } from "../componet/Head";
import { IteamList } from "../componet/IteamList";
import { AchivementMsg } from "../componet/AchivementMsg";
import { PointClick } from "../componet/PointClick";
import { Howl } from "howler";

export const Home = () => {
  const [click, setClick] = useState(0);
  const [point, setPoint] = useState(0);
  const backgroundSound = new Howl({
    src: [require("../assest/sounds/game-music-loop-7-145285.mp3")],
    loop: true,
    volume: 0.3, // Adjust volume as needed
  });

  useEffect(() => {
    backgroundSound.play();
  }, []);
  return (
    <div className="container">
      <Head />
      <AchivementMsg point={point} />
      <PointClick
        click={click}
        setClick={setClick}
        point={point}
        setPoint={setPoint}
      />
      <IteamList
        click={click}
        setClick={setClick}
        point={point}
        setPoint={setPoint}
      />
    </div>
  );
};
