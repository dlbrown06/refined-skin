import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Acne Clinic & Coaching | Refined Skin",
  description:
    "Clearer skin in 90 days. Our customized and holistic acne treatment plans encompass lifestyle, nutrition, treatments and home care.",
};

export default function AcneClinicPage() {
  return (
    <>
      <HeroSection
        subtitle="Acne Clinic & Coaching"
        title="Clearer skin in 90 days."
        ctaText="A Better Path Starts Here"
        bgImage="https://i0.wp.com/refined.skin/wp-content/uploads/2023/11/shutterstock_1868918950.jpg"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://i0.wp.com/refined.skin/wp-content/uploads/2024/01/EHP-139.jpg"
              alt="Jamie Brown - Esthetician"
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-brand-charcoal/70 leading-relaxed">
              Are you tired of feeling uncomfortable in your own skin? No one should
              have to struggle with their skin alone. After enduring hormonal cystic
              acne for over a decade and trying everything: dermatologist,
              estheticians, Eastern Medicine, internet products, supplements,
              prescriptions and birth control &ndash; Jamie knew there had to be a
              better way. The side effects from these options were worse than the
              acne itself, and her mental health was at an all time low. She left
              her corporate job and pursued a new career as a licensed advanced
              esthetician to help others from a holistic perspective and
              results-driven treatment plan to clearer skin.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl italic text-center mb-8">Our Approach</h2>
          <p className="text-brand-charcoal/70 leading-relaxed text-center">
            The skin is the largest organ of our body. Addressing the symptoms
            appearing topically often requires a more holistic approach looking at:
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["lifestyle", "nutrition", "treatments", "simple skincare regimen"].map((item) => (
              <div key={item} className="flex flex-col items-center gap-2">
                <svg className="w-5 h-5 text-brand-sage" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-brand-charcoal">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-brand-charcoal/70 leading-relaxed text-center">
            Our approach is customized to each client&apos;s unique skin concerns.
            It&apos;s our mission to help you improve your skin&apos;s appearance
            and to help you achieve your healthiest skin ever.
          </p>
          <p className="mt-4 text-center font-serif text-xl italic">
            Jamie Brown
          </p>
          <p className="text-center text-sm text-brand-charcoal/60">
            Advanced Esthetician & Acne Coach
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* In Person */}
          <div className="border border-brand-charcoal/10 p-8 rounded-sm">
            <div className="mb-6">
              <img
                src="https://i0.wp.com/refined.skin/wp-content/uploads/2024/01/Refined-Skin-Brand-Update-Draft-4.png"
                alt="First In Person Treatment"
                className="w-full h-auto rounded-sm"
              />
            </div>
            <h3 className="font-serif text-2xl italic mb-2">First In Person Treatment</h3>
            <p className="text-2xl font-light text-brand-charcoal mb-6">$175</p>
            <ul className="space-y-3 text-sm text-brand-charcoal/70">
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> 2 hour acne consultation, treatment, and LED light therapy</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> 1 hour of acne education</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Acne treatments and LED light therapy</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Customized skincare routine investment typically ~$200</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Follow-up treatments are 45 minutes ($80) every other week</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Unlimited access to acne coach</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Clearer skin in 3 to 6 months</li>
            </ul>
            <a href="#book-now" className="btn-primary mt-8">Book It</a>
            <p className="mt-4 text-xs text-brand-charcoal/50">
              Still not sure? <a href="#book-now" className="underline">Book a free 15-minute chat.</a>
            </p>
          </div>

          {/* Virtual */}
          <div className="border border-brand-charcoal/10 p-8 rounded-sm">
            <div className="mb-6">
              <img
                src="https://i0.wp.com/refined.skin/wp-content/uploads/2024/01/Refined-Skin-Website-Images-2.png"
                alt="Virtual Acne Consultation"
                className="w-full h-auto rounded-sm"
              />
            </div>
            <h3 className="font-serif text-2xl italic mb-2">Virtual Acne Consultation</h3>
            <p className="text-2xl font-light text-brand-charcoal mb-6">$100</p>
            <ul className="space-y-3 text-sm text-brand-charcoal/70">
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> 1 hour of acne education and customized skin care regimen</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Access to resources like pore clogging ingredients checker</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Customized skincare routine investment typically ~$200</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Follow-up consultations are 15 minutes ($35) every other week</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Unlimited access to acne coach</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Clearer skin in 3 to 6 months</li>
            </ul>
            <a href="#book-now" className="btn-primary mt-8">Book It</a>
            <p className="mt-4 text-xs text-brand-charcoal/50">
              Still not sure? <a href="#book-now" className="underline">Book a free 15-minute chat.</a>
            </p>
          </div>
        </div>
      </section>

      {/* McKenna Testimonial */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://i0.wp.com/refined.skin/wp-content/uploads/2024/01/Refined-Skin-Website-Images-5.png"
              alt="McKenna - Wedding Day Ready"
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-serif text-3xl italic">McKenna</h3>
            <p className="text-sm text-brand-warm-gray mt-1">Acne Client &ndash; &ldquo;Wedding Day Ready&rdquo;</p>
            <p className="mt-6 text-brand-charcoal/70 leading-relaxed text-sm">
              I never had acne in middle school or high school when most people go through
              the &ldquo;struggle&rdquo; together, but it started when I was in college. Once I got
              engaged, I became even more concerned with my acne, and that is when I was
              introduced to Jamie. From the moment I walked into my consultation, I knew
              Jamie understood what I was going through. Throughout my engagement, we
              worked to clear my skin to be the best it could be on my wedding day. Come
              wedding day, my skin was better than it had ever been, and I was so relieved
              knowing I did not have to stress about covering breakouts!
            </p>
            <a href="#book-now" className="btn-outline-dark mt-8">
              Book Your First Consult and Treatment
            </a>
          </div>
        </div>
      </section>

      {/* Shop + Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Supplements", desc: "Learn more about a way to support your skin health from the inside out.", href: "https://shop.refined.skin", img: "https://i0.wp.com/refined.skin/wp-content/uploads/2024/03/Refined-Skin-Website-Images-9-1.png" },
            { title: "Skincare Tools", desc: "Shop our favorite skincare tools and technology.", href: "https://shop.refined.skin", img: "https://i0.wp.com/refined.skin/wp-content/uploads/2023/11/8.png" },
            { title: "Skincare", desc: "Optimize your skin health with a simple and customized skincare regimen.", href: "https://shop.refined.skin", img: "https://i0.wp.com/refined.skin/wp-content/uploads/2024/01/Refined-Skin-Website-Images-8.png" },
            { title: "Ingredient Checker", desc: "Check to see if any of your products have pore-clogging ingredients.", href: "/ingredient-checker", img: "https://i0.wp.com/refined.skin/wp-content/uploads/2024/01/Refined-Skin-Website-Images-7.png" },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group text-center p-4 border border-brand-charcoal/10 rounded-sm hover:border-brand-beige transition-colors"
            >
              <div className="aspect-square overflow-hidden rounded-sm mb-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-serif text-lg mb-3">{item.title}</h4>
              <p className="text-xs text-brand-charcoal/60 leading-relaxed">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Leslie Testimonial */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <h3 className="font-serif text-3xl italic text-center">Leslie</h3>
          <p className="text-sm text-center text-brand-warm-gray mt-1">Acne Client &ndash; &ldquo;Together We Will Get Your Glow Back&rdquo;</p>
          <p className="mt-8 text-brand-charcoal/70 leading-relaxed text-center">
            Jamie has been a Godsend! I could not be more thankful for her. I&apos;m 36 and my
            acne has been awful since I started having kids 12 years ago. Nothing worked.
            After just one year with Jamie, my skin has dramatically changed. She&apos;s given
            me the proper skin care to use at home. She educates me and answers all my
            questions. And she never tries to sell me anything. She is so amazing and I
            couldn&apos;t be more thankful for her. Even my dermatologist was surprised by the
            difference in my skin.
          </p>
          <div className="text-center mt-8">
            <Link href="/contact" className="btn-outline-dark">
              Questions? Let&apos;s chat
            </Link>
          </div>
        </div>
      </section>

      <TestimonialCarousel />
    </>
  );
}
