import React from "react";
import Detail from "./Detail";
import Photo from '../Home/Photo';


function About(ref){
   return(
    <div className="container" style={{flexWrap:"wrap" ,  marginTop: "200px"}} id="1">
        <div className="heading">About Me</div>
        <Photo />
        <Detail />
    </div>
   );
}

export default About;