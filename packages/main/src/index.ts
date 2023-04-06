import Garfish from 'garfish';

if (location.pathname === '/') {
  location.href = '/app1';
}

const entryInfo: Record<string, () => string> = {
  app1() {
    return `http://localhost:3001${location.pathname}${location.search}`;
  },
  app2() {
    return `http://localhost:3002${location.pathname}${location.search}`;
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
