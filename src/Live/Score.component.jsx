import React from "react";
import "./Score.style.css";

function Score({ score }) {
  return (
    <div>
      <div className=" color center msize bg">{score?.status}</div>
    </div>
  );
}

export default Score;
