import Nav from "./nav";
import NavItem from "./navitem";
import DropDownIcon from "@/public/dropdown.svg";
import DropDownMenu from "./dropdownmenu";
import FromLeftEntryDiv from "./fromLeftEntryDiv";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <FromLeftEntryDiv className="headerItems">
        <Link className="logoLink" href="/">
          {" "}
          <h2>Philip Diegel</h2>
        </Link>
        <Nav>
          <ul className="hamburgerMenu">
            <NavItem icon={<DropDownIcon />}>
              {/* Dropdown goes here */}
              <DropDownMenu />
            </NavItem>
          </ul>
          <div className="navLinks">
            <DropDownMenu />
          </div>
        </Nav>
      </FromLeftEntryDiv>
    </header>
  );
}
