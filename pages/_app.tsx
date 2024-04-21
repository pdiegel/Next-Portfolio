import "@/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import AccessibilityMenu from "@/components/accessibilityMenu";

interface AccessibilityContextType {
  accessibilityPreference: boolean;
  setAccessibilityPreference: (value: boolean) => void;
}

const defaultValues: AccessibilityContextType = {
  accessibilityPreference: false,
  setAccessibilityPreference: () => {},
};

export const AccessibleContext =
  createContext<AccessibilityContextType>(defaultValues);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [accessibilityPreference, setAccessibilityPreference] =
    useState<boolean>(() => {
      if (typeof window !== "undefined") {
        // Only attempt to access localStorage if it's defined (i.e., in the browser)
        const storedPref = localStorage.getItem("accessibilityPreference");
        return storedPref !== null ? JSON.parse(storedPref) : false;
      }
      return false;
    });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure localStorage is only accessed on the client side
      localStorage.setItem(
        "accessibilityPreference",
        JSON.stringify(accessibilityPreference)
      );
    }
  }, [accessibilityPreference]);

  return (
    <AccessibleContext.Provider
      value={{ accessibilityPreference, setAccessibilityPreference }}
    >
      {children}
    </AccessibleContext.Provider>
  );
}

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <div className="container">
      <AccessibilityProvider>
        <Header />
        <Component {...pageProps} />
        <AccessibilityMenu />
        <Analytics />
        <Footer />
      </AccessibilityProvider>
    </div>
  );
}
