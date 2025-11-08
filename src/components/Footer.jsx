import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 ring-1 ring-slate-900/10" />
              <span className="font-semibold text-slate-800">Parallax Lab</span>
            </div>
            <p className="mt-3 text-slate-600 max-w-md">
              Crafted with layered depth, motion, and clarity. Interact with the hero to see the 3D card react.
            </p>
          </div>
          <div className="text-sm text-slate-600">
            <p>
              Inspired by the aesthetic of public information portals.
            </p>
            <p className="mt-1">© {new Date().getFullYear()} Parallax Lab</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
