import React from "react";
import logo from "../../images/SIH.png";
import logo1 from "../../images/PORTFOLIO.png";
import logo2 from "../../images/INVICTUS.png";
import logo3 from "../../images/HOSTEL.jpeg";


const Photo1 = () => {
  return (
    <img
      src={logo1}
      alt="ERROR 404"
      className="w-[80%] md:w-[40%] border rounded-lg"
    />
  );
};

const Photo2 = () => {
  return (
    <img
      src={logo}
      alt="ERROR 404"
      className="w-[80%] md:w-[40%] border rounded-lg"
    />
  );
};

const Photo3 = () => {
  return (
    <img
      src={logo2}
      alt="ERROR 404"
      className="w-[80%] md:w-[40%] border rounded-lg"
    />
  );
};

const Photo4 = () => {
  return (
    <img
      src={logo3}
      alt="ERROR 404"
      className="w-[80%] md:w-[40%] border rounded-lg"
    />
  );
};

export { Photo1, Photo2, Photo3, Photo4 };
