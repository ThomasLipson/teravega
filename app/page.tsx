export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* Nav */}
      <nav className="flex items-center justify-between px-10 border-b border-gray-800 h-16">
        <h1 className="text-2xl font-bold tracking-tight">Teravega</h1>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition">Insurance</a>
          <a href="#" className="hover:text-white transition">Claims</a>
          <a href="#" className="hover:text-white transition">About</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-6xl font-bold tracking-tight max-w-3xl leading-tight">
          a next-generation mutual insurer with transparent on-chain reserves and automated operations
        </h2>

        {/* Quote bar */}
        <div className="mt-12 flex items-center gap-4 bg-white rounded-full px-6 py-4">
          <select className="bg-transparent text-black text-sm outline-none pr-4 border-r border-gray-300">
            <option>Auto</option>
            <option>Motorcycle</option>
          </select>
          <input
            type="text"
            placeholder="ZIP Code"
            className="bg-transparent text-black placeholder-gray-400 text-sm outline-none w-28"
          />
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Get a quote
          </button>
        </div>

        {/* Callouts */}
        <div className="mt-8 flex flex-col items-center gap-3 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>↑ Get low rates</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Generate yield</span>
            <span>→</span>
            <a
              href="/staking"
              className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition"
            >
              Staking Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-10 flex items-center justify-between text-gray-600 text-sm h-16">
        <span>© 2026 Teravega</span>
        <span>You're the boss</span>
      </footer>

    </main>
  );
}
