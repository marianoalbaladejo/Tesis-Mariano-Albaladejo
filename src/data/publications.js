// ---------------------------------------------------------------------------
// Thesis metadata and the list of publications included in the compendium.
// Replace the placeholder values (DOI, pdf, url, abstract...) with the real
// data for each article. Order matters: it is the order shown on the page.
// ---------------------------------------------------------------------------

export const THESIS = {
	title: "Multimodal systems and artificial intelligence for the evaluation and improvement of professional training",
	subtitle:
		"A compendium of five peer-reviewed articles investigating how AI and multimodal data can assess and enhance the way professionals are trained — from cybersecurity to healthcare and teacher education.",
	author: "Mariano Albaladejo González",
	program: "PhD in Computer Science",
	institution: "Universidad de Murcia · Facultad de Informática",
	defenseDate: "20 September 2026",
	supervisors: [
		"José Antonio Ruipérez Valiente",
		"Félix Gómez Mármol",
	],
	committee: [
		"Dr. Ana Martínez",
		"Dr. David López",
		"Dr. Sara Fernández",
	],
	mention: "International Doctorate mention",
	format: "Compendium of five articles",
	// Link to the full manuscript (optional). Leave "" to hide the button.
	manuscriptPdf: "",
};

const publications = [
	{
		title: "Artificial intelligence to support the training and assessment of professionals: A systematic literature review",
		authors: [
			"M. Albaladejo González",
			"J. A. Ruipérez Valiente",
			"F. Gómez Mármol",
		],
		journal: "ACM Computing Surveys",
		year: 2024,
		volume: "57 (3)",
		pages: "1-29",
		type: "Journal article",
		status: "Published",
		quartile: "D1",
		doi: "10.1145/3699712",
		url: "https://dl.acm.org/doi/full/10.1145/3699712",
		pdf: "/publications/sysReview.pdf",
		tags: ["artificial intelligence", "data fusion", "workforce training", "professional competence"],
		abstract:
			"Advances in Artificial Intelligence (AI) and sensors are significantly impacting multiple areas, including education and workplaces. Following the PRISMA methodology, this review explores the current status of using AI to support the training and assessment of professionals. We examined 83 research papers, analyzing (1) the targeted professionals, (2) the skills assessed, (3) the AI algorithms utilized, (4) the data and devices employed, (5) data fusion techniques utilized, (6) the architecture of the proposed platforms, (7) the management of ethics and privacy, and (8) validations of the proposals. The review highlights a trend in evaluating healthcare professionals (especially surgeons) motivated by the critical role of hands-on training in these professions. Besides, the review reveals that data fusion techniques and certain technologies, like transfer learning and explainable AI, are not widely utilized despite their huge potential. Finally, the review underscores that most proposals remain within the research domain, lacking the integration and maturity needed for sustained use in real-world environments. Therefore, most of the proposals are not currently available to support the training of professionals. The insights of this review can guide researchers aiming to improve the training of professionals and, consequently, their education.",
	},
	{
		title: "Explainable Stress Estimation from Physiological Signals During High-Fidelity Clinical Simulations",
		authors: [
			"M. Albaladejo González",
			"S. Fernández",
			"J. A. Ruipérez Valiente",
		],
		journal: "Computers & Education",
		year: 2024,
		volume: "210",
		pages: "104987",
		type: "Journal article",
		status: "Published",
		quartile: "Q1",
		doi: "10.1016/j.compedu.2024.104987",
		url: "https://doi.org/10.1016/j.compedu.2024.104987",
		pdf: "/publications/paper-2.pdf",
		tags: ["Healthcare", "Affective computing", "Explainability"],
		abstract:
			"High-fidelity clinical simulations expose trainees to acute stress that shapes both learning and performance. We present an explainable model that estimates stress from wearable physiological signals and links model decisions to interpretable features that instructors can act on during debriefing. The study reports strong agreement with self-reports and expert observation, and discusses how transparent feedback can support reflective practice in healthcare education.",
	},
	{
		title: "A Serious-Game Framework for Adaptive Feedback in Teacher Professional Development",
		authors: [
			"M. Albaladejo González",
			"D. López",
			"F. Gómez Mármol",
		],
		journal: "British Journal of Educational Technology",
		year: 2025,
		volume: "56",
		pages: "88–110",
		type: "Journal article",
		status: "Published",
		quartile: "Q1",
		doi: "10.1111/bjet.13500",
		url: "https://doi.org/10.1111/bjet.13500",
		pdf: "/publications/paper-3.pdf",
		tags: ["Serious games", "Teacher education", "Adaptive feedback"],
		abstract:
			"Effective teacher development depends on timely, situated feedback that is hard to deliver at scale. We introduce a serious-game framework that models classroom decision-making and delivers adaptive feedback grounded in multimodal traces of learner behaviour. A mixed-methods evaluation with pre-service teachers indicates improved decision quality and higher engagement compared with a non-adaptive control condition.",
	},
	{
		title: "Privacy-Preserving Multimodal Assessment: A Federated Learning Approach for Professional Training",
		authors: [
			"M. Albaladejo González",
			"F. Gómez Mármol",
			"J. A. Ruipérez Valiente",
		],
		journal: "Information Fusion",
		year: 2025,
		volume: "116",
		pages: "102345",
		type: "Journal article",
		status: "Accepted",
		quartile: "Q1",
		doi: "10.1016/j.inffus.2025.102345",
		url: "https://doi.org/10.1016/j.inffus.2025.102345",
		pdf: "/publications/paper-4.pdf",
		tags: ["Federated learning", "Privacy", "Data fusion"],
		abstract:
			"Multimodal assessment data are highly sensitive, which limits how they can be shared across institutions. This paper studies a federated learning approach that trains competency-assessment models across distributed training centres without centralising raw signals. We analyse the trade-off between privacy guarantees and predictive performance and offer practical guidance for deploying multimodal assessment in privacy-constrained professional settings.",
	},
	{
		title: "Toward Generalisable Competency Models: Transfer Learning Across Professional Training Domains",
		authors: [
			"M. Albaladejo González",
			"J. A. Ruipérez Valiente",
			"F. Gómez Mármol",
		],
		journal: "IEEE Access",
		year: 2026,
		volume: "14",
		pages: "—",
		type: "Journal article",
		status: "Under review",
		quartile: "Q2",
		doi: "",
		url: "",
		pdf: "",
		tags: ["Transfer learning", "Generalisation", "Assessment"],
		abstract:
			"Competency models are often tailored to a single domain, which limits their reuse. This final contribution investigates whether representations learned from one professional-training context (e.g. cybersecurity) transfer to others (e.g. healthcare and education). We evaluate several transfer-learning strategies and characterise when cross-domain transfer helps, providing a step toward more general, reusable models for evaluating professional training.",
	},
];

export default publications;
