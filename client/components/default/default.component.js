import template from './default.component.pug';
import styles from './default.component.scss';

import { Component } from '@huck/core';

class DefaultComponent {

  constructor() {

    this.greeting = 'Home component loaded';

    Component(this, {
      css: styles,
      template: template,
      selector: 'home-component'
    });

  }

  onInit() {
    this.logger.log(`${this.name} initialized: ${this.loadtime}`);
  }

}

export { DefaultComponent };
