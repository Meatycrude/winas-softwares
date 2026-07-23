"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-100 px-4 py-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.18),transparent_35%)]" />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center justify-center">
        <div className="relative w-full rounded-[32px] bg-white px-6 py-8 shadow-2xl md:px-16 md:py-10">
          <nav className="relative mb-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <Image
                src="/images/hero/download.png"
                alt="Winas Softwares Logo"

                width={152}
                height={152}
                className=" object-contain"
              />

             {/* <div className="text-lg font-bold sm:text-xl">
                <span className="text-[#ff0f7b]">WINAS</span>
                <span className="text-slate-700"> Softwares</span>
              </div>*/}
            </a>

            <div className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition hover:text-[#ff0f7b]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="/contact"
              className="hidden rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-800 transition hover:border-[#ff0f7b] hover:text-[#ff0f7b] md:inline-flex"
            >
              Get a Quote
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex rounded-full border border-slate-300 p-2 text-slate-800 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {menuOpen && (
              <div className="absolute left-0 right-0 top-16 z-50 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl md:hidden">
                <div className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-full px-4 py-3 transition hover:bg-pink-50 hover:text-[#ff0f7b]"
                    >
                      {link.name}
                    </a>
                  ))}

                  <a
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 rounded-full bg-[#ff0f7b] px-5 py-3 text-center font-bold text-white shadow-lg shadow-pink-200"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            )}
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-[#ff0f7b]">
                <Sparkles size={16} />A subsidiary of Comrades Computer Solution
                Ltd.
              </div>

              <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Smart software for{" "}
                <span className="text-[#ff0f7b]">every business.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                We design, build and install POS, inventory, SACCO, e-commerce
                and custom business systems — on web, desktop and mobile.
                Proudly built from Kisii, Kenya.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff0f7b] px-7 py-3 font-bold text-white shadow-lg shadow-pink-200 transition hover:scale-105"
                >
                  Start Your Project <ArrowRight size={18} />
                </a>

                <a
                  href="/portfolio"
                  className="rounded-full border border-slate-300 px-7 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
                >
                  See Our Work
                </a>
              </div>

              <div className="mt-14 flex flex-wrap gap-8 sm:gap-10">
                <div>
                  <h3 className="text-3xl font-black text-slate-950">12+</h3>
                  <p className="text-sm text-slate-500">Live systems</p>
                </div>

                <div className="hidden h-12 w-px bg-slate-200 sm:block" />

                <div>
                  <h3 className="text-3xl font-black text-slate-950">6</h3>
                  <p className="text-sm text-slate-500">Industries served</p>
                </div>

                <div className="hidden h-12 w-px bg-slate-200 sm:block" />

                <div>
                  <h3 className="text-3xl font-black text-slate-950">100%</h3>
                  <p className="text-sm text-slate-500">KRA ready</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[460px]">
              <div className="absolute left-4 top-0 h-48 w-48 overflow-hidden rounded-[32px] bg-cyan-100 sm:left-8 sm:h-56 sm:w-56">
                <Image
                  src="/images/hero/hero1.jpg"
                  alt="Winas software user"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute right-0 top-24 h-48 w-48 overflow-hidden rounded-[32px] bg-purple-100 sm:right-2 sm:top-20 sm:h-56 sm:w-56">
                <Image
                  src="/images/hero/hero2.jpg"
                  alt="Business software dashboard"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-8 h-40 w-64 overflow-hidden rounded-[32px] bg-green-100 sm:left-20 sm:h-44 sm:w-72">
                <Image
                  src="/images/hero/hero3.jpg"
                  alt="POS and business system"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-[38%] top-[45%] rounded-full bg-[#b794f4] px-6 py-3 text-sm font-semibold text-white shadow-xl sm:left-[46%] sm:px-8 sm:py-4 sm:text-base">
                POS • SACCO • Web
              </div>

              <div className="absolute right-16 top-0 flex h-14 w-14 items-center justify-center rounded-full bg-sky-200 text-2xl sm:right-20 sm:h-16 sm:w-16">
                ↗
              </div>

              <div className="absolute left-0 top-52 text-3xl text-[#89a878]">
                ✦
              </div>

              <div className="absolute right-0 bottom-28 h-5 w-5 rounded-full bg-sky-300" />
              <div className="absolute right-24 top-44 h-4 w-4 rounded-full bg-purple-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
