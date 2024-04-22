import { ReactNode, useContext } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import CloseIcon from "@/public/close.svg";
import { AccessibleContext } from "@/pages/_app";

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
  const { accessibilityPreference } = useContext(AccessibleContext);

  const linkHandler = () => {
    if (url !== undefined) {
      return (
        <li className="nav-item">
          <Link
            href={url ? url : "#"}
            className="icon-button"
            target="_blank"
            aria-label={`Link to ${url}. Opens in a new tab.`}
          >
            {icon}
          </Link>
        </li>
      );
    }
    return (
      <div className="nav-item">
        <button
          className="icon-button"
          {...(handleOpen && { onClick: () => handleOpen(!open) })}
          name="hamburgerMenu"
          aria-controls="main-navigation"
          aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
        >
          {open ? <CloseIcon /> : icon}
        </button>
        <nav id="main-navigation" aria-label="Main Navigation Dropdown Menu">
          {open && hamburgerMenu()}
        </nav>
      </div>
    );
  };

  let variants: Variants = {
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
  };

  let initial = { scale: 0, x: 0 };

  if (accessibilityPreference) {
    initial = { scale: 1, x: 5 };
  }

  if (accessibilityPreference) {
    variants = {
      open: {
        x: 5,
        opacity: 1,
        zIndex: 5,
        scale: 1,
      },
      closed: {
        x: 5,
        opacity: 0,
        scale: 1,
        zIndex: 0,
        pointerEvents: "none",
      },
    };
  }

  const hamburgerMenu = () => {
    return (
      <motion.ul
        initial={initial}
        animate={open ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "backInOut" }}
        className="dropdown"
        variants={variants}
      >
        {children}
      </motion.ul>
    );
  };

  return linkHandler();
}
