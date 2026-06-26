/**
 * Minimal className joiner. Filters falsy values and joins with spaces.
 * Kept dependency-free on purpose (no clsx/tailwind-merge) to keep the
 * install surface small for an easily auditable enterprise codebase.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
