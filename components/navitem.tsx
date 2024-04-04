import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CloseIcon from "@/public/close.svg";

export default function NavItem({
  children,
  icon,
  url,
  open,
  handleOpen,
}: {
  children?: ReactNode;
  icon: string | ReactNode;
  url?: string;
  open?: boolean;
  handleOpen?: (open: boolean) => void;
}) {
  const linkHandler = () => {
    if (url !== undefined) {
      return (
        <Link
          href={url ? url : "#"}
          className="icon-button"
          target="_blank"
          aria-label={`Link to ${url}`}
        >
          {icon}
        </Link>
      );
    }
    return (
      <>
        <button
          className="icon-button"
          {...(handleOpen && { onClick: () => handleOpen(!open) })}
          name="hamburgerMenu"
          aria-label="Hamburger Menu Button"
        >
          {open ? <CloseIcon /> : icon}
        </button>
        {open && hamburgerMenu()}
      </>
    );
  };

  const hamburgerMenu = () => {
    return (
      <motion.div
        initial={{ scale: 0, y: 0 }}
        animate={open ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "backInOut" }}
        className="dropdown"
        variants={{
          open: {
            x: 5,
            opacity: 1,
            zIndex: 5,
            scale: 1,
          },
          closed: {
            scale: 0,
            pointerEvents: "none",
          },
        }}
      >
        {children}
      </motion.div>
    );
  };

  return <li className={`nav-item`}>{linkHandler()}</li>;
}
