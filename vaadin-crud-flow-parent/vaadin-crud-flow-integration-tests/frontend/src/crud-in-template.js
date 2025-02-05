import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js'
import '@vaadin/text-field/vaadin-text-field.js';
import '@vaadin/form-layout/vaadin-form-layout.js';
import '@vaadin/crud/vaadin-crud.js';
import '@vaadin/vertical-layout/vaadin-vertical-layout.js';

class CrudApp extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        height: 100%;
        width: 100%;
        display: block;
      }
    </style>

    <h1>Crud in template</h1>

    <vaadin-crud id="crud">
      <vaadin-form-layout id="form" slot="form" style="max-width: 60em">
        <vaadin-text-field id="firstName" label="First name" required></vaadin-text-field>
        <vaadin-text-field id="lastName" label="Last name" required></vaadin-text-field>
      </vaadin-form-layout>
    </vaadin-crud>

    <vaadin-vertical-layout id="events"></vaadin-vertical-layout>
`;
  }
    static get is() {
      return 'crud-app'
  }
}

customElements.define(CrudApp.is, CrudApp);
