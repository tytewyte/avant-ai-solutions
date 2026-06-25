"use client";

export default function DemoChat() {
  return (
    <section className="w-full bg-white py-24 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--navy)]">
          Try the AI Intake Assistant
        </h2>

        {/* Silver underline */}
        <div className="w-20 h-1 bg-[var(--silver)] mx-auto mt-4 mb-12 rounded-full"></div>

        {/* Phone Mockup */}
        <div className="flex justify-center">
          <div className="w-[360px] h-[720px] bg-[#F8FAFC] rounded-3xl shadow-2xl border border-gray-300 overflow-hidden">

            {/* Phone Header */}
            <div className="bg-[var(--navy)] text-white py-4 px-6 text-left">
              <h3 className="text-xl font-serif font-semibold">
                Avant Intake Assistant
              </h3>
              <div className="w-16 h-0.5 bg-[var(--silver)] mt-2 rounded-full"></div>
            </div>

            {/* Chat Window */}
            <div className="h-[calc(100%-80px)] overflow-y-auto p-4 bg-white text-left">

              {/* Example Messages */}
              <div className="mb-6">
                <div className="bg-gray-100 text-[var(--navy)] p-3 rounded-lg w-fit max-w-[80%] shadow-sm">
                  Hello, I’m the firm’s intake assistant.  
                  How may I assist you today?
                </div>
              </div>

              <div className="flex justify-end mb-6">
                <div className="bg-[var(--navy)] text-white p-3 rounded-lg w-fit max-w-[80%] shadow-sm">
                  I need help with a legal issue.
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-gray-100 text-[var(--navy)] p-3 rounded-lg w-fit max-w-[80%] shadow-sm">
                  I can help with that.  
                  May I have your name?
                </div>
              </div>

              {/* Live iframe or component */}
              <div className="mt-10 text-center">
                <p className="text-[var(--gray)] text-sm mb-3">
                  Live demo coming soon
                </p>
                <div className="w-full h-32 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-[var(--gray)]">
                  Embed your live agent here
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
