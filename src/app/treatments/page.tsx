import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Skincare Treatments | Refined Skin",
  description: "Your healthiest skin awaits. Results-driven skincare treatments backed by science. Facials, dermaplaning, chemical peels, LED therapy, and microchanneling.",
};

const skinAnalysisFaqs = [
  { question: "I'm satisfied with my current skincare routine, how will this service benefit me?", answer: "During the consultation we will review your current skin products and their ingredients. I educate on what those ingredients do and in which order each product should be applied. If there are any gaps in your current routine, I will provide recommendations." },
  { question: "Why is it important to know what products I'm using?", answer: "Being aware of the products and ingredients that you use each day help me understand what your skin will be able to tolerate in your treatment. I also like to help you feel confident that what you are using is helping you achieve your skin care goals. Additionally, certain products will be required in preparation for a more advanced skincare treatment such as chemical peels or microchanneling." },
  { question: "What do I receive in this service?", answer: "I will prepare a document that will be emailed/text to you with your complete morning and evening routine. This document will also have any additional notes regarding things we discussed and will include recommended future treatment plan suggestions." },
  { question: "What are you looking for when you analyze my skin under magnification?", answer: "During the skin analysis, I'm looking for characteristics that will identify your skin type (Dry, Oily, Combination), sub-conditions, skin abnormalities, the presence or absence of congested pores and overall skin health." },
];

const facialFaqs = [
  { question: "How often should I be getting a facial?", answer: "Every 4-6 weeks is recommended as our skin cycles over about every 30 days. If the skin concern you are dealing with is severe (as is the case with moderate to severe acne), you may come in every 2 weeks until your condition is under control." },
  { question: "What results can I expect from one facial?", answer: "Each facial is an opportunity to deeply cleanse and professionally exfoliate the skin. Extractions (if needed) can clear current congestion and help prevent future breakouts. Customized masks will help address your skin's unique needs and ensure you're on track for achieving your healthiest skin state. You'll notice an immediate glow and plumper more nourished skin. The use of proper skincare products at home will aid in better and more lasting results." },
  { question: "How should I prepare for my facial?", answer: "Properly hydrated skin will yield the best results as it will be much more tolerant to advanced exfoliation. If you're feeling extra dry or irritated, added moisturizer locked in with Vaseline/Aquaphor or another occlusive overnight can do wonders for preparing your skin for treatment a few days before your visit." },
  { question: "How do I care for my skin after my facial?", answer: "After a facial you want to let your skin rest. Please do not workout/sweat, go swimming, spend a lot of time outdoors (cold, hot or sun), or wear makeup after your facial. You want to schedule a facial on a day where you can let your skin relax and continue to soak up all the benefits of the professional grade skincare products that were just applied." },
];

const dermaplaningFaqs = [
  { question: "Does dermaplaning make hair grow back thicker/darker?", answer: "Not at all. As humans, our bodies are covered in hair. Some of it is coarse and dark (terminal hair) some of it is fine and light (vellus hair or 'peach fuzz'). Nothing can make vellus hair turn into terminal hair except a change in hormones or certain medications. Rest assured, dermaplaning will not make hair grow back any thicker or darker." },
  { question: "What is the upkeep of dermaplaning?", answer: "There is no required upkeep for dermaplaning however most clients enjoy coming in every four weeks to maintain that fresh and glowy skin." },
  { question: "What are the benefits of dermaplaning?", answer: "Dermaplaning is an advanced method of exfoliation of the skin. With the use of a surgical scalpel, the esthetician will scrape away layers of dead skin cells leaving behind very soft and smooth skin. Dermaplaning is excellent for Discoloration, Texture/Scarring, Aging Skin, Fine Lines/Wrinkles, and Dehydrated or Dull Skin. With the removal of several layers of dry, dead skin; skincare products can penetrate the skin more easily and therefore be more effective." },
  { question: "Who shouldn't do dermaplaning?", answer: "People with very sensitive skin or with active breakouts should not have dermaplaning performed. Any areas with active breakouts and significant texture will be dermaplaned around." },
];

