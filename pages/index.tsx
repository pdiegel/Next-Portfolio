import Head from "next/head";
import PortraitImg from "@/public/philip.webp";
import AboutImg from "@/public/programming.png";
import Image from "next/image";
import Link from "next/link";
import FromBelowEntryDiv from "@/components/fromBelowEntryDiv";
import React from "react";
import styles from "@/styles/Home.module.css";
import NavItem from "@/components/navitem";
import EmailIcon from "@/public/email.svg";
import GitHubIcon from "@/public/github.svg";
import LinkedInIcon from "@/public/linkedin.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Philip Diegel - Portfolio</title>
      </Head>
      <main>
        <section className="darkSection">
          <div className={`${styles.sectionContents} wrapper column`}>
            <FromBelowEntryDiv className={styles.columnFlexSection}>
              <div className={styles.sectionText}>
                <h1>Hi, I&apos;m Philip!</h1>

                <p>
                  I&apos;m a Software Developer based in Sarasota, Florida. I
                  love coding and getting creative with technology, passionate
                  about making each project not only smarter but also more
                  efficient.
                </p>
              </div>
              <div className={styles.homeButtons}>
                <Link className="primary-button" href="/projects">
                  Explore My Projects
                </Link>
                <Link className="secondary-button" href="/contact">
                  Contact Me
                </Link>
              </div>
              <nav className="social" aria-label="social">
                <ul className="socialIcons">
                  <NavItem
                    icon={<EmailIcon />}
                    url="mailto:philipdiegel@gmail.com"
                  />
                  <NavItem
                    icon={<GitHubIcon />}
                    url="https://github.com/pdiegel"
                  />
                  <NavItem
                    icon={<LinkedInIcon />}
                    url="https://www.linkedin.com/in/philip-diegel"
                  />
                </ul>
              </nav>
            </FromBelowEntryDiv>
            <Image
              src={PortraitImg}
              alt="Philip Diegel Portrait"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </section>
        <section>
          <div
            className={`${styles.sectionContents} ${styles.reverseRow} wrapper column`}
          >
            <FromBelowEntryDiv className={styles.columnFlexSection}>
              <div className={styles.sectionText}>
                <h2>About Me</h2>
                <p>
                  I grew up in Nokomis, Florida, where my passion for video
                  games sparked my journey into computer programming.
                  <br />
                  <br />
                  With a solid foundation in Python and newly acquired skills in
                  TypeScript, React.js, and Next.js, I&apos;m excited to tackle
                  the evolving challenges and opportunities in the world of
                  programming.
                </p>
              </div>
              <div className={styles.homeButtons}>
                <a
                  className="primary-button"
                  href="/Resume.pdf"
                  download="resume-philip-diegel"
                >
                  Download my Resume
                </a>
              </div>
            </FromBelowEntryDiv>
            <Image src={AboutImg} alt="Programming" />
          </div>
        </section>
      </main>
    </>
  );
}
