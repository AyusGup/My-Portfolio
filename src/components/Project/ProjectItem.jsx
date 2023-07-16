import React from "react";

function Item() {
  return (
    <div className="container card" style={{ flexWrap: "wrap", top: "0" }}>
      <div
        className="containerItem"
        style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold" }}
      >
        My Portfolio Website
      </div>
      <div>
        <p>
          It is My Portfolio Website built to showcase my skill and to show my
          ability to make highly responsive websites with an attractive user
          interface.
        </p>
        <h3 style={{ color: "whitesmoke" }}>
          React Js,Html,Css,Javascript,Jsx
        </h3>
      </div>
      <div id="media" className="containerItem">
        <a href="https://github.com/AyusGup" className="media">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://twitter.com/AyushGup712" className="media">
          <i className="fa fa-external-link"></i>
        </a>
      </div>
    </div>
  );
}

export default Item;
