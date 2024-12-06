import React from "react";

export const Photo = ({ logo }) => {

  return (
    <img
      src= {logo}
      alt="ERROR 404"
      className="w-[80%] md:w-[40%] border rounded-lg"
    />
  );
};

