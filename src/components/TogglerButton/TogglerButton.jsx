import React from "react";
import "./TogglerButton.css";

function TogglerButton({ onChoose, active }) {
  const handleClick = (event) => {
    onChoose(event.target.name);
  };
  return (
    <div className="container">
      <div className="container-toggler">
        <button
          className={`btn-toggler ${active === 1 ? "active" : ""}`}
          onClick={handleClick}
          name="fish-list"
        >
          School of fish
        </button>
        <button
          className={`btn-toggler ${active === 2 ? "active" : ""}`}
          onClick={handleClick}
          name="aquarium-planner"
        >
          Aquarium planner
        </button>
      </div>
    </div>
  );
}

export default TogglerButton;
