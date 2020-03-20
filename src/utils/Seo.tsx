import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Prop {
  description: string;
  lang: string;
  meta: Array<{ name: string; content: string; property?: undefined }>;
  keywords: string[];
  title: string;
}

const SEO = ({
  description = '',
  lang = 'en',
  meta = [],
  keywords = [],
  title: initialTitle = ''
}: Prop) => {
  const title = initialTitle;
  const metaDescription = description;

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${title}`}
      htmlAttributes={{ lang }}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
