import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDownload,
	faGraduationCap,
	faUserTie,
	faUsers,
	faCalendarDay,
	faLandmark,
	faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import PublicationCard from "../components/thesis/publicationCard";

import INFO from "../data/user";
import SEO from "../data/seo";
import publications, { THESIS } from "../data/publications";

import "./styles/thesis.css";

const Thesis = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");
	const publishedCount = publications.filter(
		(p) => p.status === "Published"
	).length;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Thesis | ${INFO.main.title}`}</title>
				<meta
					name="description"
					content={currentSEO ? currentSEO.description : THESIS.title}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="thesis" />
				<div className="content-wrapper">
					<div className="thesis-logo-container">
						<div className="thesis-logo">
							<Logo width={46} />
						</div>
					</div>

					{/* -------- Hero / header -------- */}
					<header className="thesis-hero reveal">
						<span className="thesis-eyebrow">
							<FontAwesomeIcon icon={faGraduationCap} />
							Ph.D. Thesis
						</span>

						<h1 className="thesis-title">{THESIS.title}</h1>

						<p className="thesis-subtitle">{THESIS.subtitle}</p>

						<div className="thesis-stats">
							<div className="thesis-stat">
								<span className="thesis-stat-num">
									{publications.length}
								</span>
								<span className="thesis-stat-label">
									Articles
								</span>
							</div>
							<div className="thesis-stat">
								<span className="thesis-stat-num">
									{publishedCount}
								</span>
								<span className="thesis-stat-label">
									Published
								</span>
							</div>
							<div className="thesis-stat">
								<span className="thesis-stat-num">Q1</span>
								<span className="thesis-stat-label">
									Journals
								</span>
							</div>
							<div className="thesis-stat thesis-stat--wide">
								<span className="thesis-stat-num thesis-stat-num--sm">
									<FontAwesomeIcon icon={faGlobe} />
								</span>
								<span className="thesis-stat-label">
									{THESIS.mention}
								</span>
							</div>
						</div>
					</header>

					{/* -------- Metadata panel -------- */}
					<section className="thesis-details reveal reveal-1">
						<div className="thesis-detail">
							<FontAwesomeIcon
								icon={faUserTie}
								className="thesis-detail-icon"
							/>
							<div>
								<span className="thesis-detail-key">
									Author
								</span>
								<span className="thesis-detail-val">
									{THESIS.author}
								</span>
							</div>
						</div>

						<div className="thesis-detail">
							<FontAwesomeIcon
								icon={faLandmark}
								className="thesis-detail-icon"
							/>
							<div>
								<span className="thesis-detail-key">
									Program & Institution
								</span>
								<span className="thesis-detail-val">
									{THESIS.program} · {THESIS.institution}
								</span>
							</div>
						</div>

						<div className="thesis-detail">
							<FontAwesomeIcon
								icon={faUsers}
								className="thesis-detail-icon"
							/>
							<div>
								<span className="thesis-detail-key">
									Supervisors
								</span>
								<span className="thesis-detail-val">
									{THESIS.supervisors.join(" · ")}
								</span>
							</div>
						</div>

						<div className="thesis-detail">
							<FontAwesomeIcon
								icon={faUsers}
								className="thesis-detail-icon"
							/>
							<div>
								<span className="thesis-detail-key">
									Thesis committee
								</span>
								<span className="thesis-detail-val">
									{THESIS.committee.join(" · ")}
								</span>
							</div>
						</div>

						<div className="thesis-detail">
							<FontAwesomeIcon
								icon={faCalendarDay}
								className="thesis-detail-icon"
							/>
							<div>
								<span className="thesis-detail-key">
									Defense
								</span>
								<span className="thesis-detail-val">
									{THESIS.defenseDate}
								</span>
							</div>
						</div>

						<div className="thesis-detail">
							<FontAwesomeIcon
								icon={faGraduationCap}
								className="thesis-detail-icon"
							/>
							<div>
								<span className="thesis-detail-key">
									Format
								</span>
								<span className="thesis-detail-val">
									{THESIS.format}
								</span>
							</div>
						</div>

						{THESIS.manuscriptPdf && (
							<a
								className="thesis-manuscript-btn"
								href={THESIS.manuscriptPdf}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faDownload} />
								Download full manuscript
							</a>
						)}
					</section>

					{/* -------- Publications -------- */}
					<section className="thesis-publications">
						<div className="thesis-section-head reveal reveal-2">
							<h2 className="thesis-section-title">
								Publications in the compendium
							</h2>
							<p className="thesis-section-sub">
								The five peer-reviewed articles that make up this
								thesis. Expand any card to read its abstract.
							</p>
						</div>

						<div className="thesis-pub-list">
							{publications.map((publication, index) => (
								<div
									className="reveal"
									style={{
										animationDelay: `${0.15 + index * 0.08}s`,
									}}
									key={index}
								>
									<PublicationCard
										publication={publication}
										index={index}
									/>
								</div>
							))}
						</div>
					</section>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Thesis;
