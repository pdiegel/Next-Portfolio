"use client";
import { useState, useContext } from "react";
import AccessibilityIcon from "@/public/accessibility.svg";
import CloseIcon from "@/public/close.svg";
import { AccessibleContext } from "@/pages/_app";

export default function AccessibilityMenu() {
  const { accessibilityPreference, setAccessibilityPreference } =
    useContext(AccessibleContext);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setAccessibilityPreference(!accessibilityPreference);
  };

  return (
    <div className="accessibility-menu">
      <button
        aria-label={
          open ? "Close Accessibility Menu" : "Open Accessibility Menu"
        }
        aria-controls="accessibility-menu-content"
        aria-roledescription="menu"
        role="button"
        onClick={() => setOpen(!open)}
      >
        <AccessibilityIcon />
      </button>
      <div
        id="accessibility-menu-content"
        className={`${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        {open && (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="accessibility-menu-close"
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
