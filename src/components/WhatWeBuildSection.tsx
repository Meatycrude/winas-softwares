// src/components/home/WhatWeBuildSection.tsx

import Image from "next/image";
import {
  Building2,
  Globe,
  PackageSearch,
  ShoppingCart,
  Users,
  WalletCards,
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "POS Systems",
    image: "/images/services/pos.jpg",
    text: "Fast, reliable point-of-sale systems for hotels, supermarkets, pharmacies, hardware stores and boutiques.",
  },
  {
    icon: PackageSearch,
    title: "Inventory Management",
    image: "/images/services/inventory.jpg",
    text: "Track stock, suppliers, purchases, transfers and reports across single or multiple business locations.",
  },
  {
    icon: Building2,
    title: "Property Management",
    image: "/images/services/property.jpg",
    text: "Manage bookings, rooms, billing and guest communication for BnBs, rentals and villa businesses.",
  },
  {
    icon: WalletCards,
    title: "Financial Systems",
    image: "/images/services/financial.jpg",
    text: "Accounting, ledgers, reconciliation, payroll and finance workflows tailored for growing SMEs.",
  },
  {
    icon: Users,
    title: "SACCO & SHG Systems",
    image: "/images/services/sacco.jpg",
    text: "Member records, savings, loans, statements, dividends and group financial management.",
  },
  {
    icon: Globe,
    title: "Websites & E-commerce",
    image: "/images/services/ecommerce.jpg",
    text: "Modern websites, online shops, M-Pesa checkout, product catalogues and lead-generation platforms.",
  },
];

const trustedBrands = [
  "Comrades Computer",
  "Greenstar Villa Homes",
  "Tripple E Electronics",
  "JM Collections",
  "Toto Baby Shop",
];

export default function WhatWeBuildSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-100 px-4 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,15,123,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(129,140,248,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* TRUSTED BY */}
        <div className="mb-20 rounded-[32px] bg-white px-6 py-10 shadow-xl md:px-12">
          <p className="mb-6 text-center text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Trusted by growing Kenyan businesses
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* HEADING */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
              What We Build
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Software that runs your{" "}
              <span className="text-[#ff0f7b]">business.</span>
            </h2>
          </div>

          <p className="max-w-lg text-lg leading-8 text-slate-600">
            From daily sales to inventory, payments, reports and customer
            management — we build systems that simplify real business
            operations.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#ff0f7b]/40 hover:shadow-2xl"
              >
                {/* MOBILE IMAGE */}
                <div className="relative h-52 w-full md:hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-slate-900 backdrop-blur">
                    {service.title}
                  </div>
                </div>

                {/* DESKTOP CONTENT */}
                <div className="p-8">
                  <div className="mb-8 hidden h-16 w-16 items-center justify-center rounded-3xl bg-[#ff0f7b] text-white shadow-lg shadow-pink-200 transition-all duration-300 group-hover:scale-110 md:flex">
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-4 hidden text-2xl font-black text-slate-950 md:block">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {service.text}
                  </p>

                  <button className="mt-6 font-bold text-[#ff0f7b] transition hover:translate-x-1">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#ff0f7b] to-[#ff4da6] p-10 text-white shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-pink-100">
                Need a custom solution?
              </p>

              <h3 className="text-3xl font-black md:text-4xl">
                Lets build software tailored to your workflow.
              </h3>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center rounded-full bg-white px-8 py-4 font-bold text-[#ff0f7b] transition hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}