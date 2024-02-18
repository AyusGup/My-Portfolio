import React from "react";

function Detail() {
  return (
    <div className="flex flex-col items-start space-y-4 w-[80%] lg:w-[60%] text-white">
      <div
        className="containerItem"
        style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold" }}
      >
        I'm a 18 year old developer from India.
      </div>
      <div className="text-xl">
        <p>
          Currently pursuing my B.Tech in Computer Science from Delhi
          Technological University. Primarily a Web Developer exploring
          different domains and enjoying college life. Feel free to connect with
          me using my social links
        </p>
      </div>
    </div>
  );
}

export default Detail;
