export interface LatestArticle {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const RSS_FEED_URL = "https://www.pontosfortes.com.br/blog-feed.xml";

/**
 * Strips HTML tags and decodes common entities from a text string.
 */
function cleanText(raw: string): string {
  if (!raw) return "";
  const withoutTags = raw.replace(/<[^>]+>/g, "").trim();
  // Decode common HTML entities if present
  return withoutTags
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

/**
 * Attempts to parse XML directly if available.
 */
function parseXmlFeed(xmlString: string): LatestArticle | null {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const firstItem = xmlDoc.querySelector("item");
    if (!firstItem) return null;

    const title = firstItem.querySelector("title")?.textContent?.trim();
    const link = firstItem.querySelector("link")?.textContent?.trim();
    const description = firstItem.querySelector("description")?.textContent?.trim();
    const enclosure = firstItem.querySelector("enclosure")?.getAttribute("url") || undefined;

    if (!title || !link) return null;

    return {
      title: cleanText(title),
      url: link,
      description: cleanText(description || ""),
      image: enclosure || undefined
    };
  } catch {
    return null;
  }
}

/**
 * Fetches the latest blog post from the Pontos Fortes RSS feed.
 * Includes multiple fallback strategies and timeouts.
 * Returns null if any error occurs.
 */
export async function fetchLatestBlogArticle(): Promise<LatestArticle | null> {
  const timeoutMs = 5000;

  // 1. Primary strategy: rss2json API (CORS-friendly JSON converter)
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    const rss2JsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_FEED_URL)}`;
    const response = await fetch(rss2JsonUrl, { signal: controller.signal });
    clearTimeout(timer);

    if (response.ok) {
      const data = await response.json();
      if (data.status === "ok" && Array.isArray(data.items) && data.items.length > 0) {
        const item = data.items[0];
        const title = item.title?.trim();
        const url = item.link?.trim();
        const desc = item.description || item.content || "";
        const image = item.enclosure?.link || item.enclosure?.url || item.thumbnail || undefined;

        if (title && url) {
          return {
            title: cleanText(title),
            url,
            description: cleanText(desc),
            image
          };
        }
      }
    }
  } catch (error) {
    console.warn("rss2json fetch error:", error);
  }

  // 2. Secondary strategy: corsproxy.io + DOMParser
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    const corsProxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(RSS_FEED_URL)}`;
    const response = await fetch(corsProxyUrl, { signal: controller.signal });
    clearTimeout(timer);

    if (response.ok) {
      const xmlText = await response.text();
      const article = parseXmlFeed(xmlText);
      if (article) return article;
    }
  } catch (error) {
    console.warn("corsproxy fetch error:", error);
  }

  // 3. Tertiary strategy: direct fetch (in case CORS is permitted)
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    const response = await fetch(RSS_FEED_URL, { signal: controller.signal });
    clearTimeout(timer);

    if (response.ok) {
      const xmlText = await response.text();
      const article = parseXmlFeed(xmlText);
      if (article) return article;
    }
  } catch (error) {
    console.warn("direct RSS fetch error:", error);
  }

  return null;
}
