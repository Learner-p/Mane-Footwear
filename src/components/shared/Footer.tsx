import Link from "next/link";
import Wordmark from "./Wordmark";
import { siteContact, whatsappHref } from "../../data/contact";

const SHOP_LINKS = [
  "Men's Footwear",
  "Women's Footwear",
  "Kids Footwear",
  "School Shoes",
  "Sports & Running Shoes",
  "Formal & Casual Shoes",
];

// TODO: Replace with the real MANE FOOTWEAR WhatsApp business number
const WHATSAPP_LINK = "https://wa.me/919156310198";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4 md:gap-12">
          <div className="md:col-span-2">
            <Wordmark className="text-xl" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-offwhite/80">
              A family footwear business with over 50 years of trusted
              service in Talegaon Dabhade, Maharashtra.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-orange-dark"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <h2 className="border-b border-gold/20 pb-2 text-base font-semibold text-gold">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-offwhite/80">
              <li><Link href="/" className="transition-colors hover:text-orange">Home</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-orange">About</Link></li>
              <li><Link href="/legacy" className="transition-colors hover:text-orange">Legacy</Link></li>
              <li><Link href="/branches" className="transition-colors hover:text-orange">Our Branches</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-orange">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="border-b border-gold/20 pb-2 text-base font-semibold text-gold">
              Shop
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-offwhite/80">
              {SHOP_LINKS.map((item) => (
                <li key={item}>
                  <Link href="/collections" className="transition-colors hover:text-orange">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-offwhite/10 pt-10 text-sm text-offwhite/80 md:grid-cols-2">
          <div>
            <h2 className="border-b border-gold/20 pb-2 text-base font-semibold text-gold">
              Visit Us
            </h2>
            <p className="mt-4">Talegaon Dabhade, Maharashtra, India</p>
        <p className="mt-1.5">
          <a href={siteContact.phoneHref} className="hover:text-orange">
            {siteContact.phone}
          </a>
        </p>
        <p className="mt-1.5">
          <a href={`mailto:${siteContact.email}`} className="hover:text-orange">
            {siteContact.email}
          </a>
        </p>
        <p className="mt-1.5">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-orange"
          >
            WhatsApp Us
          </a>
        </p>
            <p className="mt-4 text-xs leading-relaxed text-offwhite/60">
              MANE FOOTWEAR is part of a family footwear business with a
              50+ year legacy and four retail locations across Talegaon
              Dabhade.
            </p>
            <Link
              href="/branches"
              className="mt-2 inline-block text-xs font-medium text-orange transition-colors hover:text-orange-dark hover:underline"
            >
              Our Branches
            </Link>
          </div>
          <div>
            <h2 className="border-b border-gold/20 pb-2 text-base font-semibold text-gold">
              Follow Us
            </h2>
            <ul className="mt-4 flex gap-5">
              <li>
                <a href="#" aria-label="Instagram (coming soon)" className="transition-colors hover:text-orange">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook (coming soon)" className="transition-colors hover:text-orange">
                  Facebook
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs text-offwhite/60">Social links coming soon.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-offwhite/10 pt-6 text-xs text-offwhite/60 sm:flex-row sm:justify-between">
          <p>© {year} MANE FOOTWEAR. All rights reserved.</p>
          <p>Talegaon Dabhade · Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}