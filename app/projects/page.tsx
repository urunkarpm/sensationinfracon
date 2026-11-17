import React from 'react';
import type { Metadata } from 'next';
import { getProjects } from '@/lib/content';
import ProjectsDirectory from '@/components/ProjectsDirectory';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore surveyed plotted developments, serviced living, and commercial projects across Hyderabad, Mumbai, Bengaluru, Chennai, and Goa.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-mist pb-8 mb-12">
          <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-2">
            Surveyed parcels & master plans
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-ink mb-4">
            Projects directory
          </h1>
          <p className="font-body text-sm sm:text-base text-text/75 max-w-3xl leading-relaxed">
            Review active plotted developments, serviced living, and destination hospitality developments across our target Indian urban corridors. Filter by city or development format.
          </p>
        </div>

        {/* Directory with City & Type Filters */}
        <ProjectsDirectory initialProjects={projects} />
      </div>
    </div>
  );
}
