import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import {
  SMain,
  Background,
  H1Title
} from './IndexElements';

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}/>

      <SMain>
        <H1Title>Hello World!</H1Title>
      </SMain>
      
      <Footer/>
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