const ledFaqs = [
  { question: "What is the difference between Red Light & Blue Light Therapy?", answer: "Red Light LED penetrates the skin and is absorbed by the mitochondria, boosting cellular energy production and stimulating collagen and elastin synthesis. Blue Light LED therapy is commonly used for acne treatment by activating porphyrins in acne-causing bacteria, producing reactive oxygen species that kill the bacteria, reducing lesions and inflammation." },
  { question: "What are the benefits?", answer: "Research has shown that LED Light Therapy can increase circulation, accelerate tissue repair, kill acne bacteria, decrease inflammation, improve acne prone skin, skin tone, texture and clarity, decrease under eye wrinkles and increase collagen and elastin production." },
  { question: "What skin conditions is it good for?", answer: "Acne, eczema, psoriasis, aging skin (fine lines, wrinkles, loss of elasticity) or damaged skin (scars/texture)." },
  { question: "How can I get the most benefit of this service?", answer: "LED Light Therapy works best when used regularly. Home devices can be purchased to enhance your results." },
];

const peelFaqs = [
  { question: "What should I do to prepare for a chemical peel?", answer: "Your esthetician will want to make sure you are using proper home care to ensure the best results and outcome of your treatment. It is important that your skin is acclimated to either an AHA or Retinol before your treatment and that you're committed to regular sunscreen use." },
  { question: "What is the required aftercare for my skin post-chemical peel?", answer: "Avoid touching treated areas & don't get face wet for 6 hrs minimum. Avoid wearing makeup for the rest of the day. Wash makeup brushes/sponges. Avoid retinol, AHAs, BHAs or other harsh treatments for 72 hrs. Avoid direct sunlight and wear sunscreen 4 weeks after treatment. Keep skin hydrated." },
  { question: "Will my skin peel like a snake?", answer: "Not necessarily, it will depend on your skin's health and the level of chemical peel used. We always start with a superficial to mild chemical peel so we can gauge how your skin will respond. Depending on the peel used, there will be no downtime for superficial/mild peels and 2-5 days of downtime for moderate peels." },
  { question: "What chemicals are used?", answer: "Most chemical peels use Alpha Hydroxy Acids (AHAs) that are naturally derived. Mandelic Acid is derived of bitter almonds, Malic Acid is from apples, Lactic Acid is from milk or tomatoes. These natural acids have a much lower pH than our skin which helps dissolve cellular bonds in our outer most skin layer, revealing a beautiful fresh layer of skin." },
];

const microchannelingFaqs = [
  { question: "How does microchanneling stimulate collagen production?", answer: "A single Procell treatment creates hundreds of thousands of microchannels. In response to each micro-injury, an inflammatory healing process begins which initiates the formation of new collagen. Over time, the repeated healing process improves the surface texture and the overall appearance of the skin." },
  { question: "How many treatments should I do?", answer: "The number of treatments necessary will range greatly depending on what we are treating. On average, for light anti-aging treatments, 1-2 treatments may be sufficient. For deeper wrinkles and acne scarring, 4-5 treatments may be required. There is no limit to the number of treatments as long as adequate time passes in-between." },
  { question: "How long should I wait in between treatments?", answer: "We recommend 4 weeks." },
  { question: "How long is the downtime?", answer: "Wait a minimum of 90 minutes before applying anything else to the skin apart from what your esthetician applies. It typically takes 24-72 hours for all redness and pinprick scabbing to disappear." },
  { question: "Are there any contraindications?", answer: "Anyone with a condition that seriously impairs their immune system, pregnancy, diabetes (due to problems with healing), patients on Accutane (should be discontinued for a minimum of 6 months), active Herpes Simplex in the treatment area, overly dry skin, or any active inflammatory skin condition." },
];

