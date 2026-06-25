"use client";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--navy)]">
          Contact Avant AI Solutions
        </h2>

        {/* Silver underline */}
        <div className="w-20 h-1 bg-[var(--silver)] mx-auto mt-4 mb-12 rounded-full"></div>

        {/* Subtitle */}
        <p className="text-lg text-[var(--gray)] mb-12 max-w-2xl mx-auto">
          Fill out the form below and we’ll reach out to schedule your demo and discuss
          how an AI intake assistant can support your firm.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-[var(--navy)] font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--navy)]"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-[var(--navy)] font-semibold mb-2">Email Address</label>
            <input
              type="email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--navy)]"
              placeholder="you@lawfirm.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-[var(--navy)] font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--navy)]"
              placeholder="(555) 123‑4567"
              required
            />
          </div>

          {/* Firm Name */}
          <div className="flex flex-col">
            <label className="text-[var(--navy)] font-semibold mb-2">Law Firm Name</label>
            <input
              type="text"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--navy)]"
              placeholder="Smith & Associates"
              required
            />
          </div>

          {/* Message (Full Width) */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-[var(--navy)] font-semibold mb-2">Message</label>
            <textarea
              className="p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:border-[var(--navy)]"
              placeholder="Tell us about your practice or what you're looking for..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-10 py-4 bg-[var(--navy)] text-white font-semibold rounded-md shadow-md hover:opacity-90 transition"
            >
              Submit Inquiry
            </button>
          </div>

        </form>

        {/* Contact Info */}
        <div className="mt-16 text-center text-[var(--gray)]">
          <p className="font-semibold text-[var(--navy)]">Wendell Avant — Founder & AI Solutions Architect</p>
          <p>Email: contactavantaisolutions@protonmail.com</p>
          <p>Phone: (337) 660‑7184</p>
          <p>Location: Louisiana</p>
        </div>

      </div>
    </section>
  );
}
