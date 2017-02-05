import template from './test.component.pug';
import styles from './test.component.scss';

import { Component } from '@huck/core';

class TestComponent {

  constructor() {

    this.greeting = 'Test component loaded';

    Component(this, {
      css: styles,
      template: template,
      selector: 'test-component'
    });

  }

  onInit() {
    this.logger.log(`${this.name} initialized: ${this.loadtime}`);
  }

}

export { TestComponent };
