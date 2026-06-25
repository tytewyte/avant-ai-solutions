export default function Pricing() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--navy)]">
          Simple, Transparent Pricing
        </h2>

        {/* Silver underline */}
        <div className="w-20 h-1 bg-[var(--silver)] mx-auto mt-4 mb-12 rounded-full"></div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[var(--gray)] max-w-3xl mx-auto leading-relaxed mb-16">
          No contracts. No hidden fees.  
          Just a powerful AI intake assistant working for your firm 24/7.
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Plan 1 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-10">
            <h3 className="text-2xl font-serif font-bold text-[var(--navy)] mb-4">
              Solo Attorney
            </h3>
            <p className="text-4xl font-bold text-[var(--navy)] mb-6">$97<span className="text-xl text-[var(--gray)]">/mo</span></p>

            <ul className="text-[var(--gray)] space-y-3 mb-8">
              <li>• 1 practice area</li>
              <li>• Email lead delivery</li>
              <li>• Basic intake widget</li>
              <li>• 24/7 availability</li>
            </ul>

            <a
              href="#contact"
              className="block w-full py-3 bg-[var(--navy)] text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Get Started
            </a>
          </div>

          {/* Plan 2 (Most Popular) */}
          <div className="bg-white rounded-xl shadow-xl border-2 border-[var(--silver)] p-10 transform scale-105">
            <h3 className="text-2xl font-serif font-bold text-[var(--navy)] mb-4">
              Small Firm
            </h3>
            <p className="text-4xl font-bold text-[var(--navy)] mb-6">$197<span className="text-xl text-[var(--gray)]">/mo</span></p>

            <ul className="text-[var(--gray)] space-y-3 mb-8">
              <li>• Up to 3 practice areas</li>
              <li>• Email + SMS lead alerts</li>
              <li>• Consultation scheduling</li>
              <li>• Priority support</li>
            </ul>

            <a
              href="#contact"
              className="block w-full py-3 bg-[var(--navy)] text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Get Started
            </a>
          </div>

          {/* Plan 3 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-10">
            <h3 className="text-2xl font-serif font-bold text-[var(--navy)] mb-4">
              Full Firm
            </h3>
            <p className="text-4xl font-bold text-[var(--navy)] mb-6">$297<span className="text-xl text-[var(--gray)]">/mo</span></p>

            <ul className="text-[var(--gray)] space-y-3 mb-8">
              <li>• Unlimited practice areas</li>
              <li>• Custom prompts + tuning</li>
              <li>• SMS + email alerts</li>
              <li>• Dedicated support</li>
            </ul>

            <a
              href="#contact"
              className="block w-full py-3 bg-[var(--navy)] text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Get Started
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
