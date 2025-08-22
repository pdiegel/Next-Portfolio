"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import DropDownIcon from "@/public/dropdown.svg";
import DropDownMenu from "./dropdownmenu";
import FromLeftEntryDiv from "./fromLeftEntryDiv";
import Nav from "./nav";
import NavItem from "./navitem";

export default function Header() {
	const [open, setOpen] = useState(false);
	const navRef = useRef<HTMLDivElement | null>(null);

	const handleLinkChange = useCallback(() => {
		setOpen(false);
	}, []);

	// Accessibility for the dropdown menu.
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				if (navRef.current?.contains(document.activeElement)) {
					handleLinkChange();
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		// Clean up the event listener
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleLinkChange]);

	return (
		<header>
			<FromLeftEntryDiv className="headerItems">
				<nav aria-label="return home">
					<Link className="logoLink" href="/">
						Philip Diegel
					</Link>
				</nav>

				<Nav>
					<div className="hamburgerMenu" ref={navRef}>
						<NavItem icon={<DropDownIcon />} open={open} handleOpen={setOpen}>
							{/* Dropdown goes here */}
							<DropDownMenu handleLinkChange={handleLinkChange} />
						</NavItem>
					</div>
					<ul className="navLinks">
						<DropDownMenu handleLinkChange={handleLinkChange} />
					</ul>
				</Nav>
			</FromLeftEntryDiv>
		</header>
	);
}
