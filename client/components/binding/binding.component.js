import template from './binding.component.pug';
import styles from './binding.component.scss';

import { Component } from '@huck/core';
import { Dom } from '@huck/browser';

class BindingComponent {

  constructor() {

    // ADD A PET
    this.pets = [
      {
        breed: 'cat',
        name: 'Tom'
      }
    ];

    // INITIALIZE COMPONENT
    Component(this, {
      css: styles,
      template: template,
      selector: 'binding-component'
    });

  }

  // CALLS WHEN COMPONENT IS INITIALIZED (BUT NOT NECESSARILY ACTIVE)
  // onInit() {}

  // CALL WHEN COMPONENT IS LOADED (I.E. Route is activated)
  onLoad() {

    // SAVE A REFERENCE TO TH SHADOW ROOT OF OUR CONTAINER
    this.shadow = Dom.el(this.selector).shadowRoot;

    // ADD MORE PETS OVER TIME
    setTimeout(() => this.add(this.pets, { name: 'Jerry', breed: 'mouse' }), 2000);
    setTimeout(() => this.add(this.pets, { name: 'Tweety', breed: 'bird' }), 4000);

    // SET TITLE
    this.set('title', 'Data Binding');

    // LISTEN FOR CHANGES
    // this.onChange((what) => {});

  }

}

export { BindingComponent };
