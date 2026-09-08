import Link from "next/link";

export default function LegacySection() {
  return (
    <section className="bg-navy text-offwhite">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-2 md:items-center md:gap-16 md:py-24 lg:px-10">
        <div className="order-2 flex aspect-[4/3] flex-col items-center justify-center rounded-lg border border-gold/30 bg-navy/60 md:order-1">
          <span className="text-6xl font-bold text-gold sm:text-7xl">50+</span>
        <span className="mt-2 text-sm font-medium text-offwhite/70 sm:text-base">
          Years of Family Footwear Heritage
        </span>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold sm:text-3xl">A Family Legacy in Footwear</h2>
          <p className="mt-4 text-sm leading-relaxed text-offwhite/80 sm:text-base">
            MANE FOOTWEAR carries forward 50+ years of family footwear
            heritage in Talegaon Dabhade. Over the generations, the family
            has grown from a single store into multiple footwear retail
            locations across the town, while staying true to the same
            values of trust, quality and personal service.
          </p>
          <Link
            href="/legacy"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-orange-dark"
          >
            Discover Our Legacy
          </Link>
        </div>
      </div>
    </section>
  );
}