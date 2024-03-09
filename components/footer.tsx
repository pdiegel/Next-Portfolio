import NavItem from "./navitem";
import EmailIcon from "@/public/email.svg";
import GitHubIcon from "@/public/github.svg";
import LinkedInIcon from "@/public/linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footerItems wrapper">
        <div className="footerIcons">
          <NavItem icon={<EmailIcon />} url="mailto:philipdiegel@gmail.com" />
          <NavItem icon={<GitHubIcon />} url="https://github.com/pdiegel" />
          <NavItem
            icon={<LinkedInIcon />}
            url="https://www.linkedin.com/in/philip-diegel"
          />
        </div>
        <p className="text-center">
          © 2024 Philip Diegel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
