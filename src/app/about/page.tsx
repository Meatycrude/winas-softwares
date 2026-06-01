import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Code2,
  HeartHandshake,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Equip every business — from the corner shop to the SACCO — with software that’s affordable, reliable and beautifully simple.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    text: "To be East Africa’s most trusted software partner for SMEs, known for craft, care and business-first innovation.",
  },
  {
    icon: ShieldCheck,
    title: "Our Values",
    text: "Integrity, responsiveness and pride in every line of code we ship.",
  },
];

const team = [
  {
    name: "Frankline Mawira",
    role: "Chief Executive Officer",
    phone: "+254 705 079 270",
    image: "/images/team/frankline.jpg",
  },
  {
    name: "Azenga Kevin",
    role: "Chief Technology Officer",
    phone: "+254 114 023 230",
    image: "/images/about/Azenga kevin.jpg",
  },
  {
    name: "Harrison Opondo",
    role: "Software Developer (Attaché)",
    phone: "Winas Software Team",
    image: "/images/about/harrison.jpeg",
  },
];

const facts = [
  { label: "Founded", value: "September 2025" },
  { label: "Headquarters", value: "Kisii, Kenya" },
  { label: "Parent Company", value: "Comrades Computer Solution Ltd" },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-slate-100">
      {/* HERO */}
      <section className="relative px-4 pb-24 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,15,123,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#ff0f7b]">
              <Sparkles size={16} />
              Who We Are
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
              We’re <span className="text-[#ff0f7b]">Winas.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A young, focused software company born in September 2025 from
              Kisii, Kenya. We’re a subsidiary of Comrades Computer Solution Ltd
              — and we exist to build the software that runs African businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff0f7b] px-7 py-4 font-bold text-white shadow-lg shadow-pink-200 transition hover:scale-105"
              >
                Work with us <ArrowRight size={18} />
              </a>

              <a
                href="/services"
                className="rounded-full border border-slate-300 px-7 py-4 font-bold text-slate-900 transition hover:bg-white"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute left-0 top-8 h-72 w-56 overflow-hidden rounded-[36px] bg-white shadow-2xl sm:w-72">
              <Image
                src="/images/about/about-hero-1.jpg"
                alt="Winas team working"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute right-0 top-0 h-64 w-56 overflow-hidden rounded-[36px] bg-white shadow-2xl sm:w-72">
              <Image
                src="/images/about/about-hero-2.jpg"
                alt="Software development"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-10 right-10 overflow-hidden rounded-[36px] bg-slate-950 p-3 shadow-2xl">
              <video
                src="/videos/video1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-60 w-full rounded-[28px] object-cover"
              />
            </div>

            <div className="absolute left-[38%] top-[42%] rounded-full bg-[#ff0f7b] px-6 py-3 text-sm font-black text-white shadow-xl">
              Built in Kisii
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[40px] bg-slate-950 p-4 shadow-2xl">
            <video
              src="/videos/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-[420px] w-full rounded-[32px] object-cover"
            />

            <div className="absolute inset-4 rounded-[32px] bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-10 right-10 text-white">
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-pink-300">
                Our Story
              </p>
              <h2 className="text-3xl font-black">
                Software made for real businesses.
              </h2>
            </div>
          </div>

          <div className="rounded-[40px] bg-white p-8 shadow-xl md:p-12">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
              Our Story
            </p>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Built for businesses that need systems that simply work.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Winas Softwares Ltd was founded in September 2025 with a clear
                belief: small and medium businesses deserve the same quality of
                software that powers the biggest companies — without the
                complexity or the price tag.
              </p>

              <p>
                Operating from Market Plaza in Kisii, our team partners with
                hotels, supermarkets, pharmacies, SACCOs, BnBs, boutiques and
                online sellers across Kenya to install and customize systems
                that just work.
              </p>

              <p>
                Every product we ship is built to be KRA-ready where applicable,
                M-Pesa enabled, and supported with free ongoing maintenance —
                because technology should make business easier, not harder.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,15,123,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
              What Drives Us
            </p>

            <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Purpose, craft and <span className="text-[#ff0f7b]">care.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:border-[#ff0f7b]/40"
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
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[36px] bg-slate-950 p-8 text-white shadow-2xl"
            >
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-pink-300">
                {fact.label}
              </p>
              <h3 className="text-3xl font-black">{fact.value}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
              Our Team
            </p>

            <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Meet the people behind{" "}
              <span className="text-[#ff0f7b]">Winas.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-[36px] bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black text-slate-950">
                    {member.name}
                  </h3>

                  <p className="mt-2 font-bold text-[#ff0f7b]">{member.role}</p>

                  <p className="mt-3 text-slate-600">{member.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[44px] bg-[#ff0f7b] p-10 text-white shadow-2xl md:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-pink-100">
                Build with Winas
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                Let’s create the system your business deserves.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-pink-50">
                Whether you need POS, inventory, SACCO, e-commerce or a fully
                custom workflow, our team can design, build, install and support
                it.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#ff0f7b] transition hover:scale-105"
              >
                Work with us <ArrowRight size={18} />
              </a>
            </div>

            <div className="relative h-80 overflow-hidden rounded-[36px]">
              <Image
                src="/images/services/inventory.jpg"
                alt="Winas software systems"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
