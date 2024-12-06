import React from "react";

function getAge() {
  const today = new Date(); 
  const birthDate = new Date(process.env.REACT_APP_BIRTH_DATE);
  return Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365));
}

function Detail() {
  return (
    <div className="flex flex-col items-start space-y-4 w-[80%] lg:w-[60%] text-white">
      <div
        className="containerItem"
        style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold" }}
      >
        I'm a {getAge()} year old developer from India.
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
