const contentfulClient = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_API_KEY,
});

const contentfulPreviewClient = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

export const getClient = (isPreview) =>
  isPreview ? contentfulPreviewClient : contentfulClient;
