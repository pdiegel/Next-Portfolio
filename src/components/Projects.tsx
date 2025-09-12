"use client";
import { useCallback, useEffect, useState } from "react";
import DatabaseHelperImage from "@/../public/project images/database program/image.webp";
import InkEmbersImage from "@/../public/project images/ink embers/image.webp";
import NCParcelSearchImage from "@/../public/project images/nc parcel search/image.webp";
import PortfolioWebsiteImage from "@/../public/project images/portfolio website/image.webp";
import ReelRecsImage from "@/../public/project images/reelrecs/image.webp";
import SpiritSearchImage from "@/../public/project images/spirit search/image.webp";
import RepoCard from "@/components/repoCard";
import { SkeletonRepoCard } from "@/components/SkeletonRepoCard";
import type { Repo, Repos } from "@/interfaces/repos";
import { Skeleton } from "./ui/skeleton";

const projectPreviews = [
  {
    name: "Spirit-Search",
    images: [SpiritSearchImage],
  },
  {
    name: "DatabaseManagementHelper",
    images: [DatabaseHelperImage],
  },
  {
    name: "ReelRecsMovieRecommendation",
    images: [ReelRecsImage],
  },
  {
    name: "Responsive-Business-Website",
    images: [InkEmbersImage],
  },
  {
    name: "NC-Parcel-Search",
    images: [NCParcelSearchImage],
  },
  {
    name: "Next-Portfolio",
    images: [PortfolioWebsiteImage],
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

const featuredProjects = ["Spirit-Search", "NC-Parcel-Search"];

const projectBlacklist = ["pdiegel"];

export default function Projects() {
  const [repos, setRepos] = useState([] as Repos);
  const [isLoading, setIsLoading] = useState(true);

  // Sort repos by latest push date, then by featured projects
  const sortRepos = useCallback((repos: Repos) => {
    let sortedRepos = [...repos];
    sortedRepos = sortedRepos.sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
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
    setIsLoading(true);
    async function fetchRepos() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const res = await fetch(`${baseUrl}/repos`);
        const repos = await res.json();
        setRepos(
          sortRepos([...repos]).filter(
            (repo) => !projectBlacklist.includes(repo.name),
          ),
        );
      } catch (e) {
        console.error("Error fetching repos:", e);
      }
    }
    fetchRepos();
  }, [sortRepos]);

  useEffect(() => {
    if (repos.length === 0) return;
    setIsLoading(false);
  }, [repos]);

  if (isLoading) {
    const skeletons = [1, 2, 3].map((i) => <SkeletonRepoCard key={i} />);
    return (
      <section className="grid grid-cols-1 gap-8">
        <Skeleton className="h-10 w-[21ch]" />
        {skeletons}
      </section>
    );
  }

  const noReposContents = <p>No repos found!</p>;

  const repoCards = repos.map((repo: Repo) => {
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
      <section>
        <h2 className="text-4xl mb-8">My Projects</h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repos && repoCards}
      </section>
    </>
  );

  return (
    <>
      {repos.length === 0 && noReposContents}
      {/* If we have repos, we will display them */}
      {repos.length > 0 && validRepoContents}
    </>
  );
}
