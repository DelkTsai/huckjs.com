// LIBS

// TUPACCA
import { Huck } from '@huck/core';
import { Router } from '@huck/browser';

// COMPONENTS
import { BindingComponent } from './components/binding/binding.component';
import { DefaultComponent } from './components/default/default.component';
import { DefaultErrorComponent } from './components/error/default/default.component';
import { TestComponent } from './components/test/test.component';

let App = new Huck({
  // name: 'Huck',
  // livereload: true,
  logging: true,
  production: false
});

App.bootstrap({
  components: [
    BindingComponent,
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
    component: 'BindingComponent',
    name: 'binding-component',
    path: '/binding'
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
