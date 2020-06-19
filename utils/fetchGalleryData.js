export async function fetchGalleryData(slug) {
  const res = await fetch(
    `https://api.buttercms.com/v2/content/gallery_group?fields.slug=${slug}&auth_token=${process.env.API_TOKEN}`
  );
  const {data} = await res.json();
  return data.gallery_group[0];
}
