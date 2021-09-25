import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'KRS Group, We are developing the gated society in Uttar pradesh, india. One of the best township in india we have developed like Shri Radha Rani Township, Brij Rani Kutir and Shri Radha Rani Township Phase 1 ',
  author = 'KRS Group (Home Developers PVT LTD)',
  meta,
  title = 'No. 1 Township Developer in India - KRS Group',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
