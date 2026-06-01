import { ArrowRight, BadgeCheck, Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "From KSh 10,000",
    text: "Small shops, single till, simple online presence.",
    features: [
      "Single-user POS or basic website",
      "M-Pesa integration",
      "Receipts & basic reports",
      "Free maintenance",
    ],
  },
  {
    name: "Standard",
    price: "From KSh 30,000",
    text: "Growing businesses with multi-user needs.",
    popular: true,
    features: [
      "Multi-user POS / advanced web app",
      "Inventory & multi-location",
      "KRA integration where applicable",
      "40 – 60 reports",
      "Cloud backup",
    ],
  },
  {
    name: "Pro",
    price: "From KSh 80,000",
    text: "Established businesses needing tailored workflows.",
    features: [
      "Custom modules & branding",
      "Bulk SMS & WhatsApp",
      "Advanced access levels",
      "Real-time notifications",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "From KSh 250,000",
    text: "SACCOs, chains and multi-branch operations.",
    features: [
      "Full custom build & integrations",
      "Multi-branch / multi-company",
      "Dedicated account manager",
      "API integrations",
      "On-site training",
    ],
  },
];

const budgets = [
  "KSh 10K Starter",
  "KSh 15K Starter",
  "KSh 20K Starter",
  "KSh 30K Standard",
  "KSh 40K Standard",
  "KSh 65K Standard",
  "KSh 80K Pro",
  "KSh 150K Pro",
  "KSh 200K Pro",
  "KSh 250K Enterprise",
  "KSh 300K Enterprise",
  "KSh 450K Enterprise",
];

export default function PricingPage() {
  return (
    <main className="overflow-hidden bg-slate-100">
      <section className="relative px-4 pb-24 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,15,123,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-[#ff0f7b]">
            <Sparkles size={16} />
            Simple Pricing
          </p>

          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
            Plans from{" "}
            <span className="text-[#ff0f7b]">KSh 10K.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            One-time installation. Maintenance is free. All POS systems are
            KRA-integrated where applicable.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[36px] border p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-[#ff0f7b] bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-950"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-[#ff0f7b] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                  Most Popular
                </div>
              )}

              <h2 className="text-3xl font-black">{plan.name}</h2>

              <p
                className={`mt-4 leading-7 ${
                  plan.popular ? "text-white/70" : "text-slate-600"
                }`}
              >
                {plan.text}
              </p>

              <p className="mt-8 text-4xl font-black text-[#ff0f7b]">
                {plan.price}
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff0f7b] text-white">
                      <Check size={15} />
                    </div>

                    <p
                      className={
                        plan.popular ? "text-white/80" : "text-slate-600"
                      }
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-black transition hover:scale-105 ${
                  plan.popular
                    ? "bg-[#ff0f7b] text-white"
                    : "bg-slate-950 text-white"
                }`}
              >
                Choose Plan <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-7xl rounded-[44px] bg-white p-8 shadow-2xl md:p-12">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
              Budget Options
            </p>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Pick the budget that fits.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Final price depends on modules, users and customizations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {budgets.map((budget) => (
              <div
                key={budget}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-4 text-center font-black text-slate-800 transition hover:border-[#ff0f7b] hover:bg-pink-50 hover:text-[#ff0f7b]"
              >
                {budget}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-5 py-3 font-bold text-[#ff0f7b]">
              <BadgeCheck size={18} />
              One-time installation
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-5 py-3 font-bold text-[#ff0f7b]">
              <BadgeCheck size={18} />
              Maintenance is free
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl rounded-[44px] bg-[#ff0f7b] p-10 text-white shadow-2xl md:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-pink-100">
                Need a custom quote?
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Tell us about your business.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-pink-50">
                We’ll tailor a plan based on your industry, users, modules,
                integrations and reporting needs.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#ff0f7b] transition hover:scale-105"
              >
                Request a Quote <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}