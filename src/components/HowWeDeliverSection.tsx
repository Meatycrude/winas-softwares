"use client";

import { useState } from "react";
import {
  Code2,
  Monitor,
  Smartphone,
  Settings2,
  X,
  ArrowRight,
} from "lucide-react";

const platforms = [
  {
    icon: Code2,
    title: "Web Applications",
    short: "Modern systems that run in the browser.",
    description:
      "We build fast, responsive web applications for POS, inventory, SACCOs, property management, e-commerce and custom business workflows.",
  },
  {
    icon: Monitor,
    title: "Desktop Apps",
    short: "Reliable systems for office and shop use.",
    description:
      "We create stable desktop applications for businesses that need offline support, cashier stations, back-office tools and local device integrations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    short: "Business tools in your customer’s pocket.",
    description:
      "We design mobile experiences for Android and iOS, helping businesses manage operations, customers, payments and notifications on the go.",
  },
  {
    icon: Settings2,
    title: "Customization",
    short: "Built around your exact workflow.",
    description:
      "We customize every system to match your operations, branding, staff roles, reports, payments and industry-specific requirements.",
  },
];

export default function HowWeDeliverSection() {
  const [selected, setSelected] = useState<(typeof platforms)[0] | null>(null);

  return (
    <section className="relative overflow-hidden bg-slate-100 px-4 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,15,123,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
            How We Deliver
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            One team. Every <span className="text-[#ff0f7b]">platform.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you need a fast web app, a robust desktop system or a native
            mobile experience — we cover the stack end-to-end and customize
            everything to fit your workflow.
          </p>
        </div>

        <div className="hidden grid-cols-12 gap-6 lg:grid">
          <div className="col-span-5 rounded-[36px] bg-white p-10 shadow-2xl">
            <div className="mb-8 rounded-[28px] bg-slate-950 p-8 text-white">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-300">
                Multi-platform delivery
              </p>

              <h3 className="text-4xl font-black leading-tight">
                We build systems that work wherever your business operates.
              </h3>
            </div>

            <div className="space-y-4">
              {platforms.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-[#ff0f7b]/40 hover:bg-white hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff0f7b] text-white shadow-lg shadow-pink-200">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h4 className="text-lg font-black text-slate-950">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-7 grid gap-6">
            <div className="relative overflow-hidden rounded-[36px] bg-[#ff0f7b] p-10 text-white shadow-2xl">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-purple-500/30 blur-2xl" />

              <div className="relative">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-pink-100">
                  End-to-end execution
                </p>

                <h3 className="max-w-xl text-5xl font-black leading-tight">
                  From idea to installation, support and scaling.
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-pink-50">
                  We handle planning, UI design, backend development,
                  integrations, deployment, staff training and free maintenance.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[32px] bg-white p-8 shadow-xl">
                <h4 className="text-4xl font-black text-slate-950">01</h4>
                <p className="mt-3 font-bold text-slate-950">Understand</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We study your business workflow first.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-xl">
                <h4 className="text-4xl font-black text-slate-950">02</h4>
                <p className="mt-3 font-bold text-slate-950">Build</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We develop the system around your needs.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-xl">
                <h4 className="text-4xl font-black text-slate-950">03</h4>
                <p className="mt-3 font-bold text-slate-950">Support</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We install, train and maintain the system.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="rounded-[32px] bg-white p-6 shadow-xl">
            <p className="mb-5 text-center text-sm font-bold text-slate-500">
              Tap the blinking cards to learn more
            </p>

            <div className="grid gap-4">
              {platforms.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    onClick={() => setSelected(item)}
                    className="relative flex items-center gap-4 rounded-[26px] border border-slate-200 bg-slate-50 p-5 text-left shadow-sm"
                  >
                    <span className="absolute right-5 top-5 h-3 w-3 animate-ping rounded-full bg-[#ff0f7b]" />
                    <span className="absolute right-5 top-5 h-3 w-3 rounded-full bg-[#ff0f7b]" />

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ff0f7b] text-white shadow-lg shadow-pink-200">
                      <Icon size={25} />
                    </div>

                    <div>
                      <h3 className="font-black text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.short}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="ml-auto shrink-0 text-slate-400"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE MODAL */}
        {selected && (
          <div className="fixed inset-0 z-[999] flex items-end bg-black/50 px-4 pb-4 backdrop-blur-sm lg:hidden">
            <div className="w-full rounded-[32px] bg-white p-6 shadow-2xl">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-[#ff0f7b]">
                    Winas Delivery
                  </p>

                  <h3 className="text-2xl font-black text-slate-950">
                    {selected.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full border border-slate-200 p-2 text-slate-700"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="leading-7 text-slate-600">{selected.description}</p>

              <a
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#ff0f7b] px-6 py-4 font-bold text-white shadow-lg shadow-pink-200"
              >
                Build this for my business
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
