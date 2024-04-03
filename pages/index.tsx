import Head from "next/head";
import PortraitImg from "@/public/philip.webp";
import AboutImg from "@/public/programming.png";
import Image from "next/image";
import Link from "next/link";
import FromBelowEntryDiv from "@/components/fromBelowEntryDiv";
import React from "react";
import styles from "@/styles/Home.module.css";

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
                  Software developer in Sarasota, Florida. Passionate about
                  innovation and coding, committed to bringing creativity and
                  efficiency to every project.
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
            </FromBelowEntryDiv>
            <Image
              src={PortraitImg}
              alt="Portrait"
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
                  Originally from Nokomis, Florida, my lifelong enthusiasm for
                  video games has steered me towards a career in computer
                  programming.
                  <br />
                  <br />
                  With a strong foundation in Python and recent advancements in
                  learning JavaScript, React.js, and Next.js, I am eagerly
                  embracing the challenges and opportunities in the programming
                  landscape.
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
