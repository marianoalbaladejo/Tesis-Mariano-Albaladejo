import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Teaching = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	const currentSEO = SEO.find((item) => item.page === "articles");

	// Estructura limpia: Asignatura a la izquierda, cursos a la derecha y solo el grado en la descripción
	const teachingExperience = [
		{
			title: "Big Data and Data Mining",
			date: "2023/2024, 2024/2025, 2025/2026",
			description: "Degree in Information Management and Digital Content."
		},
		{
			title: "Business Intelligence",
			date: "2024/2025, 2025/2026",
			description: "Degree in Information Management and Digital Content."
		},
		{
			title: "Introduction to Data Science in Artificial Intelligence",
			date: "2022/2023, 2023/2024",
			description: "Degree in Data Science and Engineering."
		},
		{
			title: "Programming Fundamentals",
			date: "2022/2023",
			description: "Degree in Mathematics."
		},
		{
			title: "Learning Analytics and Educational Data Mining",
			date: "2025/2026",
			description: "Degree in Data Science and Engineering."
		},
		{
			title: "Data Processing and Visualization",
			date: "2022/2023",
			description: "Degree in Information Management and Digital Content."
		}
	];

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Teaching Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO ? currentSEO.description : "Teaching experience and academic involvement during my PhD."} />
				<meta
					name="keywords"
					content={currentSEO ? currentSEO.keywords.join(", ") : "teaching, university, data science, big data"}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="teaching" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							Teaching Experience
						</div>

						<div className="subtitle articles-subtitle">
							Overview of the undergraduate courses and laboratory sessions I have taught during my pre-doctoral research period at the University of Murcia.
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{teachingExperience.map((course, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										{/* Se quita la prop 'link' para deshabilitar o eliminar la acción de "Read Article" según el componente base */}
										<Article
											key={(index + 1).toString()}
											date={course.date}
											title={course.title}
											description={course.description}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};


export default Teaching;
