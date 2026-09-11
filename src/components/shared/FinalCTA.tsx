import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-navy text-offwhite">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-8 sm:py-20 lg:px-10">
        <h2 className="text-2xl font-bold sm:text-3xl">Find Your Perfect Pair</h2>
        <p className="mt-4 text-sm leading-relaxed text-offwhite/80 sm:text-base">
          Visit MANE FOOTWEAR or explore our collections to find the right footwear for you.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/collections"
            className="inline-flex w-full items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-orange-dark sm:w-auto"
          >
            Explore Collections
          </Link>
          <Link
            href="/branches"
            className="inline-flex w-full items-center justify-center rounded-full border border-offwhite px-6 py-3 text-sm font-semibold text-offwhite transition-colors hover:bg-offwhite hover:text-navy sm:w-auto"
          >
            Visit Our Stores
          </Link>
        </div>
      </div>
    </section>
  );
}