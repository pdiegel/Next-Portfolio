import Link from "next/link";
import styles from "@/styles/Projects.module.css";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import FromBelowEntryDiv from "../fromBelowEntryDiv";
import ImageCarousel from "../imgCarousel";
import NewTabIcon from "@/public/newtab.svg";

const languageIconMap: {
  [key: string]: string;
} = require("@/public/languages/language_icon_map.json");

export default function RepoCard({
  description,
  html_url,
  name,
  languages_url,
  homepage,
  updated_at,
  projectPreviews,
  projectNicknames,
  featured,
}: {
  description: string;
  html_url: string;
  name: string;
  languages_url: string;
  homepage: string;
  updated_at: string;
  projectPreviews: { name: string; images: StaticImageData[] }[];
  projectNicknames: { [key: string]: string };
  featured: boolean;
}) {
  const [languages, setLanguages] = useState([] as string[]);

  useEffect(() => {
    const cachedLanguages = localStorage.getItem(`languages_${name}`);
    if (typeof cachedLanguages === "string" && cachedLanguages.length > 0) {
      setLanguages(JSON.parse(cachedLanguages));
      return;
    }
    fetch(languages_url)
      .then((req) => {
        return req.status === 200 && req.json();
      })
      .then((data) => {
        localStorage.setItem(
          `languages_${name}`,
          JSON.stringify(Object.keys(data))
        );
        setLanguages(Object.keys(data));
      })
      .catch((err) => {
        console.error(`Error fetching data: ${err}`);
      });
  }, [languages_url, name]);

  const lastUpdated = new Date(updated_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const projectPreview = projectPreviews.find(
    (project) => project.name === name
  );

  const previewCard =
    projectPreview?.images?.length !== undefined &&
    projectPreview?.images.length > 0;

  const cardClass = previewCard
    ? featured
      ? styles.featuredCard
      : styles.card
    : styles.cardNoPreview;

  const projectName = Object.keys(projectNicknames).includes(name)
    ? projectNicknames[name]
    : name;

  return (
    <FromBelowEntryDiv className={cardClass}>
      {previewCard && (
        <ImageCarousel
          images={projectPreview.images}
          projectName={projectName}
        />
      )}
      <div className="flex-col gap-20 min-w-40 space-between p-20">
        <div className="flex-col gap-10">
          <h2 aria-label="Project Name">{projectName}</h2>
          <p aria-label="Project Description">{description}</p>
        </div>

        <div className="flex-col gap-20">
          <div className="flex-col gap-10">
            <h3>Languages Used:</h3>
            <ul
              className={styles.languageIcons}
              aria-label={"Programming languages used in " + projectName}
            >
              {languages &&
                languages.map((value, index) => {
                  if (value in languageIconMap) {
                    return (
                      <li key={`${projectName} ${value} icon`}>
                        <Image
                          className={styles.languageIcon}
                          src={languageIconMap[value]}
                          alt={value + " icon"}
                          width={30}
                          height={30}
                        />
                      </li>
                    );
                  }
                  return <span key={index}>{value}, </span>;
                })}
            </ul>
          </div>
          <div className={styles.cardLinks}>
            {homepage && (
              <Link
                href={homepage}
                className="primary-button"
                target="_blank"
                aria-label={`View ${projectName} project live. Opens in a new tab.`}
              >
                View Live
                <NewTabIcon />
              </Link>
            )}
            {html_url && (
              <Link
                href={html_url}
                className={`secondary-button ${styles.darkText}`}
                target="_blank"
                aria-label={`View ${projectName} GitHub repository. Opens in a new tab.`}
              >
                View on GitHub
                <NewTabIcon />
              </Link>
            )}
          </div>
          <p
            aria-label={"Latest date in which " + projectName + " was updated."}
          >
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>
    </FromBelowEntryDiv>
  );
}
