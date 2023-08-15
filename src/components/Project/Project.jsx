import React from "react";
import {Item1,Item2} from "./ProjectItem";
import {Photo1,Photo2} from "./Photo";

function Project(){
    return(
        <div className="container" style={{flexWrap:"wrap" ,  marginTop: "200px" }} id="3">
            <div className="heading">My Projects</div>
            <div
                style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "20px",
                justifyContent: "center"
                }}
            >
                <Photo1 />
                <Item1 />
            </div>
            <div
                style={{
                display: "flex",
                flexWrap: "wrap-reverse",
                marginTop: "50px",
                justifyContent: "center"
                }}
            >
                <Item2 />
                <Photo2 />
            </div>
        </div>
    );
}

export default Project;