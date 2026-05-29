// src/components/home/TechStackSection.tsx

import {
  Cloud,
  Code2,
  CreditCard,
  Database,
  Layers3,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const techItems = [
  { name: "React", category: "Frontend", icon: Code2 },
  { name: "Next.js", category: "Frontend", icon: Layers3 },
  { name: "Laravel", category: "Backend", icon: Server },
  { name: "PHP", category: "Backend", icon: Code2 },
  { name: "Spring Boot", category: "Backend", icon: Server },
  { name: "Django", category: "Backend", icon: Server },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "MySQL", category: "Database", icon: Database },
  { name: "Mobile Apps", category: "Android / iOS", icon: Smartphone },
  { name: "Cloud Hosting", category: "Deployment", icon: Cloud },
  { name: "M-Pesa", category: "Payments", icon: CreditCard },
  { name: "Secure Access", category: "Auth & Roles", icon: ShieldCheck },
];

const highlights = [
  "Fast dashboards",
  "Secure logins",
  "KRA-ready systems",
  "M-Pesa checkout",
  "Cloud backup",
  "Reports generation",
  "Multi-user access",
  "Mobile-ready UI",
];

export default function TechStackSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/tech-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-slate-100/90 backdrop-blur-[2px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,15,123,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.2),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
            Technology Stack
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Built with proven, modern{" "}
            <span className="text-[#ff0f7b]">technology.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We use reliable tools to build fast, secure and scalable business
            systems across web, desktop and mobile platforms.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-[36px] shadow-2xl lg:col-span-4">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/tech-bg.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-slate-950/75" />

            <div className="relative flex h-full min-h-[520px] flex-col justify-between p-8 text-white">
              <div>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#ff0f7b] shadow-lg shadow-pink-500/30">
                  <Layers3 size={30} />
                </div>

                <h3 className="text-4xl font-black leading-tight">
                  A complete stack for complete systems.
                </h3>

                <p className="mt-6 leading-8 text-white/80">
                  From user interface design to backend APIs, databases, payment
                  integrations and deployment — we handle the full software
                  lifecycle.
                </p>
              </div>

              <div className="mt-8 rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-200">
                  Core Strength
                </p>

                <p className="mt-2 text-2xl font-black">
                  Business-first engineering
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {techItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="group rounded-[30px] border border-white/60 bg-white/90 p-6 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#ff0f7b]/40 hover:bg-white hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-[#ff0f7b] transition group-hover:bg-[#ff0f7b] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-black text-slate-950">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {item.category}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[36px] border border-white/60 bg-white/90 p-6 shadow-xl backdrop-blur-md">
          <div className="flex flex-wrap justify-center gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
