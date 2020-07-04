import {fetchPageData} from 'utils/fetchPageData';

export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== 'a18b6113-8388-414e-a801-5092bb9ef0c0' || !req.query.slug) {
    return res.status(401).json({message: 'Invalid token'});
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const post = await fetchPageData(req.query.slug);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({message: 'Invalid slug'});
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, {Location: `/${post.slug}`});
  res.end();
};
