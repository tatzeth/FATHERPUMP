import React, { useEffect, useRef } from "react";

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        // Autoplay might be blocked until user interacts
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 font-[UnifrakturCook,cursive]">
      {/* Background music */}
      <audio ref={audioRef} loop>
        <source src="/church-music.mp3" type="audio/mpeg" />
      </audio>

      <header className="max-w-5xl mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <img src="/logo.svg" alt="FATHER PUMP Logo" className="w-16 h-16" />
          <div>
            <h1 className="text-2xl font-extrabold">FATHER PUMP</h1>
            <p className="text-sm text-gray-600">Ticker: <span className="font-semibold">PRIEST</span></p>
          </div>
        </div>
        <nav className="text-sm text-gray-600">
          <a href="#mission" className="mr-6">Mission</a>
          <a href="#tokenomics" className="mr-6">Tokenomics</a>
          <a href="#roadmap" className="mr-6">Roadmap</a>
          <a href="#whitepaper" className="mr-6">Whitepaper</a>
          <a href="#links" className="">Links</a>
        </nav>
      </header>

      {/* X Banner */}
      <section className="max-w-5xl mx-auto my-8">
        <div className="w-full rounded-2xl overflow-hidden shadow-lg" style={{background: 'linear-gradient(90deg, #00A85A 0%, #063F2A 100%)'}}>
          <div className="p-8 flex items-center gap-6">
            <img src="/logo.svg" alt="FATHER PUMP" className="w-24 h-24" />
            <div className="text-white">
              <h2 className="text-3xl font-bold">FATHER PUMP — $PRIEST</h2>
              <p className="opacity-90 mt-2">Confess. Penance. Pump. Live every night 7–9pm EST. Shill your sins. Buy your penance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-5xl mx-auto space-y-8">
        <section id="mission" className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-3">Mission</h3>
          <p className="text-gray-700">
            FATHER PUMP is a memecoin and entertainment project built to combine live showmanship,
            community-driven content, and creative micro-creator rewards. The token's mechanics are playful —
            penance, confessions, and community tasks — with transparent fees at launch.
            Livestream runs nightly 7pm–9pm EST until benchmarks allow more freedom.
          </p>
        </section>

        <section id="tokenomics" className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-3">Tokenomics</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Total supply: 1,000,000,000 $PRIEST</li>
            <li>Penance mechanic: community challenges — shill on X, buy-and-burn tasks, content creation rewards</li>
          </ul>
          <div className="mt-4 text-sm text-gray-500">
            Example contract address: <code className="bg-gray-100 px-2 py-1 rounded">SOL: 3Kj9...</code>
          </div>
        </section>

        <section id="roadmap" className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-3">Roadmap</h3>
          <ol className="list-decimal pl-5 text-gray-700 space-y-2">
            <li>$0 – Launch & first livestream</li>
            <li>$5,000 – Buy pro camera setup</li>
            <li>$7,500 – Hire cameraman, stream in public</li>
            <li>$15,000 – Quit job live on stream</li>
            <li>$20,000 – Donate $1,000 to people in need</li>
          </ol>
        </section>

        <section id="whitepaper" className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-3">Whitepaper</h3>
          <p className="text-gray-700 mb-4">
            The Whitepaper outlines detailed plans for growth — from creator-fee benchmarks to market-cap milestones.
            Investments will focus on stream upgrades, marketing stunts, and community-driven events.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Creator Fee Milestones</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>$1,000 — Upgrade mic + lighting</li>
                <li>$2,500 — Stream improvements</li>
                <li>$5,000 — Pro camera setup</li>
                <li>$7,500 — Hire cameraman, stream in public</li>
                <li>$10,000 — Travel streams & events</li>
                <li>$15,000 — Quit job live</li>
                <li>$20,000 — Donate $1,000 on stream</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Market Cap Milestones</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>$1M — Pump logo tattoo</li>
                <li>$1.5M — $PRIEST ticker tattoo</li>
                <li>$2M — Tren stunt stream</li>
                <li>$3M — Wrap car with logo & road trip marketing</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="links" className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col gap-3">
          <h3 className="text-xl font-bold">Links</h3>
          <div className="flex gap-3 items-center">
            <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer" className="underline">X / Twitter</a>
            <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="underline">pump.fun</a>
            <a href="https://www.tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer" className="underline">TikTok</a>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto mt-10 text-center text-gray-500 text-xs">
        Preview site. Replace placeholders before launch.
      </footer>
    </div>
  );
}
