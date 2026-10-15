export const SITE_NAME = "Midwest Chemicals";

// Builds the text shown in the browser tab, in search results, and in
// history. `pageName` is the page's own name ("Products"); the home page
// passes nothing.
export function formatPageTitle(pageName?: string): string {
  if (pageName) {
    return pageName + " - " + SITE_NAME;
  }
  return SITE_NAME;
}
