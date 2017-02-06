// LIBS

// TUPACCA
import { Huck } from '@huck/core';
import { Router } from '@huck/browser';

// COMPONENTS
import { BindingComponent } from './components/binding/binding.component';
import { DefaultComponent } from './components/default/default.component';
import { DefaultErrorComponent } from './components/error/default/default.component';
import { SoonComponent } from './components/soon/soon.component';

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
    SoonComponent
  ]
});

App.onReady(() => {
  App.logger.log(`${App.name} loaded: ${App.loadtime}`);
});

App.router = new Router([
  {
    component: 'SoonComponent',
    name: 'soon-component',
    path: '/soon'
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
