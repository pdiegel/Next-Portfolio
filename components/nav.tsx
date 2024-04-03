import { ReactNode } from "react";

export default function Nav(props: { children: ReactNode }) {
  return (
    <nav className="navbar">
      <div className="navbar-nav">{props.children}</div>
    </nav>
  );
}
