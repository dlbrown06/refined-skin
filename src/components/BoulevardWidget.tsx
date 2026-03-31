"use client";

import { useEffect } from "react";

const BLVD_BUSINESS_ID = "862966db-0a60-4808-b636-74a37edbeae1";
const BLVD_BOOKING_URL = `https://www.joinblvd.com/b/${BLVD_BUSINESS_ID}`;

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function BoulevardWidget() {
  useEffect(() => {
    // Load Boulevard injector script.
    // On the production domain (refined.skin) the injector auto-detects
    // the business ID and handles #book-now hash changes natively.
    // On other domains (Vercel previews) it loads but can't resolve the
    // business ID, so we fall back to opening the booking page directly.
    const script = document.createElement("script");
    script.src = "https://static.joinboulevard.com/injector.min.js";
    script.async = true;
    document.head.appendChild(script);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest(
        'a[href="#book-now"], a[href="/#book-now"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const w = window as any;
      const blvd = w.blvd;

      // If the injector loaded AND recognized the domain (businessId is set),
      // let the hash change happen naturally — the injector handles it.
      if (
        blvd &&
        blvd.businessId &&
        typeof blvd.openBookingWidget === "function"
      ) {
        return;
      }

      // Fallback: open the Boulevard booking page directly.
      // This covers Vercel preview URLs and slow-loading scenarios.
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
