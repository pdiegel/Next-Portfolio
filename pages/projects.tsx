import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import FromLeftEntryDiv from "@/components/fromLeftEntryDiv";
import RepoCard from "@/components/projects/repoCard";
import type { Repo, Repos } from "@/interfaces/repos";
import DatabaseJobSearch from "@/public/project images/database program/Close Job Search.webp";
import DatabaseFEMA from "@/public/project images/database program/FEMA Attachment Generator.webp";
import DatabaseFileEntry from "@/public/project images/database program/File Entry.webp";
import DatabaseIntakeSheet from "@/public/project images/database program/Intake Sheet.webp";
import DatabaseWebsiteSearch from "@/public/project images/database program/Website Search.webp";
import InkEmbersHome from "@/public/project images/ink embers/InkEmbers.webp";
import ReelRecsHomePage from "@/public/project images/reelrecs/ReelRecs.webp";
import ReelRecsMoviePage from "@/public/project images/reelrecs/ReelRecs2.webp";
import SpiritAbout from "@/public/project images/spirit search/AboutPage.webp";
import SpiritExplore from "@/public/project images/spirit search/ExplorePage.webp";
import SpiritFavorites from "@/public/project images/spirit search/FavoritesPage.webp";
import SpiritHome from "@/public/project images/spirit search/HomePage.webp";
import SpiritHome2 from "@/public/project images/spirit search/HomePage2.webp";
import styles from "@/styles/Projects.module.css";

const projectPreviews = [
	{
		name: "Spirit-Search",
		images: [
			SpiritHome,
			SpiritHome2,
			SpiritAbout,
			SpiritExplore,
			SpiritFavorites,
		],
	},
	{
		name: "DatabaseManagementHelper",
		images: [
			DatabaseJobSearch,
			DatabaseFEMA,
			DatabaseFileEntry,
			DatabaseIntakeSheet,
			DatabaseWebsiteSearch,
		],
	},
	{
		name: "ReelRecsMovieRecommendation",
		images: [ReelRecsHomePage, ReelRecsMoviePage],
	},
	{
		name: "Responsive-Business-Website",
		images: [InkEmbersHome],
	},
];

const projectNicknames = {
	"Spirit-Search": "Spirit Search",
	DatabaseManagementHelper: "Database Helper",
	ReelRecsMovieRecommendation: "ReelRecs",
	FloridaPropertyData: "Land Parcel Data Retriever",
	"Next-Portfolio": "Portfolio Website",
	JobRecordManager: "Job Record Manager",
	"FEMA-Image-Attachment-Generator": "FEMA Attachment Generator",
	ChecklistGUI: "Checklist GUI",
	SecurePassGen: "Password Generator",
	FileUtils: "Windows File Utilities",
	DownloadsFolderOrganizer: "Downloads Folder Organizer",
	"Responsive-Business-Website": "Business Website",
} as { [key: string]: string };

const featuredProjects = ["Spirit-Search", "DatabaseManagementHelper"];

const projectBlacklist = ["pdiegel"];

export default function Projects({ repos }: { repos: Repos }) {
	const [fetchedRepos, setRepos] = useState(repos);

	const sortRepos = useCallback((repos: Repos) => {
		let sortedRepos = [...repos];
		sortedRepos = sortedRepos.sort(
			(a, b) =>
				new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
		);
		return sortedRepos.sort((a, b) => {
			if (
				featuredProjects.includes(a.name) &&
				!featuredProjects.includes(b.name)
			) {
				return -1;
			} else if (
				!featuredProjects.includes(a.name) &&
				featuredProjects.includes(b.name)
			) {
				return 1;
			} else {
				return 0;
			}
		});
	}, []);

	useEffect(() => {
		setRepos((r: Repos) =>
			sortRepos([...r]).filter((repo) => !projectBlacklist.includes(repo.name)),
		);
	}, [sortRepos]);

	const noReposContents = <p>No repos found!</p>;

	const repoCards = fetchedRepos.map((repo: Repo) => {
		// Deconstruct the repo object into the props of RepoCard
		return (
			<RepoCard
				key={repo.id}
				{...repo}
				projectPreviews={projectPreviews}
				projectNicknames={projectNicknames}
				featured={featuredProjects.includes(repo.name)}
			/>
		);
	});

	const validRepoContents = (
		<>
			<section className="darkSection">
				<div className="wrapper">
					<FromLeftEntryDiv>
						<h1 className={styles.heading}>My Projects</h1>
					</FromLeftEntryDiv>
				</div>
			</section>

			<section>
				<div className={`wrapper ${styles.sectionContents}`}>
					<div className={styles.cardWrapper}>{repos && repoCards}</div>
				</div>
			</section>
		</>
	);

	return (
		<>
			<Head>
				<title>Philip Diegel - Projects</title>
			</Head>
			<main className="content">
				{repos.length === 0 && noReposContents}
				{/* If we have repos, we will display them in the card wrapper */}
				{repos.length > 0 && validRepoContents}
			</main>
		</>
	);
}

export async function getStaticProps() {
	// Fetch repos from GitHub, using static props to avoid rate limiting.
	// We only need to update the repos every hour, so this is fine.
	try {
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const res = await fetch(`${baseUrl}/repos`);
		const repos = await res.json();

		return {
			props: {
				repos,
			},
			// Revalidate every hour (3600 seconds)
			revalidate: 3600,
		};
	} catch (e) {
		console.error("Error fetching repos:", e);
		return {
			props: {
				repos: [],
			},
			// Revalidate every hour (3600 seconds)
			revalidate: 3600,
		};
	}
}
