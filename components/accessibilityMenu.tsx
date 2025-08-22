"use client";
import { useContext, useId, useState } from "react";
import { AccessibleContext } from "@/pages/_app";
import AccessibilityIcon from "@/public/accessibility.svg";
import CloseIcon from "@/public/close.svg";

export default function AccessibilityMenu() {
	const { accessibilityPreference, setAccessibilityPreference } =
		useContext(AccessibleContext);

	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setAccessibilityPreference(!accessibilityPreference);
	};

	const accessibilityMenuId = useId();

	return (
		<div className="accessibility-menu">
			<button
				aria-label={
					open ? "Close Accessibility Menu" : "Open Accessibility Menu"
				}
				aria-controls="accessibility-menu-content"
				aria-roledescription="menu"
				onClick={() => setOpen(!open)}
				type="button"
			>
				<AccessibilityIcon />
			</button>
			<div
				id={accessibilityMenuId}
				className={`${open ? "open" : ""}`}
				aria-hidden={!open}
			>
				{open && (
					<>
						<button
							onClick={() => setOpen(!open)}
							className="accessibility-menu-close"
							type="button"
						>
							<CloseIcon />
						</button>
						<p>Accessibility Menu</p>
						<button
							onClick={handleToggle}
							className="primary-button"
							aria-label={
								accessibilityPreference
									? "Disable Reduced Motion"
									: "Enable Reduced Motion"
							}
							type="button"
						>
							{accessibilityPreference
								? "Disable Reduced Motion"
								: "Enable Reduced Motion"}
						</button>
					</>
				)}
			</div>
		</div>
	);
}
