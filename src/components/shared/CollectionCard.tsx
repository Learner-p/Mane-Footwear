import Link from "next/link";
import ImagePlaceholder from "../UI/ImagePlaceholder";
import type { Collection } from "../../types";

export default function CollectionCard({
  collection,
  featured = false,
}: {
  collection: Collection;
  featured?: boolean;
}) {
  return (
    <Link
      href={collection.href}
      className={`group block overflow-hidden rounded-lg border border-gray-light bg-white transition-shadow hover:shadow-md ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <ImagePlaceholder
        src={collection.image}
        alt={collection.name}
        kind={collection.iconKind}
        aspectRatio={featured ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/3]"}
      />
      <div className="p-5">
        <h3 className={`font-semibold text-navy ${featured ? "text-lg" : "text-base"}`}>
          {collection.name}
        </h3>
        <p className="mt-1 text-sm text-foreground/70">{collection.description}</p>
        <span className="mt-3 inline-block text-sm font-medium text-navy underline-offset-4 group-hover:underline">
          Explore
        </span>
      </div>
    </Link>
  );
}