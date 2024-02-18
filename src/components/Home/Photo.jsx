import React from "react";

function Photo(props) {
  return(
    <div className="flex justify-center w-[100%] lg:w-[30%]">
      <img src={props.logo} alt="Your Image" className="max-w-64 max-h-64" />
    </div>
  );
}

export default Photo;
