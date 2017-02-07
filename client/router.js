import { Router } from '@huck/browser';

let AppRoutes = new Router([
  {
    component: 'DefaultComponent',
    path: '/'
  },
  {
    component: 'BindingComponent',
    path: '/binding'
  },
  {
    component: 'SoonComponent',
    path: '/soon'
  },
  {
    component: 'ErrorComponent',
    error: true
  }
]);

export { AppRoutes };
