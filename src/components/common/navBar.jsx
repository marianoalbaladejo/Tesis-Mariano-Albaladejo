import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "thesis"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/thesis">Thesis</Link>
							</li>
							<li
								className={
									active === "related-works"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/related-works">Related Works</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "teaching"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/teaching">Teaching</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
