// next.config.js
export default {
    output: 'export',
    images: {
      unoptimized: true, // This disables the Image Optimization API
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
  