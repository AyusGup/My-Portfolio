import React from "react";
import Skill from "./skillCard";
import skillsData from "./Skills_Data.json";  

function Contact() {
  return (
    <div className="mt-40 w-full" id="2">
      <div className="text-4xl font-bold text-center mb-8 text-yellow-500">My Skills</div>
      <ul className="flex flex-wrap justify-center gap-4">
        {skillsData.map((skill, index) => (
          <li className="li" key={index}>
            <Skill logo={skill.logo} name={skill.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
