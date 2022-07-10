// import React, { useState } from "react";
import React from "react";
// import { IconContext } from 'react-icons'
// import { IoLogoGithub, IoLogoSteam, IoHomeOutline, IoLogoDiscord } from 'react-icons/io5'
// import { FaDiscord } from 'react-icons/fa'
import {
	SMain,
	ContainerFluid,
	NoSelect,
	CoolEffect,
	// NavBar,
	// NavBarUl,
	// NavBarLi,
	// NavBara,
	// // IoIcon,
	// NavBarBTN,
} from './IndexElements';

function Main({useRef}) {
  
	return (
	  <div>
		<SMain>
			<ContainerFluid>
					<NoSelect>
						<CoolEffect><span>I</span>M<span>XNOOBX</span></CoolEffect>
					</NoSelect>
			</ContainerFluid>
		
			{/* <NavBar>
				<NavBarUl>
					<IconContext.Provider value={{ color: "#fff" }}>
						<NavBarLi><NavBarBTN onClick={() => useRef.current.scrollTo(1)}>{/* <NavBara href="https://github.com/IMXNOOBX" target="noreferrer"> */}{/* 
							<IoLogoGithub/>
						</NavBarBTN></NavBarLi> {/* </NavBara></NavBarLi>  */}{/* 
						<NavBarLi><NavBara href="https://steamcommunity.com/id/IMXNOOBX/" target="noreferrer">
							<IoLogoSteam/>
						</NavBara></NavBarLi> 
						<NavBarLi><NavBarBTN onClick={() => useRef.current.scrollTo(0)}>
							<IoHomeOutline/>
						</NavBarBTN></NavBarLi> 
						<NavBarLi><NavBara href="https://steamcommunity.com/id/ITSXNOOBX/" target="noreferrer">
							<IoLogoSteam/>
						</NavBara></NavBarLi>
						<NavBarLi><NavBara href="https://discord.gg/m68Nfgyb4m" target="noreferrer">
							<IoLogoDiscord/>
						</NavBara></NavBarLi>
					</IconContext.Provider>
				</NavBarUl>
			</NavBar> */}
		</SMain>
	  </div>
	);
  }
  
  export default Main;