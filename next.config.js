module.exports = {
  env: {
    API_TOKEN: process.env.BUTTER_API_TOKEN,
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
