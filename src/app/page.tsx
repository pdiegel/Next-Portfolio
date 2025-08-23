import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigDown } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="px-4">
        <section
          id="home"
          className="relative min-h-screen flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl mb-4 text-center">
            Hello, I'm Phil.
            <br />
            I'm a software developer.
          </h2>
          <div className="flex space-x-4">
            <Button className="bg-primary text-primary-foreground cursor-pointer">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              className="bg-secondary text-secondary-foreground cursor-pointer hover:bg-ring"
              variant="outline"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
          <ArrowBigDown className="absolute animate-[bounce_1s_ease-in-out_infinite] bottom-20" />
        </section>
        <section id="projects" className="min-h-screen bg-red-600">
          {/* Projects section content goes here */}
        </section>
        <section id="contact" className="min-h-screen bg-yellow-500">
          {/* Contact section content goes here */}
        </section>
      </main>
    </div>
  );
}
