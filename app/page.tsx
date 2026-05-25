'use client';

import { useState } from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function Home() {
  const { openConnectModal } = useConnectModal();
  const { isConnected, address } = useAccount();
  const [quoteError, setQuoteError] = useState(false);

  function handleGetQuote() {
    if (!isConnected) {
      setQuoteError(true);
    } else {
      setQuoteError(false);
      // TODO: quote flow
    }
  }

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
        {isConnected ? (
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
            {address?.slice(0, 6)}…{address?.slice(-4)}
          </span>
        ) : (
          <button
            onClick={openConnectModal}
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
          >
            Connect Wallet
          </button>
        )}
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-6xl font-bold tracking-tight max-w-3xl leading-tight">
          You're the boss at Teravega
        </h2>
        <p className="text-gray-400 mt-6 text-xl max-w-xl">
          Crypto native insurance the best bang for your buck
        </p>

        {/* Quote bar */}
        <div className="mt-12 flex items-center gap-4 bg-white rounded-full px-6 py-4">
          <select className="bg-transparent text-black text-sm outline-none pr-4 border-r border-gray-300">
            <option>Rental Deposit</option>
            <option>Home</option>
            <option>Auto</option>
          </select>
          <input
            type="text"
            placeholder="ZIP Code"
            className="bg-transparent text-black placeholder-gray-400 text-sm outline-none w-28"
          />
          <button
            onClick={handleGetQuote}
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            Get a quote
          </button>
        </div>
        {quoteError && (
          <p className="mt-4 text-red-400 text-sm">
            Please connect your wallet before getting a quote.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-10 flex items-center justify-between text-gray-600 text-sm h-16">
        <span>© 2026 Teravega</span>
        <span>You're the boss</span>
      </footer>

    </main>
  );
}
