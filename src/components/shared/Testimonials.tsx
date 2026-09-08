import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            What Customers Say
          </h2>

          <p className="mt-3 text-sm text-foreground/70 sm:text-base">
            Placeholder testimonials shown for design purposes — real customer
            feedback will replace these.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}