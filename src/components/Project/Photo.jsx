import React from "react";
import logo1 from "./Project-1.png";
import logo2 from "./Project-2.png";

function Photo1() {
  return (
    <>
      <img
        src={logo1}
        alt="ERROR 404"
        className="photo1"
        style={{
          flexWrap: "wrap",
          borderRadius: "10px",
          padding: "20px",
          border: "5px solid white"
        }}
      />
    </>
  );
}

function Photo2() {
  return (
    <>
      <img
        src={logo2}
        alt="ERROR 404"
        className="photo1"
        style={{
          flexWrap: "wrap",
          borderRadius: "10px",
          padding: "20px",
          border: "5px solid white"
        }}
      />
    </>
  );
}

export{Photo1, Photo2};
