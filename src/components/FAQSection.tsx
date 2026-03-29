"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, title }: { faqs: FAQ[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-12">
      {title && <h3 className="font-serif text-2xl italic mb-6">{title}</h3>}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-brand-charcoal/10 rounded-sm">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <span className="text-sm font-medium text-brand-charcoal pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-brand-charcoal/40 shrink-0 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-4">
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
