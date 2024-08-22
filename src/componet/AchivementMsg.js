import "../assest/CSS/style.css";
import React, { useState, useEffect } from "react";
import { Howl } from "howler";
export const AchivementMsg = ({ point }) => {
  const [message, setMessage] = useState("");

  const achicmentsound = new Howl({
    src: [require("../assest/sounds/surprise-sound-effect-99300.mp3")],
  });
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
    <div className="Achivmentalet">
      <h2>{message}</h2>
    </div>
  );
};
