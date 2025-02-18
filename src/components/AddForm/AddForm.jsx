import React, { useState } from "react";
import "./AddForm.css";

function AddForm({ data, onAdd }) {
  const [newFish, setNewFish] = useState({
    id: data.length > 0 ? Math.max(...data.map((fish) => fish.id)) + 1 : 1,
    name: "",
    size: "small",
  });
  const [valid, setValid] = useState(false);

  const handleChange = (event) => {
    const source = event.target.name;
    const value = event.target.value;
    let updatedFish;
    switch (source) {
      case "name": {
        updatedFish = { ...newFish, name: value };
        break;
      }
      case "size": {
        updatedFish = { ...newFish, size: value };
        break;
      }
      default:
        break;
    }
    setNewFish(updatedFish);
    validateData(updatedFish);
  };

  const validateData = (fish) => {
    if (fish.name.trim().length === 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const resetNewFish = () => {
    const temp = {
      id: newFish + 1,
      name: "",
      size: "small",
    };
    setNewFish(temp);
    validateData(temp);
  };

  return (
    <div className="container container-form">
      <div class="row align-items-start">
        <div className="col-6 col-sm-4">
          <input
            type="text"
            placeholder="fish name"
            name="name"
            className="form-control input-name"
            value={newFish.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-6 col-sm-4">
          <select
            className="form-select"
            name="size"
            value={newFish.size}
            onChange={handleChange}
          >
            <option value="small">small</option>
            <option value="big">big</option>
          </select>
        </div>

        <div className="col-12 col-sm-auto">
          <button
            disabled={!valid}
            onClick={() => {
              resetNewFish();
              onAdd(newFish);
            }}
            className="btn btn-dark btn-add"
          >
            Add fish
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
