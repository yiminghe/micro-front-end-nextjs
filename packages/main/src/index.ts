import Garfish from 'garfish';

if (location.pathname === '/') {
  location.href = '/app1';
}

Garfish.run({
  basename: '/',
  domGetter: '#subApp',
  apps: [
    {
      name: 'app1',
      activeWhen: '/app1',
      cache: false,
      entry() {
        return `http://localhost:3001${location.pathname}${location.search}`;
      },
    },
    {
      name: 'app2',
      activeWhen: '/app2',
      cache: false,
      entry() {
        return `http://localhost:3002${location.pathname}${location.search}`;
      },
    },
  ] as any,
});
