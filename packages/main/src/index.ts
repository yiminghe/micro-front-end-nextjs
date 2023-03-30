import Garfish from 'garfish';
Garfish.run({
  basename: '/',
  domGetter: '#subApp',
  apps: [
    {
      name: 'app1',
      activeWhen: '/app1',
      entry: 'http://localhost:3001/app1', // html入口
    },
    // {
    //   name: 'app2',
    //   activeWhen: '/app2',
    //   entry: 'http://localhost:3002', // html入口
    // },
  ],
});
