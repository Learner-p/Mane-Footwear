import type { Testimonial } from "../../types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-light bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-orange-dark" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              fill={i < testimonial.rating ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth={1}
              className="h-4 w-4"
            >
              <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L10 1.5Z" />
            </svg>
          ))}
        </div>
        <span className="rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-medium text-navy/70">
          Demo review
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/80">&ldquo;{testimonial.quote}&rdquo;</p>
      <p className="mt-4 text-sm font-semibold text-navy">
        {testimonial.name}
        {testimonial.location && (
          <span className="ml-1 font-normal text-foreground/50">— {testimonial.location}</span>
        )}
      </p>
    </div>
  );
}