import React from "react";
import Head from "next/head";

import {getUrl} from "../../../utils";

// eslint-disable-next-line no-process-env
const domain = process.env.NEXT_PUBLIC_DOMAIN as string;

enum SocialNetworks {
  facebook = "Facebook",
  twitter = "Twitter",
}

interface SocialItem {
  title: string;
  description: string;
  socialNetwork: SocialNetworks;
  image: unknown;
}

interface SEO {
  metaTitle: string;
  description: string;
  metaImage: unknown;
  keywords: string;
  metaSocial?: Array<SocialItem>;
}

export interface SEOItemProps {
  title?: string;
  description?: string;
  cover?: unknown;
  keywords?: string;
  path?: string;
  seo?: SEO;
}

const SEOItem = (props: SEOItemProps): JSX.Element => {
  const seoTitle = props.seo?.metaTitle ?? props.title;
  const seoDescription = props.seo?.description ?? props.description;
  const seoImage = getUrl(props.seo?.metaImage ?? props.cover);
  const seoKeywords = props.seo?.keywords ?? props.keywords;

  const fbMetaData = props.seo?.metaSocial?.find(e => e.socialNetwork === SocialNetworks.facebook);
  const twMetaData = props.seo?.metaSocial?.find(e => e.socialNetwork === SocialNetworks.twitter);

  const url = `${domain}${props.path ?? ""}`;

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta property="og:url" content={url} />

      <meta name="description" content={seoDescription} />
      <meta property="keywords" content={seoKeywords} />

      {/* Google / Search Engine Tags  */ }
      <meta itemProp="name" content={seoTitle} />
      <meta itemProp="description" content={seoDescription} />
      <meta itemProp="image" content={seoImage} />

      {/* Facebook Meta Tags */ }
      <meta property="og:title" content={fbMetaData?.title ?? seoTitle} />
      <meta property="og:description" content={fbMetaData?.description ?? seoDescription} />
      <meta property="og:image" content={getUrl(fbMetaData?.image) ?? seoImage} />

      {/* Twitter Meta Tags */ }
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twMetaData?.title ?? seoTitle} />
      <meta name="twitter:description" content={twMetaData?.description ?? seoDescription} />
      <meta name="twitter:image" content={getUrl(twMetaData?.image) ?? seoImage} />
    </Head>
  );
};

SEOItem.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  cover: null,
  path: "",
  seo: {
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    metaImage: null,
  },
};

export default SEOItem;
