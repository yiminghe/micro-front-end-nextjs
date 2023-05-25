import nextAdapter from '../lib';

const lifecycles = nextAdapter();

const { bootstrap, mount, unmount } = lifecycles;

const provider = {
  render: async () => {
    await bootstrap();
    mount();
  },
  destroy: unmount,
};

if (
  window.__GARFISH__ &&
  typeof __GARFISH_EXPORTS__ === 'object' &&
  __GARFISH_EXPORTS__
) {
  __GARFISH_EXPORTS__.provider = provider;
} else {
  if (process.env.NODE_ENV === 'production') {
    require('next/dist/client/app-next');
  } else {
    require('next/dist/client/app-next-dev');
  }
}
