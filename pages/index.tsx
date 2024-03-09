import Head from "next/head";
import PortraitImg from "@/public/philip.jpg";
import AboutImg from "@/public/programming.jpg";
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
        <section className="hero">
          <FromBelowEntryDiv className="heroText">
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
        </section>
        <section>
          <FromBelowEntryDiv className="aboutSection">
            <h2>About me</h2>
            <p>
              Originally from Nokomis, Florida, my lifelong enthusiasm for video
              games has steered me towards a career in computer programming.
              <br />
              With a strong foundation in Python and recent advancements in
              learning JavaScript, React.js, and Next.js, I am eagerly embracing
              the challenges and opportunities in the programming landscape.
            </p>
            <div className="home-buttons">
              <Link className="primary-button" href="/projects">
                Download my Resume
              </Link>
            </div>
          </FromBelowEntryDiv>
          <Image src={AboutImg} alt="Programming" />
        </section>
      </main>
    </>
  );
}
