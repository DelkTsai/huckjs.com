// HUCK
import { Huck } from '@huck/core';
// import { Router } from '@huck/browser';

// COMPONENTS
import { BindingComponent } from './components/binding/binding.component';
import { DefaultComponent } from './components/default/default.component';
import { ErrorComponent } from './components/error/default.component';
import { MenuComponent } from './components/menu/menu.component';
import { SoonComponent } from './components/soon/soon.component';

import { AppRoutes } from './router';

// CREATE NEW APP
let App = new Huck({
  name: 'Huck',
  livereload: true,
  logging: true,
  production: false
});

// ADD OUR COMPONENTS
App.bootstrap({
  components: [
    BindingComponent,
    DefaultComponent,
    ErrorComponent,
    MenuComponent,
    SoonComponent
  ]
});

// WHEN THE APP IS READY
App.onReady(() => {
  App.logger.log(`${App.name} loaded: ${App.loadtime}`);
});


// SETUP ROUTER
App.router = AppRoutes;

// ADD ANOTHER ROUTE
// App.router.add({
//   component: 'DefaultComponent',
//   name: 'home',
//   path: '/'
// });

// DO THIS IF WE WANT TO MAKE OUR APP ACCESSIBLE TO THE WINDOW
export { App as Huck };
