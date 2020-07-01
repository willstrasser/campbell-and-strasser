import {contentfulClient} from 'utils/contentfulClient';

export async function deprecatedFetchPageData(slug) {
  const res = await fetch(
    `https://api.buttercms.com/v2/pages/*/${slug}?auth_token=${process.env.API_TOKEN}`
  );
  const {data} = await res.json();
  return data.fields;
}

export async function fetchPageData(slug) {
  const entries = await contentfulClient.getEntries({
    'content_type': 'page',
    'fields.slug': slug,
  });
  if (entries.items) {
    return entries.items[0].fields;
  }
  console.log(`Error getting Entries for ${slug}.`);
}
