import Head from "next/head";
import Summary from "@/components/about/summary";
import ProfessionalSkills from "@/components/about/employment/employment";
import Skills from "@/components/about/skills";
import Education from "@/components/about/education/education";
import Certifications from "@/components/about/certifications";
import styles from "@/styles/About.module.css";
import FromBelowEntryDiv from "@/components/fromBelowEntryDiv";
import React from "react";

export default function About() {
  return (
    <>
      <Head>
        <title>Philip Diegel - About</title>
      </Head>
      <main className="content wrapper">
        <div className={styles.contentWrapper}>
          <FromBelowEntryDiv className={styles.standaloneContent}>
            <Summary />
          </FromBelowEntryDiv>

          <FromBelowEntryDiv className={styles.standaloneContent}>
            <ProfessionalSkills />
          </FromBelowEntryDiv>

          <FromBelowEntryDiv className={styles.standaloneContent}>
            <Skills />
          </FromBelowEntryDiv>

          <FromBelowEntryDiv className={styles.standaloneContent}>
            <Education />
          </FromBelowEntryDiv>

          <FromBelowEntryDiv className={styles.standaloneContent}>
            <Certifications
              certificateName="Python Coding Specialist"
              issuer="Knowledge Pillars"
              date="March 2023"
              blockchainID="781963"
              URL="https://www.credential.net/88eee900-f28e-4f0a-be52-8b452bf40194"
            />
          </FromBelowEntryDiv>
        </div>
      </main>
    </>
  );
}
