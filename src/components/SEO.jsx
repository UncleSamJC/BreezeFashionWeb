import { useEffect } from 'react';

const defaultSEO = {
  siteName: 'Breeze Fashion',
  siteUrl: 'https://www.breezeie.com',
  defaultTitle: 'Breeze Fashion | Premium Fashion Manufacturing & OEM Services',
  defaultDescription: 'Breeze Fashion offers premium fashion manufacturing, OEM services, and quality apparel solutions. Based in Suzhou, China, we deliver excellence in fashion production worldwide.',
  defaultImage: 'https://www.breezeie.com/og-image.jpg',
};

function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
}) {
  const seoTitle = title
    ? `${title} | ${defaultSEO.siteName}`
    : defaultSEO.defaultTitle;
  const seoDescription = description || defaultSEO.defaultDescription;
  const seoImage = image || defaultSEO.defaultImage;
  const seoUrl = url ? `${defaultSEO.siteUrl}${url}` : defaultSEO.siteUrl;

  useEffect(() => {
    // Update title
    document.title = seoTitle;

    // Helper function to update or create meta tag
    const updateMeta = (attribute, value, content) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update primary meta tags
    updateMeta('name', 'title', seoTitle);
    updateMeta('name', 'description', seoDescription);

    // Update Open Graph tags
    updateMeta('property', 'og:type', type);
    updateMeta('property', 'og:url', seoUrl);
    updateMeta('property', 'og:title', seoTitle);
    updateMeta('property', 'og:description', seoDescription);
    updateMeta('property', 'og:image', seoImage);

    // Update Twitter tags
    updateMeta('name', 'twitter:url', seoUrl);
    updateMeta('name', 'twitter:title', seoTitle);
    updateMeta('name', 'twitter:description', seoDescription);
    updateMeta('name', 'twitter:image', seoImage);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', seoUrl);
    }
  }, [seoTitle, seoDescription, seoImage, seoUrl, type]);

  return null;
}

export default SEO;
