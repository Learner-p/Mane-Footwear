"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Wordmark from "./Wordmark";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/legacy", label: "Legacy" },
  { href: "/branches", label: "Our Branches" },
  { href: "/contact", label: "Contact" },
];

// TODO: Replace with the real MANE FOOTWEAR WhatsApp business number
const WHATSAPP_LINK = "https://wa.me/919156310198";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-light bg-offwhite">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10"
      >
        <Link href="/" className="text-navy">
          <Wordmark className="text-lg" />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b-2 pb-1.5 text-sm font-medium text-navy transition-all duration-200 hover:border-orange-dark ${
                    isActive ? "border-orange-dark" : "border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-orange-dark md:inline-flex"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.6 1.1 2.8.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.1 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
          </svg>
          WhatsApp Us
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy md:hidden"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden motion-safe:transition-[max-height] motion-safe:duration-200 md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1.5 border-t border-gray-light px-6 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md border-l-4 px-3 py-3 text-base font-medium text-navy ${
                    isActive ? "border-orange-dark bg-navy/5" : "border-transparent hover:bg-navy/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <a
          href={WHATSAPP_LINK}
          target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-orange px-4 py-3 text-center text-base font-semibold text-navy"
            >
              WhatsApp Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}