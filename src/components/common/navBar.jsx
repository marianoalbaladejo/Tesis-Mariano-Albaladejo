import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NAV_ITEMS = [
	{ key: "home", label: "Home", to: "/" },
	{ key: "thesis", label: "Thesis", to: "/thesis" },
	{ key: "related-works", label: "Related Works", to: "/related-works" },
	{ key: "projects", label: "Projects", to: "/projects" },
	{ key: "teaching", label: "Teaching", to: "/teaching" },
];

const NavBar = (props) => {
	const { active } = props;

	const listRef = useRef(null);
	const itemRefs = useRef([]);
	const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

	const activeIndex = Math.max(
		0,
		NAV_ITEMS.findIndex((item) => item.key === active)
	);

	const moveIndicator = () => {
		const el = itemRefs.current[activeIndex];
		const list = listRef.current;
		if (!el || !list) return;
		const elRect = el.getBoundingClientRect();
		const listRect = list.getBoundingClientRect();
		setIndicator({
			left: elRect.left - listRect.left,
			width: elRect.width,
			ready: true,
		});
	};

	useLayoutEffect(() => {
		moveIndicator();
		window.addEventListener("resize", moveIndicator);
		// Recalculate once fonts have settled to avoid a misaligned pill.
		const t = setTimeout(moveIndicator, 200);
		return () => {
			window.removeEventListener("resize", moveIndicator);
			clearTimeout(t);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeIndex]);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list" ref={listRef}>
							<span
								className={`nav-indicator ${
									indicator.ready ? "nav-indicator--ready" : ""
								}`}
								style={{
									transform: `translateX(${indicator.left}px)`,
									width: `${indicator.width}px`,
								}}
								aria-hidden="true"
							/>
							{NAV_ITEMS.map((item, i) => (
								<li
									key={item.key}
									ref={(el) => (itemRefs.current[i] = el)}
									className={
										active === item.key
											? "nav-item active"
											: "nav-item"
									}
								>
									<Link to={item.to}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
