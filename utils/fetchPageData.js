import {getClient} from 'utils/contentfulClient';

export async function fetchPageData(isPreview, slug) {
  const entries = await getClient(isPreview).getEntries({
    'content_type': 'page',
    'fields.slug': slug,
  });
  if (entries.items) {
    return entries.items[0].fields;
  }
  console.log(`Error getting Entries for ${slug}.`);
}
