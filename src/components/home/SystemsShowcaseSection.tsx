import {
  BarChart3,
  Bell,
  CreditCard,
  Database,
  FileText,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "M-Pesa Ready",
    text: "Accept payments and sync transactions directly into your system.",
  },
  {
    icon: FileText,
    title: "Smart Reports",
    text: "Generate sales, stock, finance and business performance reports.",
  },
  {
    icon: ShieldCheck,
    title: "User Roles",
    text: "Control what admins, cashiers, managers and staff can access.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    text: "Get instant updates for stock, payments, orders and activity.",
  },
];

export default function SystemsShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-slate-100 px-4 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,15,123,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
              Systems Showcase
            </p>

            <h2 className="max-w-2xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              A clear view of how your{" "}
              <span className="text-[#ff0f7b]">business runs.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We build systems that bring sales, stock, payments, staff,
              customers and reports into one beautiful dashboard — so you can
              make faster, smarter decisions.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-[#ff0f7b]/40 hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff0f7b] text-white shadow-lg shadow-pink-200">
                      <Icon size={23} />
                    </div>

                    <h3 className="mb-2 text-lg font-black text-slate-950">
                      {feature.title}
                    </h3>

                    <p className="text-sm leading-6 text-slate-600">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[36px] bg-slate-950 p-4 shadow-2xl">
              <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[#ff0f7b]/30 blur-3xl" />
              <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black">
                <video
                  src="/videos/system-demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[280px] w-full object-cover md:h-[430px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff0f7b]">
                      <BarChart3 size={22} />
                    </div>

                    <div>
                      <h3 className="font-black">Live Business Dashboard</h3>
                      <p className="text-sm text-white/70">
                        Sales • Stock • Payments • Reports
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <p className="text-lg font-black">40+</p>
                      <p className="text-xs text-white/60">Reports</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-3">
                      <p className="text-lg font-black">24/7</p>
                      <p className="text-xs text-white/60">Access</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-3">
                      <p className="text-lg font-black">KRA</p>
                      <p className="text-xs text-white/60">Ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARDS */}
            <div className="absolute -left-3 top-8 hidden rounded-[24px] bg-white p-5 shadow-2xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <Database size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">Stock Sync</p>
                  <p className="text-lg font-black text-slate-950">Live</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 bottom-16 hidden rounded-[24px] bg-white p-5 shadow-2xl md:block">
              <p className="text-sm font-bold text-slate-500">Today’s Sales</p>
              <p className="text-3xl font-black text-slate-950">KSh 84K</p>
              <p className="text-sm font-bold text-[#ff0f7b]">+18% growth</p>
            </div>
          </div>
        </div>

        {/* MOBILE EXTRA SUMMARY */}
        
      </div>
    </section>
  );
}
