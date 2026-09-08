import ImagePlaceholder from "../UI/ImagePlaceholder";

const REASONS = [
  { title: "Family Heritage", body: "Rooted in a family business with 50+ years of footwear heritage in Talegaon Dabhade, built one customer relationship at a time." },
  { title: "Quality You Can Trust", body: "We select footwear for comfort and durability, not just looks, so it holds up to everyday family life." },
  { title: "Something for Everyone", body: "From school shoes to formal wear, our range covers men, women and kids under one roof." },
  { title: "Real Value", body: "Fair, family-friendly pricing across every collection, without compromising on quality." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-2 md:items-center md:gap-16 md:py-20 lg:px-10">
        <ImagePlaceholder
          alt="Illustration representing MANE FOOTWEAR's quality and variety"
          kind="leather"
          aspectRatio="aspect-[4/3]"
          className="w-full"
        />
        <div>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Why Families Choose MANE FOOTWEAR
          </h2>
          <div className="mt-8 space-y-6">
            {REASONS.map((reason) => (
              <div key={reason.title} className="border-l-2 border-orange-dark pl-4">
                <h3 className="text-base font-semibold text-navy">{reason.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/70">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}