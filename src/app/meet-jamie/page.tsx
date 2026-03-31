import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Meet Jamie Brown | Refined Skin",
  description: "Meet Jamie Brown, Advanced Esthetician & Acne Coach. Learn about her journey from corporate career to skincare professional.",
};

const timeline = [
  {
    number: "01",
    title: "Education & Career Start",
    text: "Jamie graduated from Trine University with a Bachelor of Science in Business in 2007. She got married, and began her career in Finance/Technology.",
  },
  {
    number: "02",
    title: "Acne Struggle",
    text: "Between 2008 and 2015, Jamie developed hormonal cystic acne on her jawline that proved incredibly difficult to treat. Nothing seemed to help, and the acne persisted for the next decade and through two pregnancies.",
  },
  {
    number: "03",
    title: "Seeking Solutions",
    text: "Jamie and her family moved to California and started working for Apple. After seeing countless dermatologists and professionals and spending thousands on treatments, products, and tools, Jamie demanded an Accutane prescription. Accutane cleared the acne but not without major side effects, some of which persist to this day.",
  },
  {
    number: "04",
    title: "Life Change",
    text: "In the thick of the pandemic, Jamie and her family decided to move back to Ohio to be near family. Jamie realized that she hadn\u2019t been happy with her career choice for a long time and took this opportunity to explore work that lit her up, mattered, and could make an impact.",
  },
  {
    number: "05",
    title: "Career Pivot",
    text: "In 2021, Jamie started Esthetics School. She graduated in 2022, and had baby #3 and passed the State Boards within 20 days of each other. 5 months later, she opened Refined Skin + Acne Clinic.",
  },
];

export default function MeetJamiePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i0.wp.com/refined.skin/wp-content/uploads/2024/02/EHP-130.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl italic text-white">
            Meet Jamie Brown
          </h1>
        </div>
      </section>

      {/* Intro with photo */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <img
              src="https://i0.wp.com/refined.skin/wp-content/uploads/2024/02/Untitled-design-65.png"
              alt="Jamie Brown"
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div className="md:w-3/5">
            <p className="text-brand-charcoal/70 leading-relaxed">
              Thank you for being here&hellip; I am going to share with you how I
              ended up in this career as an Advanced Esthetician, passionate about
              providing holistic and results-based skin care treatments and support.
              My story isn&apos;t a conventional one. My motivation is rooted in having
              cystic acne myself, robbing me of so much self-confidence when I was
              getting married, having kids, climbing the ladder at work, and
              building my life. After going through so much to clear my acne, I
              knew I wanted to help others to experience a different journey. All
              that to say, I am here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item.number} className="flex gap-8 items-start">
                <div className="shrink-0 w-16 h-16 rounded-full bg-brand-beige/30 flex items-center justify-center">
                  <span className="font-serif text-2xl italic text-brand-charcoal/60">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl italic mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i0.wp.com/refined.skin/wp-content/uploads/2023/12/EHP-121.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="section-heading text-white/80">Are You Ready?</p>
          <h2 className="font-serif text-4xl md:text-5xl italic text-white mt-4">
            Start your skin health journey
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/acne-clinic" className="btn-outline">
              Acne Clinic
            </Link>
            <Link href="/treatments" className="btn-outline">
              Treatments
            </Link>
          </div>
        </div>
      </section>

      <TestimonialCarousel />
    </>
  );
}
