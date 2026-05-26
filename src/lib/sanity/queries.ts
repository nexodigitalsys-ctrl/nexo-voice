import { sanityClient } from "./client";
import type { PortableTextBlock } from "@portabletext/react";

export interface SanitySlug {
  current: string;
}

export interface SanityImageRef {
  _type: "image";
  _key?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  alt?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  mainImage?: SanityImageRef;
  publishedAt?: string;
  author?: string;
}

export interface PostDetail extends Post {
  body?: PortableTextBlock[];
}

const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author
  }
`;

const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    body,
    publishedAt,
    author
  }
`;

export async function getAllPosts(): Promise<Post[]> {
  try {
    return await sanityClient.fetch<Post[]>(ALL_POSTS_QUERY);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  try {
    return await sanityClient.fetch<PostDetail | null>(POST_BY_SLUG_QUERY, {
      slug,
    });
  } catch {
    return null;
  }
}
