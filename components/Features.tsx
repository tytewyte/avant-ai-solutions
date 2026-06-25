export default function Features() {
  return (
    <section className="w-full bg-[var(--navy)] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
          Built for Law Firms. Powered by AI.
        </h2>

        {/* Silver underline */}
        <div className="w-20 h-1 bg-[var(--silver)] mx-auto mt-4 mb-12 rounded-full"></div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Feature 1 */}
          <div className="p-8 bg-[#0F243F] rounded-lg border border-[var(--silver)] shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              24/7 Availability
            </h3>
            <p className="text-[var(--silver)] leading-relaxed">
              Never miss a potential client again — your AI intake assistant works around the clock.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-[#0F243F] rounded-lg border border-[var(--silver)] shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Intelligent Lead Qualification
            </h3>
            <p className="text-[var(--silver)] leading-relaxed">
              Automatically identifies case type, urgency, and client fit with smart questioning.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-[#0F243F] rounded-lg border border-[var(--silver)] shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Automated Contact Collection
            </h3>
            <p className="text-[var(--silver)] leading-relaxed">
              Captures name, phone, email, and case details — delivered instantly to your inbox.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-8 bg-[#0F243F] rounded-lg border border-[var(--silver)] shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Multi‑Practice Area Support
            </h3>
            <p className="text-[var(--silver)] leading-relaxed">
              Criminal Defense, Personal Injury, Family Law, Immigration, and more.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-8 bg-[#0F243F] rounded-lg border border-[var(--silver)] shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Professional & Conversational
            </h3>
            <p className="text-[var(--silver)] leading-relaxed">
              A natural, respectful tone that builds trust with potential clients.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-8 bg-[#0F243F] rounded-lg border border-[var(--silver)] shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Easy Website Integration
            </h3>
            <p className="text-[var(--silver)] leading-relaxed">
              Add the intake agent to any website with a single embed script.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
