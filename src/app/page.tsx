import type { UrlObject } from "node:url";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    href: { pathname: "mailto:philipdiegel@gmail.com" } as UrlObject,
    icon: Mail,
    label: "Email",
  },
  {
    href: { pathname: "https://github.com/pdiegel" } as UrlObject,
    icon: GitHubLogoIcon,
    label: "GitHub",
  },
  {
    href: { pathname: "https://linkedin.com/in/philip-diegel" } as UrlObject,
    icon: LinkedInLogoIcon,
    label: "LinkedIn",
  },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground" id="top">
      <Header />
      <main>
        <section
          id="about"
          className="flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl md:mx-auto px-4 md:px-8 pt-24 md:pt-36 gap-8"
        >
          <div className="flex flex-col space-y-4 justify-center">
            <div className="space-y-2">
              <h2 className="text-4xl">Hello, I'm Phil.</h2>
              <p className="text-muted-foreground max-w-[60ch]">
                I'm a Software Developer based in Venice, Florida. I love
                solving problems, coding, and getting creative with technology.
                I'm passionate about making life more enjoyable through
                innovative software solutions.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-primary text-primary-foreground cursor-pointer">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                className="cursor-pointer hover:bg-ring"
                variant="outline"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex space-x-4">
              {/* Social Links */}
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Button
                  key={label}
                  className="cursor-pointer"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <Link href={href} target="_blank" aria-label={label}>
                    <Icon />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="h-full">
            <Image
              src="/philip.webp"
              alt="Image"
              className="rounded-md object-cover outline outline-[var(--muted)] w-auto aspect-[6/7]"
              height={356}
              width={250}
              priority
            />
          </div>
        </section>
        {/* Projects */}
        <section
          id="projects"
          className="max-w-6xl md:mx-auto px-4 md:px-8 pt-24 md:pt-36"
        >
          <Projects />
        </section>
        {/* Contact */}
        <section
          id="contact"
          className="max-w-6xl md:mx-auto px-4 md:px-8 pt-24 md:pt-36"
        >
          <Contact />
        </section>
      </main>
      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="max-w-6xl md:mx-auto p-6">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Philip Diegel. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
