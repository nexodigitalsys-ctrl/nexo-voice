import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Post } from "@/lib/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre agentes de voz con IA, automatización telefónica y tecnología para empresas españolas.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg2 transition-all hover:-translate-y-[3px] hover:border-cyan hover:shadow-[0_12px_32px_rgba(0,212,255,0.08)]"
    >
      {/* Imagen */}
      {post.mainImage ? (
        <div className="relative h-48 overflow-hidden bg-bg3">
          <Image
            src={urlFor(post.mainImage)}
            alt={post.mainImage.alt ?? post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center bg-bg3">
          <svg
            className="h-10 w-10 stroke-muted/30"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12h.008v.008H13.5V12zm0 0H12m1.5 0H15"
            />
          </svg>
        </div>
      )}

      {/* Contenido */}
      <div className="flex flex-1 flex-col px-6 py-6">
        {post.publishedAt && (
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[1.5px] text-cyan/70">
            {formatDate(post.publishedAt)}
          </div>
        )}
        <h2 className="mb-2 font-display text-base font-bold leading-[1.35] text-white transition-colors group-hover:text-cyan">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="line-clamp-3 text-[13px] font-light leading-[1.65] text-muted">
            {post.excerpt}
          </p>
        )}
        {post.author && (
          <div className="mt-4 text-[12px] text-muted/60">
            por {post.author}
          </div>
        )}
        <div className="mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-cyan">
          Leer artículo
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-bg3">
        <svg
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            stroke="rgb(122 144 184 / 0.4)"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </div>
      <p className="text-[15px] font-semibold text-white">
        Aún no hay artículos publicados
      </p>
      <p className="mt-2 max-w-[340px] text-[13px] font-light text-muted">
        Vuelve pronto. Estamos preparando contenido sobre agentes de voz con IA
        y automatización empresarial.
      </p>
    </div>
  );
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      {/* ── Cabecera ── */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-0 pt-[120px] md:px-12">
        <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
          Blog
        </div>
        <h1 className="mb-4 font-display text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
          Ideas sobre IA
          <br />
          y voz
        </h1>
        <p className="max-w-[480px] text-base font-light leading-[1.7] text-muted">
          Reflexiones, casos de uso y novedades sobre agentes de voz con
          inteligencia artificial para empresas.
        </p>
      </section>

      {/* ── Grid / Estado vacío ── */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 py-[72px] md:px-12">
        {posts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
