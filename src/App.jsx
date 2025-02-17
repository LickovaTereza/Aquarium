import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import rawData from "./FishData.json";
import FishList from "./components/FIshList/FishList";
import AddForm from "./components/AddForm/AddForm";
import TogglerButton from "./components/TogglerButton/TogglerButton";
import AquariumPlanner from "./components/AquariumPlanner/AquariumPlanner";

function App() {
  const [listOfFish, setListOfFish] = useState(rawData.fish);
  const [activeTab, setActiveTab] = useState(1);

  const handleDelete = (idToDelete) => {
    const temp = listOfFish.filter((fish) => fish.id !== idToDelete);
    setListOfFish(temp);
  };

  const handleAdd = (fishToAdd) => {
    setListOfFish([...listOfFish, fishToAdd]);
  };

  const handleChoose = (name) => {
    switch (name) {
      case "fish-list": {
        setActiveTab(1);
        break;
      }
      case "aquarium-planner": {
        setActiveTab(2);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Aquarium</h1>
        <div className="mt-5">
          <TogglerButton onChoose={handleChoose} active={activeTab} />
        </div>
        {activeTab === 1 && (
          <div>
            <div className="mt-3">
              <FishList data={listOfFish} onDelete={handleDelete} />
            </div>
            <div className="mt-3">
              <AddForm data={listOfFish} onAdd={handleAdd} />
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="container mt-3">
            <div className="row">
              <AquariumPlanner data={listOfFish} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
