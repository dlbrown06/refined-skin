"use client";

import { useEffect } from "react";

const BLVD_BUSINESS_ID = "862966db-0a60-4808-b636-74a37edbeae1";
const BLVD_BOOKING_URL = `https://www.joinblvd.com/b/${BLVD_BUSINESS_ID}`;

/* eslint-disable @typescript-eslint/no-explicit-any */

function openBlvdBooking() {
  const w = window as any;
  const blvd = w.Boulevard || w.blvd;
  if (blvd && typeof blvd.openBookingWidget === "function") {
    blvd.openBookingWidget();
  } else if (blvd && typeof blvd.open === "function") {
    blvd.open();
  } else {
    // Fallback: open booking page directly
    window.open(BLVD_BOOKING_URL, "_blank", "noopener,noreferrer");
  }
}

export default function BoulevardWidget() {
  useEffect(() => {
    // Load Boulevard injector script
    const script = document.createElement("script");
    script.src = "https://static.joinboulevard.com/injector.min.js";
    script.async = true;
    script.setAttribute("data-business-id", BLVD_BUSINESS_ID);
    document.head.appendChild(script);

    // Handle #book-now clicks to open Boulevard booking
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest(
        'a[href="#book-now"], a[href="/#book-now"]'
      ) as HTMLAnchorElement | null;
      if (anchor) {
        e.preventDefault();
        openBlvdBooking();
      }
    };

    document.addEventListener("click", handleClick);

    // Also handle initial hash if page loads with #book-now
    if (window.location.hash === "#book-now") {
      setTimeout(() => {
        openBlvdBooking();
      }, 2000);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
