import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParallaxShowcase from './components/ParallaxShowcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ParallaxShowcase />
        {/* About section */}
        <section id="about" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-emerald-400/10 ring-1 ring-slate-900/10 p-8">
                <h3 className="text-2xl font-semibold">What is Parallax?</h3>
                <p className="mt-3 text-slate-700">
                  Parallax gives a sense of depth by moving layers at different speeds. We combine it with glassy
                  surfaces and subtle gradients to mirror modern public service portals.
                </p>
                <ul className="mt-6 space-y-2 text-slate-700 list-disc list-inside">
                  <li>Smooth scroll-based layer motion</li>
                  <li>Accessible contrast and performance</li>
                  <li>Interactive 3D cover using Spline</li>
                </ul>
              </div>
              <div className="relative h-72 md:h-96">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/20 to-indigo-500/20" />
                <div className="absolute inset-3 rounded-2xl bg-white/60 backdrop-blur ring-1 ring-slate-900/10 shadow-xl flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-sm uppercase tracking-widest text-slate-500">Design Language</p>
                    <h4 className="mt-2 text-xl font-semibold">Glass, Gradients, Depth</h4>
                    <p className="mt-2 text-slate-700">A calm, civic aesthetic tuned for clarity and trust.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
