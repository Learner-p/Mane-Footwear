import { branches } from "../../data/branches";
import BranchCard from "./BranchCard";

export default function BranchNetwork() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:px-10">
        <h2 className="text-xl font-bold text-navy sm:text-2xl">Our Branch Network</h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground/70">
          MANE FOOTWEAR is part of the same family business as three other
          footwear stores serving Talegaon Dabhade.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  );
}