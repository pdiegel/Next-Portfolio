import { ReactNode } from "react";

export default function Nav(props: { children: ReactNode }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
