// src/app/portfolio/page.tsx

import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  MonitorSmartphone,
  ShoppingBag,
  Building2,
} from "lucide-react";

const projects = [
  {
    title: "Comrades Computer",
    category: "Corporate Website",
    url: "comradescomputer.co.ke",
    image: "/images/portfolio/comrades.jpg",
    icon: Globe,
    description:
      "Corporate website for our parent company — IT services, sales and support across Kenya.",
  },
  {
    title: "Greenstar Villa Homes",
    category: "Property Management",
    url: "greenstarvillahomes.co.ke",
    image: "/images/portfolio/greenstar.jpg",
    icon: Building2,
    description:
      "Property listing and booking platform for premium villa homes.",
  },
  {
    title: "Tripple E Electronics",
    category: "E-commerce",
    url: "trippleelectronics.com",
    image: "/images/portfolio/tripple.jpg",
    icon: ShoppingBag,
    description:
      "Full e-commerce store for an electronics retailer with M-Pesa checkout.",
  },
  {
    title: "JM Collections",
    category: "Online Store",
    url: "jmcollections.co.ke",
    image: "/images/portfolio/jmcollections.jpg",
    icon: ShoppingBag,
    description:
      "Boutique online store with product variants and customer accounts.",
  },
  {
    title: "Toto Baby Shop",
    category: "E-commerce",
    url: "totobabyshop.co.ke",
    image: "/images/portfolio/toto.jpg",
    icon: ShoppingBag,
    description:
      "Specialty baby and maternity online shop with delivery management.",
  },
  {
    title: "Getenga General Stores",
    category: "Online Store",
    url: "getengageneralstores.co.ke",
    image: "/images/portfolio/getenga.jpg",
    icon: MonitorSmartphone,
    description: "General merchandise online catalogue and ordering system.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden bg-slate-100">
      <section className="relative px-4 pb-24 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,15,123,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-pink-50 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-[#ff0f7b]">
            Selected Work
          </p>

          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
            Real systems. Real{" "}
            <span className="text-[#ff0f7b]">businesses.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A snapshot of websites, online stores and management systems we’ve
            built for clients across Kenya.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className={`group overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#ff0f7b]/40 hover:shadow-2xl ${
                  index === 0 || index === 3 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-slate-900 backdrop-blur">
                    <Icon size={16} className="text-[#ff0f7b]" />
                    {project.category}
                  </div>

                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff0f7b] text-white shadow-lg transition hover:scale-110"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-black text-slate-950">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-bold text-[#ff0f7b]">{project.url}</p>

                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-900 transition hover:border-[#ff0f7b] hover:text-[#ff0f7b]"
                    >
                      View Project <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[44px] bg-[#ff0f7b] p-10 text-white shadow-2xl md:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-pink-100">
                Your business could be next
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                From idea to launch, we build digital products that work.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-pink-50">
                Whether you need a website, online store, POS system, SACCO
                platform, inventory system or custom management software, we can
                build it for you.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#ff0f7b] transition hover:scale-105"
              >
                Start Your Project <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
