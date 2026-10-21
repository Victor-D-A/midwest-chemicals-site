// Turns a full web address into a short name visitors recognize, for labels
// like "Opens grizzlygrip.com". Used wherever the site links to another website.
export function siteName(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  }
  catch {
    return url;
  }
}
