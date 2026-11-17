import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-paper border border-mist rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Survey corner markers */}
        <span className="absolute top-3 left-3 text-xs font-mono text-text/40">+</span>
        <span className="absolute top-3 right-3 text-xs font-mono text-text/40">+</span>
        <span className="absolute bottom-3 left-3 text-xs font-mono text-text/40">+</span>
        <span className="absolute bottom-3 right-3 text-xs font-mono text-text/40">+</span>

        <span className="inline-block px-3 py-1 bg-mist/30 text-ink text-xs font-mono rounded-full mb-4">
          BOUNDARY ERROR 404
        </span>

        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-ink mb-3">
          Coordinates outside mapped territory
        </h1>

        <p className="font-body text-xs sm:text-sm text-text/75 leading-relaxed mb-8">
          The requested survey parcel or URL route does not exist within the current cadastre. Return to the surveyed master plan to access active developments.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-2.5 bg-ink text-paper hover:bg-brass rounded-full text-xs sm:text-sm font-semibold transition-colors"
          >
            Return to home cadastre
          </Link>
          <Link
            href="/projects"
            className="px-6 py-2.5 border border-mist text-text hover:border-ink rounded-full text-xs sm:text-sm font-medium transition-colors"
          >
            Browse surveyed projects
          </Link>
        </div>
      </div>
    </div>
  );
}
