import React from "react";
import "./FishList.css";

function FishList({ data, onDelete }) {
  return (
    <div className="container container-fish mt-3">
      <div className="col fish-list">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="fish-line d-flex justify-content-between align-items-center mb-2"
            >
              <span className="fish-text">
                {item.name} | {item.size}
              </span>
              <button
                onClick={() => onDelete(item.id)}
                className="btn btn-delete"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FishList;
