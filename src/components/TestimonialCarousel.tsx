"use client";

import { useState } from "react";

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kylee Miller",
    text: "Jamie is the best! She is always there to listen to any issues/concerns you have and help provide a solution to fix your issue!",
  },
  {
    name: "McKenna Kuhlman",
    text: "I seriously cannot thank you enough for how much better my face already looks! I had gotten to the point that I thought I would always just have to deal with breakouts as long as they weren\u2019t painful and cystic, but since I started this I feel so much better about my skin.",
  },
  {
    name: "Heather Schroeder",
    text: "Jamie is just AMAZING at what she does. I\u2019ve never had a facial done so well. She is so well educated and was able to answer all my questions about my skin. I left with so much knowledge and information on how to simplify my skin care routine. My face is glowing. I will definitely be a returning client!!!",
  },
  {
    name: "Alexi Williams",
    text: "Jamie did an AMAZING job helping maintain clear skin through Face Reality! I will recommend her time and time again!",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-4xl text-center">
        <div className="relative min-h-[200px] flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-brand-charcoal/40 hover:text-brand-charcoal transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="px-12">
            <p className="font-serif text-xl md:text-2xl italic text-brand-charcoal leading-relaxed">
              {testimonials[current].text}
            </p>
            <p className="mt-6 text-sm text-brand-warm-gray">
              {testimonials[current].name}
            </p>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-brand-charcoal/40 hover:text-brand-charcoal transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-brand-charcoal" : "bg-brand-charcoal/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
