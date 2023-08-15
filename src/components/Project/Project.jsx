import React from "react";
import {Item1,Item2} from "./ProjectItem";
import {Photo1,Photo2} from "./Photo";

function Project(){
    return(
        <div className="container" style={{flexWrap:"wrap" ,  marginTop: "200px"}} id="3">
            <div className="heading">My Projects</div>
            <div>
                <Photo1 />
                <Item1 />
            </div>
            <div style={{marginTop:"20px"}}>
                <Photo2 />
                <Item2 />
            </div>
        </div>
    );
}

export default Project;