import React, { useState, useEffect } from "react";
import "./AquariumPlanner.css";

function AquariumPlanner({ data }) {
  const smallFishRequirement = 10;
  const bigFishRequirement = 20;
  const [numberOfSmallFish, setNumberOfSmallFish] = useState(0);
  const [numberOfBigFish, setNumberOfBigFish] = useState(0);
  const [requirements, setRequirements] = useState(0);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [canSet, setCanSet] = useState(false);

  useEffect(() => {
    let numberOfSmallFish = data.filter((fish) => fish.size === "small").length;
    setNumberOfSmallFish(numberOfSmallFish);
    let numberOfBigFish = data.filter((fish) => fish.size === "big").length;
    setNumberOfBigFish(numberOfBigFish);
  }, [data]);

  useEffect(() => {
    let fishRequirements =
      numberOfSmallFish * smallFishRequirement +
      numberOfBigFish * bigFishRequirement;
    setRequirements(fishRequirements);
  }, [numberOfSmallFish, numberOfBigFish]);

  useEffect(() => {
    checkIfSetable();
  }, [height, width, length]);

  const checkIfSetable = () => {
    if (
      parseFloat(height) > 0 &&
      parseFloat(width) > 0 &&
      parseFloat(length) > 0
    ) {
      const newCapacity = height * width * length;
      if (requirements <= newCapacity) {
        setCanSet(true);
      } else {
        setCanSet(false);
      }
    }
  };

  const handleChange = (event) => {
    const source = event.target.name;
    const value = event.target.value;
    switch (source) {
      case "height": {
        setHeight(value);
        break;
      }
      case "width": {
        setWidth(value);
        break;
      }
      case "length": {
        setLength(value);
        break;
      }
      default:
        break;
    }
  };

  const setAquarium = () => {
    if (canSet) {
      alert(
        "The dimensions you entered are sufficient. Lets buy the aquarium!"
      );
      resetInputs();
    }
  };

  const resetInputs = () => {
    setHeight("");
    setWidth("");
    setLength("");
    setCanSet(false);
  };

  return (
    <div className="container">
      <div className="container-planner">
        <p>
          There are currently <strong>{numberOfSmallFish} small</strong> and{" "}
          <strong>{numberOfBigFish} big</strong> fish in your school of fish.
        </p>
        <p>
          The minimum aquarium volume must be{" "}
          <strong>{requirements} litres</strong>.
        </p>
        {/* <span>small fish: {numberOfSmallFish}</span>
        <br />
        <span>big fish: {numberOfBigFish}</span>
        <br />
        <br />
        <span>volume requirements: {requirements} litres </span> */}
      </div>
      <div className="container">
        <div class="row align-items-center">
          <div className="col-auto">
            <input
              className="input-size form-control "
              type="number"
              name="height"
              min="0"
              placeholder="height"
              value={height}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <input
              className="input-size form-control "
              type="number"
              name="width"
              min="0"
              placeholder="width"
              value={width}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <input
              className="input-size form-control "
              type="number"
              name="length"
              min="0"
              placeholder="length"
              value={length}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button
              className={`btn btn-planner ${
                canSet === true ? "btn-set" : "btn-danger"
              }`}
              disabled={!canSet}
              onClick={setAquarium}
            >
              Set
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AquariumPlanner;
