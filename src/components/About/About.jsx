import React from "react";
import Detail from "./Detail";
import Photo from "../Home/Photo";
import logo from "../../images/MyPhoto.png";

function About(ref) {
  return (
    <section className="mt-40 w-full" id="1">
      <div className="text-4xl font-bold text-center text-yellow-500">About Me</div>
      <div className="w-full flex flex-wrap justify-center md:justify-between p-8">
        <Photo logo={logo} />
        <Detail />
      </div>
    </section>
  );
}

export default About;
