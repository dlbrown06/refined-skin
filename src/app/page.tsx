import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-6">
          <p className="section-heading text-white/80 mb-6">
            Acne Clinic and Skincare Treatments
          </p>
          <h1 className="font-serif text-5xl md:text-7xl italic text-white font-normal">
            Rewrite your skin story.
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/acne-clinic" className="btn-outline">
              I Need Help With My Acne
            </Link>
            <Link href="/treatments" className="btn-outline">
              I Need Help With My Skin Health
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-brand-dark py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-brand-beige font-serif text-5xl italic mb-4">r</div>
            <p className="section-heading text-brand-beige/70">
              Our Services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Acne Clinic */}
            <Link href="/acne-clinic" className="group">
              <div className="border border-white/20 p-1">
                <div className="aspect-[4/3] bg-brand-charcoal/50 flex items-center justify-center overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80')",
                    }}
                  />
                </div>
              </div>
              <h3 className="mt-6 text-center font-serif text-2xl text-white">
                acne clinic
              </h3>
              <p className="mt-3 text-center text-sm text-white/60 leading-relaxed">
                Are you tired of guessing what products will work for you? Our
                customized approach to your acne concerns.
              </p>
            </Link>

            {/* Treatments */}
            <Link href="/treatments" className="group">
              <div className="border border-white/20 p-1">
                <div className="aspect-[4/3] bg-brand-charcoal/50 flex items-center justify-center overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80')",
                    }}
                  />
                </div>
              </div>
              <h3 className="mt-6 text-center font-serif text-2xl text-white">
                treatments
              </h3>
              <p className="mt-3 text-center text-sm text-white/60 leading-relaxed">
                Your optimal skin health is my passion, and it can be achieved
                with a refined treatment plan.
              </p>
            </Link>

            {/* Shop */}
            <a
              href="https://shop.refined.skin"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border border-white/20 p-1">
                <div className="aspect-[4/3] bg-brand-charcoal/50 flex items-center justify-center overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80')",
                    }}
                  />
                </div>
              </div>
              <h3 className="mt-6 text-center font-serif text-2xl text-white">
                shop skincare & tools
              </h3>
              <p className="mt-3 text-center text-sm text-white/60 leading-relaxed">
                Shop our favorite skincare products, tools, and technology.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Testimonial - Anna */}
      <section className="bg-brand-cream py-20 px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="text-brand-beige/40 font-serif text-3xl italic mb-4">
              refined<span className="text-brand-beige/30">.</span>skin
            </div>
            <div className="flex gap-4">
              <div className="w-40 h-48 bg-brand-beige/30 rounded" />
              <div className="w-40 h-48 bg-brand-beige/30 rounded mt-8" />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="font-serif text-4xl italic text-brand-charcoal">
              Anna
            </h3>
            <p className="text-sm text-brand-warm-gray mt-1">Acne Client</p>
            <p className="mt-6 text-brand-charcoal/70 text-sm leading-relaxed">
              Jamie is simply amazing. I&apos;ve never had an esthetician or
              dermatologist be so kind, attentive, knowledgeable, and helpful.
              Jamie is a wonderful educator and supports all her treatments with
              research. I am SO grateful for her holistic approach and
              professional-grade treatments. My painful skin condition was truly
              healed from the inside out! I recommend her to everyone!
            </p>
            <a href="#book-now" className="btn-outline-dark mt-8">
              Book Your Acne Consult and Treatment
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="section-heading">Refined Skin</p>
          <h2 className="section-title text-brand-charcoal">what to expect</h2>
        </div>
        <div className="mx-auto max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-cream flex items-center justify-center">
              <svg className="w-8 h-8 text-brand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Holistic Approach</h3>
            <p className="text-sm text-brand-charcoal/60 leading-relaxed">
              Our customized and holistic treatment plans encompass lifestyle,
              nutrition, treatments and home care.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-cream flex items-center justify-center">
              <svg className="w-8 h-8 text-brand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Science-Backed</h3>
            <p className="text-sm text-brand-charcoal/60 leading-relaxed">
              Rooted in research, we offer premium, natural product ingredients
              to the latest and greatest advanced modalities, to provide you with
              superior results.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-cream flex items-center justify-center">
              <svg className="w-8 h-8 text-brand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Coaching & Support</h3>
            <p className="text-sm text-brand-charcoal/60 leading-relaxed">
              No one should have to struggle with their skin alone. Together,
              we&apos;ll get you on the path to improving your overall skin health.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#book-now" className="btn-outline-dark">
            Book Free Acne Discovery Call
          </a>
        </div>
      </section>

      {/* Meet Jamie */}
      <section className="bg-brand-beige/30 py-24 px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="font-serif text-4xl italic text-brand-charcoal">
              Meet Jamie
            </h2>
            <p className="mt-6 text-brand-charcoal/70 leading-relaxed">
              After enduring my own struggles with hormonal cystic acne for over
              a decade, I knew there had to be a better way to support people on
              their skin health journey. I left my corporate job to become an
              advanced esthetician, utilizing a holistic and science-backed
              approach to improve your skin&apos;s appearance and health. It&apos;s my
              mission to help you feel more comfortable in your skin. Let&apos;s get
              clear together.
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-charcoal">
              Jamie Brown &ndash; Advanced Esthetician & Acne Coach
            </p>
            <Link
              href="/meet-jamie"
              className="mt-6 inline-block text-sm text-brand-charcoal underline underline-offset-4 hover:text-brand-charcoal/70 transition-colors"
            >
              learn more
            </Link>
          </div>
          <div className="md:w-1/2">
            <div
              className="aspect-[3/4] bg-cover bg-center rounded-sm"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80')",
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative py-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <p className="section-heading text-white/80">
            Optimize Your Skin Health
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic text-white mt-4">
            Start your skin health journey now.
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/acne-clinic" className="btn-outline">
              Acne Clinic
            </Link>
            <Link href="/treatments" className="btn-outline">
              Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />
    </>
  );
}
