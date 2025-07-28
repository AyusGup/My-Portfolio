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
          I'm a final year B.Tech Computer Science student at Delhi Technological University with a strong interest in backend engineering and scalable web systems. 
          I’ve worked on async workflows, infrastructure automation, CI/CD pipelines, and automated testing during my internship at Atlassian. 
          Passionate about clean architecture, open-source, and exploring new tech domains, I’m always looking to learn, build, and contribute. Let’s connect!
        </p>
      </div>
    </div>
  );
}

export default Detail;
