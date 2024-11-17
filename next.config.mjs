// next.config.js
export default {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.enescetinkaya.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'enescetinkaya.net',
        pathname: '/assets/images/**',
      },
    ],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  }
};
