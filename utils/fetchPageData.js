export async function fetchPageData(slug) {
  const res = await fetch(
    `https://api.buttercms.com/v2/pages/*/${slug}?auth_token=${process.env.API_TOKEN}`
  );
  const {data} = await res.json();
  return data.fields;
}
