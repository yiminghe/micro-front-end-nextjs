import Garfish, { interfaces } from 'garfish';

if (location.pathname === '/') {
  location.href = '/app1';
}

// must use extends
interface ExtendAppInfo extends interfaces.AppInfo {
  entryFn: () => string;
}

const apps: ExtendAppInfo[] = [
  {
    name: 'app1',
    activeWhen: '/app1',
    cache: false,
    entry: 'http://x.com', // must be a url
    entryFn() {
      return `http://localhost:3001${location.pathname}${location.search}`;
    },
  },
  {
    name: 'app2',
    activeWhen: '/app2',
    cache: false,
    entry: 'http://x.com', // must be a url
    entryFn() {
      return `http://localhost:3002${location.pathname}${location.search}`;
    },
  },
];

Garfish.run({
  basename: '/',
  domGetter: '#subApp',
  apps,
  beforeLoad(appInfo: any) {
    // any??
    if (appInfo.entryFn) {
      appInfo.entry = appInfo.entryFn();
    }
  },
});
