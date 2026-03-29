import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return Policy | Refined Skin",
};

export default function ReturnPolicyPage() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl italic text-brand-charcoal mb-8">Return Policy</h1>
        <div className="text-brand-charcoal/70 space-y-4 text-sm leading-relaxed">
          <p>At Refined Skin & Acne Clinic, we want you to be completely satisfied with your skincare purchases. If for any reason you are not satisfied, please contact us within 14 days of purchase.</p>
          <p>Products must be in their original condition (unopened/unused) to be eligible for a full refund. Opened products may be eligible for exchange or store credit at our discretion.</p>
          <p>To initiate a return, please contact us at hello@refined.skin or 419-890-1090.</p>
        </div>
      </div>
    </section>
  );
}
