import React from "react";

function Header() {
  const scrollHandler = (ele) => {
    return document.getElementById(ele)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav>
      <p>Portfolio</p>
      <input type="checkbox" id="check" />
      <label htmlFor="check" id="checkbtn">
        <i className="fa fa-bars"></i>
      </label>
      <ul>
        <li onClick={() => scrollHandler("0")}>
          <a>Home</a>
        </li>
        <li onClick={() => scrollHandler("1")}>
          <a>About</a>
        </li>
        <li onClick={() => scrollHandler("2")}>
          {" "}
          <a>Skills</a>
        </li>
        <li onClick={() => scrollHandler("3")}>
          <a>Projects</a>
        </li>
        <li onClick={() => scrollHandler("4")}>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
