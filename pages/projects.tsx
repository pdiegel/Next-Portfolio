import Head from "next/head";
import RepoCard from "@/components/projects/repoCard";
import React, { useState, useEffect, useCallback } from "react";
import styles from "@/styles/Projects.module.css";
import SelectionBox from "@/components/selectionbox";
import FromLeftEntryDiv from "@/components/fromLeftEntryDiv";
import { Repo, Repos } from "@/interfaces/repos";

export default function Projects({ repos }: { repos: Repos }) {
  const [fetchedRepos, setRepos] = useState(repos);
  const [sortType, setSortType] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");

  const sortRepos = useCallback(
    (repos: Repos) => {
      // Sort the repos by date or name, ascending or descending
      // Making a copy, because React doesn't behave well when you mutate state directly
      const sortedRepos = [...repos];

      console.log(sortedRepos);
      if (sortType === "date") {
        if (sortDirection === "desc") {
          console.log("sorting by date desc");
          return sortedRepos.sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          );
        } else {
          console.log("sorting by date asc");
          return sortedRepos.sort(
            (a, b) =>
              new Date(a.updated_at).getTime() -
              new Date(b.updated_at).getTime()
          );
        }
      } else {
        if (sortDirection === "desc") {
          console.log("sorting by name desc");
          return sortedRepos.sort((a, b) => b.name.localeCompare(a.name));
        } else {
          console.log("sorting by name asc");
          return sortedRepos.sort((a, b) => a.name.localeCompare(b.name));
        }
      }
    },
    [sortDirection, sortType]
  );

  useEffect(() => {
    setRepos((r: Repos) => sortRepos([...r]));
  }, [sortRepos]);

  const noReposContents = <p>No repos found!</p>;

  const repoCards = fetchedRepos.map((repo: Repo) => {
    // Deconstruct the repo object into the props of RepoCard
    return <RepoCard key={repo.id} {...repo} />;
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
        <div className="wrapper sectionText">
          <div className={styles.sortSelectors}>
            <SelectionBox
              onChange={(e) => setSortType(e.target.value)}
              name="sortType"
              label="Sort by:"
              value={sortType}
            >
              <option value="date">Date</option>
              <option value="name">Name</option>
            </SelectionBox>

            <SelectionBox
              onChange={(e) => setSortDirection(e.target.value)}
              name="sortDirection"
              label="Direction:"
              value={sortDirection}
            >
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </SelectionBox>
          </div>

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
    console.log("Fetching repos...");
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${baseUrl}/repos`);
    const repos = await res.json();
    console.log("Fetched repos successfully!");

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
