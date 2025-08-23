"use client";

import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CubeIcon,
  HomeIcon,
  EnvelopeClosedIcon,
  HamburgerMenuIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    setCurrentURL(window.location.pathname);
  }, []);

  return (
    <header className="p-4 bg-stone-200">
      <nav className="flex items-center space-x-4 justify-between max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">Philip Diegel</h1>
        <div className="sm:hidden">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className="flex items-center justify-center p-2 bg-stone-50 rounded-md shadow-md">
              {isOpen ? (
                <Cross2Icon className="w-6 h-6 cursor-pointer" />
              ) : (
                <HamburgerMenuIcon className="w-6 h-6 cursor-pointer" />
              )}
            </PopoverTrigger>
            <PopoverContent className="sm:hidden">
              <ul className="flex flex-col space-y-2">
                <li
                  className={`flex items-center space-x-2 rounded py-2 px-4 hover:bg-stone-200 text-stone-800 transition-all cursor-pointer ${currentURL === "/" ? "bg-stone-300" : ""}`}
                >
                  <HomeIcon className="w-4 h-4" />
                  <Link href="/" className={`px-1 `}>
                    Home
                  </Link>
                </li>
                <li
                  className={`flex items-center space-x-2 rounded py-2 px-4 hover:bg-stone-200 text-stone-800 transition-all cursor-pointer ${currentURL === "/projects" ? "bg-stone-300" : ""}`}
                >
                  <CubeIcon className="w-4 h-4" />
                  <Link href="/projects" className="px-1">
                    Projects
                  </Link>
                </li>
                <li
                  className={`flex items-center space-x-2 rounded py-2 px-4 hover:bg-stone-200 text-stone-800 transition-all cursor-pointer ${currentURL === "/contact" ? "bg-stone-300" : ""}`}
                >
                  <EnvelopeClosedIcon className="w-4 h-4" />
                  <Link href="/contact" className="px-1">
                    Contact
                  </Link>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
        <nav className="hidden sm:flex space-x-4">
          <Link
            href="/"
            className={`flex items-center space-x-2 rounded py-2 px-4 hover:bg-stone-200 text-stone-800 transition-all cursor-pointer ${currentURL === "/" ? "bg-stone-300" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`flex items-center space-x-2 rounded py-2 px-4 hover:bg-stone-200 text-stone-800 transition-all cursor-pointer ${currentURL === "/projects" ? "bg-stone-300" : ""}`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`flex items-center space-x-2 rounded py-2 px-4 hover:bg-stone-200 text-stone-800 transition-all cursor-pointer ${currentURL === "/contact" ? "bg-stone-300" : ""}`}
          >
            Contact
          </Link>
        </nav>
      </nav>
    </header>
  );
}
