import React from "react";
import Item from "./ProjectItem";
import Photo from "./Photo";

function Project(){
    return(
        <div className="container" style={{flexWrap:"wrap" ,  marginTop: "200px"}} id="3">
        <div className="heading">My Projects</div>
        <Photo />
        <Item />
        </div>
    );
}

export default Project;