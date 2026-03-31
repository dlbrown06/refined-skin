import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Who We Are */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">Who we are</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Refined Skin is a skincare and acne clinic located in Northwest Ohio
              specializing in customized treatments, coaching, and simplified skincare
              routines. We work with our clients to clear skin of chronic acne and
              improve the appearance of their skin. On-site and virtual appointments
              are available.
            </p>
          </div>

          {/* Location */}
          <div className="text-center">
            <h3 className="font-sans text-lg font-semibold mb-4">Location</h3>
            <p className="text-white/70 text-sm">
              134 E Main St
              <br />
              Leipsic, OH 45856
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="https://www.facebook.com/Refinedskincarestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-beige/20 flex items-center justify-center hover:bg-brand-beige/40 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_refinedskin_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-beige/20 flex items-center justify-center hover:bg-brand-beige/40 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <a
              href="#book-now"
              className="mt-6 inline-block bg-brand-beige/80 px-10 py-3 text-xs font-sans tracking-widest-xl text-brand-dark uppercase hover:bg-brand-beige transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* More */}
          <div className="text-right md:text-right">
            <h3 className="font-sans text-lg font-semibold mb-4">More</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/cancellation-policy" className="text-sm text-white/70 hover:text-white transition-colors">Cancellation Policy</Link>
              <Link href="/return-policy" className="text-sm text-white/70 hover:text-white transition-colors">Return Policy</Link>
              <Link href="/ingredient-checker" className="text-sm text-white/70 hover:text-white transition-colors">Ingredient Checker</Link>
            </div>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="mt-16 flex justify-center">
          <img
            src="https://i0.wp.com/refined.skin/wp-content/uploads/2024/01/refined-skin-and-acne-clinic-logo.png"
            alt="Refined Skin & Acne Clinic"
            className="h-20 w-auto opacity-60"
          />
        </div>
      </div>
    </footer>
  );
}
