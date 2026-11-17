import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/content';
import { remark } from 'remark';
import html from 'remark-html';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Article not found',
    };
  }

  return {
    title: `${post.title} | Sensation Infracon Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1024,
          height: 427,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <article className="w-full py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-text/60 mb-6">
          <Link href="/blog" className="hover:text-brass">
            Journal
          </Link>
          <span>/</span>
          <span className="text-text">{post.category}</span>
        </div>

        {/* Article Header */}
        <div className="border-b border-mist pb-8 mb-8">
          <div className="flex items-center gap-3 text-xs font-mono text-text/60 mb-3">
            <span className="text-brass font-medium">{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>Archive publication</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
            {post.title}
          </h1>
          <p className="font-body text-base sm:text-lg text-text/75 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Featured Image (WebP) */}
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden border border-mist bg-mist/20 mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Article Body Content (Markdown) */}
        <div
          className="prose prose-neutral max-w-none font-body text-sm sm:text-base leading-relaxed text-text/85 space-y-4 mb-16"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Back to Blog Button */}
        <div className="pt-8 border-t border-mist flex justify-between items-center">
          <Link
            href="/blog"
            className="text-xs sm:text-sm font-semibold text-ink hover:text-brass flex items-center gap-2"
          >
            ← Back to all journal entries
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-ink text-paper hover:bg-brass rounded-full text-xs font-semibold transition-colors"
          >
            Enquire about this market
          </Link>
        </div>
      </div>
    </article>
  );
}
