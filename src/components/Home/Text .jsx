import React from "react";
import url from "./AyushGupta_CV.pdf";

window.addEventListener("load", function () {
  setTimeout(auth, 500);
});
var idx = 0;
var ans = "";
function helper() {
  var text = "I am a Web Developer";
  if (idx === text.length) {
    idx = 0;
    ans = "";
    return;
  }
  ans = ans + text[idx];
  var ele = document.getElementById("type-anime");
  if (ele) {
    ele.innerHTML = ans + "|";
    idx++;
  }
}
function auth() {
  setInterval(helper, 120);
}

function Text() {
  return (
    <div className="container card" style={{ flexWrap: "wrap", top: "0" }}>
      <div
        className="containerItem"
        style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold" }}
      >
        Hello! It's me Ayush
      </div>
      <div id="type-anime" className="containerItem">
        |
      </div>
      <div>
        <p>
          I am Developer and a programmer in C++ who loves to learn new
          technologies and connect with others. Here are my social links feel
          free to connect.
        </p>
      </div>
      <div id="media" className="containerItem">
        <a href="https://www.linkedin.com/in/ayushguptacoder" className="media">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/AyusGup" className="media">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.instagram.com/ayush71204/" className="media">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://twitter.com/AyushGup712" className="media">
          <i className="fa fa-twitter"></i>
        </a>
      </div>
      <div className="containerItem" style={{ marginTop: "40px" }}>
        <a href={url} className="btn" download="cv">
          Download-CV
          <i className="fa fa-download"></i>
        </a>
      </div>
    </div>
  );
}

export default Text;