export default function TreatmentsPage() {
  return (
    <>
      <HeroSection
        subtitle="Skincare Treatments"
        title="Your healthiest skin awaits."
        ctaText="I'm Ready for a Transformation"
        bgImage="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-charcoal/70 leading-relaxed">
            Are you tired of guessing what skincare you should use? Rooted in
            research and clinical studies, everything we do at Refined Skin is
            backed by science. We are a results-driven skincare clinic that will
            work with you to understand your skin&apos;s unique needs. Let us curate a
            treatment plan and simplified skincare routine to improve your overall
            skin health and get your glow back. Your path to healthy skin starts now.
          </p>
        </div>
      </section>

      {/* Quick Options */}
      <section className="py-16 px-6 bg-brand-cream">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-sm shadow-sm">
            <h3 className="font-serif text-2xl italic mb-1">The Refined Routine</h3>
            <p className="text-lg font-light text-brand-charcoal">$65 &middot; 45 minutes</p>
            <ul className="mt-6 space-y-2 text-sm text-brand-charcoal/70">
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Consultation and skin analysis</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Mini facial</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Customized skincare routine document</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Treatment plan recommendations</li>
            </ul>
            <a href="#book-now" className="btn-primary mt-6">Book It</a>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm">
            <h3 className="font-serif text-2xl italic mb-1">The First Timer Facial</h3>
            <p className="text-lg font-light text-brand-charcoal">$175 &middot; 1.5 hours</p>
            <ul className="mt-6 space-y-2 text-sm text-brand-charcoal/70">
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Consultation and skin analysis</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> 1 hour facial with neck/shoulder/hand/arm massage</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Customized skincare routine document</li>
              <li className="flex gap-2"><span className="text-brand-sage">&#10003;</span> Treatment plan recommendations</li>
            </ul>
            <a href="#book-now" className="btn-primary mt-6">Book It</a>
          </div>
        </div>
      </section>

      {/* Skin Analysis */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl italic text-center mb-8">
            Skin Analysis + Customized Home Care Routine
          </h2>
          <p className="text-sm text-brand-charcoal/70 leading-relaxed">
            The best first step you can take on your skincare journey is booking a
            consultation + skin analysis either on its own (The Refined Routine) or
            with your first facial (The First Timer Facial). It is so beneficial for
            your esthetician to understand your current skincare routine, your skin
            concerns, and what your goals are for your skin. Once we audit your
            current routine, I&apos;ll ensure all of your products are being applied in
            the correct order and that these products are helping you reach your
            goals. Next, we&apos;ll analyze your skin through high magnification and
            lighting to determine your skin type and current condition in order to
            advise on appropriate skincare products and future treatment plans. Your
            morning and evening home care routine will be documented and emailed to
            you for reference, along with any additional product recommendations,
            notes, and a suggested treatment plan. Great for all skin types (even
            sensitive and pregnant). Treatment is customized to each client&apos;s
            individual needs.
          </p>
          <FAQSection faqs={skinAnalysisFaqs} />
        </div>
      </section>

      {/* Facials */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl italic text-center mb-8">
            Relaxing Spa Facial + Results + Skin Health
          </h2>
          <p className="text-sm text-brand-charcoal/70 leading-relaxed">
            Results or relaxation? At Refined Skin & Acne Clinic, you never have to
            choose. Your facial will be customized to your skin type, targeting your
            exact skin concerns and are performed with spa vibes in mind. A heated
            bed, luxurious linens, high end spa wrap, essential oils, steamed towels
            and lots of massage (neck, shoulders, hands and arms). Experience a deep
            double-cleanse, skin analysis, enzymatic exfoliation, extractions (as
            needed), a custom mask to target your skin&apos;s unique needs, treatment
            serums, moisturizer and SPF. You&apos;ll know the service is wrapping up
            shortly when the scalp massage and hair combing begins.
          </p>
          <p className="mt-4 text-sm text-brand-charcoal/70 leading-relaxed">
            Targeting: All skin concerns; Discoloration, Texture, Mild Acne,
            Laxity, Aging, Dullness, Dryness, Sensitivity and much more. Great for
            all skin types (even sensitive and pregnant).
          </p>
          <FAQSection faqs={facialFaqs} />
        </div>
      </section>

      {/* Dermaplaning */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl italic text-center mb-8">
            Dermaplaning
          </h2>
          <p className="text-sm text-brand-charcoal/70 leading-relaxed">
            Dermaplaning is a non-invasive professional skincare procedure that
            involves the use of a surgical scalpel to manually exfoliate the top
            layer of dead skin cells and subsequently remove the fine vellus hair,
            commonly known as &ldquo;peach fuzz&rdquo; along with it. Benefits include: improved
            skin texture, promotion of cell turnover, a smoother, more radiant
            complexion. Additionally, by removing the top layer of dead skin cells,
            dermaplaning allows for better penetration of skincare products.
          </p>
          <FAQSection faqs={dermaplaningFaqs} />
        </div>
      </section>

      {/* LED Light Therapy */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl italic text-center mb-8">
            LED Light Therapy
          </h2>
          <p className="text-sm text-brand-charcoal/70 leading-relaxed">
            Light therapy, also known as phototherapy or low-level light therapy
            (LLLT), is the application of specific wavelengths of light energy to
            tissue to obtain therapeutic benefits for a variety of conditions.
          </p>
          <FAQSection faqs={ledFaqs} />
        </div>
      </section>

      {/* Chemical Peels */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl italic text-center mb-8">
            Chemical Peels
          </h2>
          <p className="text-sm text-brand-charcoal/70 leading-relaxed">
            A chemical peel is a cosmetic procedure in which a chemical solution
            (AHA, BHA or TCA) is applied to the skin to exfoliate and remove the
            outer layers of damaged or aged skin. This process encourages the
            regeneration of new skin cells, resulting in a smoother, more even
            complexion. Chemical peels are commonly used to address wrinkles, fine
            lines, uneven pigmentation, acne scars, and sun damage.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-brand-charcoal/10 rounded-sm">
              <h4 className="font-serif text-lg mb-2">Level 1</h4>
              <p className="text-xs text-brand-charcoal/60">Minimal to no peeling/flaking expected and safe to do year round. Proper aftercare and SPF use is a must.</p>
            </div>
            <div className="p-6 border border-brand-charcoal/10 rounded-sm">
              <h4 className="font-serif text-lg mb-2">Level 2</h4>
              <p className="text-xs text-brand-charcoal/60">Mild to Moderate peeling/flaking expected. Proper aftercare and SPF use is a must. Best performed from Fall to Spring.</p>
            </div>
            <div className="p-6 border border-brand-charcoal/10 rounded-sm">
              <h4 className="font-serif text-lg mb-2">BioRePeel</h4>
              <p className="text-xs text-brand-charcoal/60">A 30% TCA Peel developed in Italy that works from the lower skin levels up. This no-peel peel encourages collagen and elastin production without typical peeling/downtime.</p>
            </div>
          </div>
          <FAQSection faqs={peelFaqs} />
        </div>
      </section>

      {/* Microchanneling */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl italic text-center mb-8">
            Microchanneling
          </h2>
          <p className="text-sm text-brand-charcoal/70 leading-relaxed">
            It&apos;s Microneedling evolved! Procell Microchanneling is collagen
            stimulation by microchannel delivery of peptides, growth factors &
            cytokines. Rejuvenate the skin with corrective and anti-aging benefits
            with little to no recovery time and minor discomfort. No numbing needed
            prior to appointment. With as little as two treatments, microchanneling
            has been shown to improve skin laxity, the diminished appearance of
            wrinkles and fine lines, acne scars, age spots/sunspots, and stretch
            marks.
          </p>
          <FAQSection faqs={microchannelingFaqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-heading">Our Approach</p>
          <p className="text-brand-charcoal/70 leading-relaxed mt-4">
            The skin is the largest organ of our body. Addressing the symptoms
            appearing topically often requires a more holistic approach looking at
            lifestyle, nutrition, treatments, and a simple skincare regimen. Our
            approach is customized to each client&apos;s unique skin concerns.
          </p>
          <p className="mt-4 text-sm font-semibold">
            Jamie Brown &ndash; Advanced Esthetician & Acne Coach
          </p>
          <a href="#book-now" className="btn-primary mt-8">
            Book Your First Timer Facial
          </a>
        </div>
      </section>

      <TestimonialCarousel />
    </>
  );
}
