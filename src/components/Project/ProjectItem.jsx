import React from "react";


export const Item = ({ title, content, tech, github, link, isLeft}) => {

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
        {title}
      </div>
      <div
        style={{ textAlign: isLeft ? "left" : "right" }}
        className="text-white text-xl"
      >
      
      <p style={{ textAlign: isLeft ? "left" : "right" }}>{content}</p>
        
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
      <div
        id="media"
        className="text-3xl"
        style={{ textAlign: isLeft ? "left" : "right" }}
      >
        <a href={github} className="media">
          <i className="fa fa-github" style={{ color: "white" }}></i>
        </a>
        <a href={link} className="ml-4">
          <i className="fa fa-external-link" style={{ color: "white" }}></i>
        </a>
      </div>
    </div>
  );
}
