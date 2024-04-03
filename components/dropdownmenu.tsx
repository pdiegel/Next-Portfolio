import navigationUrls from "@/public/navigation.json";
import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";

function DropDownItem({ url, ...props }: { url: string; children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Once the component mounts, we're in the client.
    // This is necessary because window is not defined on the server.
    // We need to check if the current url matches the url of the nav item.
    setIsClient(true);
  }, []);

  return (
    <Link
      href={url ? url : "#"}
      className={`menu-item ${
        isClient && url === window.location.pathname ? "active" : ""
      }`}
    >
      {props.children}
    </Link>
  );
}

export default function DropDownMenu() {
  const dropDownObjects = () => {
    return Object.entries(navigationUrls).map(([navName, url]) => {
      return (
        <DropDownItem key={navName} url={url}>
          {navName}
        </DropDownItem>
      );
    });
  };

  return <>{dropDownObjects()}</>;
}
