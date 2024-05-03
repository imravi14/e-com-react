import React from "react";
import Data from "../Data";
import "../App.css";

function Menu(props) {
  return (
    <div className="row-data">
      <div className="col-lg-2 bttn ">
        {props.menuItems.map((btn, index) => (
          <button
            key={index}
            onClick={() => props.filterItems(btn)}
            className="btn btn-dark mt-2 "
          >
            {btn}
          </button>
        ))}
        <button
          onClick={() => props.setItems(Data)}
          className="btn btn-dark mt-2 "
        >
          All
        </button>
      </div>
    </div>
  );
}

export default Menu;
