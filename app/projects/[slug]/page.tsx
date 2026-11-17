import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjects, getProjectBySlug } from '@/lib/content';
import PlaceholderImage from '@/components/PlaceholderImage';
import EnquiryForm from '@/components/EnquiryForm';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: 'Project not found',
    };
  }

  return {
    title: `${project.name} | Sensation Infracon`,
    description: `${project.name} in ${project.city} - ${project.type}. Surveyed plotted dimensions and master development plan.`,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-text/60 mb-6">
          <Link href="/projects" className="hover:text-brass">
            Projects
          </Link>
          <span>/</span>
          <span className="text-text">{project.city}</span>
          <span>/</span>
          <span className="text-ink font-semibold">{project.name}</span>
        </div>

        {/* Project Header */}
        <div className="border-b border-mist pb-8 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="text-xs font-mono text-brass uppercase tracking-wider">
              {project.type}
            </span>
            <span className="text-xs font-mono bg-mist/30 text-ink px-3 py-1 rounded-full border border-mist">
              Status: {project.status}
            </span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-ink mb-4">
            {project.name}
          </h1>
          <p className="font-body text-base sm:text-lg text-text/80 max-w-4xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Grid: Specifications Table + Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Cadastral Specifications Table */}
          <div className="lg:col-span-7 bg-paper border border-mist rounded-2xl p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-ink mb-6 pb-3 border-b border-mist">
              Project survey specifications
            </h2>
            <div className="divide-y divide-mist text-xs sm:text-sm">
              <div className="py-3.5 flex justify-between items-baseline">
                <span className="font-mono text-text/50">City location</span>
                <span className="font-medium text-text">{project.city}</span>
              </div>
              <div className="py-3.5 flex justify-between items-baseline">
                <span className="font-mono text-text/50">Development format</span>
                <span className="font-medium text-text">{project.type}</span>
              </div>
              <div className="py-3.5 flex justify-between items-baseline">
                <span className="font-mono text-text/50">Plot sizes</span>
                <span className="font-medium text-text">{project.plotSizes}</span>
              </div>
              <div className="py-3.5 flex justify-between items-baseline">
                <span className="font-mono text-text/50">Starting price</span>
                <span className="font-medium text-text">{project.priceFrom}</span>
              </div>
              <div className="py-3.5 flex justify-between items-baseline">
                <span className="font-mono text-text/50">RERA registration</span>
                <span className="font-medium text-text">{project.reraNumber}</span>
              </div>
              <div className="py-3.5 flex justify-between items-baseline">
                <span className="font-mono text-text/50">Cadastre reference</span>
                <span className="font-mono text-xs text-text">{project.slug}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Map Placeholder */}
          <div className="lg:col-span-5 bg-paper border border-mist rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-mist">
                <h3 className="font-heading text-lg font-bold text-ink">
                  Location map survey
                </h3>
                <span className="text-[10px] font-mono text-brass">
                  {project.city.toUpperCase()}
                </span>
              </div>
              <p className="font-body text-xs text-text/70 mb-4">
                Survey coordinates: {project.mapCoordinates}
              </p>
              <div className="w-full">
                <PlaceholderImage
                  label={`Cadastral location survey: ${project.city}`}
                  aspectRatio="4/3"
                />
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-mist text-[11px] font-mono text-text/40">
              Cadastral coordinates pending final municipal geo-stamp.
            </div>
          </div>
        </div>

        {/* Gallery Section with grey placeholder boxes */}
        <section className="mb-20 pt-8 border-t border-mist">
          <div className="border-b border-mist pb-4 mb-8">
            <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-1">
              Architectural Drawings
            </span>
            <h2 className="font-heading text-2xl font-bold text-ink">
              Site plans & elevation gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((item) => (
              <div key={item.id} className="space-y-2">
                <PlaceholderImage
                  label={`${project.name} · ${item.label}`}
                  aspectRatio="16/9"
                />
                <p className="font-mono text-xs text-text/60 px-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Specific Enquiry Form */}
        <section className="pt-8 border-t border-mist max-w-4xl mx-auto">
          <EnquiryForm
            projectContext={`${project.name} (${project.city})`}
            defaultRole="investor"
          />
        </section>
      </div>
    </div>
  );
}
