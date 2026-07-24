import Image from "next/image";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Otieno",
    role: "Owner, Tripple E Electronics",
    quote:
      "Winas built our online store in record time. Sales picked up the moment M-Pesa checkout went live.",
  },
  {
    name: "Mary Wanjiku",
    role: "Manager, Greenstar Villa Homes",
    quote:
      "Bookings, billing and guest comms are now in one place. The team is responsive and genuinely cares.",
  },
  {
    name: "Peter Kimani",
    role: "Director, JM Collections",
    quote:
      "Our shop runs on Winas POS. KRA returns are no longer a nightmare and reports just make sense.",
  },
  {
    name: "Brian Mwangi",
    role: "Retail Manager",
    quote:
      "The inventory system helped us understand stock movement clearly. We now make better purchase decisions.",
  },
  {
    name: "Agnes Moraa",
    role: "Business Owner",
    quote:
      "The system is simple, clean and easy for our staff to use. Support has also been very reliable.",
  },
  {
    name: "Kevin Maina",
    role: "Operations Lead",
    quote:
      "They understood our workflow and customized the software exactly around how our business operates.",
  },
];

export default function TestimonialsSection() {
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-slate-100 px-4 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,15,123,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.16),transparent_35%)]" />

      <div className="absolute right-4 top-8 h-22 w-22  md:h-32 md:w-32 overflow-hidden rounded-[32px] shadow-2xl md:block lg:right-16 lg:h-44 lg:w-44">
        <Image
          src="/images/testimonials/happyclient.jpg"
          alt="Happy client"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
            Testimonials
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            What our clients <span className="text-[#ff0f7b]">say.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Real businesses trust Winas to build systems that simplify daily
            operations, improve reporting and support growth.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-100 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-100 to-transparent" />

          <div className="flex w-max animate-scroll gap-6">
            {scrollingTestimonials.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="w-[320px] shrink-0 rounded-[32px] border border-slate-200 bg-white p-7 shadow-xl md:w-[380px]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-1 text-[#ff0f7b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-50 text-[#ff0f7b]">
                    <Quote size={22} />
                  </div>
                </div>

                <p className="min-h-[120px] text-lg font-medium leading-8 text-slate-700">
                  “{item.quote}”
                </p>

                <div className="mt-8 border-t border-slate-100 pt-5">
                  <h3 className="text-lg font-black text-slate-950">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[36px] bg-white p-8 text-center shadow-xl">
          <h3 className="text-3xl font-black text-slate-950">
            Join the businesses growing with Winas.
          </h3>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
            From POS and e-commerce to SACCO and inventory systems, we build
            software that works for real business needs.
          </p>
        </div>
      </div>
    </section>
  );
}
