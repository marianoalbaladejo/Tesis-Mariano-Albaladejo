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
		title: "Multimodal Learning Analytics for Assessing Soft Skills in Cyber-Defence Exercises",
		authors: [
			"M. Albaladejo González",
			"J. A. Ruipérez Valiente",
			"F. Gómez Mármol",
		],
		journal: "IEEE Transactions on Learning Technologies",
		year: 2024,
		volume: "17",
		pages: "512–528",
		type: "Journal article",
		status: "Published",
		quartile: "Q1",
		doi: "10.1109/TLT.2024.0000000",
		url: "https://doi.org/10.1109/TLT.2024.0000000",
		pdf: "/publications/paper-1.pdf",
		tags: ["Multimodal analytics", "Cybersecurity", "Soft skills"],
		abstract:
			"Cyber-defence training increasingly relies on realistic exercises where technical proficiency alone does not guarantee success. This work proposes a multimodal learning analytics pipeline that fuses network telemetry, interaction logs, and physiological signals to estimate soft-skill performance — communication, coordination, and decision-making under pressure — during team-based cyber ranges. We validate the approach on data collected from professional exercises and show that multimodal fusion outperforms single-source baselines when predicting expert-assigned competency scores.",
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
