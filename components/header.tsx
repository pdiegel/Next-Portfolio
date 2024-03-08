import Nav from "./nav";
import NavItem from "./navitem";
import DropDownIcon from "@/public/dropdown.svg";
import DropDownMenu from "./dropdownmenu";
import FromLeftEntryDiv from "./fromLeftEntryDiv";

export default function Header() {
  return (
    <header>
      <FromLeftEntryDiv className="headerItems">
        <h1>Philip Diegel</h1>
        <Nav>
          {/* <NavItem icon={<EmailIcon />} url="mailto:philipdiegel@gmail.com" />
                    <NavItem icon={<GitHubIcon />} url="https://github.com/pdiegel" />
                    <NavItem icon={<LinkedInIcon />} url="https://www.linkedin.com/in/philip-diegel" /> */}

          <div className="hamburgerMenu">
            <NavItem icon={<DropDownIcon />}>
              {/* Dropdown goes here */}
              <DropDownMenu />
            </NavItem>
          </div>
          <div className="navLinks">
            <DropDownMenu />
          </div>
        </Nav>
      </FromLeftEntryDiv>
    </header>
  );
}
