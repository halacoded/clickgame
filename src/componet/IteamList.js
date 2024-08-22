import React, { useState, useEffect } from "react";
import "../assest/CSS/style.css";
import items from "../assest/data/items";
import { Howl } from "howler";
export const IteamList = ({ click, setClick, point, setPoint }) => {
  const DisplayIteams = items.filter((item) => {
    if (item.price <= point) {
      return true;
    } else {
      return false;
    }
  });

  const pointSound = new Howl({
    src: [require("../assest/sounds/coin-donation-2-180438.mp3")],
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
  return (
    <div className="itemsSection">
      <h1> available Items : </h1>
      <h1>{upgrades}</h1>
    </div>
  );
};
