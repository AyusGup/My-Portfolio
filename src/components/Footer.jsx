import React from "react";

const date = new Date();
const year = date.getFullYear();
function Footer() {
  return (
    <footer className="container" style={{ marginTop: "50px" }}>
      <p>Ayush © {year};</p>
    </footer>
  );
}

export default Footer;
