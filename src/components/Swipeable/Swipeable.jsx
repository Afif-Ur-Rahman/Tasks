import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./style.css";

const Swipeable = () => {
  const [activeComponent, setActiveComponent] = useState("");
  const [slideDirection, setSlideDirection] = useState("");

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setActiveComponent("Right");
      setSlideDirection("left");
    },
    onSwipedRight: () => {
      setActiveComponent("Left");
      setSlideDirection("right");
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="main" {...handlers}>
      <div
        className={`left ${activeComponent === "Left" ? "active" : ""}`}
        style={{ transform: slideDirection === "left" ? "translateX(-100%)" : "" }}
      >
        Left
      </div>
      <div className="mid" onClick={() => setActiveComponent("")}>
        Mid Block
      </div>
      <div
        className={`right ${activeComponent === "Right" ? "active" : ""}`}
        style={{ transform: slideDirection === "right" ? "translateX(100%)" : "" }}
      >
        Right
      </div>
    </div>
  );
};

export default Swipeable;
