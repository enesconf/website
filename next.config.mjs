export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.enescetinkaya.net',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'enescetinkaya.net',
          port: '',
          pathname: '/assets/images/**',
        },
      ],
    },
    webpack: (config) => {
      config.cache = false;
      return config;
    },
  };
  