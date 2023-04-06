import Garfish from 'garfish';

if (location.pathname === '/') {
  location.href = '/app1';
}

let app1Host = 'http://localhost:3001';
if (process.env.NODE_ENV === 'production') {
  app1Host = 'https://micro-front-end-nextjs-app1.vercel.app';
}

let app2Host = 'http://localhost:3002';
if (process.env.NODE_ENV === 'production') {
  app2Host = 'https://micro-front-end-nextjs-app2.vercel.app';
}

const entryInfo: Record<string, () => string> = {
  app1() {
    return `${app1Host}${location.pathname}${location.search}`;
  },
  app2() {
    return `${app2Host}${location.pathname}${location.search}`;
  },
};

Garfish.run({
  basename: '/',
  domGetter: '#subApp',
  apps: [
    {
      name: 'app1',
      activeWhen: '/app1',
      cache: false,
      entry: 'http://x.com', // must be a url
    },
    {
      name: 'app2',
      activeWhen: '/app2',
      cache: false,
      entry: 'http://x.com', // must be a url
    },
  ],
  disablePreloadApp: true,
  beforeLoad(appInfo) {
    if (Object.prototype.hasOwnProperty.call(entryInfo, appInfo.name)) {
      appInfo.entry = entryInfo[appInfo.name]();
    }
  },
});
