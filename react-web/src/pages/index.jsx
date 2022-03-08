import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}/>
      <h1>Hello World!</h1>
    </div>
  );
}

export default Main;


/*
Color Palete

Black: #242424
Blue: #3772FF
Blue 2: #2DE1FC
Green: #16DB65
Red: #DF2935
White: #f0eff4

*/