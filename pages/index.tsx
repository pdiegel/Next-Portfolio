import Head from "next/head";
import PortraitImg from "@/public/philip.jpg";
import AboutImg from "@/public/programming.png";
import Image from "next/image";
import Link from "next/link";
import FromBelowEntryDiv from "@/components/fromBelowEntryDiv";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Philip Diegel - Portfolio</title>
      </Head>
      <main>
        <section className="darkSection">
          <div className="sectionContents wrapper column">
            <FromBelowEntryDiv className="sectionText">
              <h1>Hi, I&apos;m Philip!</h1>

              <p>
                Software developer in Sarasota, Florida. Passionate about
                innovation and coding, committed to bringing creativity and
                efficiency to every project.
              </p>
              <div className="home-buttons">
                <Link className="primary-button" href="/projects">
                  My Projects
                </Link>
                <Link className="secondary-button" href="/contact">
                  Contact Me
                </Link>
              </div>
            </FromBelowEntryDiv>
            <Image className="portrait" src={PortraitImg} alt="Portrait" />
          </div>
        </section>
        <section>
          <div className="sectionContents reverseRow wrapper column">
            <FromBelowEntryDiv className="sectionText">
              <h2>About me</h2>
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
              <div className="home-buttons">
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
