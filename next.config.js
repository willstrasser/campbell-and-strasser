module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  async redirects() {
    return [
      {
        source: '/mob',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
