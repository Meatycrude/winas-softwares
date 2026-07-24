import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Clock } from "lucide-react";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "POS Systems",
  "Inventory Management",
  "SACCO Systems",
  "E-commerce",
  "Custom Software",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 px-4 pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,15,123,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-pink-300">
                Ready to digitize?
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                Let’s build software that runs your business.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                From POS and inventory to SACCO and e-commerce systems, Winas
                builds, installs and customizes software for real business
                operations.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0f7b] px-7 py-4 font-bold text-white shadow-lg shadow-pink-500/30 transition hover:scale-105"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/254705079270"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="mb-6 flex items-center gap-3">
              <Image
                src="/images/hero/download.png
                "
                alt="Winas Softwares Logo"
                width={48}
                height={48}
                className="rounded-xl object-contain"
              />

              <div>
                <h3 className="text-xl font-black">WINAS SOFTWARES LTD</h3>
                <p className="text-sm font-semibold text-pink-300">
                  Powering Your Business Success
                </p>
              </div>
            </Link>

            <p className="max-w-md leading-8 text-white/65">
              Powering Kenyan businesses with smart, modern software. From POS
              and inventory to SACCO and e-commerce — we build, install and
              customize the systems that run your business.
            </p>

            <p className="mt-5 text-sm font-bold text-white/50">
              A subsidiary of Comrades Computer Solution Ltd.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black">Explore</h4>

            <div className="space-y-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-white/65 transition hover:translate-x-1 hover:text-[#ff0f7b]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black">Services</h4>

            <div className="space-y-3">
              {services.map((service) => (
                <p key={service} className="text-white/65">
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black">Reach Us</h4>

            <div className="space-y-4 text-white/65">
              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-[#ff0f7b]" size={18} />
                <p>Room 301, Market Plaza, Kisii, Kenya</p>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 shrink-0 text-[#ff0f7b]" size={18} />
                <p>+254 705 079 270</p>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 shrink-0 text-[#ff0f7b]" size={18} />
                <p>info@winassoftwares.co.ke</p>
              </div>

              <div className="flex gap-3">
                <Clock className="mt-1 shrink-0 text-[#ff0f7b]" size={18} />
                <p>Mon – Sat · 08:00 – 16:00</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-[#ff0f7b]"
              >
                <Clock size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-[#ff0f7b]"
              >
                <Clock size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-7 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Winas Softwares Ltd. All rights reserved.</p>
          <p>Designed & built with care in Kisii, Kenya.</p>
        </div>
      </div>
    </footer>
  );
}
