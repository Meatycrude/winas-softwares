import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Building2,
  CreditCard,
  Database,
  Globe,
  Hotel,
  Layers3,
  LockKeyhole,
  MessageCircle,
  PackageSearch,
  Phone,
  Search,
  Server,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Truck,
  Users,
  WalletCards,
} from "lucide-react";

const products = [
  {
    icon: Hotel,
    title: "Hotel & Restaurant POS",
    image: "/images/services/hotel pos.jpg",
    text: "Waiter touch terminals, kitchen display, table billing and shift management.",
  },
  {
    icon: ShoppingCart,
    title: "Supermarket POS",
    image: "/images/services/supermarketpos.jpg",
    text: "Fast checkout, barcode scanning, multi-cashier support and KRA-ready invoicing.",
  },
  {
    icon: BadgeCheck,
    title: "Pharmacy POS",
    image: "/images/services/pharmacypos.jpg",
    text: "Batch tracking, expiry alerts, prescription support and stock control.",
  },
  {
    icon: PackageSearch,
    title: "Hardware Management",
    image: "/images/services/hardware managemnt.jpg",
    text: "SKUs by category, supplier ledgers, quotations, receipts and stock movement.",
  },
  {
    icon: Building2,
    title: "BnB & Property Management",
    image: "/images/services/property.jpg",
    text: "Room availability, bookings, billing, guest records and communication.",
  },
  {
    icon: ShoppingBag,
    title: "Boutique Management",
    image: "/images/services/boutiquemanagement.jpg",
    text: "Product variants by size and colour, layby, customer accounts and loyalty.",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    image: "/images/services/fleet management.jpg",
    text: "Vehicle scheduling, trip logs, fuel tracking and maintenance records.",
  },
  {
    icon: Globe,
    title: "Websites & E-commerce",
    image: "/images/services/ecommerce.jpg",
    text: "Beautiful storefronts, M-Pesa checkout, order management and SEO.",
  },
  {
    icon: WalletCards,
    title: "SACCO & SHG Systems",
    image: "/images/services/sacco.jpg",
    text: "Members, savings, loans, statements, dividends and group finance management.",
  },
];

const delivery = [
  {
    icon: Globe,
    title: "Web Applications",
    text: "Modern responsive web apps built with React, Next.js, Laravel and Django.",
  },
  {
    icon: Server,
    title: "Desktop Applications",
    text: "Reliable Windows POS and back-office systems with offline-ready workflows.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    text: "Android and iOS business apps for customers, staff and managers.",
  },
  {
    icon: Settings2,
    title: "Customization",
    text: "We bend every system to match your exact workflow, roles and branding.",
  },
];

const features = [
  { icon: CreditCard, title: "M-Pesa Integration" },
  { icon: MessageCircle, title: "Bulk SMS & WhatsApp" },
  { icon: LockKeyhole, title: "Authentication & Roles" },
  { icon: Search, title: "SEO Optimised" },
  { icon: Bell, title: "Real-Time Notifications" },
  { icon: Database, title: "Cloud Backup" },
  { icon: Layers3, title: "Multi-Location Support" },
  { icon: Users, title: "Different Access Levels" },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-slate-100">
      <section className="relative px-4 pb-24 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,15,123,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-pink-50 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-[#ff0f7b]">
              What We Do
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
              Software solutions for{" "}
              <span className="text-[#ff0f7b]">every industry.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From point-of-sale to SACCO information systems, we design, build,
              install and customize the systems Kenyan businesses rely on.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff0f7b] px-7 py-4 font-bold text-white shadow-lg shadow-pink-200 transition hover:scale-105"
              >
                Request Custom Software <ArrowRight size={18} />
              </a>

              <a
                href="/pricing"
                className="rounded-full border border-slate-300 px-7 py-4 font-bold text-slate-900 transition hover:bg-white"
              >
                View Pricing
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[44px] bg-slate-950 p-4 shadow-2xl">
            <video
              src="/videos/video3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-[360px] w-full rounded-[36px] object-cover md:h-[520px]"
            />
            <div className="absolute inset-4 rounded-[36px] bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-pink-300">
                Built for operations
              </p>
              <h2 className="text-3xl font-black">
                POS, inventory, finance, reports and payments in one system.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
              Our Software Products
            </p>
            <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Systems that solve real{" "}
              <span className="text-[#ff0f7b]">business problems.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              All POS systems are KRA-integrated where applicable and can be
              customised to match your business workflow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#ff0f7b]/40 hover:shadow-2xl"
                >
                  <div className="relative h-56">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff0f7b] text-white shadow-lg">
                      <Icon size={26} />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,15,123,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
              How We Deliver
            </p>
            <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              One team. Every <span className="text-[#ff0f7b]">platform.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {delivery.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[36px] bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#ff0f7b] text-white shadow-lg shadow-pink-200">
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-4 text-2xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[44px] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-pink-300">
                Built-in Features
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Everything your business needs.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Our systems come with practical business features that help you
                sell, manage, report, secure and scale with confidence.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-[26px] border border-white/10 bg-white/10 p-5 backdrop-blur"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff0f7b] text-white">
                      <Icon size={22} />
                    </div>
                    <p className="font-bold">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl rounded-[44px] bg-[#ff0f7b] p-10 text-white shadow-2xl md:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-pink-100">
                Don’t see your industry?
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Tell us your workflow — we’ll build it.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-pink-50">
                We create custom software for businesses with unique operations,
                special reporting needs and industry-specific workflows.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#ff0f7b] transition hover:scale-105"
              >
                Request Custom Software <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
