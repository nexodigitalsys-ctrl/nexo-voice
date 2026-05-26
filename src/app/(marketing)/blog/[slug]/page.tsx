import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type {
  PortableTextComponents,
  PortableTextMarkComponent,
  PortableTextTypeComponent,
} from "@portabletext/react";
import { getAllPosts, getPostBySlug } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { SanityImageRef } from "@/lib/sanity/queries";

/* ── Tipos ────────────────────────────────────────────── */

interface PageParams {
  params: Promise<{ slug: string }>;
}

interface LinkMarkValue {
  _type: "link";
  href?: string;
}

/* ── PortableText components ─────────────────────────── */

const linkComponent: PortableTextMarkComponent<LinkMarkValue> = ({
  value,
  children,
}) => {
  const href = value?.href;
  const isExternal = href?.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-cyan underline underline-offset-2 transition-colors hover:text-teal"
    >
      {children}
    </a>
  );
};

const imageComponent: PortableTextTypeComponent<SanityImageRef> = ({
  value,
}) => {
  if (!value?.asset?._ref) return null;
  return (
    <figure className="my-8">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={urlFor(value)}
          alt={value.alt ?? ""}
          width={1200}
          height={675}
          className="w-full object-cover"
        />
      </div>
      {value.alt && (
        <figcaption className="mt-2 text-center text-[12px] text-muted/70">
          {value.alt}
        </figcaption>
      )}
    </figure>
  );
};

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[15px] font-light leading-[1.85] text-muted">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.8px] text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-display text-[20px] font-bold leading-[1.2] text-white">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-6 font-display text-[17px] font-bold text-white">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-cyan/40 pl-5 text-[14px] font-light italic leading-[1.8] text-muted/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 flex flex-col gap-2 pl-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 flex list-decimal flex-col gap-2 pl-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-2 text-[14px] font-light leading-[1.7] text-muted">
        <span className="mt-[3px] flex-shrink-0 text-cyan">→</span>
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[14px] font-light leading-[1.7] text-muted">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-muted/90">{children}</em>
    ),
    code: ({ children }) => (
      <code className="rounded bg-bg3 px-1.5 py-0.5 font-mono text-[13px] text-cyan">
        {children}
      </code>
    ),
    link: linkComponent,
  },
  types: {
    image: imageComponent,
  },
};

/* ── generateStaticParams ─────────────────────────────── */

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

/* ── generateMetadata ─────────────────────────────────── */

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      ...(post.publishedAt && { publishedTime: post.publishedAt }),
    },
  };
}

/* ── Page ─────────────────────────────────────────────── */

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      {/* ── Hero del artículo ── */}
      <section className="relative z-10 mx-auto max-w-[780px] px-6 pb-0 pt-[120px] md:px-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-[12px] text-muted/60">
          <Link href="/blog" className="hover:text-cyan transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-muted/40 line-clamp-1">{post.title}</span>
        </div>

        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {post.publishedAt && (
            <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-cyan/70">
              {formatDate(post.publishedAt)}
            </span>
          )}
          {post.author && (
            <>
              <span className="text-muted/30">·</span>
              <span className="text-[12px] font-light text-muted/70">
                por {post.author}
              </span>
            </>
          )}
        </div>

        {/* Título */}
        <h1 className="mb-5 font-display text-[36px] font-extrabold leading-[1.1] tracking-[-1.5px] text-white md:text-[44px]">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="mb-8 text-[17px] font-light leading-[1.7] text-muted">
            {post.excerpt}
          </p>
        )}

        {/* Imagen principal */}
        {post.mainImage && (
          <div className="relative mb-12 overflow-hidden rounded-2xl">
            <Image
              src={urlFor(post.mainImage)}
              alt={post.mainImage.alt ?? post.title}
              width={1200}
              height={630}
              className="w-full object-cover"
              priority
            />
          </div>
        )}
      </section>

      {/* ── Cuerpo del artículo ── */}
      {post.body && post.body.length > 0 && (
        <article className="relative z-10 mx-auto max-w-[780px] px-6 pb-[80px] md:px-12">
          <div className="border-t border-border pt-8">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        </article>
      )}

      {/* ── CTA volver ── */}
      <div className="relative z-10 border-t border-border bg-bg2">
        <div className="mx-auto max-w-[780px] px-6 py-[60px] md:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-cyan transition-colors hover:text-teal"
          >
            ← Volver al blog
          </Link>
        </div>
      </div>
    </>
  );
}
