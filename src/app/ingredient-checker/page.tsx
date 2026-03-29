import type { Metadata } from "next";
import IngredientChecker from "@/components/IngredientChecker";

export const metadata: Metadata = {
  title: "Ingredient Checker | Refined Skin",
  description: "Check if your skincare, haircare, and makeup products have pore-clogging ingredients.",
};

export default function IngredientCheckerPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-brand-cream">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl italic text-brand-charcoal">
            Ingredient Checker
          </h1>
          <p className="mt-6 text-brand-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            We made it very easy for you to check pore-clogging ingredients in
            your skincare, haircare, and makeup products. To do this, you should
            first search the full name of your product on any search engine, find
            the product&apos;s full ingredient deck and copy/paste into the box below.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <IngredientChecker />
        </div>
      </section>
    </>
  );
}
