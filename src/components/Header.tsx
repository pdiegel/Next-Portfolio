"use client";

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { useActiveSection } from "@/components/useActiveSection";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const svgClass = "h-[1.2rem] w-[1.2rem]";

const links = [
  { href: "#about" as const, label: "Home", id: "about" },
  { href: "#projects" as const, label: "Projects", id: "projects" },
  { href: "#contact" as const, label: "Contact", id: "contact" },
];

export default function Header() {
  const sectionIds = ["about", "projects", "contact"];
  const activeId = useActiveSection(sectionIds, { headerOffset: 68 });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 bg-background-opaque text-foreground fixed w-full top-0 left-0 z-50 shadow-sm shadow-[color:var(--border)] backdrop-blur-md">
      <div className="flex justify-end space-x-4 max-w-6xl mx-auto w-full px-4">
        <div className="sm:hidden flex items-center space-x-4">
          {/* Mobile Nav Menu */}
          <nav>
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer"
                >
                  {isOpen ? (
                    <Cross2Icon className={`${svgClass} `} />
                  ) : (
                    <HamburgerMenuIcon className={`${svgClass} `} />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {links.map((link) => (
                  <DropdownMenuItem
                    className="cursor-pointer font-medium touch-manipulation"
                    key={link.id}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={
                        link.id === activeId
                          ? "text-primary font-bold"
                          : "opacity-70 hover:opacity-100"
                      }
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        {/* Desktop Nav Menu */}

        <nav className="hidden sm:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`flex items-center cursor-pointer hover:text-primary font-medium transition-colors ${
                link.id === activeId
                  ? "text-primary font-bold"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
