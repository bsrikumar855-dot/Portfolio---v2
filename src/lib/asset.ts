/**
 * Prefix a public asset path with the configured base path.
 *
 * With `images.unoptimized` (required for static export), `next/image` does NOT
 * apply `basePath` to the image `src`, so public assets must be prefixed
 * manually to resolve on a GitHub Pages project sub-path. Empty base path
 * (Netlify / custom domain / local dev) leaves paths at the root unchanged.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
