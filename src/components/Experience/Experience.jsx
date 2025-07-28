import React, { useEffect } from "react";
import { ExperienceItem } from "./ExperienceItem";
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from "./Experience_Data.json";
import { Photo } from "./Photo";

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    return () => AOS.refresh();
  }, []);

  const containerStyle = {
    display: "flex",
    padding: "20px",
    borderRadius: "10px",
    background: "linear-gradient(rgb(40, 40, 40), rgb(10, 10, 10))",
    width: "90%",
    minHeight: "200px"
  };

  return (
    <div className="mt-40 w-full" id="3">
      <div className="text-yellow-500 text-4xl font-bold text-center mb-8">My Experiences</div>
      <div className="flex flex-wrap justify-center gap-4 overflow-x-hidden">
        {data.map((item, index) => {
          const flag = index%2 === 0;

          return (flag ? 
          <div style={{...containerStyle, flexWrap: "wrap"}} className="justify-center gap-4 md:gap-12" data-aos="fade-left">
            <Photo logo={item.logo} />
            <ExperienceItem company={item.company} role={item.role} location={item.location} duration={item.duration} description={item.description} tech={item.technologies} isLeft={flag}/>
          </div>
            : 
          <div style={{...containerStyle, flexWrap: "wrap-reverse"}} className="justify-center gap-4 md:gap-12" data-aos="fade-right">
            <ExperienceItem company={item.company} role={item.role} location={item.location} duration={item.duration} description={item.description} tech={item.technologies} isLeft={flag}/>
            <Photo logo={item.logo} />
          </div>)
        })}
      </div>
    </div>
  );
}

export default Experience;
