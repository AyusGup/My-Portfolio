import React, { useEffect } from "react";
import { Item } from "./ProjectItem";
import { Photo } from "./Photo";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS file
import data from "./Project_Data.json";


function Project() {
  const containerStyle = {
    display: "flex",
    padding: "20px",
    borderRadius: "10px",
    background: "linear-gradient(rgb(40, 40, 40), rgb(10, 10, 10))",
    width: "90%",
    minHeight: "400px"
  };

  useEffect(()=>{
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    return () => AOS.refresh()

  },[])

  return (
    <div
      className="mt-40 w-full"
      id="3"
    >
      <div className="text-yellow-500 text-4xl font-bold text-center mb-8">My Projects</div>
      <div className="flex flex-wrap justify-center gap-4 overflow-x-hidden">
      {
          data.map((item, index) => {
            const flag = index%2 === 0;

            return (flag ? 
            <div style={{...containerStyle, flexWrap: "wrap"}} className="justify-center gap-4 md:gap-12" data-aos="fade-left">
              <Photo logo={item.logo} />
              <Item title={item.title} content={item.description} tech={item.technologies} github={item.links.github} link={item.links.liveDemo} isLeft={flag}/>
            </div>
             : 
            <div style={{...containerStyle, flexWrap: "wrap-reverse"}} className="justify-center gap-4 md:gap-12" data-aos="fade-right">
              <Item title={item.title} content={item.description} tech={item.technologies} github={item.links.github} link={item.links.liveDemo} isLeft={flag}/>
              <Photo logo={item.logo} />
            </div>)
          })
      }
    </div>
    </div>
  );
}

export default Project;
