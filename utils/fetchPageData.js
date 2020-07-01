import {contentfulClient} from 'utils/contentfulClient';

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
