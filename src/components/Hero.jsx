import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full" aria-label="Interactive 3D cover">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              Modern Parallax Experience
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Inspired by ppid.kemenkumham.go.id — smooth layered depth, glass surfaces, and an interactive hero.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#showcase" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800 transition-colors">
                Explore Showcase
              </a>
              <a href="#about" className="inline-flex items-center rounded-lg bg-white/60 backdrop-blur px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/80 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
