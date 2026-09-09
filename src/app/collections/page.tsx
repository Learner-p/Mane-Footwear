import { Suspense } from "react";
import CollectionsBrowser from "../../components/shared/CollectionsBrowser";

export default function CollectionsPage() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-navy sm:text-4xl">Our Collections</h1>
          <p className="mt-3 text-sm text-foreground/70 sm:text-base">
            Browse our demo footwear styles by category, or search for something specific.
          </p>
        </div>

        <div className="mt-10">
          <Suspense fallback={null}>
            <CollectionsBrowser />
          </Suspense>
        </div>
      </div>
    </section>
  );
}