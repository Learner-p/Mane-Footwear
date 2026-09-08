import type { Branch } from "../../types";

export default function BranchCard({ branch }: { branch: Branch }) {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapsQuery)}`;

  return (
    <div className="rounded-lg border border-gray-light bg-white p-5">
      <h3 className="text-sm font-semibold text-navy">{branch.name}</h3>
      <p className="mt-1 text-xs text-foreground/70">{branch.yearsOfService}</p>
      <p className="mt-1 text-xs text-foreground/70">{branch.address ?? branch.location}</p>
      {branch.hours && <p className="mt-1 text-xs text-foreground/70">{branch.hours}</p>}

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
        <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="font-medium text-navy hover:underline">
          View Location
        </a>
        {branch.phone && (
          <a href={`tel:${branch.phone}`} className="font-medium text-navy hover:underline">
            Call
          </a>
        )}
        {branch.whatsapp && (
          <a
            href={`https://wa.me/${branch.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-navy hover:underline"
          >
            WhatsApp
          </a>
        )}
        {!branch.phone && !branch.whatsapp && (
            <span className="text-foreground/60">Contact details coming soon</span>
        )}
      </div>
    </div>
  );
}