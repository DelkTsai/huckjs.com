// LIBS

// TUPACCA
import { Huck } from '@huck/core';
import { Router } from '@huck/browser';

// COMPONENTS
import { TestComponent } from './components/test/test.component';
import { DefaultComponent } from './components/default/default.component';
import { DefaultErrorComponent } from './components/error/default/default.component';

let App = new Huck({
  // name: 'Awesome sauce',
  // livereload: true,
  logging: true,
  production: false
});

App.bootstrap({
  components: [
    DefaultComponent,
    DefaultErrorComponent,
    TestComponent
  ]
});

App.onReady(() => {
  App.logger.log(`${App.name} loaded: ${App.loadtime}`);
});

App.router = new Router([
  {
    component: 'TestComponent',
    name: 'test-component',
    path: '/test'
  },
  {
    component: 'DefaultErrorComponent',
    name: 'error-component'
  }
]);

App.router.add({
  component: 'DefaultComponent',
  name: 'home',
  path: '/'
});

export {App as Huck};
