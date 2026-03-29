"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API route or email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="font-serif text-2xl italic mb-4">Thank you!</h3>
        <p className="text-sm text-brand-charcoal/60">
          We&apos;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-beige transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-beige transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-beige transition-colors resize-none"
        />
      </div>
      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
}
