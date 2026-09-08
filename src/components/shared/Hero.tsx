import Link from "next/link";
import ImagePlaceholder from "../../components/UI/ImagePlaceholder";
export default function Hero() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24 lg:px-10">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Step Into Quality.
            <br />
            Walk With Confidence.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-lg">
            Comfortable, quality footwear for men, women and kids from a
            trusted Talegaon Dabhade family business, with 50+ years of
            footwear heritage.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Link
              href="/collections"
              className="inline-flex w-full items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-orange-dark sm:w-auto"
            >
              Explore Collections
            </Link>
            <Link
              href="/branches"
              className="inline-flex w-full items-center justify-center rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-offwhite sm:w-auto"
            >
              Visit Our Stores
            </Link>
          </div>
        </div>

        <ImagePlaceholder
          alt="Illustration representing MANE FOOTWEAR's footwear collection"
          variant="dark"
          kind="boot"
          aspectRatio="aspect-[3/2] md:aspect-[4/3]"
          className="w-full"
        />
      </div>
    </section>
  );
}