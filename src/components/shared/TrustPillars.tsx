const PILLARS = [
  {
    title: "50+ Years",
    description: "Family Footwear Heritage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Genuine Quality",
    description: "Carefully Selected Footwear",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Affordable Pricing",
    description: "Value for Every Family",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12 12 20l-8-8V6a2 2 0 0 1 2-2h6l8 8Z" />
        <circle cx="8.5" cy="8.5" r="1" />
      </svg>
    ),
  },
  {
    title: "4 Locations",
    description: "Serving Talegaon Dabhade",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    ),
  },
];

export default function TrustPillars() {
  return (
    <section className="border-y border-gray-light bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:px-8 md:grid-cols-4 lg:px-10">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="flex flex-col items-center gap-3 text-center">
            <span className="text-orange-dark">{pillar.icon}</span>
            <div>
              <p className="text-sm font-semibold text-navy sm:text-base">{pillar.title}</p>
              <p className="mt-1 text-xs text-foreground/60 sm:text-sm">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}