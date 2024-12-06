import React from "react";
import Text from "./Text ";
import Photo from "./Photo";

function Home() {
  return (
    <div className="flex mt-40 w-full justify-center" id="0">
      <div className="w-[80%] flex flex-wrap-reverse justify-center md:justify-between p-8">
        <Text />
        <Photo logo="/gamer.png" />
      </div>
    </div>
  );
}

export default Home;
