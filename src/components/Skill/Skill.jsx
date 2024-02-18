import React from "react";
import Skill from "./skillCard";
import DSA from "../../images/DSA.jpeg";
import GIT from "../../images/GIT.png";
import GITHUB from "../../images/GITHUB.png";
import JS from "../../images/JS.png";
import REACT from "../../images/REACT.png";
import MONGO from "../../images/MONGO.png";
import EXPRESSJS from "../../images/EXPRESSJS.png";
import NODEJS from "../../images/NODEJS.png";
import HTML from "../../images/html-5.png";
import CSS from "../../images/CSS.png";
import BOOTSTRAP from "../../images/bootstrap.png";
import TCSS from "../../images/tailwind-css.png";
import CPP from "../../images/CPP.png";
import TS from "../../images/typescript.png";
import NEXT from "../../images/next-js.png";
import SOCKET from "../../images/Socket.png";

function Contact() {
  return (
    <div className="mt-40 w-full" id="2">
      <div className="text-4xl font-bold text-center mb-8 text-yellow-500">My Skills</div>
      <ul className="flex flex-wrap justify-center gap-4">
        <li className="li">
          <Skill logo={DSA} name={"DSA"} />
        </li>
        <li className="li">
          <Skill logo={NEXT} name={"NEXT JS"} />
        </li>
        <li className="li">
          <Skill logo={REACT} name={"REACT JS"} />
        </li>
        <li className="li">
          <Skill logo={NODEJS} name={"NODE JS"} />
        </li>
        <li className="li">
          <Skill logo={EXPRESSJS} name={"EXPRESS JS"} />
        </li>
        <li className="li">
          <Skill logo={JS} name={"JAVASCRIPT"} />
        </li>
        <li className="li">
          <Skill logo={TS} name={"TYPESCRIPT"} />
        </li>
        <li className="li">
          <Skill logo={SOCKET} name={"Socket.io"} />
        </li>
        <li className="li">
          <Skill logo={BOOTSTRAP} name={"BOOTSTRAP"} />
        </li>
        <li className="li">
          <Skill logo={TCSS} name={"TAILWIND CSS"} />
        </li>
        <li className="li">
          <Skill logo={CSS} name={"CSS"} />
        </li>
        <li className="li">
          <Skill logo={HTML} name={"HTML"} />
        </li>
        <li className="li">
          <Skill logo={CPP} name={"C++"} />
        </li>
        <li className="li">
          <Skill logo={GIT} name={"GIT"} />
        </li>
        <li className="li">
          <Skill logo={GITHUB} name={"GITHUB"} />
        </li>
        <li className="li">
          <Skill logo={MONGO} name={"MONGODB"} />
        </li>
      </ul>
    </div>
  );
}

export default Contact;
