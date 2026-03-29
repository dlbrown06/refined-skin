import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Refined Skin",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl italic text-brand-charcoal mb-8">Privacy Policy</h1>
        <div className="prose prose-sm text-brand-charcoal/70 space-y-4">
          <p>At Refined Skin & Acne Clinic, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
          <h2 className="font-serif text-xl mt-8 mb-4 text-brand-charcoal">Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, phone number, and skin health information when you book appointments, fill out forms, or communicate with us.</p>
          <h2 className="font-serif text-xl mt-8 mb-4 text-brand-charcoal">How We Use Your Information</h2>
          <p>Your information is used to provide our services, communicate with you about appointments and treatments, and improve your experience with us. We do not sell or share your personal information with third parties for marketing purposes.</p>
          <h2 className="font-serif text-xl mt-8 mb-4 text-brand-charcoal">Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us at hello@refined.skin or 419-890-1090.</p>
        </div>
      </div>
    </section>
  );
}
