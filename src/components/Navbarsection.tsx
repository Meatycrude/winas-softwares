"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function NavbarSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full px-4 pt-6">
      <nav className="mx-auto flex max-w-7xl items-center fixed justify-between bg-white/95 px-5 py-3 ">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/hero/download.png"
            alt="Winas Softwares Logo"
            width={42}
            height={42}
            className="rounded-xl object-contain"
          />

          <div className="text-lg font-bold sm:text-xl">
            <span className="text-[#ff0f7b]">WINAS</span>
            <span className="text-slate-700"> Softwares</span>
          </div>
        </Link>

        <div className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-[#ff0f7b]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-800 transition hover:border-[#ff0f7b] hover:text-[#ff0f7b] md:inline-flex"
        >
          Get a Quote
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex rounded-full border border-slate-300 p-2 text-slate-800 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-200 bg-white p-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-full px-4 py-3 transition hover:bg-pink-50 hover:text-[#ff0f7b]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#ff0f7b] px-5 py-3 text-center font-bold text-white shadow-lg shadow-pink-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
