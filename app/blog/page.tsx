import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Research and market insights on Indian real estate investments, plotted communities, and infrastructure development corridors.',
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-mist pb-8 mb-12">
          <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-2">
            Research & Editorial
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-ink mb-4">
            The real estate journal
          </h1>
          <p className="font-body text-base text-text/75 max-w-3xl leading-relaxed">
            Market analysis, regional infrastructure developments, and investment outlooks across major Indian commercial and plotted residential hubs.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-paper border border-mist hover:border-ink/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200"
            >
              <div>
                {/* Article Header Image (WebP) */}
                <div className="relative w-full aspect-[16/7] bg-mist/20 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono text-text/50 mb-3">
                    <span className="text-brass font-medium">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="font-heading text-lg sm:text-xl font-semibold text-ink group-hover:text-brass transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-text/75 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-mist/50 flex justify-between items-center text-xs">
                <span className="font-mono text-[11px] text-text/40">Editorial</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-ink group-hover:text-brass flex items-center gap-1"
                >
                  Read full entry →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
