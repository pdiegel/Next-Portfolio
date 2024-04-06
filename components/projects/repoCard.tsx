import Link from "next/link";
import styles from "@/styles/Projects.module.css";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import FromBelowEntryDiv from "../fromBelowEntryDiv";
import ImageCarousel from "../imgCarousel";

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

  return (
    <FromBelowEntryDiv className={cardClass}>
      {previewCard && <ImageCarousel images={projectPreview.images} />}
      <div className="flex-col gap-20 min-w-40">
        <div className="flex-col gap-10">
          <h2>
            {Object.keys(projectNicknames).includes(name)
              ? projectNicknames[name]
              : name}
          </h2>
          <p>{description}</p>
        </div>

        <div className="flex-col gap-20">
          <div className="flex-col gap-10">
            <h3>Languages Used:</h3>
            <div className={styles.languageIcons}>
              {languages &&
                languages.map((value, index) => {
                  if (value in languageIconMap) {
                    return (
                      <Image
                        className={styles.languageIcon}
                        key={index}
                        src={languageIconMap[value]}
                        alt={value}
                        width={30}
                        height={30}
                      />
                    );
                  }
                  return <span key={index}>{value}, </span>;
                })}
            </div>
          </div>
          <div className={styles.cardLinks}>
            {homepage && (
              <Link href={homepage} className="primary-button" target="_blank">
                View Live
              </Link>
            )}
            {html_url && (
              <Link
                href={html_url}
                className={`secondary-button ${styles.darkText}`}
                target="_blank"
              >
                View on GitHub
              </Link>
            )}
          </div>
          <p className="grayText">Last Updated: {lastUpdated}</p>
        </div>
      </div>
    </FromBelowEntryDiv>
  );
}
