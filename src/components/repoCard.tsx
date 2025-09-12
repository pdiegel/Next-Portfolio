import type { UrlObject } from "node:url";
import { StarsIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const languageIconMap: {
  [key: string]: string;
} = require("@/../public/languages/language_icon_map.json");

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
  html_url: UrlObject;
  name: string;
  languages_url: string;
  homepage: UrlObject;
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
          JSON.stringify(Object.keys(data)),
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
    (project) => project.name === name,
  );

  const previewCard =
    projectPreview?.images?.length !== undefined &&
    projectPreview?.images.length > 0;

  const projectName = Object.keys(projectNicknames).includes(name)
    ? projectNicknames[name]
    : name;

  return (
    <Card
      className={`md:flex-row-reverse p-4 md:p-6 justify-between gap-12 rounded-md ${previewCard ? "col-span-1 md:col-span-2" : "flex-wrap"}`}
    >
      {/* Project Image */}
      {previewCard && (
        <Button
          variant="outline"
          className={`max-w-full h-auto p-0 md:max-w-[50%]`}
        >
          <Image
            className="overflow-hidden object-cover object-top rounded-md aspect-video h-full w-full"
            src={projectPreview?.images[0]}
            alt={`${projectName} project preview`}
            decoding="async"
          />
        </Button>
      )}
      {/* Project Details */}
      <div className="flex flex-col max-w-[55ch] gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-6 items-center">
            <h2
              className="text-2xl text-card-foreground"
              aria-label="Project Name"
            >
              {projectName}
            </h2>
            {featured && (
              <Badge className="bg-primary text-primary-foreground flex items-center gap-2">
                <StarsIcon /> Featured
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-card-foreground text-lg">Languages Used:</h3>
          <ul
            className="flex flex-wrap gap-2"
            aria-label={`Programming languages used in ${projectName}`}
          >
            {languages?.map((value) => {
              if (value in languageIconMap) {
                return (
                  <li key={`${projectName} ${value} icon`}>
                    <Image
                      className="rounded-md"
                      src={languageIconMap[value]}
                      alt={`${value} icon`}
                      width={30}
                      height={30}
                    />
                  </li>
                );
              }
              return (
                <span key={`${projectName} ${value} text`}>{value}, </span>
              );
            })}
          </ul>
        </div>
        {/* Links */}
        <div className="flex flex-wrap gap-4 items-center">
          {homepage && (
            <Button variant="outline" asChild>
              <Link
                href={homepage}
                target="_blank"
                aria-label={`View ${projectName} project live. Opens in a new tab.`}
              >
                View Live
              </Link>
            </Button>
          )}
          {html_url && (
            <Button variant="outline" asChild>
              <Link
                href={html_url}
                target="_blank"
                aria-label={`View ${projectName} GitHub repository. Opens in a new tab.`}
              >
                View on GitHub
              </Link>
            </Button>
          )}
        </div>
        {/* Updated At */}
        <p className="text-muted-foreground text-sm mt-auto">
          Last Updated: {lastUpdated}
        </p>
      </div>
    </Card>
  );
}
