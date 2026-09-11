import Link from "next/link";

export default function BranchNetwork() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:px-10">
        <h2 className="text-xl font-bold text-navy sm:text-2xl">Our Branch Network</h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground/70">
          MANE FOOTWEAR is part of the same family business as three other
          footwear stores serving Talegaon Dabhade.
        </p>
        <Link
          href="/branches"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-navy px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-offwhite"
        >
          See Our Stores
        </Link>
      </div>
    </section>
  );
}