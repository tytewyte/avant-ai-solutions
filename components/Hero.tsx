"use client";

export default function Hero() {
  return (
    <section className="w-full bg-white py-24 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center">

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl font-serif font-bold text-[var(--navy)] leading-tight"
        >
          AI Intake Agents for Law Firms
        </h1>

        {/* Silver underline accent */}
        <div className="w-24 h-1 bg-[var(--silver)] mx-auto mt-4 mb-8 rounded-full"></div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[var(--gray)] max-w-2xl mx-auto leading-relaxed">
          Convert website visitors into qualified clients — 24/7, automatically.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-[var(--navy)] text-white font-semibold rounded-md shadow-md hover:opacity-90 transition"
          >
            Book a Demo
          </a>

          <a
            href="/demo"
            className="px-8 py-4 border border-[var(--silver)] text-[var(--navy)] font-semibold rounded-md hover:bg-gray-50 transition"
          >
            Try the Live Agent
          </a>
        </div>

      </div>
    </section>
  );
}
