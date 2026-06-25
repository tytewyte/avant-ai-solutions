export default function Value() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--navy)]">
          Intake Clients While You're Home With Family
        </h2>

        {/* Silver underline */}
        <div className="w-20 h-1 bg-[var(--silver)] mx-auto mt-4 mb-10 rounded-full"></div>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-[var(--gray)] max-w-3xl mx-auto leading-relaxed mb-16">
          Let an intelligent AI intake assistant work 24/7 on your behalf — capturing leads,
          qualifying cases, and scheduling consultations even when your office is closed.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Stat 1 */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-4xl font-bold text-[var(--navy)] mb-2">33%</p>
            <p className="text-[var(--gray)]">Reduction in lost clients</p>
          </div>

          {/* Stat 2 */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-4xl font-bold text-[var(--navy)] mb-2">50+</p>
            <p className="text-[var(--gray)]">Additional leads per month</p>
          </div>

          {/* Stat 3 */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-4xl font-bold text-[var(--navy)] mb-2">$300k+</p>
            <p className="text-[var(--gray)]">Potential annual revenue gained</p>
          </div>

          {/* Stat 4 */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-4xl font-bold text-[var(--navy)] mb-2">$10/day</p>
            <p className="text-[var(--gray)]">Lower cost than a receptionist</p>
          </div>

        </div>
      </div>
    </section>
  );
}
