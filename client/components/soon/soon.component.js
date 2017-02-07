import template from './soon.component.pug';
import styles from './soon.component.scss';

import { Component } from '@huck/core';

class SoonComponent {

  constructor() {

    this.message = 'Coming soon.';

    Component(this, {
      css: styles,
      template: template,
      selector: 'soon-component'
    });

  }

  // onInit() { this.logger.log(`${this.name} initialized: ${this.loadtime}`); }

}

export { SoonComponent };
