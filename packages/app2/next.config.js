const path = require('path');

module.exports = {
  basePath: '/app2',
  //assetPrefix: 'http://localhost:3002/app2',
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    if (!isServer) {
      const entry = config.entry;
      config.entry = async () => {
        const entryInfo = await entry();
        // console.log(entryInfo);
        return {
          ...entryInfo,
          main: require.resolve('next-adapter/lib/garfish'),
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
