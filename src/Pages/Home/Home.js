import React from "react";
import Header from "./Components/Header.jsx/Header";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Finance from "./Components/Finance/Finance";
import Footer from "./Components/Footer/Footer";

function Home() {
	return (
		<div>
			<About />
			<Services />
			<Finance />
		</div>
	);
}

export default Home;
