import template from './menu.component.pug';
import styles from './menu.component.scss';

import { Component } from '@huck/core';

class MenuComponent {

  constructor() {

    Component(this, {
      css: styles,
      template: template,
      selector: 'menu-component'
    });

  }

  onInit() {
    // this.logger.log(`${this.name} initialized: ${this.loadtime}`);
  }

}

export { MenuComponent };
