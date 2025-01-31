import React from "react";
import Icons from "Utils/Icons";

const CoreCard = ({ data, key }) => {
  return (
        <div class="card coreCard h-100 p-3">
      <div className="iconBox p-3  d-flex  justify-content-start">
        <span>{Icons.manArrowIcon}</span>
      </div>
      <hr></hr>
      <div class="card-body">
        <h5 class="card-title">{data.title}</h5>
        <p class="card-text text-secondary globaljustify">{data.content}</p>
      </div>
    </div>
  );
};

export default CoreCard;
