import React from "react";
import Text from "./Text ";
import Photo from "./Photo";

function Home() {
  return (
    <div className="container" style={{ flexWrap: "wrap-reverse" }} id="0">
      <Text />
      <Photo />
    </div>
  );
}

export default Home;
