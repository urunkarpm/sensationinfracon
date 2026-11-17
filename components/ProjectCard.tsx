import React from 'react';
import Link from 'next/link';
import { Project } from '@/lib/content';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-paper border border-mist/80 hover:border-ink/70 rounded-2xl p-8 flex flex-col justify-between transition-colors duration-200">
      <div>
        {/* Top Survey Header */}
        <div className="flex items-center justify-between gap-2 border-b border-mist/60 pb-3 mb-5 text-xs font-mono">
          <span className="tracking-folio uppercase text-text/60">{project.city}</span>
          <span className="text-[10px] font-mono tracking-folio uppercase bg-mist/30 text-ink px-3 py-0.5 rounded-full">
            {project.status}
          </span>
        </div>

        {/* Name and Type */}
        <span className="text-[10px] font-mono tracking-luxury text-brass uppercase block mb-2">
          {project.type}
        </span>
        <h3 className="font-heading text-xl sm:text-2xl font-semibold text-ink group-hover:text-brass transition-colors mb-3 leading-snug">
          <Link href={`/projects/${project.slug}`}>
            {project.name}
          </Link>
        </h3>
        <p className="font-body text-xs sm:text-sm text-text/75 leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>

        {/* Architectural Specs Table */}
        <div className="border-t border-mist/60 py-4 space-y-2.5 text-xs">
          <div className="flex justify-between items-baseline">
            <span className="text-text/50 font-mono tracking-folio uppercase text-[11px]">Plot sizes:</span>
            <span className="font-medium text-text text-right">{project.plotSizes}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-text/50 font-mono tracking-folio uppercase text-[11px]">Pricing:</span>
            <span className="font-medium text-text text-right">{project.priceFrom}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-text/50 font-mono tracking-folio uppercase text-[11px]">RERA:</span>
            <span className="font-medium text-text text-right truncate max-w-[180px]">{project.reraNumber}</span>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-5 border-t border-mist flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-folio uppercase text-text/40">
          Ref: {project.slug}
        </span>
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-mono tracking-luxury uppercase font-semibold text-ink group-hover:text-brass flex items-center gap-1.5 transition-colors"
        >
          View folio →
        </Link>
      </div>
    </article>
  );
}
