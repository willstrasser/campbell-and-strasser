import {getClient} from 'utils/contentfulClient';

export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== 'a18b6113-8388-414e-a801-5092bb9ef0c0' || !req.query.slug) {
    return res.status(401).json({message: 'Invalid token'});
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const entries = await getClient(true).getEntries({
    'content_type': req.query.content_type,
    'fields.slug': req.query.slug,
  });
  let post;
  if (entries.items[0]) {
    post = entries.items[0];
  }

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({message: 'Invalid slug'});
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  const url =
    [req.query.content_type === 'gallery' ? '/gallery' : ''] +
    [`/${post.fields.slug}`].join('');
  res.writeHead(307, {Location: url});
  res.end();
};
