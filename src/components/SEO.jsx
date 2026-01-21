import { Helmet } from 'react-helmet-async';

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
  noIndex = false
}) {
  const seoTitle = title
    ? `${title} | ${defaultSEO.siteName}`
    : defaultSEO.defaultTitle;
  const seoDescription = description || defaultSEO.defaultDescription;
  const seoImage = image || defaultSEO.defaultImage;
  const seoUrl = url ? `${defaultSEO.siteUrl}${url}` : defaultSEO.siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={defaultSEO.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
}

export default SEO;
