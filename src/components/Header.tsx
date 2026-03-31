"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/acne-clinic", label: "Acne Clinic" },
  { href: "/treatments", label: "Treatments" },
  { href: "https://shop.refined.skin", label: "Shop", external: true },
  { href: "/ingredient-checker", label: "Ingredient Checker" },
  { href: "/contact", label: "Contact" },
  { href: "/meet-jamie", label: "Meet Jamie" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="https://i0.wp.com/refined.skin/wp-content/uploads/2024/01/refined-skin-and-acne-clinic-logo.png"
            alt="Refined Skin & Acne Clinic"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-beige/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-beige/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="#book-now"
            className="border border-brand-beige/60 px-5 py-2 text-xs tracking-widest-xl text-brand-beige uppercase hover:bg-brand-beige/10 transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10 px-6 pb-6">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-brand-beige/80 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-brand-beige/80 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="#book-now"
            className="mt-3 block text-center border border-brand-beige/60 px-5 py-3 text-xs tracking-widest-xl text-brand-beige uppercase"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
