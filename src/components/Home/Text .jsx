import React from "react";

window.addEventListener("load", function () {
  setTimeout(auth, 500);
});

var idx = 0;
var ans = "";
var index = 0;

function helper() {
  var text = [" an Engineer", " a Programmer", " a Full Stack Developer"];
  if (idx === text[index].length) {
    idx = 0;
    ans = "";
    index = (index + 1) % 3;
    return;
  }
  ans = ans + text[index][idx];
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
  <div className="flex flex-col items-start space-y-4 w-[100%] lg:w-[60%]">
  <div className="w-fit text-4xl font-bold text-yellow-500">
    Hi There,
  </div>
  <div className="containerItem text-4xl font-bold text-yellow-500">
    I'm Ayush Gupta
  </div>
  <div className="flex space-x-2">
  <div className="font-bold text-white text-4xl">I am</div>
  <div id="type-anime" className="containerItem text-white pt-2 text-2xl">
    |
  </div>
  </div>
  <p className="text-white max-w-104 text-xl">
      I am a developer and a programmer in C++ who loves to learn new technologies
      and connect with others. Here are my social links; feel free to connect.
  </p>
  <div id="media" className="containerItem flex space-x-4">
    <a href="https://www.linkedin.com/in/ayushg2004" className="text-2xl">
      <i className="fa fa-linkedin text-white"></i>
    </a>
    <a href="https://github.com/AyusGup" className="text-2xl">
      <i className="fa fa-github text-white"></i>
    </a>
    <a href="https://www.instagram.com/ayush71204/" className="text-2xl">
      <i className="fa fa-instagram text-white"></i>
    </a>
    <a href="https://twitter.com/AyushGup712" className="text-2xl">
      <i className="fa fa-twitter text-white"></i>
    </a>
  </div>
  <div className="containerItem">
    <a href="/ayush_resume.pdf" className="border rounded-lg shadow-lg shadow-slate-200/20 p-2 text-white" download="cv">
      Download CV
      <i className="fa fa-download"></i>
    </a>
  </div>
</div>
  );
}

export default Text;
