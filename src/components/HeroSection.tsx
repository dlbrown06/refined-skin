interface HeroSectionProps {
  subtitle: string;
  title: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  bgImage?: string;
  overlay?: boolean;
}

export default function HeroSection({
  subtitle,
  title,
  ctaText,
  ctaHref = "#book-now",
  secondaryCtaText,
  secondaryCtaHref,
  bgImage = "https://i0.wp.com/refined.skin/wp-content/uploads/2024/03/refined-skin.jpg",
  overlay = true,
}: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {overlay && <div className="absolute inset-0 bg-black/20" />}
      <div className="relative z-10 text-center px-6">
        <p className="section-heading text-white/80 mb-6">{subtitle}</p>
        <h1 className="font-serif text-5xl md:text-7xl italic text-white font-normal">
          {title}
        </h1>
        {(ctaText || secondaryCtaText) && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && (
              <a href={ctaHref} className="btn-outline">
                {ctaText}
              </a>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <a href={secondaryCtaHref} className="btn-outline">
                {secondaryCtaText}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
