import React, { useEffect, useRef } from 'react';

// Lightweight parallax: elements move at different speeds relative to scroll
export default function ParallaxShowcase() {
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (layer1.current) layer1.current.style.transform = `translateY(${y * 0.15}px)`;
      if (layer2.current) layer2.current.style.transform = `translateY(${y * 0.3}px)`;
      if (layer3.current) layer3.current.style.transform = `translateY(${y * 0.45}px)`;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="showcase" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Layered Parallax Sections</h2>
          <p className="mt-3 text-slate-600">Depth through motion — subtle, smooth, accessible.</p>
        </div>

        <div className="relative">
          {/* Glass cards at varying depths */}
          <div ref={layer1} className="transition-transform will-change-transform">
            <div className="rounded-2xl backdrop-blur bg-white/60 ring-1 ring-slate-900/10 shadow-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900">Information Panel</h3>
              <p className="mt-2 text-slate-700">
                Inspired by public information portals — clear typography, gentle gradients, and prominent calls to action.
              </p>
            </div>
          </div>

          <div ref={layer2} className="transition-transform will-change-transform mt-10 md:mt-14">
            <div className="rounded-2xl backdrop-blur bg-white/50 ring-1 ring-slate-900/10 shadow-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900">Hero Accent</h3>
              <p className="mt-2 text-slate-700">
                Floating accents and badges slide slightly faster to enhance depth without overwhelming the content.
              </p>
            </div>
          </div>

          <div ref={layer3} className="transition-transform will-change-transform mt-10 md:mt-14">
            <div className="rounded-2xl backdrop-blur bg-white/40 ring-1 ring-slate-900/10 shadow-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900">Callouts</h3>
              <p className="mt-2 text-slate-700">
                Actionable tiles with accessible contrast and smooth motion tuned for 60fps on modern devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background orbs */}
      <div aria-hidden className="pointer-events-none absolute -top-20 right-10 h-64 w-64 rounded-full bg-sky-400/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 -left-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
    </section>
  );
}
