export default function sitemap() {
  const siteUrl = "https://sauravsitaula.com.np";
  const currentDate = new Date().toISOString();

  // Define all pages with their metadata
  const routes = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/hobbies`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Section anchors for better indexing
    {
      url: `${siteUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#experience`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  return routes;
}
