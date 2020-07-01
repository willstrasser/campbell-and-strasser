import {contentfulClient} from 'utils/contentfulClient';

export async function deprecatedFetchGalleryData(slug) {
  const res = await fetch(
    `https://api.buttercms.com/v2/content/gallery_group?fields.slug=${slug}&auth_token=${process.env.API_TOKEN}`
  );
  const {data} = await res.json();
  return data.gallery_group[0];
}

export async function fetchGalleryData(slug) {
  const entries = await contentfulClient.getEntries({
    'content_type': 'gallery',
    'fields.slug': slug,
  });
  if (entries.items) {
    return entries.items[0].fields;
  }
  console.log(`Error getting Entries for ${slug}.`);
}
