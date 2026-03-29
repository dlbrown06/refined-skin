import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-6xl italic text-brand-charcoal">404</h1>
        <p className="mt-4 text-brand-charcoal/60">Page not found</p>
        <Link href="/" className="btn-outline-dark mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
