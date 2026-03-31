import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Refined Skin",
  description: "Get in touch with Refined Skin & Acne Clinic. Book a free discovery call or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i0.wp.com/refined.skin/wp-content/uploads/2023/12/EHP-123.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <p className="section-heading text-white/80">Contact Us</p>
          <h1 className="font-serif text-5xl md:text-6xl italic text-white mt-4">
            Unlock Clear Skin
          </h1>
        </div>
      </section>

      {/* Discovery Call CTA */}
      <section className="py-16 px-6 bg-brand-cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-brand-charcoal uppercase tracking-widest-xl mb-4">
            Are You New Here?
          </p>
          <p className="text-brand-charcoal/70">
            Welcome! If you aren&apos;t sure where to start, let&apos;s chat.
          </p>
          <a href="#book-now" className="btn-primary mt-6">
            Book a Free 15 Minute Discovery Call
          </a>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
          <ContactForm />
          <div>
            <h3 className="font-serif text-2xl italic mb-6">Get in Touch</h3>
            <div className="space-y-4 text-sm text-brand-charcoal/70">
              <div>
                <p className="font-semibold text-brand-charcoal mb-1">Email</p>
                <a href="mailto:hello@refined.skin" className="hover:text-brand-charcoal transition-colors">
                  hello@refined.skin
                </a>
              </div>
              <div>
                <p className="font-semibold text-brand-charcoal mb-1">Phone</p>
                <a href="tel:4198901090" className="hover:text-brand-charcoal transition-colors">
                  419-890-1090
                </a>
              </div>
              <div>
                <p className="font-semibold text-brand-charcoal mb-1">Location</p>
                <p>134 E Main St<br />Leipsic, OH 45856</p>
              </div>
              <div className="pt-4">
                <img
                  src="https://i0.wp.com/refined.skin/wp-content/uploads/2023/12/Untitled-design-57.png"
                  alt="Refined Skin Clinic"
                  className="w-full h-auto rounded-sm mt-4"
                />
              </div>
              <div className="pt-4 flex gap-4">
                <a
                  href="https://www.facebook.com/Refinedskincarestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-charcoal hover:text-brand-beige transition-colors"
                >
                  Follow on Facebook
                </a>
                <a
                  href="https://www.instagram.com/_refinedskin_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-charcoal hover:text-brand-beige transition-colors"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
