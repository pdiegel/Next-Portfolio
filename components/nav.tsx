import { ReactNode } from "react";

export default function Nav(props: { children: ReactNode }) {
  return (
    <nav className="navbar" aria-label="main">
      <div className="navbar-nav">{props.children}</div>
    </nav>
  );
}
