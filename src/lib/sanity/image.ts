import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";
import type { SanityImageRef } from "./queries";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageRef): string {
  return builder.image(source).url();
}
