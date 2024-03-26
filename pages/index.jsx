import React from "react";
import {Home, Navbar, Services, Works} from "../components";


const Index = () => {
	
	return(
		<>
		<div className="bg-white">
		<Navbar/>
		<Home/>
		<Works/>
		<Services/>
		</div>
		
		</>
	)
}

export default Index;
