"use client";

import Script from "next/script";

export default function BoulevardWidget() {
  return (
    <Script
      src="https://static.joinboulevard.com/injector.min.js"
      strategy="lazyOnload"
    />
  );
}
