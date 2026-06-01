"use client";

import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "POS System",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hello Winas Softwares,%0A%0AMy name is ${form.name}.%0APhone: ${form.phone}%0AI am interested in: ${form.interest}%0A%0AProject Details:%0A${form.message}`;

    window.open(`https://wa.me/254705079270?text=${whatsappMessage}`, "_blank");
  };

  return (
    <main className="overflow-hidden bg-slate-100">
      <section className="relative px-4 pb-24 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,15,123,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-[#ff0f7b]">
              <Sparkles size={16} />
              Get In Touch
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
              Let’s build something{" "}
              <span className="text-[#ff0f7b]">great.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Have a project in mind, or just want to chat about your business?
              Our team is ready to help.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/254705079270"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff0f7b] px-7 py-4 font-bold text-white shadow-lg shadow-pink-200 transition hover:scale-105"
              >
                Chat on WhatsApp <MessageCircle size={18} />
              </a>

              <a
                href="tel:+254705079270"
                className="rounded-full border border-slate-300 px-7 py-4 font-bold text-slate-900 transition hover:bg-white"
              >
                Call Us
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[32px] bg-white p-6 shadow-xl">
              <MapPin className="mb-4 text-[#ff0f7b]" size={30} />
              <h3 className="text-xl font-black text-slate-950">Visit us</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Room 301, Market Plaza, Kisii, Kenya
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-xl">
              <Phone className="mb-4 text-[#ff0f7b]" size={30} />
              <h3 className="text-xl font-black text-slate-950">Call us</h3>
              <p className="mt-2 leading-7 text-slate-600">
                +254 705 079 270 — Frankline
              </p>
              <p className="text-slate-600">+254 114 023 230 — Kevin</p>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-xl">
              <Mail className="mb-4 text-[#ff0f7b]" size={30} />
              <h3 className="text-xl font-black text-slate-950">Email</h3>
              <p className="mt-2 leading-7 text-slate-600">
                info@winassoftwares.co.ke
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-xl">
              <Clock className="mb-4 text-[#ff0f7b]" size={30} />
              <h3 className="text-xl font-black text-slate-950">Open hours</h3>
              <p className="mt-2 leading-7 text-slate-600">Monday – Saturday</p>
              <p className="text-slate-600">08:00 – 16:00</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden rounded-[40px] bg-slate-950 p-8 text-white shadow-2xl md:p-10">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#ff0f7b]/30 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-sky-500/25 blur-3xl" />

            <div className="relative">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-pink-300">
                Fast Response
              </p>

              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                WhatsApp-first support for Kenyan businesses.
              </h2>

              <p className="mt-6 leading-8 text-white/70">
                Tell us what you need, the type of business you run, and the
                system you want. We’ll respond and guide you on the best
                solution.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "POS and inventory enquiries",
                  "Website and e-commerce projects",
                  "SACCO and SHG management systems",
                  "Custom workflow automation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-white/10 p-5 font-bold backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[40px] bg-white p-7 shadow-2xl md:p-10"
          >
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#ff0f7b]">
              Send us a message
            </p>

            <h2 className="text-4xl font-black text-slate-950">
              We’ll open WhatsApp with your message ready to send.
            </h2>

            <div className="mt-8 grid gap-5">
              <input
                required
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-[#ff0f7b] focus:bg-white"
              />

              <input
                required
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-[#ff0f7b] focus:bg-white"
              />

              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-[#ff0f7b] focus:bg-white"
              >
                <option>POS System</option>
                <option>Website & E-commerce</option>
                <option>Inventory Management</option>
                <option>SACCO System</option>
                <option>Custom Software</option>
                <option>Other</option>
              </select>

              <textarea
                required
                placeholder="Project description"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-[#ff0f7b] focus:bg-white"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0f7b] px-7 py-4 font-black text-white shadow-lg shadow-pink-200 transition hover:scale-105"
              >
                Send via WhatsApp <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl rounded-[44px] bg-[#ff0f7b] p-10 text-white shadow-2xl md:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-pink-100">
                Start today
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Your next system starts with one message.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-pink-50">
                Send your idea, business type, or problem. We’ll help you turn
                it into a working software solution.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <a
                href="https://wa.me/254705079270"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#ff0f7b] transition hover:scale-105"
              >
                Message Winas <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
