import React from 'react';

export default function PlotSurveyHero() {
  return (
    <div
      className="relative w-full border border-mist/90 bg-white/40 p-6 sm:p-8 lg:p-10 rounded-2xl overflow-hidden shadow-sm"
      aria-label="Cadastral land survey plot layout drawing"
    >
      {/* Top Survey Header Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-mist/80 pb-4 mb-6 text-[10px] font-mono tracking-luxury text-text/60 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-ink">CADASTRE FOLIO: HYD-SEC-2026</span>
          <span>|</span>
          <span>SCALE 1:500</span>
        </div>
        <div className="flex items-center gap-3">
          <span>SURVEY SPECIFICATION: VERIFIED</span>
          <span>|</span>
          <span className="text-brass font-medium">5 ACTIVE PARCELS</span>
        </div>
      </div>

      {/* SVG Cadastre Map */}
      <div className="w-full flex justify-center items-center py-4">
        <svg
          viewBox="0 0 800 480"
          className="w-full h-auto max-h-[440px] select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Survey Grid & Reference Hairlines */}
          <g stroke="#DCE2DE" strokeWidth="0.8" strokeDasharray="3 3">
            <line x1="40" y1="40" x2="760" y2="40" />
            <line x1="40" y1="120" x2="760" y2="120" />
            <line x1="40" y1="200" x2="760" y2="200" />
            <line x1="40" y1="280" x2="760" y2="280" />
            <line x1="40" y1="360" x2="760" y2="360" />
            <line x1="40" y1="440" x2="760" y2="440" />

            <line x1="80" y1="20" x2="80" y2="460" />
            <line x1="220" y1="20" x2="220" y2="460" />
            <line x1="360" y1="20" x2="360" y2="460" />
            <line x1="500" y1="20" x2="500" y2="460" />
            <line x1="640" y1="20" x2="640" y2="460" />
          </g>

          {/* Central Arterial Corridor (Road Axis) */}
          <path
            d="M 60 250 L 740 250"
            stroke="#13284A"
            strokeWidth="2.5"
            strokeDasharray="8 6"
          />
          <text x="330" y="244" fill="#13284A" fontSize="9" fontFamily="monospace" letterSpacing="3">
            PRIMARY ARTERIAL CORRIDOR 30M R.O.W.
          </text>

          {/* PLOT 1: Family entertainment & multiplex */}
          <g>
            <polygon
              points="80,60 280,60 280,220 80,220"
              stroke="#13284A"
              strokeWidth="1.5"
              className="hero-plot-1 transition-colors"
            />
            <text x="180" y="130" textAnchor="middle" fill="#13284A" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              PARCEL I
            </text>
            <text x="180" y="148" textAnchor="middle" fill="#13284A" fontSize="9" fontFamily="sans-serif" opacity="0.85">
              Family entertainment &amp; multiplex
            </text>
            <text x="180" y="164" textAnchor="middle" fill="#13284A" fontSize="8" fontFamily="monospace" opacity="0.6">
              DIM: 140.00 M × 110.00 M
            </text>
            <text x="180" y="75" textAnchor="middle" fill="#13284A" fontSize="8" fontFamily="monospace">
              140.00 M
            </text>
          </g>

          {/* PLOT 2: Villa plots enclave */}
          <g>
            <polygon
              points="310,60 520,60 520,220 310,220"
              stroke="#13284A"
              strokeWidth="1.5"
              className="hero-plot-2 transition-colors"
            />
            <text x="415" y="130" textAnchor="middle" fill="#13284A" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              PARCEL II
            </text>
            <text x="415" y="148" textAnchor="middle" fill="#13284A" fontSize="9" fontFamily="sans-serif" opacity="0.85">
              Villa plots &amp; infrastructure
            </text>
            <text x="415" y="164" textAnchor="middle" fill="#13284A" fontSize="8" fontFamily="monospace" opacity="0.6">
              DIM: 150.00 M × 110.00 M
            </text>
            <text x="415" y="75" textAnchor="middle" fill="#13284A" fontSize="8" fontFamily="monospace">
              150.00 M
            </text>
          </g>

          {/* PLOT 3: Digital detox resort */}
          <g>
            <polygon
              points="550,60 720,90 720,220 550,220"
              stroke="#13284A"
              strokeWidth="1.5"
              className="hero-plot-3 transition-colors"
            />
            <text x="635" y="135" textAnchor="middle" fill="#13284A" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              PARCEL III
            </text>
            <text x="635" y="153" textAnchor="middle" fill="#13284A" fontSize="9" fontFamily="sans-serif" opacity="0.85">
              Digital detox sanctuary
            </text>
            <text x="635" y="169" textAnchor="middle" fill="#13284A" fontSize="8" fontFamily="monospace" opacity="0.6">
              SANCTUARY ALLOCATION
            </text>
          </g>

          {/* PLOT 4: Serviced living & student housing */}
          <g>
            <polygon
              points="80,280 340,280 340,430 80,430"
              stroke="#13284A"
              strokeWidth="1.5"
              className="hero-plot-4 transition-colors"
            />
            <text x="210" y="345" textAnchor="middle" fill="#13284A" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              PARCEL IV
            </text>
            <text x="210" y="363" textAnchor="middle" fill="#13284A" fontSize="9" fontFamily="sans-serif" opacity="0.85">
              Serviced living &amp; suites
            </text>
            <text x="210" y="379" textAnchor="middle" fill="#13284A" fontSize="8" fontFamily="monospace" opacity="0.6">
              HIGH DENSITY ACCOMMODATION
            </text>
          </g>

          {/* PLOT 5: Industrial workforce community */}
          <g>
            <polygon
              points="370,280 720,280 720,430 370,430"
              stroke="#13284A"
              strokeWidth="1.5"
              className="hero-plot-5 transition-colors"
            />
            <text x="545" y="345" textAnchor="middle" fill="#13284A" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              PARCEL V
            </text>
            <text x="545" y="363" textAnchor="middle" fill="#13284A" fontSize="9" fontFamily="sans-serif" opacity="0.85">
              Workforce community housing
            </text>
            <text x="545" y="379" textAnchor="middle" fill="#13284A" fontSize="8" fontFamily="monospace" opacity="0.6">
              INDUSTRIAL CORRIDOR HOUSING
            </text>
          </g>

          {/* Corner Survey Crosshairs & Coordinate Benchmarks */}
          <circle cx="80" cy="60" r="3" fill="#13284A" />
          <circle cx="720" cy="90" r="3" fill="#13284A" />
          <circle cx="720" cy="430" r="3" fill="#13284A" />
          <circle cx="80" cy="430" r="3" fill="#13284A" />

          <text x="85" y="55" fill="#13284A" fontSize="8" fontFamily="monospace">BM-01 [17.412° N, 78.435° E]</text>
          <text x="620" y="85" fill="#13284A" fontSize="8" fontFamily="monospace">BM-02 [17.414° N, 78.441° E]</text>
          <text x="85" y="445" fill="#13284A" fontSize="8" fontFamily="monospace">BM-03 [17.408° N, 78.436° E]</text>
          <text x="620" y="445" fill="#13284A" fontSize="8" fontFamily="monospace">BM-04 [17.409° N, 78.442° E]</text>
        </svg>
      </div>

      {/* Cadastral Dimension Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-mist/80 pt-4 text-[10px] font-mono tracking-luxury text-text/50 uppercase">
        <span>TOTAL SURVEYED FOOTPRINT: 12.4 HECTARES</span>
        <span>BRASS FILL: VERIFIED PLANNED PLOTS</span>
        <span>ORIENTATION: ↑ 00° 00&apos; NORTH</span>
      </div>
    </div>
  );
}
