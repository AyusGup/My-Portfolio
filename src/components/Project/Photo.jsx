import React from "react";
import logo from "./Project-1.png";

function Photo() {
  return (
    <img
      src={logo}
      alt="ERROR 404"
      className="photo1"
      style={{
        flexWrap: "wrap",
        borderRadius: "10px",
        padding: "20px",
        border: "5px solid white"
      }}
    />
  );
}

export default Photo;
