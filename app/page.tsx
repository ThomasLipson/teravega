export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* Nav */}
      <nav className="flex items-center justify-between px-10 border-b border-gray-800 h-16">
        <h1 className="text-2xl font-bold tracking-tight">Teravega</h1>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">About</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Agentic Services</p>
        <h2 className="text-6xl font-bold tracking-tight max-w-3xl leading-tight">
          Intelligent agents for the way you live and work
        </h2>
        <p className="text-gray-400 mt-6 text-xl max-w-xl">
          Teravega builds autonomous services that handle coordination, commerce, and capital — so you don't have to.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="flex-1 px-10 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* VegaRentIt */}
          <a
            href="https://vegarentit.com"
            className="group border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition flex flex-col justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Rental</p>
              <h3 className="text-2xl font-bold mb-3">VegaRentIt</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Apartment rental coordination handled end-to-end. Find, apply, and move in — the agent does the legwork.
              </p>
            </div>
            <span className="mt-8 text-sm text-gray-500 group-hover:text-white transition">vegarentit.com →</span>
          </a>

          {/* VegaTreasuries */}
          <a
            href="https://vegatreasuries.com"
            className="group border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition flex flex-col justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Finance</p>
              <h3 className="text-2xl font-bold mb-3">VegaTreasuries</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                On-chain fund accounting with programmable rules. Every dollar tracked transparently — built for crowdfunds, DAOs, and beyond.
              </p>
              <p className="mt-4 text-gray-500 text-sm italic">Pool money. Trust the process.</p>
            </div>
            <span className="mt-8 text-sm text-gray-500 group-hover:text-white transition">vegatreasuries.com →</span>
          </a>

          {/* VegaCarShop */}
          <a
            href="https://vegacarshop.com"
            className="group border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition flex flex-col justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Commerce</p>
              <h3 className="text-2xl font-bold mb-3">VegaCarShop</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Car shopping without the dealership runaround. The agent finds, compares, and negotiates on your behalf.
              </p>
            </div>
            <span className="mt-8 text-sm text-gray-500 group-hover:text-white transition">vegacarshop.com →</span>
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-10 flex items-center justify-between text-gray-600 text-sm h-16">
        <span>© 2026 Teravega</span>
        <span>Intelligent services. Real results.</span>
      </footer>

    </main>
  );
}
