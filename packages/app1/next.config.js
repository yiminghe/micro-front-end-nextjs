const path = require('path');

module.exports = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    if (!isServer) {
      const entry = config.entry;
      config.entry = async () => {
        const entryInfo = await entry();
        return {
          ...entryInfo,
          main: path.resolve(process.cwd(), 'next/main.js'),
        };
      };
    }

    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};
