import React from "react";

const date = new Date();
const year = date.getFullYear();
function Footer() {
  return (
    <footer className="container mx-auto mt-10 border-t border-gray-300 bg-black p-4">
     <p className="text-white text-center">Ayush © {year}</p>
    </footer>
  );
}

export default Footer;
