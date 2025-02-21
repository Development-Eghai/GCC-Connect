import React, { useState } from "react";

const CoreCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const { title, icon, content } = data;

  const MAX_LENGTH = 250;
  const isLongText = content.length > MAX_LENGTH;

  const getContent = () => {
    if (expanded || !isLongText) {
      return content;
    }
    return (
      <>
        {content.substring(0, MAX_LENGTH)}
        <span>...</span>
        <button
          className="btn text-decoration-none btn-link p-0"
          onClick={() => setExpanded(true)}
          style={{ display: "inline", marginLeft: "5px", textDecoration: "none" }}
        >
          View More
        </button>
      </>
    );
  };

  return (
    <div className="card coreCard h-100 p-3">
      <div className="iconBox p-3 d-flex justify-content-center">
        <img src={icon} alt="icon" style={{ width: "130px", height: "130px" }} />
      </div>
      <hr />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-secondary globaljustify">
          {getContent()}
        </p>
        {expanded && (
          <button
            className="btn btn-link p-0"
            onClick={() => setExpanded(false)}
            style={{ display: "inline", marginLeft: "5px", textDecoration: "none"  }}
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default CoreCard;
