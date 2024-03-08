import Head from "next/head";
import PortraitImg from "@/public/philip.jpg";
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
        <div className="hero">
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
        </div>
      </main>
    </>
  );
}
