"use client";

import Nav from "./nav";
import NavItem from "./navitem";
import DropDownIcon from "@/public/dropdown.svg";
import DropDownMenu from "./dropdownmenu";
import FromLeftEntryDiv from "./fromLeftEntryDiv";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleLinkChange = () => {
    setOpen(false);
  };
  return (
    <header>
      <FromLeftEntryDiv className="headerItems">
        <Link className="logoLink" href="/">
          {" "}
          <h2>Philip Diegel</h2>
        </Link>
        <Nav>
          <ul className="hamburgerMenu">
            <NavItem icon={<DropDownIcon />} open={open} handleOpen={setOpen}>
              {/* Dropdown goes here */}
              <DropDownMenu handleLinkChange={handleLinkChange} />
            </NavItem>
          </ul>
          <div className="navLinks">
            <DropDownMenu handleLinkChange={handleLinkChange} />
          </div>
        </Nav>
      </FromLeftEntryDiv>
    </header>
  );
}
