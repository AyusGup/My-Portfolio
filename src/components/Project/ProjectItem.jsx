import React from "react";

function Item1() {
  return (
    <div className="w-[80%] md:w-[50%]" style={{ flexWrap: "wrap", top: "0", justifyContent: "flex-start"}}>
      <div
        className="containerItem"
        style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold" }}
      >
        My Portfolio Website
      </div>
      <div style={{ textAlign: "left" }} className="text-white text-xl">
        <p style={{ textAlign: "left" }}>
          It is My Portfolio Website built to showcase my skill and to show my
          ability to make highly responsive websites with an attractive user
          interface.
        </p>
        <h3 className="font-bold text-slate-400">
          React Js, Javascript, Tailwind Css
        </h3>
      </div>
      <div id="media" className="text-3xl">
        <a href="https://github.com/AyusGup/My-Portfolio" className="media">
          <i className="fa fa-github" style={{ color: "white" }}></i>
        </a>
        <a href="https://ayusgup.github.io/My-Portfolio/" className="ml-4">
          <i className="fa fa-external-link" style={{ color: "white" }}></i>
        </a>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="w-[80%] md:w-[50%]" style={{ flexWrap: "wrap", top: "0", justifyContent: "flex-end"}}>
    <div
      className="containerItem"
      style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold", textAlign: "right" }}
    >
      CityPulse
    </div>
    <div style={{ textAlign: "right" }} className="text-white text-xl">
      <p style={{ textAlign: "right" }}>
        An initiative towards building safer & smarter cities, being eco-friendly and proper utilization of resources
      </p>
      <h3 className="font-bold text-slate-400">
      React Js, NodeJs, Javascript, MongoDb
      </h3>
    </div>
    <div id="media" style={{ textAlign: "right" }} className="text-3xl">
      <a href="https://github.com/AyusGup/SmartCity" className="media">
        <i className="fa fa-github" style={{ color: "white" }}></i>
      </a>
      <a href="https://smart-city-neon.vercel.app?email=test@gmail.com&password=1234" className="ml-4">
        <i className="fa fa-external-link" style={{ color: "white" }}></i>
      </a>
    </div>
  </div>  
  );
}

function Item3() {
  return (
    <div className="w-[80%] md:w-[50%]" style={{ flexWrap: "wrap", top: "0", justifyContent: "flex-start"}}>
      <div
        className="containerItem"
        style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold" }}
      >
        Invictus Website
      </div>
      <div style={{ textAlign: "left" }} className="text-white text-xl">
        <p style={{ textAlign: "left" }}>
          A website for Invictus(The Annual Techfest of College), built for showcasing our fest, events, to increase reach to the audience and for user registrations.
        </p>
        <h3 className="font-bold text-slate-400">
          NextJs, MongoDb, Jac
        </h3>
      </div>
      <div id="media" className="text-3xl">
        <a href="https://github.com/Invictus-DTU/Invictus24" className="media">
          <i className="fa fa-github" style={{ color: "white" }}></i>
        </a>
        <a href="https://www.invictusdtu.in/" className="ml-4">
          <i className="fa fa-external-link" style={{ color: "white" }}></i>
        </a>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="w-[80%] md:w-[50%]" style={{ flexWrap: "wrap", top: "0", justifyContent: "flex-end"}}>
    <div
      className="containerItem"
      style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold", textAlign: "right" }}
    >
      Hostel Management Web Portal
    </div>
    <div style={{ textAlign: "right" }} className="text-white text-xl">
      <p style={{ textAlign: "right" }} >
      Developed a Hostel Management Web-Solution from scratch, implementing JWT authentication for 2600+ users. Ensured seamless user experience and efficient project collaboration through Git version control.
      </p>
      <h3  className="font-bold text-slate-400">
        NextJs, NodeJs, TypeScript, MongoDb
      </h3>
    </div>
    <div id="media" style={{ textAlign: "right" }} className="text-3xl">
      <a href="https://github.com/1palermo/Hostel-Complaint" className="media">
        <i className="fa fa-github" style={{ color: "white" }}></i>
      </a>
      <a href="https://hostel-complaint.vercel.app?email=test@dtu.ac.in&password=1234" className="ml-4">
        <i className="fa fa-external-link" style={{ color: "white" }}></i>
      </a>
    </div>
  </div>  
  );
}

export { Item1, Item2, Item3, Item4 };
