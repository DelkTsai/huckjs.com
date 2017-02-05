import template from './default.component.pug';
import styles from './default.component.scss';

import { Component } from '@huck/core';

class DefaultErrorComponent {

  constructor() {

    this.title = 'Error!';
    this.message = '404 Page not found';

    Component(this, {
      css: styles,
      template: template,
      selector: 'error-component'
    });

  }

  onInit() {
    this.logger.log(`${this.name} initialized: ${this.loadtime}`);
  }

}

export { DefaultErrorComponent };
