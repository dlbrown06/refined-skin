"use client";

import { useState } from "react";

const CLOGGING_INGREDIENTS = [
  "acetylated lanolin", "acetylated lanolin alcohol", "algae extract", "algin",
  "butyl stearate", "carrageenan", "cetearyl alcohol", "cetyl acetate",
  "chlorella", "cocoa butter", "coconut butter", "coconut oil", "coconut alkanes",
  "colloidal sulfur", "cotton awws oil", "cotton seed oil", "d & c red 17",
  "d & c red 21", "d & c red 3", "d & c red 30", "d & c red 36",
  "decyl oleate", "dioctyl succinate", "disodium monooleamido",
  "ethoxylated lanolin", "ethylhexyl palmitate", "glyceryl stearate",
  "glyceryl-3 diisostearate", "hexadecyl alcohol", "hydrogenated vegetable oil",
  "isocetyl alcohol", "isocetyl stearate", "isodecyl oleate",
  "isopropyl isostearate", "isopropyl linolate", "isopropyl myristate",
  "isopropyl palmitate", "isostearic acid", "isostearyl isostearate",
  "isostearyl neopentanoate", "laminaria digitata", "laminaria saccharina",
  "lanolin acid", "laneth-10", "laureth-23", "laureth-4", "lauric acid",
  "mink oil", "myristic acid", "myristyl lactate", "myristyl myristate",
  "octyl palmitate", "octyl stearate", "oleath-3", "oleic acid",
  "oleyl alcohol", "peg 2 sulfosuccinate", "peg 16 lanolin",
  "peg 200 dilaurate", "peg 8 stearate", "pg monostearate",
  "polyglyceryl-3 diisostearate", "potassium chloride", "ppg 2 myristyl propionate",
  "propylene glycol monostearate", "red algae", "shark liver oil",
  "sodium chloride", "sodium laureth sulfate", "sodium lauryl sulfate",
  "sorbitan oleate", "sorbitan sesquioleate", "soybean oil",
  "steareth 10", "stearic acid", "stearyl heptanoate", "sulfated castor oil",
  "sulfated jojoba oil", "sweetalmond oil", "tocopherol", "triticum vulgare",
  "wheat germ glyceride", "wheat germ oil", "xylene",
  "laminaria", "fucus", "seaweed", "spirulina", "chondrus crispus",
  "palmaria palmata", "ascophyllum", "macrocystis", "nereocystis",
  "sargassum", "padina pavonica", "undaria pinnatifida",
  "ethylhexyl methoxycinnamate", "homosalate", "octinoxate", "octocrylene",
  "oxybenzone", "avobenzone",
  "dimethicone", "cyclomethicone", "cyclopentasiloxane",
  "capric acid", "caprylic acid", "shea butter", "mango butter",
  "argan oil", "avocado oil", "castor oil", "corn oil", "flaxseed oil",
  "grape seed oil", "hazelnut oil", "hemp seed oil", "jojoba oil",
  "macadamia oil", "marula oil", "mineral oil", "neem oil", "olive oil",
  "palm oil", "peach kernel oil", "peanut oil", "primrose oil",
  "rosehip oil", "safflower oil", "sesame oil", "sunflower oil",
  "tea tree oil", "walnut oil",
];

export default function IngredientChecker() {
  const [ingredients, setIngredients] = useState("");
  const [results, setResults] = useState<{ found: string[]; safe: boolean } | null>(null);

  const checkIngredients = () => {
    if (!ingredients.trim()) return;

    const input = ingredients.toLowerCase();
    const found: string[] = [];

    for (const clogger of CLOGGING_INGREDIENTS) {
      if (input.includes(clogger.toLowerCase())) {
        found.push(clogger);
      }
    }

    setResults({ found, safe: found.length === 0 });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      checkIngredients();
    }
  };

  return (
    <div>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Paste your product's ingredient list here..."
        rows={8}
        className="w-full border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-beige transition-colors resize-none"
      />
      <button
        onClick={checkIngredients}
        className="btn-primary mt-4"
      >
        Check Ingredients
      </button>

      {results && (
        <div className="mt-8">
          {results.safe ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-sm">
              <p className="text-green-800 font-medium">
                &#10003; Congratulations! Your product has no pore-clogging
                ingredients and is safe to use on acne prone skin.
              </p>
            </div>
          ) : (
            <div className="p-6 bg-red-50 border border-red-200 rounded-sm">
              <p className="text-red-800 font-medium mb-4">
                &#10007; Unfortunately, there are some pore-clogging ingredients found:
              </p>
              <ul className="space-y-1">
                {results.found.map((item) => (
                  <li key={item} className="text-sm text-red-700">
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
