"use client";

import {
  Cross2Icon,
  CubeIcon,
  EnvelopeClosedIcon,
  HamburgerMenuIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const svgClass = "h-[1.2rem] w-[1.2rem]";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 bg-background-opaque text-foreground fixed w-full top-0 left-0 z-50 shadow-sm shadow-[color:var(--border)] backdrop-blur-md flex justify-end">
      <div className="sm:hidden flex items-center space-x-4">
        <ModeToggle />
        {/* Mobile Nav Menu */}
        <nav>
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button variant="outline" size="icon" className="cursor-pointer">
                {isOpen ? (
                  <Cross2Icon className={`${svgClass} `} />
                ) : (
                  <HamburgerMenuIcon className={`${svgClass} `} />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className={`cursor-pointer`}>
                <HomeIcon className="w-3 h-3" />
                <a href="/" className="">
                  Home
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <CubeIcon className="w-3 h-3" />
                <a href="#projects" className="">
                  Projects
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <EnvelopeClosedIcon className="w-3 h-3" />
                <a href="#contact" className="">
                  Contact
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
      {/* Desktop Nav Menu */}
      <nav className="hidden sm:flex space-x-6">
        <Link
          href="/"
          className="flex items-center rounded-md transition-all cursor-pointer hover:text-primary font-medium"
        >
          Home
        </Link>
        <Link
          href="#projects"
          className="flex items-center rounded-md transition-all cursor-pointer hover:text-primary font-medium"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="flex items-center rounded-md transition-all cursor-pointer hover:text-primary font-medium"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
