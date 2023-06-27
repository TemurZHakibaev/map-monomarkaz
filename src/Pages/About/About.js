import AboutHeader from "./Components/AboutHeader/AboutHeader";
import History from "./Components/History/History";
import "./About.scss";
import Training from "./Components/Training/Training";
import Heroes from "./Components/Heroes/Heroes";
import Draft from "./Components/Draftsmen/Draft";

const About = () => {
	return (
		<div>
			{/* <AboutHeader /> */}
			<History />
			<Training />
			<Heroes />
			<Draft />
		</div>
	);
};

export default About;
