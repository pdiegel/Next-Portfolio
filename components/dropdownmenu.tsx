import navigationUrls from "@/public/navigation.json";
import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";

function DropDownItem({
  url,
  icon,
  handleLinkChange,
  ...props
}: {
  url: string;
  icon: string;
  handleLinkChange: () => void;
  children: ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Once the component mounts, we're in the client.
    // This is necessary because window is not defined on the server.
    // We need to check if the current url matches the url of the nav item.
    setIsClient(true);
  }, []);

  return (
    <li>
      <Link
        href={url ? url : "#"}
        className={`menu-item ${
          isClient && url === window.location.pathname ? "active" : ""
        }`}
        onClick={() => handleLinkChange()}
        aria-current={
          isClient && url === window.location.pathname ? "page" : undefined
        }
      >
        <Image
          className="hamburgerMenu"
          src={icon}
          height={20}
          width={20}
          alt={`Icon for ${url}`}
        />

        {props.children}
      </Link>
    </li>
  );
}

export default function DropDownMenu({
  handleLinkChange,
}: {
  handleLinkChange: () => void;
}) {
  const dropDownObjects = () => {
    return navigationUrls.map((navItem) => {
      return (
        <DropDownItem
          key={navItem.name}
          url={navItem.url}
          icon={navItem.icon}
          handleLinkChange={handleLinkChange}
        >
          {navItem.name}
        </DropDownItem>
      );
    });
  };

  return <>{dropDownObjects()}</>;
}
