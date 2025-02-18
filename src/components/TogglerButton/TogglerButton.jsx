import React from "react";
import "./TogglerButton.css";

function TogglerButton({ onChoose, active }) {
  const handleClick = (event) => {
    onChoose(event.target.name);
  };
  return (
    <div className="container container-toggler">
      <div className="row  justify-content-between">
        <div className="d-grid  col-5 mx-auto">
          <button
            className={`btn-dark btn  ${active === 1 ? "active" : ""}`}
            onClick={handleClick}
            name="fish-list"
          >
            School of fish
          </button>
        </div>
        <div className="d-grid col-5 mx-auto">
          <button
            className={`btn-dark btn  ${active === 2 ? "active" : ""}`}
            onClick={handleClick}
            name="aquarium-planner"
          >
            Aquarium planner
          </button>
        </div>
      </div>
    </div>
  );
}

export default TogglerButton;
