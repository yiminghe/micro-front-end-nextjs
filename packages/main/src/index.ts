import Garfish from 'garfish';

Garfish.run({
  basename: '/',
  domGetter: '#subApp',
  apps: [
    {
      name: 'app1',
      activeWhen: '/app1',
      entry() {
        return 'http://localhost:3001' + location.pathname + location.search;
      },
    },
    {
      name: 'app2',
      activeWhen: '/app2',
      entry() {
        return 'http://localhost:3002' + location.pathname + location.search;
      },
    },
  ] as any,
});
