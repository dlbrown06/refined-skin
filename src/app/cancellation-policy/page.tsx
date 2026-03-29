import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy | Refined Skin",
};

export default function CancellationPolicyPage() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl italic text-brand-charcoal mb-8">Cancellation Policy</h1>
        <div className="text-brand-charcoal/70 space-y-4 text-sm leading-relaxed">
          <p>We understand that scheduling conflicts arise. We respectfully request that you provide at least 24 hours notice if you need to cancel or reschedule your appointment.</p>
          <p>Late cancellations (less than 24 hours notice) or no-shows may be subject to a cancellation fee. This policy helps us serve all of our clients effectively and ensures availability for others who may need appointments.</p>
          <p>To cancel or reschedule, please contact us at hello@refined.skin or 419-890-1090.</p>
        </div>
      </div>
    </section>
  );
}
