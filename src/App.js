import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import Thesis from "./pages/thesis";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/relatedWorks";
import ReadArticle from "./pages/readArticle";
import Teaching from "./pages/teaching";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/thesis" element={<Thesis />} />
				<Route path="/related-works" element={<Articles />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/teaching" element={<Teaching />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
