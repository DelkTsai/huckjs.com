import template from './binding.component.pug';
import styles from './binding.component.scss';

import { Component } from '@huck/core';
import { Dom } from '@huck/browser';

class BindingComponent {

  constructor() {

    this.title = 'Data Binding';

    this.pets = [
      {
        breed: 'cat',
        name: 'Tom'
      }
    ];

    Component(this, {
      css: styles,
      template: template,
      selector: 'binding-component'
    });

  }

  onInit() {

    this.shadow = Dom.el(this.selector).shadowRoot;

    // LISTEN FOR CHANGES
    this.onChange((what) => {
      if (typeof what.value === 'string' && typeof what.previous === 'string') {
        this.logger.info(`${what.key} value has changed from "${what.previous}" to " ${what.value}".`);
      } else {
        this.logger.info(`${what.key} has changed: `, what.value);
      }
    });

    // ADD A NEW PET
    setTimeout(() => this.add('pets', { name: 'Jerry', breed: 'mouse' }), 2000);
    setTimeout(() => this.add('pets', { name: 'Tweety', breed: 'bird' }), 4000);
    setTimeout(() => this.add('pets', { name: 'Droopy', breed: 'dog' }), 6000);

  }

  render(el, html) {
    el.innerHTML = `
      <style>${styles}</style>
      ${template(this)}
    `;
  }

}

export { BindingComponent };
