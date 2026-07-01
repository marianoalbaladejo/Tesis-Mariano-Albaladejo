import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDownload,
	faLink,
	faChevronDown,
	faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/publicationCard.css";

const PublicationCard = (props) => {
	const { publication, index } = props;
	const {
		title,
		authors,
		journal,
		year,
		volume,
		pages,
		status,
		quartile,
		doi,
		url,
		pdf,
		tags,
		abstract,
	} = publication;

	const [open, setOpen] = useState(false);
	const abstractRef = useRef(null);

	const number = String(index + 1).padStart(2, "0");

	// Format authors, bolding the thesis author (first entry by convention).
	const authorList = authors ? authors.join(", ") : "";

	const statusClass =
		status === "Published"
			? "pub-status--published"
			: status === "Accepted"
			? "pub-status--accepted"
			: "pub-status--review";

	return (
		<article className={`pub-card ${open ? "pub-card--open" : ""}`}>
			<div className="pub-card-spine" aria-hidden="true">
				<span className="pub-card-number">{number}</span>
			</div>

			<div className="pub-card-body">
				<div className="pub-card-meta">
					<span className="pub-journal">{journal}</span>
					<span className="pub-dot" aria-hidden="true">
						•
					</span>
					<span className="pub-year">{year}</span>
					{quartile && (
						<span className="pub-badge pub-badge--quartile">
							{quartile}
						</span>
					)}
					{status && (
						<span className={`pub-badge ${statusClass}`}>
							{status}
						</span>
					)}
				</div>

				<h3 className="pub-title">{title}</h3>

				{authorList && <p className="pub-authors">{authorList}</p>}

				{(volume || pages) && (
					<p className="pub-citation">
						{volume && <span>Vol. {volume}</span>}
						{volume && pages && pages !== "—" && ", "}
						{pages && pages !== "—" && <span>pp. {pages}</span>}
					</p>
				)}

				{tags && tags.length > 0 && (
					<div className="pub-tags">
						{tags.map((tag, i) => (
							<span className="pub-tag" key={i}>
								{tag}
							</span>
						))}
					</div>
				)}

				<div className="pub-actions">
					<button
						type="button"
						className="pub-toggle"
						aria-expanded={open}
						aria-controls={`abstract-${number}`}
						onClick={() => setOpen((v) => !v)}
					>
						<FontAwesomeIcon
							icon={faChevronDown}
							className="pub-toggle-chevron"
						/>
						{open ? "Hide abstract" : "Read abstract"}
					</button>

					<div className="pub-buttons">
						{pdf ? (
							<a
								className="pub-btn pub-btn--primary"
								href={pdf}
								target="_blank"
								rel="noreferrer"
								download
							>
								<FontAwesomeIcon icon={faDownload} />
								<span>PDF</span>
							</a>
						) : (
							<span className="pub-btn pub-btn--disabled">
								<FontAwesomeIcon icon={faDownload} />
								<span>PDF</span>
							</span>
						)}

						{url ? (
							<a
								className="pub-btn pub-btn--ghost"
								href={url}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faLink} />
								<span>View online</span>
							</a>
						) : (
							<span className="pub-btn pub-btn--ghost pub-btn--disabled">
								<FontAwesomeIcon icon={faLink} />
								<span>Coming soon</span>
							</span>
						)}
					</div>
				</div>

				<div
					id={`abstract-${number}`}
					className="pub-abstract-wrap"
					style={{
						maxHeight: open
							? `${abstractRef.current?.scrollHeight ?? 800}px`
							: "0px",
					}}
				>
					<div className="pub-abstract" ref={abstractRef}>
						<div className="pub-abstract-inner">
							<FontAwesomeIcon
								icon={faQuoteRight}
								className="pub-abstract-quote"
							/>
							<p>{abstract}</p>
							{doi && (
								<p className="pub-doi">
									DOI:{" "}
									<a
										href={`https://doi.org/${doi}`}
										target="_blank"
										rel="noreferrer"
									>
										{doi}
									</a>
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default PublicationCard;
