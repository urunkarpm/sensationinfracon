'use client';

import React, { useState, useMemo } from 'react';
import { Project } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';

interface ProjectsDirectoryProps {
  initialProjects: Project[];
}

export default function ProjectsDirectory({ initialProjects }: ProjectsDirectoryProps) {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const cities = useMemo(() => {
    const list = Array.from(new Set(initialProjects.map((p) => p.city)));
    return ['all', ...list];
  }, [initialProjects]);

  const types = useMemo(() => {
    const list = Array.from(new Set(initialProjects.map((p) => p.type)));
    return ['all', ...list];
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const cityMatch = selectedCity === 'all' || project.city === selectedCity;
      const typeMatch = selectedType === 'all' || project.type === selectedType;
      return cityMatch && typeMatch;
    });
  }, [initialProjects, selectedCity, selectedType]);

  return (
    <div className="space-y-8">
      {/* Cadastral Filter Controls */}
      <div className="bg-paper border border-mist rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-mist pb-4 text-xs font-mono">
          <span className="text-ink font-semibold">FILTER SURVEYED PARCELS</span>
          <span className="text-text/60">
            SHOWING {filteredProjects.length} OF {initialProjects.length} PARCELS
          </span>
        </div>

        {/* City Filter Pills */}
        <div>
          <label className="block text-xs font-mono text-text/60 mb-2 uppercase tracking-wider">
            By City:
          </label>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedCity === city
                    ? 'bg-ink text-paper font-semibold'
                    : 'bg-white/70 border border-mist text-text hover:border-ink'
                }`}
              >
                {city === 'all' ? 'All cities' : city}
              </button>
            ))}
          </div>
        </div>

        {/* Type Filter Pills */}
        <div>
          <label className="block text-xs font-mono text-text/60 mb-2 uppercase tracking-wider">
            By Project Type:
          </label>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-ink text-paper font-semibold'
                    : 'bg-white/70 border border-mist text-text hover:border-ink'
                }`}
              >
                {type === 'all' ? 'All project types' : type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center border border-dashed border-mist rounded-2xl bg-white/40">
          <p className="font-heading text-lg text-ink font-semibold mb-2">
            No projects match the selected criteria
          </p>
          <p className="font-body text-xs text-text/60 mb-4">
            Try resetting your city or property type filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCity('all');
              setSelectedType('all');
            }}
            className="px-4 py-2 bg-ink text-paper rounded-full text-xs font-medium hover:bg-brass transition-colors"
          >
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );
}
