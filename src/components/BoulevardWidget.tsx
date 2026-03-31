"use client";

import { useEffect } from "react";

const BLVD_BUSINESS_ID = "862966db-0a60-4808-b636-74a37edbeae1";
const BLVD_BOOKING_URL = `https://www.joinblvd.com/b/${BLVD_BUSINESS_ID}`;

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function BoulevardWidget() {
  useEffect(() => {
    const w = window as any;

    // Pre-configure blvd object BEFORE loading the script.
    // The injector reads from this object during initialization.
    // On the original domain (refined.skin) the injector auto-detects
    // the business ID, but on other domains we must set it explicitly.
    if (!w.blvd) {
      w.blvd = {};
    }
    w.blvd.businessId = BLVD_BUSINESS_ID;
    w.blvd.hash = "#book-now";

    // Load Boulevard injector script
    const script = document.createElement("script");
    script.src = "https://static.joinboulevard.com/injector.min.js";
    script.async = true;
    document.head.appendChild(script);

    // The injector automatically detects #book-now hash changes and
    // opens the booking widget. We just need a fallback click handler
    // for cases where the injector hasn't loaded yet.
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest(
        'a[href="#book-now"], a[href="/#book-now"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      // Check if Boulevard widget is ready
      const blvd = w.blvd;
      if (blvd && typeof blvd.openBookingWidget === "function") {
        // Widget is loaded — let the hash change happen naturally,
        // the injector will pick it up. No need to preventDefault.
        return;
      }

      // Fallback if injector hasn't loaded: open booking page directly
      e.preventDefault();
      window.open(BLVD_BOOKING_URL, "_blank", "noopener,noreferrer");
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
