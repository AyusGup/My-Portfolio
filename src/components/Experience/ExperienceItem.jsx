import React from "react";


export const ExperienceItem = ({ company, role, duration, location, description, tech, isLeft }) => {
  return (
    <div
      className="w-[80%] md:w-[50%]"
      style={{
        flexWrap: "wrap",
        top: "0",
        justifyContent: isLeft ? "flex-start" : "flex-end",
      }}
    >
      <div
        className="containerItem"
        style={{
          color: "whitesmoke",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: isLeft ? "left" : "right",
        }}
      >
        {company}
      </div>

      <div style={{ textAlign: isLeft ? "left" : "right" }} className="text-white text-xl">
        <p className="text-gray-300 font-semibold">{role}</p>
        <p className="text-gray-400 text-sm mb-2">{duration} • {location}</p>
        <p style={{ textAlign: isLeft ? "left" : "right" }}>{description}</p>

        <div style={{ justifyContent: isLeft ? "left" : "right" }} className="flex flex-wrap mt-4 mb-4">
          {tech.map((item, index) => (
            <p
              key={index}
              className="p-2 mr-2 w-fit text-slate-400 rounded-lg shadow-md shadow-slate-800"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
